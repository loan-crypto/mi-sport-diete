import { SESSIONS } from "@/content";
import SeanceDetailClient from "./SeanceDetailClient";

export function generateStaticParams() {
  return SESSIONS.map((s) => ({ id: s.id }));
}

export default async function SeancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <SeanceDetailClient id={id} />;
}
