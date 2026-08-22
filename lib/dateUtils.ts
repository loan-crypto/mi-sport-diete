export function toISODate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function addDays(d: Date, n: number): Date {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + n);
  return copy;
}

// Lundi de la semaine contenant `d` (0=dimanche en JS, on veut lundi=debut).
export function getWeekStart(d: Date): Date {
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  return addDays(d, diff);
}

export function formatDayLabel(iso: string, locale: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
}
