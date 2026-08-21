"use client";

/* Nueva funcionalidad (no existia en el sitio legado): grafico de
   evolucion del peso usado en un ejercicio a lo largo del tiempo. */

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useI18n } from "@/lib/i18n/context";

interface Point {
  date: string;
  weight: number | null;
}

export default function WeightProgressChart({ logs }: { logs: Point[] }) {
  const { t } = useI18n();

  const data = logs
    .filter((l) => l.weight !== null && l.weight > 0)
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date));

  if (data.length < 2) return null;

  return (
    <>
      <div className="section-title">{t("chart.progressTitle")}</div>
      <div className="card-box" style={{ height: 240, padding: "20px 12px 8px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 16, bottom: 5, left: -12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} />
            <YAxis stroke="var(--text-muted)" fontSize={12} unit="kg" />
            <Tooltip
              contentStyle={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                color: "var(--text)",
              }}
            />
            <Line type="monotone" dataKey="weight" stroke="var(--accent)" strokeWidth={2.5} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
