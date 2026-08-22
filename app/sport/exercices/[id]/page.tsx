import { EXERCISES } from "@/content";
import ExerciceDetailClient from "./ExerciceDetailClient";

export function generateStaticParams() {
  return EXERCISES.map((ex) => ({ id: ex.id }));
}

export default async function ExercicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ExerciceDetailClient id={id} />;
}
