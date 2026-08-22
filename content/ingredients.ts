/* ---------------- INGRÉDIENTS ---------------- */
/*
  quality: "bon" | "neutre" | "mauvais"  -> utilisé pour la pastille de couleur
  Les valeurs nutritionnelles sont TOUJOURS pour 100g.

  Porté depuis legacy-static-site/js/data.js
*/
import type { Ingredient } from "./types";

export const INGREDIENTS: Ingredient[] = [
  {
    id: "poulet-blanc",
    name: "Blanc de poulet",
    category: "Protéine",
    calories100: 165,
    protein100: 31,
    carbs100: 0,
    fat100: 3.6,
    quality: "bon",
    notes: "Excellente source de protéines maigres avec très peu de lipides. Idéal pour la construction musculaire et la sèche. Privilégie une cuisson à la poêle sans excès de matière grasse ou au four.",
    es: {
      name: "Pechuga de pollo",
      category: "Proteína",
      notes: "Excelente fuente de proteína magra con muy poca grasa. Ideal para la construcción muscular y la definición. Cocina a la plancha sin exceso de grasa o al horno."
    }
  },
  {
    id: "riz-complet",
    name: "Riz complet",
    category: "Glucide",
    calories100: 130,
    protein100: 2.7,
    carbs100: 28,
    fat100: 1,
    quality: "bon",
    notes: "Glucide complexe à index glycémique modéré, apporte de l'énergie durable et des fibres. Bonne base pour les repas autour de l'entraînement.",
    es: {
      name: "Arroz integral",
      category: "Carbohidrato",
      notes: "Carbohidrato complejo de índice glucémico moderado, aporta energía duradera y fibra. Buena base para las comidas alrededor del entrenamiento."
    }
  },
  {
    id: "brocolis",
    name: "Brocolis",
    category: "Légume",
    calories100: 34,
    protein100: 2.8,
    carbs100: 7,
    fat100: 0.4,
    quality: "bon",
    notes: "Très riche en fibres, vitamines (C, K) et faible en calories. À consommer largement, vapeur de préférence pour garder les nutriments.",
    es: {
      name: "Brócoli",
      category: "Verdura",
      notes: "Muy rico en fibra, vitaminas (C, K) y bajo en calorías. Consúmelo en abundancia, al vapor preferiblemente para conservar los nutrientes."
    }
  },
  {
    id: "huile-olive",
    name: "Huile d'olive",
    category: "Lipide",
    calories100: 884,
    protein100: 0,
    carbs100: 0,
    fat100: 100,
    quality: "bon",
    notes: "Bonne source de graisses mono-insaturées. Très calorique : à doser (une cuillère à soupe ≈ 10g) plutôt qu'à verser au hasard.",
    es: {
      name: "Aceite de oliva",
      category: "Grasa",
      notes: "Buena fuente de grasas monoinsaturadas. Muy calórico: hay que dosificarlo (una cucharada ≈ 10g) en lugar de servirlo al azar."
    }
  },
  {
    id: "sucre-blanc",
    name: "Sucre blanc",
    category: "Glucide",
    calories100: 400,
    protein100: 0,
    carbs100: 100,
    fat100: 0,
    quality: "mauvais",
    notes: "Sucre simple à index glycémique élevé, sans micronutriments (calories vides). À limiter, surtout en dehors de la fenêtre post-entraînement.",
    es: {
      name: "Azúcar blanco",
      category: "Carbohidrato",
      notes: "Azúcar simple de índice glucémico alto, sin micronutrientes (calorías vacías). Hay que limitarlo, sobre todo fuera de la ventana post-entrenamiento."
    }
  },
  {
    id: "avoine",
    name: "Flocons d'avoine",
    category: "Glucide",
    calories100: 375,
    protein100: 13,
    carbs100: 60,
    fat100: 7,
    quality: "bon",
    notes: "Glucide complexe riche en fibres (bêta-glucanes) et en protéines végétales. Excellent pour un petit-déjeuner rassasiant.",
    es: {
      name: "Copos de avena",
      category: "Carbohidrato",
      notes: "Carbohidrato complejo rico en fibra (beta-glucanos) y proteína vegetal. Excelente para un desayuno saciante."
    }
  },
  {
    id: "oeuf",
    name: "Œuf entier",
    category: "Protéine",
    calories100: 155,
    protein100: 13,
    carbs100: 1.1,
    fat100: 11,
    quality: "bon",
    notes: "Protéine complète de très haute qualité biologique. Le jaune contient les graisses et la majorité des micronutriments : ne pas systématiquement le retirer.",
    es: {
      name: "Huevo entero",
      category: "Proteína",
      notes: "Proteína completa de altísima calidad biológica. La yema contiene las grasas y la mayoría de los micronutrientes: no hay que retirarla siempre."
    }
  },
  {
    id: "saumon",
    name: "Saumon",
    category: "Protéine",
    calories100: 208,
    protein100: 20,
    carbs100: 0,
    fat100: 13,
    quality: "bon",
    notes: "Excellente source de protéines et d'oméga-3 (anti-inflammatoires, bons pour la récupération). Privilégie une cuisson douce (four, vapeur) pour préserver les graisses.",
    es: {
      name: "Salmón",
      category: "Proteína",
      notes: "Excelente fuente de proteína y omega-3 (antiinflamatorios, buenos para la recuperación). Cocina con calor suave (horno, vapor) para preservar las grasas."
    }
  },
  {
    id: "quinoa",
    name: "Quinoa",
    category: "Glucide",
    calories100: 120,
    protein100: 4.4,
    carbs100: 21,
    fat100: 1.9,
    quality: "bon",
    notes: "Pseudo-céréale complète, l'une des rares sources végétales à apporter les 9 acides aminés essentiels. Bonne alternative au riz.",
    es: {
      name: "Quinoa",
      category: "Carbohidrato",
      notes: "Pseudocereal completo, una de las pocas fuentes vegetales que aporta los 9 aminoácidos esenciales. Buena alternativa al arroz."
    }
  },
  {
    id: "avocat",
    name: "Avocat",
    category: "Lipide",
    calories100: 160,
    protein100: 2,
    carbs100: 9,
    fat100: 15,
    quality: "bon",
    notes: "Riche en graisses mono-insaturées (bonnes pour le cœur) et en fibres. Calorique : une demi-avocat suffit généralement dans un repas équilibré.",
    es: {
      name: "Aguacate",
      category: "Grasa",
      notes: "Rico en grasas monoinsaturadas (buenas para el corazón) y en fibra. Calórico: medio aguacate suele bastar en una comida equilibrada."
    }
  },
  {
    id: "dinde-blanc",
    name: "Blanc de dinde",
    category: "Protéine",
    calories100: 135,
    protein100: 30,
    carbs100: 0,
    fat100: 1,
    quality: "bon",
    notes: "Protéine maigre, alternative au poulet pour varier. Faible en graisses, se marie bien avec des féculents et légumes.",
    es: {
      name: "Pechuga de pavo",
      category: "Proteína",
      notes: "Proteína magra, alternativa al pollo para variar. Baja en grasas, combina bien con féculas y verduras."
    }
  },
  {
    id: "boeuf-hache-5",
    name: "Bœuf haché 5% MG",
    category: "Protéine",
    calories100: 137,
    protein100: 21,
    carbs100: 0,
    fat100: 5,
    quality: "bon",
    notes: "Bonne source de protéines, fer et zinc. Le taux de matière grasse (5%) reste raisonnable pour un usage régulier.",
    es: {
      name: "Carne picada de ternera 5% MG",
      category: "Proteína",
      notes: "Buena fuente de proteína, hierro y zinc. El porcentaje de grasa (5%) es razonable para un uso habitual."
    }
  },
  {
    id: "thon-conserve",
    name: "Thon en conserve (au naturel)",
    category: "Protéine",
    calories100: 116,
    protein100: 26,
    carbs100: 0,
    fat100: 1,
    quality: "bon",
    notes: "Protéine maigre pratique et peu chère. Choisis la version « au naturel » plutôt qu'à l'huile pour limiter les graisses ajoutées.",
    es: {
      name: "Atún en conserva (al natural)",
      category: "Proteína",
      notes: "Proteína magra práctica y económica. Elige la versión «al natural» en vez de en aceite para limitar las grasas añadidas."
    }
  },
  {
    id: "patate-douce",
    name: "Patate douce",
    category: "Glucide",
    calories100: 86,
    protein100: 1.6,
    carbs100: 20,
    fat100: 0.1,
    quality: "bon",
    notes: "Glucide complexe à index glycémique plus bas que la pomme de terre classique, riche en fibres et en bêta-carotène.",
    es: {
      name: "Boniato (batata)",
      category: "Carbohidrato",
      notes: "Carbohidrato complejo de índice glucémico más bajo que la patata clásica, rico en fibra y betacaroteno."
    }
  },
  {
    id: "yaourt-grec",
    name: "Yaourt grec 0%",
    category: "Protéine",
    calories100: 59,
    protein100: 10,
    carbs100: 3.6,
    fat100: 0.4,
    quality: "bon",
    notes: "Très riche en protéines pour peu de calories. Excellent pour un petit-déjeuner ou une collation rassasiante.",
    es: {
      name: "Yogur griego 0%",
      category: "Proteína",
      notes: "Muy rico en proteína por pocas calorías. Excelente para un desayuno o una merienda saciante."
    }
  },
  {
    id: "beurre-cacahuete",
    name: "Beurre de cacahuète",
    category: "Lipide",
    calories100: 588,
    protein100: 25,
    carbs100: 20,
    fat100: 50,
    quality: "neutre",
    notes: "Bonne source de graisses et de protéines végétales, mais très calorique : se dose à la cuillère, pas à volonté.",
    es: {
      name: "Mantequilla de cacahuete",
      category: "Grasa",
      notes: "Buena fuente de grasas y proteína vegetal, pero muy calórica: se dosifica a cucharadas, no a discreción."
    }
  },
  {
    id: "banane",
    name: "Banane",
    category: "Glucide",
    calories100: 89,
    protein100: 1.1,
    carbs100: 23,
    fat100: 0.3,
    quality: "bon",
    notes: "Glucide simple riche en potassium, pratique avant/après l'entraînement pour l'énergie rapide.",
    es: {
      name: "Plátano",
      category: "Carbohidrato",
      notes: "Carbohidrato simple rico en potasio, práctico antes/después del entrenamiento para energía rápida."
    }
  },
  {
    id: "epinards",
    name: "Épinards",
    category: "Légume",
    calories100: 23,
    protein100: 2.9,
    carbs100: 3.6,
    fat100: 0.4,
    quality: "bon",
    notes: "Très riche en fer, magnésium et vitamines. Cuits, ils réduisent beaucoup de volume : ne te fie pas à leur poids cru.",
    es: {
      name: "Espinacas",
      category: "Verdura",
      notes: "Muy ricas en hierro, magnesio y vitaminas. Cocidas, reducen mucho de volumen: no te fíes de su peso crudo."
    }
  },
  {
    id: "pain-complet",
    name: "Pain complet",
    category: "Glucide",
    calories100: 247,
    protein100: 13,
    carbs100: 41,
    fat100: 3.4,
    quality: "bon",
    notes: "Glucide complexe plus riche en fibres et en protéines que le pain blanc. Bonne base pour un sandwich ou un wrap.",
    es: {
      name: "Pan integral",
      category: "Carbohidrato",
      notes: "Carbohidrato complejo más rico en fibra y proteína que el pan blanco. Buena base para un sándwich o un wrap."
    }
  },
  {
    id: "lentilles-cuites",
    name: "Lentilles cuites",
    category: "Glucide",
    calories100: 116,
    protein100: 9,
    carbs100: 20,
    fat100: 0.4,
    quality: "bon",
    notes: "Légumineuse riche en protéines végétales et en fibres. Bonne option pour varier les sources de glucides/protéines.",
    es: {
      name: "Lentejas cocidas",
      category: "Carbohidrato",
      notes: "Legumbre rica en proteína vegetal y fibra. Buena opción para variar las fuentes de carbohidratos/proteína."
    }
  },
  {
    id: "fromage-blanc",
    name: "Fromage blanc 0%",
    category: "Protéine",
    calories100: 45,
    protein100: 8,
    carbs100: 4,
    fat100: 0.2,
    quality: "bon",
    notes: "Très peu calorique et riche en protéines. Bonne base pour un dessert ou petit-déjeuner protéiné.",
    es: {
      name: "Queso fresco batido 0%",
      category: "Proteína",
      notes: "Muy bajo en calorías y rico en proteína. Buena base para un postre o desayuno proteico."
    }
  },
  {
    id: "amandes",
    name: "Amandes",
    category: "Lipide",
    calories100: 579,
    protein100: 21,
    carbs100: 22,
    fat100: 50,
    quality: "bon",
    notes: "Bonnes graisses, fibres et magnésium. Très calorique : une poignée (~20-25g) suffit comme collation.",
    es: {
      name: "Almendras",
      category: "Grasa",
      notes: "Buenas grasas, fibra y magnesio. Muy calóricas: un puñado (~20-25g) basta como merienda."
    }
  },
  {
    id: "tomate",
    name: "Tomate",
    category: "Légume",
    calories100: 18,
    protein100: 0.9,
    carbs100: 3.9,
    fat100: 0.2,
    quality: "bon",
    notes: "Très peu calorique, riche en eau et en vitamine C. Bon complément volume pour les repas.",
    es: {
      name: "Tomate",
      category: "Verdura",
      notes: "Muy bajo en calorías, rico en agua y vitamina C. Buen complemento de volumen para las comidas."
    }
  },
  {
    id: "miel",
    name: "Miel",
    category: "Glucide",
    calories100: 304,
    protein100: 0.3,
    carbs100: 82,
    fat100: 0,
    quality: "neutre",
    notes: "Glucide simple, alternative naturelle au sucre blanc. Reste du sucre : à doser, surtout hors entraînement.",
    es: {
      name: "Miel",
      category: "Carbohidrato",
      notes: "Carbohidrato simple, alternativa natural al azúcar blanco. Sigue siendo azúcar: hay que dosificarlo, sobre todo fuera del entrenamiento."
    }
  },
  {
    id: "pois-chiches",
    name: "Pois chiches cuits",
    category: "Protéine",
    calories100: 164,
    protein100: 8.9,
    carbs100: 27.4,
    fat100: 2.6,
    quality: "bon",
    notes: "Légumineuse complète : bonnes protéines végétales, fibres et glucides à index glycémique modéré. Bonne base pour varier les sources de protéines.",
    es: {
      name: "Garbanzos cocidos",
      category: "Proteína",
      notes: "Legumbre completa: buenas proteínas vegetales, fibra y carbohidratos de índice glucémico moderado. Buena base para variar las fuentes de proteína."
    }
  },
  {
    id: "dattes",
    name: "Dattes",
    category: "Glucide",
    calories100: 277,
    protein100: 1.8,
    carbs100: 75,
    fat100: 0.2,
    quality: "neutre",
    notes: "Sucre naturel très concentré, pratique avant/pendant l'effort. Très calorique pour son volume : à doser (2-3 dattes = une bonne portion).",
    es: {
      name: "Dátiles",
      category: "Carbohidrato",
      notes: "Azúcar natural muy concentrado, práctico antes/durante el esfuerzo. Muy calórico para su volumen: hay que dosificarlo (2-3 dátiles = una buena porción)."
    }
  },
  {
    id: "noix",
    name: "Noix",
    category: "Lipide",
    calories100: 654,
    protein100: 15,
    carbs100: 14,
    fat100: 65,
    quality: "bon",
    notes: "Riches en oméga-3 d'origine végétale, bonnes graisses et antioxydants. Très calorique : une petite poignée (~15-20g) suffit.",
    es: {
      name: "Nueces",
      category: "Grasa",
      notes: "Ricas en omega-3 de origen vegetal, buenas grasas y antioxidantes. Muy calóricas: un puñado pequeño (~15-20g) basta."
    }
  },
  {
    id: "tahini",
    name: "Tahini (purée de sésame)",
    category: "Lipide",
    calories100: 595,
    protein100: 17,
    carbs100: 21,
    fat100: 54,
    quality: "bon",
    notes: "Purée de graines de sésame : bonnes graisses, calcium et protéines végétales. Base classique du houmous. Très calorique, à doser en petite quantité.",
    es: {
      name: "Tahini (pasta de sésamo)",
      category: "Grasa",
      notes: "Pasta de semillas de sésamo: buenas grasas, calcio y proteína vegetal. Base clásica del hummus. Muy calórico, hay que dosificarlo en poca cantidad."
    }
  },
  {
    id: "carotte",
    name: "Carotte",
    category: "Légume",
    calories100: 41,
    protein100: 0.9,
    carbs100: 10,
    fat100: 0.2,
    quality: "bon",
    notes: "Très faible en calories, riche en fibres et bêta-carotène. Bon légume de volume, cru en bâtonnets ou cuit en accompagnement.",
    es: {
      name: "Zanahoria",
      category: "Verdura",
      notes: "Muy baja en calorías, rica en fibra y betacaroteno. Buena verdura de volumen, cruda en bastoncitos o cocida como guarnición."
    }
  },
  {
    id: "myrtilles",
    name: "Myrtilles",
    category: "Glucide",
    calories100: 57,
    protein100: 0.7,
    carbs100: 14,
    fat100: 0.3,
    quality: "bon",
    notes: "Riches en antioxydants (anthocyanes) et en fibres, à index glycémique bas pour un fruit. Bon choix pour sucrer un porridge ou un bol de fromage blanc sans faire grimper les calories.",
    es: {
      name: "Arándanos",
      category: "Carbohidrato",
      notes: "Ricos en antioxidantes (antocianinas) y en fibra, con un índice glucémico bajo para ser una fruta. Buena opción para endulzar un porridge o un bol de queso fresco batido sin disparar las calorías."
    }
  },
  {
    id: "graines-de-chia",
    name: "Graines de chia",
    category: "Lipide",
    calories100: 486,
    protein100: 17,
    carbs100: 42,
    fat100: 31,
    quality: "bon",
    notes: "Très riches en fibres et en oméga-3 d'origine végétale. Gonflent au contact d'un liquide, utile pour épaissir un smoothie bowl ou un yaourt. Très caloriques : une cuillère à soupe (~12g) suffit généralement.",
    es: {
      name: "Semillas de chía",
      category: "Grasa",
      notes: "Muy ricas en fibra y en omega-3 de origen vegetal. Se hinchan al contacto con un líquido, útiles para espesar un smoothie bowl o un yogur. Muy calóricas: una cucharada (~12g) suele bastar."
    }
  },
  {
    id: "pomme",
    name: "Pomme",
    category: "Glucide",
    calories100: 52,
    protein100: 0.3,
    carbs100: 14,
    fat100: 0.2,
    quality: "bon",
    notes: "Fruit peu calorique, riche en fibres (surtout avec la peau) qui ralentissent l'absorption des sucres. Bonne option de collation ou pour sucrer naturellement un porridge.",
    es: {
      name: "Manzana",
      category: "Carbohidrato",
      notes: "Fruta baja en calorías, rica en fibra (sobre todo con piel) que ralentiza la absorción de los azúcares. Buena opción de merienda o para endulzar de forma natural un porridge."
    }
  },
  {
    id: "feta",
    name: "Feta",
    category: "Protéine",
    calories100: 264,
    protein100: 14,
    carbs100: 4,
    fat100: 21,
    quality: "neutre",
    notes: "Fromage de brebis/chèvre riche en protéines mais aussi en graisses saturées et en sel. Apporte du goût en petite quantité dans une salade ou une omelette, sans en abuser.",
    es: {
      name: "Queso feta",
      category: "Proteína",
      notes: "Queso de oveja/cabra rico en proteína pero también en grasas saturadas y en sal. Aporta sabor en poca cantidad en una ensalada o una tortilla, sin abusar."
    }
  },
  {
    id: "cabillaud",
    name: "Cabillaud",
    category: "Protéine",
    calories100: 82,
    protein100: 18,
    carbs100: 0,
    fat100: 0.7,
    quality: "bon",
    notes: "Poisson blanc très maigre, excellente source de protéines pour très peu de calories. Cuisson douce (four, vapeur, poêle) pour ne pas le dessécher.",
    es: {
      name: "Bacalao",
      category: "Proteína",
      notes: "Pescado blanco muy magro, excelente fuente de proteína por muy pocas calorías. Cocina con calor suave (horno, vapor, plancha) para que no se seque."
    }
  },
  {
    id: "poivron",
    name: "Poivron",
    category: "Légume",
    calories100: 31,
    protein100: 1,
    carbs100: 6,
    fat100: 0.3,
    quality: "bon",
    notes: "Très riche en vitamine C, peu calorique. Se mange cru en bâtonnets ou rôti au four pour plus de douceur.",
    es: {
      name: "Pimiento",
      category: "Verdura",
      notes: "Muy rico en vitamina C, bajo en calorías. Se come crudo en bastoncitos o asado al horno para que quede más dulce."
    }
  },
  {
    id: "concombre",
    name: "Concombre",
    category: "Légume",
    calories100: 15,
    protein100: 0.7,
    carbs100: 3.6,
    fat100: 0.1,
    quality: "bon",
    notes: "Très riche en eau, très peu calorique. Bon légume de volume et de fraîcheur dans une salade.",
    es: {
      name: "Pepino",
      category: "Verdura",
      notes: "Muy rico en agua, muy bajo en calorías. Buena verdura de volumen y frescor en una ensalada."
    }
  },
  {
    id: "tortilla-ble-complet",
    name: "Tortilla de blé complet",
    category: "Glucide",
    calories100: 300,
    protein100: 8,
    carbs100: 45,
    fat100: 9,
    quality: "neutre",
    notes: "Galette de blé complet pratique pour un wrap. Plus riche en fibres qu'une tortilla blanche classique, mais reste plus grasse et transformée qu'une tranche de pain complet.",
    es: {
      name: "Tortilla de trigo integral",
      category: "Carbohidrato",
      notes: "Torta de trigo integral práctica para un wrap. Más rica en fibra que una tortilla blanca clásica, pero sigue siendo más grasa y procesada que una rebanada de pan integral."
    }
  },
  {
    id: "haricots-verts",
    name: "Haricots verts",
    category: "Légume",
    calories100: 35,
    protein100: 1.8,
    carbs100: 7,
    fat100: 0.2,
    quality: "bon",
    notes: "Légume vert peu calorique, riche en fibres et en vitamine K. Bonne option pour ajouter du volume à un repas sans les calories.",
    es: {
      name: "Judías verdes",
      category: "Verdura",
      notes: "Verdura verde baja en calorías, rica en fibra y en vitamina K. Buena opción para añadir volumen a una comida sin las calorías."
    }
  },
  {
    id: "chocolat-noir",
    name: "Chocolat noir",
    category: "Lipide",
    calories100: 598,
    protein100: 7.8,
    carbs100: 46,
    fat100: 43,
    quality: "neutre",
    notes: "Chocolat noir (70% cacao ou plus) riche en antioxydants, mais très calorique et sucré. Deux ou trois carrés en fin de collation, pas la tablette entière.",
    es: {
      name: "Chocolate negro",
      category: "Grasa",
      notes: "Chocolate negro (70% cacao o más) rico en antioxidantes, pero muy calórico y azucarado. Dos o tres onzas al final de una merienda, no la tableta entera."
    }
  }
];
