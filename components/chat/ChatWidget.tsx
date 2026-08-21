"use client";

/* Portado de legacy-static-site/js/chat-widget.js. Misma idea (llamada
   directa navegador -> API de Anthropic con la clave del propio usuario),
   pero:
   - la clave/modelo ahora se guardan en Supabase (tabla chat_settings,
     protegida por RLS a auth.uid()) en vez de localStorage — asi estan
     disponibles en cualquier dispositivo donde inicies sesion;
   - el historial de la conversacion sigue siendo local a este navegador
     (localStorage), no se sincroniza — es efimero, no hace falta.
   Requiere estar autenticado (el chat guarda cosas por usuario). */

import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/auth/context";
import { supabase } from "@/lib/supabase/client";

const DEFAULT_MODEL = "claude-sonnet-4-5";
const HISTORY_KEY = "mysportsite_claude_history";
const MAX_HISTORY_MESSAGES = 20;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function getLocalHistory(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLocalHistory(msgs: ChatMessage[]) {
  window.localStorage.setItem(HISTORY_KEY, JSON.stringify(msgs.slice(-MAX_HISTORY_MESSAGES)));
}

async function callClaude(apiKey: string, model: string, history: ChatMessage[]) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model,
      max_tokens: 1024,
      system:
        "Tu es un assistant utile intégré à un site personnel de suivi sport (callisthénie/musculation) et nutrition. Réponds en français, de façon concise et pratique.",
      messages: history.map((m) => ({ role: m.role, content: m.content })),
    }),
  });

  if (!res.ok) {
    let detail = "";
    try {
      const errJson = await res.json();
      detail = errJson.error?.message ?? JSON.stringify(errJson);
    } catch {
      detail = res.statusText;
    }
    throw new Error(`${res.status} — ${detail}`);
  }

  const data = await res.json();
  type ContentBlock = { text?: string };
  return (
    ((data.content as ContentBlock[] | undefined) ?? [])
      .map((block) => block.text ?? "")
      .join("")
      .trim() || "(réponse vide)"
  );
}

export default function ChatWidget() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState(DEFAULT_MODEL);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Carga los ajustes desde Supabase cuando hay sesion.
  useEffect(() => {
    if (!user) {
      setSettingsLoaded(false);
      return;
    }
    let cancelled = false;
    supabase
      .from("chat_settings")
      .select("api_key, model")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (cancelled) return;
        setApiKey(data?.api_key ?? "");
        setModel(data?.model ?? DEFAULT_MODEL);
        setSettingsLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    setHistory(getLocalHistory());
  }, []);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, thinking]);

  function handleToggle() {
    const next = !open;
    setOpen(next);
    if (next && settingsLoaded && !apiKey) {
      setShowSettings(true);
    }
  }

  async function handleSaveSettings(nextKey: string, nextModel: string) {
    if (!user) return;
    const trimmedKey = nextKey.trim();
    const trimmedModel = nextModel.trim() || DEFAULT_MODEL;
    await supabase.from("chat_settings").upsert({
      user_id: user.id,
      api_key: trimmedKey || null,
      model: trimmedModel,
    });
    setApiKey(trimmedKey);
    setModel(trimmedModel);
    setShowSettings(false);
  }

  function handleClearHistory() {
    saveLocalHistory([]);
    setHistory([]);
  }

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    if (!apiKey) {
      setShowSettings(true);
      return;
    }
    const next = [...history, { role: "user" as const, content: text }];
    setHistory(next);
    saveLocalHistory(next);
    setInput("");
    setThinking(true);
    setError(null);
    try {
      const reply = await callClaude(apiKey, model, next);
      const updated = [...next, { role: "assistant" as const, content: reply }];
      setHistory(updated);
      saveLocalHistory(updated);
    } catch (err) {
      setError(`Erreur : ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setThinking(false);
    }
  }

  if (!user) return null; // el chat necesita cuenta para guardar la clave

  return (
    <>
      <button
        id="claude-chat-toggle"
        aria-label="Ouvrir le chat Claude"
        onClick={handleToggle}
      >
        💬
      </button>
      <div id="claude-chat-panel" className={open ? "open" : ""}>
        <div className="claude-chat-header">
          <span>💬 Claude</span>
          <div className="actions">
            <button title="Réglages" onClick={() => setShowSettings((s) => !s)}>
              ⚙️
            </button>
            <button title="Fermer" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
        </div>

        {showSettings ? (
          <ChatSettingsPanel
            initialKey={apiKey}
            initialModel={model}
            onSave={handleSaveSettings}
            onClearHistory={handleClearHistory}
          />
        ) : (
          <>
            <div className="claude-chat-body" ref={bodyRef}>
              {history.map((m, i) => (
                <div key={i} className={`claude-msg ${m.role === "user" ? "user" : "assistant"}`}>
                  {m.content}
                </div>
              ))}
              {thinking ? <div className="claude-msg assistant">…</div> : null}
              {error ? <div className="claude-msg error">{error}</div> : null}
            </div>
            <div className="claude-chat-footer">
              <textarea
                placeholder="Écris ton message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button onClick={handleSend}>➤</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function ChatSettingsPanel({
  initialKey,
  initialModel,
  onSave,
  onClearHistory,
}: {
  initialKey: string;
  initialModel: string;
  onSave: (key: string, model: string) => void;
  onClearHistory: () => void;
}) {
  const [key, setKey] = useState(initialKey);
  const [model, setModel] = useState(initialModel);

  return (
    <div className="claude-settings" style={{ display: "flex" }}>
      <p>
        Colle ta clé API Anthropic (créée sur{" "}
        <a href="https://console.anthropic.com" target="_blank" rel="noopener">
          console.anthropic.com
        </a>
        ). Elle est stockée sur ton compte, jamais ailleurs qu'a l&apos;API Anthropic.
      </p>
      <label htmlFor="claude-api-key">Clé API</label>
      <input
        type="password"
        id="claude-api-key"
        placeholder="sk-ant-..."
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <label htmlFor="claude-model">Modèle</label>
      <input
        type="text"
        id="claude-model"
        placeholder={DEFAULT_MODEL}
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <p>Si le modèle indiqué ne fonctionne pas, vérifie l&apos;identifiant exact dans la doc Anthropic.</p>
      <button onClick={() => onSave(key, model)}>Enregistrer</button>
      <button className="secondary" onClick={onClearHistory}>
        Effacer la conversation
      </button>
    </div>
  );
}
