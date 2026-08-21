"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth/context";
import { useI18n } from "@/lib/i18n/context";
import { heroPhotoStyle } from "@/lib/heroStyle";

const HERO_PHOTO =
  "https://images.pexels.com/photos/4761790/pexels-photo-4761790.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1400&fit=crop";

export default function LoginPage() {
  const { signIn, user } = useAuth();
  const { t } = useI18n();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (user) {
    router.replace("/");
    return null;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const { error } = await signIn(email, password);
    setSubmitting(false);
    if (error) {
      setError(t("auth.login.error"));
      return;
    }
    router.replace("/");
  }

  return (
    <section className="hero login-hero" style={heroPhotoStyle(HERO_PHOTO)}>
      <form className="card-box login-card" onSubmit={handleSubmit}>
        <h1 className="login-title">{t("auth.login.title")}</h1>
        <div className="field">
          <label htmlFor="email">{t("auth.login.email")}</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">{t("auth.login.password")}</label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error ? <p style={{ color: "var(--danger)" }}>{error}</p> : null}
        <button type="submit" disabled={submitting}>
          {t("auth.login.submit")}
        </button>
      </form>
    </section>
  );
}
