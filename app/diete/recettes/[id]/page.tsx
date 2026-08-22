import { RECIPES } from "@/content";
import RecetteDetailClient from "./RecetteDetailClient";

/* Export statique (output: "export") : il faut pré-générer tous les id
   de recette possibles au build. Le contenu de la page vit dans un
   composant client séparé (RecetteDetailClient) car generateStaticParams
   doit être exporté depuis un composant serveur. */
export function generateStaticParams() {
  return RECIPES.map((recipe) => ({ id: recipe.id }));
}

export default async function RecetteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RecetteDetailClient id={id} />;
}
