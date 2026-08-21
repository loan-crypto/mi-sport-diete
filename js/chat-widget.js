/* ============================================================
   WIDGET DE CHAT — Claude intégré au site
   ------------------------------------------------------------
   Utilise directement l'API Anthropic depuis le navigateur.
   Il te faut une clé API créée sur https://console.anthropic.com
   (Settings > API Keys). C'est payant à l'usage et SÉPARÉ d'un
   abonnement Claude classique.

   ATTENTION : la clé est stockée dans le localStorage de CE
   navigateur. Ne partage jamais ce site (ni ce fichier) une fois
   ta clé enregistrée, et ne le mets jamais en ligne publiquement.
   ============================================================ */

(function () {
  const KEY_API = "mysportsite_claude_api_key";
  const KEY_MODEL = "mysportsite_claude_model";
  const KEY_HISTORY = "mysportsite_claude_history";
  const DEFAULT_MODEL = "claude-sonnet-4-5";
  const MAX_HISTORY_MESSAGES = 20; // limite pour garder des appels API légers

  /* ---------------- DOM injection ---------------- */
  const toggle = document.createElement("button");
  toggle.id = "claude-chat-toggle";
  toggle.setAttribute("aria-label", "Ouvrir le chat Claude");
  toggle.innerHTML = "💬";
  document.body.appendChild(toggle);

  const panel = document.createElement("div");
  panel.id = "claude-chat-panel";
  panel.innerHTML = `
    <div class="claude-chat-header">
      <span>💬 Claude</span>
      <div class="actions">
        <button id="claude-settings-btn" title="Réglages">⚙️</button>
        <button id="claude-close-btn" title="Fermer">✕</button>
      </div>
    </div>
    <div class="claude-chat-body" id="claude-chat-body"></div>
    <div class="claude-settings" id="claude-settings" style="display:none">
      <p>Colle ta clé API Anthropic (créée sur <a href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a>). Elle reste stockée uniquement dans ce navigateur.</p>
      <label for="claude-api-key">Clé API</label>
      <input type="password" id="claude-api-key" placeholder="sk-ant-...">
      <label for="claude-model">Modèle</label>
      <input type="text" id="claude-model" placeholder="${DEFAULT_MODEL}">
      <p>Si le modèle indiqué ne fonctionne pas, vérifie l'identifiant exact dans la doc (console.anthropic.com/docs/models).</p>
      <button id="claude-save-settings">Enregistrer</button>
      <button id="claude-clear-history" class="secondary">Effacer la conversation</button>
    </div>
    <div class="claude-chat-footer" id="claude-chat-footer">
      <textarea id="claude-input" placeholder="Écris ton message..."></textarea>
      <button id="claude-send-btn">➤</button>
    </div>
  `;
  document.body.appendChild(panel);

  const body = panel.querySelector("#claude-chat-body");
  const settingsPanel = panel.querySelector("#claude-settings");
  const footer = panel.querySelector("#claude-chat-footer");
  const apiKeyInput = panel.querySelector("#claude-api-key");
  const modelInput = panel.querySelector("#claude-model");
  const input = panel.querySelector("#claude-input");

  /* ---------------- Storage helpers ---------------- */
  function getApiKey() {
    return localStorage.getItem(KEY_API) || "";
  }
  function getModel() {
    return localStorage.getItem(KEY_MODEL) || DEFAULT_MODEL;
  }
  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem(KEY_HISTORY) || "[]");
    } catch (e) {
      return [];
    }
  }
  function saveHistory(msgs) {
    localStorage.setItem(KEY_HISTORY, JSON.stringify(msgs.slice(-MAX_HISTORY_MESSAGES)));
  }

  /* ---------------- Rendering ---------------- */
  function renderMessages() {
    const history = getHistory();
    body.innerHTML = history.map(m => `
      <div class="claude-msg ${m.role === "user" ? "user" : "assistant"}">${escapeHtml(m.content)}</div>
    `).join("");
    body.scrollTop = body.scrollHeight;
  }

  function appendError(text) {
    const div = document.createElement("div");
    div.className = "claude-msg error";
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function showSettings(show) {
    settingsPanel.style.display = show ? "flex" : "none";
    footer.style.display = show ? "none" : "flex";
    body.style.display = show ? "none" : "flex";
    if (show) {
      apiKeyInput.value = getApiKey();
      modelInput.value = getModel();
    }
  }

  /* ---------------- Open / close ---------------- */
  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) {
      if (!getApiKey()) {
        showSettings(true);
      } else {
        renderMessages();
      }
    }
  });
  panel.querySelector("#claude-close-btn").addEventListener("click", () => {
    panel.classList.remove("open");
  });
  panel.querySelector("#claude-settings-btn").addEventListener("click", () => {
    const isOpen = settingsPanel.style.display !== "none";
    showSettings(!isOpen);
  });
  panel.querySelector("#claude-save-settings").addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    const model = modelInput.value.trim() || DEFAULT_MODEL;
    if (key) localStorage.setItem(KEY_API, key);
    localStorage.setItem(KEY_MODEL, model);
    showSettings(false);
    renderMessages();
  });
  panel.querySelector("#claude-clear-history").addEventListener("click", () => {
    localStorage.removeItem(KEY_HISTORY);
    renderMessages();
  });

  /* ---------------- Sending messages ---------------- */
  async function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    if (!getApiKey()) {
      showSettings(true);
      return;
    }

    const history = getHistory();
    history.push({ role: "user", content: text });
    saveHistory(history);
    input.value = "";
    renderMessages();

    const thinkingDiv = document.createElement("div");
    thinkingDiv.className = "claude-msg assistant";
    thinkingDiv.textContent = "…";
    body.appendChild(thinkingDiv);
    body.scrollTop = body.scrollHeight;

    try {
      const reply = await callClaude(history);
      thinkingDiv.remove();
      const updated = getHistory();
      updated.push({ role: "assistant", content: reply });
      saveHistory(updated);
      renderMessages();
    } catch (err) {
      thinkingDiv.remove();
      appendError("Erreur : " + err.message);
    }
  }

  panel.querySelector("#claude-send-btn").addEventListener("click", sendMessage);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  async function callClaude(history) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": getApiKey(),
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true"
      },
      body: JSON.stringify({
        model: getModel(),
        max_tokens: 1024,
        system: "Tu es un assistant utile intégré à un site personnel de suivi sport (callisthénie/musculation) et nutrition. Réponds en français, de façon concise et pratique.",
        messages: history.map(m => ({ role: m.role, content: m.content }))
      })
    });

    if (!res.ok) {
      let detail = "";
      try {
        const errJson = await res.json();
        detail = errJson.error && errJson.error.message ? errJson.error.message : JSON.stringify(errJson);
      } catch (e) {
        detail = res.statusText;
      }
      throw new Error(`${res.status} — ${detail}`);
    }

    const data = await res.json();
    return (data.content || []).map(block => block.text || "").join("").trim() || "(réponse vide)";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
})();
