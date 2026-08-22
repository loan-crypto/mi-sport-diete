import { INGREDIENTS } from "@/content";
import IngredientDetailClient from "./IngredientDetailClient";

/* Export statique (output: "export") : il faut pré-générer tous les id
   d'ingrédient possibles au build. Le contenu de la page vit dans un
   composant client séparé (IngredientDetailClient) car generateStaticParams
   doit être exporté depuis un composant serveur. */
export function generateStaticParams() {
  return INGREDIENTS.map((ingredient) => ({ id: ingredient.id }));
}

export default async function IngredientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <IngredientDetailClient id={id} />;
}
