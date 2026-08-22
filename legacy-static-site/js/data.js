/* ============================================================
   DONNÉES DU SITE
   ------------------------------------------------------------
   Ce fichier contient TOUT le contenu : ingrédients, recettes,
   exercices, séances. Pour ajouter du contenu, copie un objet
   existant dans le tableau correspondant et modifie les valeurs.

   IDs : utilise uniquement des lettres minuscules, chiffres et
   tirets (ex: "poulet-blanc", "tractions-pronation"). Les IDs
   doivent être uniques dans leur tableau.

   PHOTOS : dépose tes fichiers dans le bon dossier :
     images/recipes/    -> photos de plats
     images/exercises/  -> photos d'exercices
     images/progress/   -> photos de progression physique
   puis renseigne le chemin dans le champ "photo" (ex:
   "images/recipes/mon-plat.jpg"). Si le fichier n'existe pas
   encore, laisse le champ vide "" : une image par défaut
   s'affichera à la place.

   TRADUCTION ESPAGNOLE (optionnelle) : le site propose un bouton
   FR/ES en haut à droite (voir js/i18n.js). Par défaut tout reste
   en français tant qu'aucune traduction n'est fournie. Pour
   traduire un élément, ajoute un objet "es" avec les champs à
   traduire (les champs absents restent affichés en français) :
     es: { name: "...", notes: "...", steps: [...] }
   ============================================================ */

/* ---------------- INGRÉDIENTS ---------------- */
/*
  quality: "bon" | "neutre" | "mauvais"  -> utilisé pour la pastille de couleur
  Les valeurs nutritionnelles sont TOUJOURS pour 100g.
*/
const INGREDIENTS = [
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
  }
];

/* ---------------- RECETTES ---------------- */
/*
  ingredients: liste de { ingredientId, grams } -> grams = quantité utilisée dans CETTE recette
  Les macros totales de la recette sont calculées automatiquement à partir des ingrédients.
*/
const RECIPES = [
  {
    id: "poulet-riz-brocolis",
    name: "Poulet, riz complet & brocolis",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/38095363/pexels-photo-38095363.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "poulet-blanc", grams: 150 },
      { ingredientId: "riz-complet", grams: 100 },
      { ingredientId: "brocolis", grams: 150 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le riz complet selon les instructions du paquet.",
      "Cuire le blanc de poulet à la poêle ou au four (~20 min à 180°C).",
      "Cuire les brocolis à la vapeur 8-10 minutes.",
      "Assembler le tout dans une assiette et assaisonner avec l'huile d'olive."
    ],
    notes: "Mon repas classique après une séance de callisthénie. Simple, rapide, équilibré.",
    es: {
      name: "Pollo, arroz integral y brócoli",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina el arroz integral según las instrucciones del paquete.",
        "Cocina la pechuga de pollo a la plancha o al horno (~20 min a 180°C).",
        "Cocina el brócoli al vapor 8-10 minutos.",
        "Sirve todo en un plato y aliña con el aceite de oliva."
      ],
      notes: "Mi comida clásica después de una sesión de calistenia. Simple, rápida, equilibrada."
    }
  },
  {
    id: "porridge-avoine",
    name: "Porridge avoine & œuf",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/31428992/pexels-photo-31428992.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 60 },
      { ingredientId: "oeuf", grams: 100 }
    ],
    steps: [
      "Faire cuire les flocons d'avoine avec de l'eau ou du lait à feu doux.",
      "Cuire les œufs séparément (brouillés ou à la coque).",
      "Servir chaud."
    ],
    notes: "Petit-déjeuner riche en énergie et en protéines pour bien démarrer la journée.",
    es: {
      name: "Porridge de avena y huevo",
      category: "Desayuno",
      steps: [
        "Cocina los copos de avena con agua o leche a fuego suave.",
        "Cocina los huevos por separado (revueltos o pasados por agua).",
        "Sirve caliente."
      ],
      notes: "Desayuno rico en energía y proteína para empezar bien el día."
    }
  },
  {
    id: "buddha-bowl-saumon",
    name: "Buddha bowl saumon & quinoa",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/14968264/pexels-photo-14968264.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "saumon", grams: 130 },
      { ingredientId: "quinoa", grams: 80 },
      { ingredientId: "avocat", grams: 60 },
      { ingredientId: "brocolis", grams: 100 }
    ],
    steps: [
      "Cuire le quinoa selon les instructions du paquet.",
      "Cuire le saumon au four ~15 min à 180°C.",
      "Cuire les brocolis à la vapeur 8 minutes.",
      "Dresser en bowl avec l'avocat coupé en tranches."
    ],
    notes: "Exemple ajouté par Claude pour visualiser le rendu avec photo — à remplacer par tes propres recettes et photos quand tu veux.",
    es: {
      name: "Buddha bowl de salmón y quinoa",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la quinoa según las instrucciones del paquete.",
        "Cocina el salmón al horno ~15 min a 180°C.",
        "Cocina el brócoli al vapor 8 minutos.",
        "Sirve en un bowl con el aguacate cortado en láminas."
      ],
      notes: "Ejemplo añadido por Claude para ver el resultado con foto — reemplázalo por tus propias recetas y fotos cuando quieras."
    }
  },
  {
    id: "tartine-avoine-banane",
    name: "Tartine flocons d'avoine, banane & beurre de cacahuète",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/36654565/pexels-photo-36654565.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 50 },
      { ingredientId: "banane", grams: 100 },
      { ingredientId: "beurre-cacahuete", grams: 15 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Cuire les flocons d'avoine avec de l'eau ou du lait à feu doux jusqu'à consistance crémeuse.",
      "Couper la banane en rondelles et les disposer sur le porridge.",
      "Ajouter le beurre de cacahuète et un filet de miel."
    ],
    notes: "Petit-déjeuner très énergétique, parfait avant une séance du matin.",
    es: {
      name: "Avena con plátano y mantequilla de cacahuete",
      category: "Desayuno",
      steps: [
        "Cocina los copos de avena con agua o leche a fuego suave hasta que quede cremoso.",
        "Corta el plátano en rodajas y colócalas sobre el porridge.",
        "Añade la mantequilla de cacahuete y un chorrito de miel."
      ],
      notes: "Desayuno muy energético, perfecto antes de una sesión matutina."
    }
  },
  {
    id: "omelette-epinards-fromage-blanc",
    name: "Omelette épinards & fromage blanc",
    category: "Petit-déjeuner",
    photo: "https://cdn.pixabay.com/photo/2020/05/23/07/41/omelet-5208432_1280.jpg",
    servings: 1,
    ingredients: [
      { ingredientId: "oeuf", grams: 150 },
      { ingredientId: "epinards", grams: 80 },
      { ingredientId: "fromage-blanc", grams: 50 }
    ],
    steps: [
      "Faire tomber les épinards à la poêle 2-3 minutes.",
      "Battre les œufs et les verser sur les épinards, cuire à feu moyen.",
      "Servir avec le fromage blanc à côté ou incorporé en fin de cuisson."
    ],
    notes: "Petit-déjeuner riche en protéines, faible en glucides — bonne option en phase de sèche.",
    es: {
      name: "Tortilla de espinacas y queso fresco batido",
      category: "Desayuno",
      steps: [
        "Rehoga las espinacas en la sartén 2-3 minutos.",
        "Bate los huevos y viértelos sobre las espinacas, cocina a fuego medio.",
        "Sirve con el queso fresco batido al lado o incorporado al final de la cocción."
      ],
      notes: "Desayuno rico en proteína, bajo en carbohidratos — buena opción en fase de definición."
    }
  },
  {
    id: "bowl-yaourt-grec-fruits",
    name: "Bowl yaourt grec, banane & amandes",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/37022348/pexels-photo-37022348.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "yaourt-grec", grams: 200 },
      { ingredientId: "banane", grams: 100 },
      { ingredientId: "amandes", grams: 20 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Verser le yaourt grec dans un bol.",
      "Ajouter la banane coupée en rondelles et les amandes.",
      "Terminer avec un filet de miel."
    ],
    notes: "Collation ou petit-déjeuner rapide, très riche en protéines.",
    es: {
      name: "Bowl de yogur griego, plátano y almendras",
      category: "Desayuno",
      steps: [
        "Vierte el yogur griego en un bol.",
        "Añade el plátano cortado en rodajas y las almendras.",
        "Termina con un chorrito de miel."
      ],
      notes: "Merienda o desayuno rápido, muy rico en proteína."
    }
  },
  {
    id: "wrap-dinde-avocat",
    name: "Wrap dinde, avocat & tomate",
    category: "Déjeuner / Dîner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "pain-complet", grams: 80 },
      { ingredientId: "dinde-blanc", grams: 120 },
      { ingredientId: "avocat", grams: 50 },
      { ingredientId: "tomate", grams: 80 }
    ],
    steps: [
      "Cuire le blanc de dinde à la poêle et le couper en lanières.",
      "Écraser l'avocat et l'étaler sur le pain complet.",
      "Ajouter la dinde et les tranches de tomate, puis rouler ou plier en sandwich."
    ],
    notes: "Repas pratique à emporter, bon équilibre protéines/glucides/bonnes graisses.",
    es: {
      name: "Wrap de pavo, aguacate y tomate",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la pechuga de pavo a la plancha y córtala en tiras.",
        "Aplasta el aguacate y extiéndelo sobre el pan integral.",
        "Añade el pavo y las rodajas de tomate, y enrolla o dobla en forma de sándwich."
      ],
      notes: "Comida práctica para llevar, buen equilibrio de proteína/carbohidratos/grasas buenas."
    }
  },
  {
    id: "salade-thon-quinoa-avocat",
    name: "Salade de thon, quinoa & avocat",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/17597485/pexels-photo-17597485.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "thon-conserve", grams: 120 },
      { ingredientId: "quinoa", grams: 80 },
      { ingredientId: "avocat", grams: 60 },
      { ingredientId: "tomate", grams: 100 },
      { ingredientId: "huile-olive", grams: 5 }
    ],
    steps: [
      "Cuire le quinoa selon les instructions du paquet, laisser refroidir.",
      "Égoutter le thon et couper l'avocat et la tomate en dés.",
      "Mélanger tous les ingrédients dans un saladier avec un filet d'huile d'olive."
    ],
    notes: "Salade complète, se prépare à l'avance et se garde bien pour le lendemain.",
    es: {
      name: "Ensalada de atún, quinoa y aguacate",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la quinoa según las instrucciones del paquete y deja enfriar.",
        "Escurre el atún y corta el aguacate y el tomate en dados.",
        "Mezcla todos los ingredientes en un bol con un chorrito de aceite de oliva."
      ],
      notes: "Ensalada completa, se prepara con antelación y se conserva bien para el día siguiente."
    }
  },
  {
    id: "steak-hache-patate-douce-brocolis",
    name: "Steak haché, patate douce & brocolis",
    category: "Déjeuner / Dîner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "boeuf-hache-5", grams: 150 },
      { ingredientId: "patate-douce", grams: 200 },
      { ingredientId: "brocolis", grams: 150 },
      { ingredientId: "huile-olive", grams: 5 }
    ],
    steps: [
      "Couper la patate douce en morceaux et cuire au four ~25 min à 200°C.",
      "Cuire le steak haché à la poêle selon la cuisson désirée.",
      "Cuire les brocolis à la vapeur 8-10 minutes.",
      "Dresser le tout dans une assiette avec un filet d'huile d'olive."
    ],
    notes: "Bon repas post-entraînement : protéines de qualité + glucides pour reconstituer les réserves.",
    es: {
      name: "Carne picada, boniato y brócoli",
      category: "Almuerzo / Cena",
      steps: [
        "Corta el boniato en trozos y cocina al horno ~25 min a 200°C.",
        "Cocina la carne picada a la plancha al punto que prefieras.",
        "Cocina el brócoli al vapor 8-10 minutos.",
        "Sirve todo en un plato con un chorrito de aceite de oliva."
      ],
      notes: "Buena comida post-entrenamiento: proteína de calidad + carbohidratos para reponer las reservas."
    }
  },
  {
    id: "dahl-lentilles-epinards",
    name: "Dahl de lentilles & épinards",
    category: "Déjeuner / Dîner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "lentilles-cuites", grams: 250 },
      { ingredientId: "epinards", grams: 100 },
      { ingredientId: "riz-complet", grams: 80 },
      { ingredientId: "huile-olive", grams: 8 }
    ],
    steps: [
      "Cuire le riz complet selon les instructions du paquet.",
      "Réchauffer les lentilles cuites à la poêle avec un filet d'huile d'olive.",
      "Ajouter les épinards en fin de cuisson jusqu'à ce qu'ils tombent.",
      "Servir les lentilles sur le riz complet."
    ],
    notes: "Option végétarienne riche en protéines végétales et en fibres.",
    es: {
      name: "Dahl de lentejas y espinacas",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina el arroz integral según las instrucciones del paquete.",
        "Calienta las lentejas cocidas en la sartén con un chorrito de aceite de oliva.",
        "Añade las espinacas al final de la cocción hasta que se reduzcan.",
        "Sirve las lentejas sobre el arroz integral."
      ],
      notes: "Opción vegetariana rica en proteína vegetal y fibra."
    }
  },
  {
    id: "poulet-patate-douce-epinards",
    name: "Poulet, patate douce & épinards",
    category: "Déjeuner / Dîner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "poulet-blanc", grams: 150 },
      { ingredientId: "patate-douce", grams: 200 },
      { ingredientId: "epinards", grams: 100 },
      { ingredientId: "huile-olive", grams: 8 }
    ],
    steps: [
      "Couper la patate douce en morceaux et cuire au four ~25 min à 200°C.",
      "Cuire le blanc de poulet à la poêle ou au four (~20 min à 180°C).",
      "Faire tomber les épinards à la poêle avec un filet d'huile d'olive.",
      "Dresser le tout dans une assiette."
    ],
    notes: "Repas simple et complet, bonne base à varier avec d'autres légumes selon les saisons.",
    es: {
      name: "Pollo, boniato y espinacas",
      category: "Almuerzo / Cena",
      steps: [
        "Corta el boniato en trozos y cocina al horno ~25 min a 200°C.",
        "Cocina la pechuga de pollo a la plancha o al horno (~20 min a 180°C).",
        "Rehoga las espinacas en la sartén con un chorrito de aceite de oliva.",
        "Sirve todo en un plato."
      ],
      notes: "Comida simple y completa, buena base para variar con otras verduras según la temporada."
    }
  },
  {
    id: "shake-proteine-maison",
    name: "Shake protéiné maison",
    category: "Collation / Post-entraînement",
    photo: "https://cdn.pixabay.com/photo/2020/01/09/04/19/shake-4751813_1280.jpg",
    servings: 1,
    ingredients: [
      { ingredientId: "yaourt-grec", grams: 200 },
      { ingredientId: "banane", grams: 100 },
      { ingredientId: "beurre-cacahuete", grams: 15 },
      { ingredientId: "avoine", grams: 30 }
    ],
    steps: [
      "Mettre tous les ingrédients dans un blender.",
      "Mixer jusqu'à consistance lisse (ajouter un peu d'eau ou de lait si trop épais).",
      "Boire dans les 30-60 minutes après l'entraînement."
    ],
    notes: "Bonne option quand tu n'as pas faim pour un vrai repas juste après la séance.",
    es: {
      name: "Batido proteico casero",
      category: "Merienda / Post-entrenamiento",
      steps: [
        "Pon todos los ingredientes en una batidora.",
        "Bate hasta conseguir una textura lisa (añade un poco de agua o leche si queda muy espeso).",
        "Bébelo en los 30-60 minutos después del entrenamiento."
      ],
      notes: "Buena opción cuando no tienes hambre para una comida de verdad justo después de la sesión."
    }
  },
  {
    id: "barres-avoine-maison",
    name: "Barres énergétiques maison (avoine, miel, amandes)",
    category: "Collation",
    photo: "https://images.pexels.com/photos/36361406/pexels-photo-36361406.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 6,
    ingredients: [
      { ingredientId: "avoine", grams: 80 },
      { ingredientId: "beurre-cacahuete", grams: 40 },
      { ingredientId: "miel", grams: 40 },
      { ingredientId: "amandes", grams: 30 }
    ],
    steps: [
      "Faire chauffer légèrement le beurre de cacahuète et le miel pour les ramollir et bien les mélanger.",
      "Ajouter les flocons d'avoine et les amandes concassées, bien mélanger jusqu'à obtenir une pâte collante homogène.",
      "Presser fermement le mélange dans un petit moule ou une boîte carrée, sur environ 1,5 cm d'épaisseur.",
      "Placer au réfrigérateur au moins 1h, puis découper en 6 barres."
    ],
    notes: "Se conservent plusieurs jours au frais dans une boîte hermétique. Pratique à emporter avant une séance.",
    es: {
      name: "Barritas energéticas caseras (avena, miel, almendras)",
      category: "Merienda",
      steps: [
        "Calienta ligeramente la mantequilla de cacahuete y la miel para ablandarlas y mezclarlas bien.",
        "Añade los copos de avena y las almendras troceadas, mezcla bien hasta conseguir una pasta pegajosa homogénea.",
        "Presiona firmemente la mezcla en un molde pequeño o una caja cuadrada, con un grosor de unos 1,5 cm.",
        "Deja en el frigorífico al menos 1h y luego corta en 6 barritas."
      ],
      notes: "Se conservan varios días en frío en una caja hermética. Prácticas para llevar antes de una sesión."
    }
  },
  {
    id: "boules-energie-dattes-avoine",
    name: "Boules d'énergie dattes & avoine (sans cuisson)",
    category: "Collation",
    photo: "https://images.pexels.com/photos/28354485/pexels-photo-28354485.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 4,
    ingredients: [
      { ingredientId: "dattes", grams: 100 },
      { ingredientId: "avoine", grams: 50 },
      { ingredientId: "beurre-cacahuete", grams: 20 },
      { ingredientId: "noix", grams: 20 }
    ],
    steps: [
      "Dénoyauter les dattes et les faire tremper 10 minutes dans l'eau tiède si elles sont un peu sèches.",
      "Mixer les dattes avec les noix jusqu'à obtenir une pâte collante.",
      "Ajouter les flocons d'avoine et le beurre de cacahuète, mixer à nouveau jusqu'à homogénéité.",
      "Former une dizaine de petites boules avec les mains et réserver au frais au moins 30 minutes."
    ],
    notes: "Collation sucrée sans cuisson, riche en énergie rapide : pratique avant l'entraînement.",
    es: {
      name: "Bolas de energía de dátiles y avena (sin horno)",
      category: "Merienda",
      steps: [
        "Deshuesa los dátiles y déjalos en remojo 10 minutos en agua tibia si están un poco secos.",
        "Tritura los dátiles con las nueces hasta conseguir una pasta pegajosa.",
        "Añade los copos de avena y la mantequilla de cacahuete, tritura de nuevo hasta que quede homogéneo.",
        "Forma una decena de bolitas con las manos y resérvalas en frío al menos 30 minutos."
      ],
      notes: "Merienda dulce sin horno, rica en energía rápida: práctica antes del entrenamiento."
    }
  },
  {
    id: "houmous-crudites",
    name: "Houmous de pois chiches & bâtonnets de légumes",
    category: "Collation",
    photo: "https://images.pexels.com/photos/34644302/pexels-photo-34644302.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 3,
    ingredients: [
      { ingredientId: "pois-chiches", grams: 150 },
      { ingredientId: "tahini", grams: 20 },
      { ingredientId: "huile-olive", grams: 10 },
      { ingredientId: "carotte", grams: 100 }
    ],
    steps: [
      "Mixer les pois chiches cuits avec le tahini et l'huile d'olive jusqu'à obtenir une purée lisse (ajouter un peu d'eau si trop épais).",
      "Assaisonner selon le goût (citron, ail, cumin, sel — non comptés dans les macros).",
      "Couper la carotte en bâtonnets.",
      "Servir le houmous avec les bâtonnets de carotte pour tremper."
    ],
    notes: "Bonne collation salée riche en fibres et protéines végétales. Se conserve 3-4 jours au frais.",
    es: {
      name: "Hummus de garbanzos & bastoncitos de verdura",
      category: "Merienda",
      steps: [
        "Tritura los garbanzos cocidos con el tahini y el aceite de oliva hasta conseguir un puré liso (añade un poco de agua si queda muy espeso).",
        "Sazona al gusto (limón, ajo, comino, sal — no contados en las macros).",
        "Corta la zanahoria en bastoncitos.",
        "Sirve el hummus con los bastoncitos de zanahoria para mojar."
      ],
      notes: "Buena merienda salada rica en fibra y proteína vegetal. Se conserva 3-4 días en frío."
    }
  },
  {
    id: "tartine-avocat-oeuf",
    name: "Tartine d'avocat & œuf poché",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/7936736/pexels-photo-7936736.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "pain-complet", grams: 60 },
      { ingredientId: "avocat", grams: 80 },
      { ingredientId: "oeuf", grams: 60 }
    ],
    steps: [
      "Faire griller les tranches de pain complet.",
      "Écraser l'avocat à la fourchette avec un peu de sel et de poivre, étaler sur le pain grillé.",
      "Pocher l'œuf dans une eau frémissante additionnée d'un peu de vinaigre pendant 3 minutes.",
      "Déposer l'œuf poché sur la tartine d'avocat."
    ],
    notes: "Petit-déjeuner complet, bonnes graisses et protéines. Marche aussi très bien en collation salée.",
    es: {
      name: "Tostada de aguacate & huevo escalfado",
      category: "Desayuno",
      steps: [
        "Tuesta las rebanadas de pan integral.",
        "Aplasta el aguacate con un tenedor con un poco de sal y pimienta, y extiéndelo sobre el pan tostado.",
        "Escalfa el huevo en agua a punto de hervir con un chorrito de vinagre durante 3 minutos.",
        "Coloca el huevo escalfado sobre la tostada de aguacate."
      ],
      notes: "Desayuno completo, buenas grasas y proteína. También funciona muy bien como merienda salada."
    }
  },
  {
    id: "yaourt-miel-noix",
    name: "Yaourt grec, miel & noix",
    category: "Collation",
    photo: "https://images.pexels.com/photos/17027448/pexels-photo-17027448.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "yaourt-grec", grams: 200 },
      { ingredientId: "miel", grams: 15 },
      { ingredientId: "noix", grams: 20 }
    ],
    steps: [
      "Verser le yaourt grec dans un bol.",
      "Concasser grossièrement les noix par-dessus.",
      "Terminer avec un filet de miel."
    ],
    notes: "Collation très rapide (2 minutes), bon équilibre protéines/bonnes graisses.",
    es: {
      name: "Yogur griego, miel & nueces",
      category: "Merienda",
      steps: [
        "Vierte el yogur griego en un bol.",
        "Trocea groseramente las nueces por encima.",
        "Termina con un chorrito de miel."
      ],
      notes: "Merienda muy rápida (2 minutos), buen equilibrio de proteína y grasas saludables."
    }
  },
  {
    id: "tartine-fromage-dinde",
    name: "Tartine de pain complet, fromage blanc & dinde",
    category: "Collation",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "pain-complet", grams: 60 },
      { ingredientId: "fromage-blanc", grams: 100 },
      { ingredientId: "dinde-blanc", grams: 60 },
      { ingredientId: "tomate", grams: 50 }
    ],
    steps: [
      "Faire griller les tranches de pain complet.",
      "Étaler le fromage blanc sur le pain grillé.",
      "Ajouter les tranches de blanc de dinde (cuit, en tranches froides) et la tomate coupée en rondelles."
    ],
    notes: "Collation salée riche en protéines, prête en 5 minutes. Bonne option de fin de journée.",
    es: {
      name: "Tostada de pan integral, queso fresco batido & pavo",
      category: "Merienda",
      steps: [
        "Tuesta las rebanadas de pan integral.",
        "Extiende el queso fresco batido sobre el pan tostado.",
        "Añade las lonchas de pechuga de pavo (cocida, en frío) y la tomate cortada en rodajas."
      ],
      notes: "Merienda salada rica en proteína, lista en 5 minutos. Buena opción de última hora del día."
    }
  },
  {
    id: "pancakes-avoine-banane",
    name: "Pancakes protéinés avoine & banane",
    category: "Petit-déjeuner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 60 },
      { ingredientId: "banane", grams: 120 },
      { ingredientId: "oeuf", grams: 100 }
    ],
    steps: [
      "Mixer les flocons d'avoine, la banane et les œufs jusqu'à obtenir une pâte lisse.",
      "Faire chauffer une poêle légèrement huilée à feu moyen.",
      "Verser des petites louches de pâte et cuire 2 minutes de chaque côté, jusqu'à coloration dorée.",
      "Empiler les pancakes et servir tels quels ou avec un peu de miel."
    ],
    notes: "Alternative sans sucre ajouté ni farine blanche aux pancakes classiques, riche en glucides complexes.",
    es: {
      name: "Tortitas proteicas de avena & plátano",
      category: "Desayuno",
      steps: [
        "Tritura los copos de avena, el plátano y los huevos hasta conseguir una masa lisa.",
        "Calienta una sartén ligeramente engrasada a fuego medio.",
        "Vierte pequeños cucharones de masa y cocina 2 minutos por cada lado, hasta que se doren.",
        "Apila las tortitas y sirve tal cual o con un poco de miel."
      ],
      notes: "Alternativa sin azúcar añadido ni harina blanca a las tortitas clásicas, rica en carbohidratos complejos."
    }
  },
  {
    id: "salade-pois-chiches-poulet",
    name: "Salade de pois chiches, poulet & tomate",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/11753326/pexels-photo-11753326.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "pois-chiches", grams: 150 },
      { ingredientId: "poulet-blanc", grams: 120 },
      { ingredientId: "tomate", grams: 100 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le blanc de poulet à la poêle ou au four, puis le couper en dés.",
      "Mélanger les pois chiches cuits, le poulet et la tomate coupée en dés dans un saladier.",
      "Assaisonner avec l'huile d'olive, sel, poivre et herbes selon le goût."
    ],
    notes: "Salade complète et rassasiante, se prépare aussi bien la veille pour le lendemain midi.",
    es: {
      name: "Ensalada de garbanzos, pollo & tomate",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la pechuga de pollo a la plancha o al horno, luego córtala en dados.",
        "Mezcla los garbanzos cocidos, el pollo y el tomate cortado en dados en un bol.",
        "Aliña con el aceite de oliva, sal, pimienta y hierbas al gusto."
      ],
      notes: "Ensalada completa y saciante, también se puede preparar la noche antes para el mediodía siguiente."
    }
  },
  {
    id: "smoothie-vert-epinards-banane",
    name: "Smoothie vert épinards, banane & yaourt",
    category: "Collation",
    photo: "https://images.pexels.com/photos/12049998/pexels-photo-12049998.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "epinards", grams: 40 },
      { ingredientId: "banane", grams: 120 },
      { ingredientId: "yaourt-grec", grams: 150 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Mettre les épinards frais, la banane, le yaourt grec et le miel dans un blender.",
      "Ajouter un peu d'eau ou de lait selon la consistance souhaitée.",
      "Mixer jusqu'à obtenir un smoothie bien lisse."
    ],
    notes: "Bon moyen d'ajouter des légumes verts à un moment sucré de la journée, sans en sentir vraiment le goût.",
    es: {
      name: "Batido verde de espinacas, plátano & yogur",
      category: "Merienda",
      steps: [
        "Pon las espinacas frescas, el plátano, el yogur griego y la miel en una batidora.",
        "Añade un poco de agua o leche según la consistencia deseada.",
        "Bate hasta conseguir un batido bien liso."
      ],
      notes: "Buena forma de añadir verduras verdes a un momento dulce del día, sin notar apenas el sabor."
    }
  },
  {
    id: "bowl-lentilles-avocat",
    name: "Bowl de lentilles, avocat & tomate",
    category: "Déjeuner / Dîner",
    photo: "",
    servings: 1,
    ingredients: [
      { ingredientId: "lentilles-cuites", grams: 200 },
      { ingredientId: "avocat", grams: 60 },
      { ingredientId: "tomate", grams: 80 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Verser les lentilles cuites dans un bol.",
      "Ajouter l'avocat coupé en tranches et la tomate coupée en dés.",
      "Assaisonner avec l'huile d'olive, sel, poivre et un filet de citron si disponible."
    ],
    notes: "Bowl végétarien complet en protéines végétales et bonnes graisses, se mange froid ou tiède.",
    es: {
      name: "Bowl de lentejas, aguacate & tomate",
      category: "Almuerzo / Cena",
      steps: [
        "Vierte las lentejas cocidas en un bol.",
        "Añade el aguacate cortado en láminas y el tomate cortado en dados.",
        "Aliña con el aceite de oliva, sal, pimienta y un chorrito de limón si tienes."
      ],
      notes: "Bowl vegetariano completo en proteína vegetal y grasas saludables, se come frío o templado."
    }
  }
];

/* ---------------- EXERCICES ---------------- */
/*
  difficulty: "Débutant" | "Intermédiaire" | "Avancé"
  description: liste d'étapes détaillées (exécution du mouvement)
*/
const EXERCISES = [
  {
    id: "tractions-pronation",
    name: "Tractions pronation",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "avant-bras"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/9644816/pexels-photo-9644816.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/31622705/13475125_2560_1440_60fps.mp4",
    description: [
      "Saisir la barre en pronation (paumes vers l'avant), mains un peu plus larges que les épaules.",
      "Partir bras tendus, corps gainé, sans balancer.",
      "Tirer le corps vers le haut jusqu'à ce que le menton dépasse la barre.",
      "Redescendre en contrôlant le mouvement jusqu'à extension complète des bras."
    ],
    tips: "Garde le gainage tout du long, évite l'élan (kipping) tant que le mouvement strict n'est pas maîtrisé.",
    progressionPrev: "Tractions assistées (élastique ou machine)",
    progressionNext: "Tractions lestées",
    es: {
      name: "Dominadas en pronación",
      muscleGroup: "Espalda, bíceps",
      description: [
        "Agarra la barra en pronación (palmas hacia adelante), manos un poco más abiertas que los hombros.",
        "Parte con los brazos extendidos, el cuerpo en tensión, sin balancearte.",
        "Tira del cuerpo hacia arriba hasta que la barbilla pase la barra.",
        "Baja controlando el movimiento hasta la extensión completa de los brazos."
      ],
      tips: "Mantén la tensión del core todo el recorrido, evita el impulso (kipping) hasta dominar el movimiento estricto.",
      progressionPrev: "Dominadas asistidas (banda elástica o máquina)",
      progressionNext: "Dominadas lastradas"
    }
  },
  {
    id: "pompes",
    name: "Pompes",
    muscleGroup: "Pectoraux, triceps, épaules",
    muscles: ["pectoraux", "triceps", "epaules", "abdominaux"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/6975784/pexels-photo-6975784.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6388436/6388436-uhd_2560_1440_25fps.mp4",
    description: [
      "Mains au sol, légèrement plus larges que les épaules, corps aligné des talons à la tête.",
      "Descendre en fléchissant les coudes jusqu'à ce que la poitrine frôle le sol.",
      "Pousser pour revenir à la position de départ en gardant le gainage."
    ],
    tips: "Ne laisse pas les hanches s'affaisser : garde tout le corps rigide comme une planche.",
    progressionPrev: "Pompes genoux au sol ou inclinées",
    progressionNext: "Pompes lestées / archer push-up",
    es: {
      name: "Flexiones",
      muscleGroup: "Pectorales, tríceps, hombros",
      description: [
        "Manos en el suelo, un poco más abiertas que los hombros, cuerpo alineado de los talones a la cabeza.",
        "Baja flexionando los codos hasta que el pecho roce el suelo.",
        "Empuja para volver a la posición inicial manteniendo la tensión del core."
      ],
      tips: "No dejes que la cadera se hunda: mantén todo el cuerpo rígido como una tabla.",
      progressionPrev: "Flexiones con rodillas en el suelo o inclinadas",
      progressionNext: "Flexiones lastradas / archer push-up"
    }
  },
  {
    id: "dips",
    name: "Dips (barres parallèles)",
    muscleGroup: "Triceps, pectoraux",
    muscles: ["triceps", "pectoraux", "epaules"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/4803702/pexels-photo-4803702.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/35585662/15079647_1080_1920_30fps.mp4",
    description: [
      "Bras tendus sur les barres parallèles, épaules basses, léger buste penché en avant.",
      "Descendre en fléchissant les coudes jusqu'à ce que les épaules soient au niveau des coudes.",
      "Pousser pour remonter en extension complète des bras."
    ],
    tips: "Évite de descendre trop bas si tu manques de mobilité d'épaule : progresse petit à petit.",
    progressionPrev: "Dips assistés (élastique ou machine)",
    progressionNext: "Dips lestés",
    es: {
      name: "Fondos (paralelas)",
      muscleGroup: "Tríceps, pectorales",
      description: [
        "Brazos extendidos sobre las paralelas, hombros bajos, ligera inclinación del torso hacia adelante.",
        "Baja flexionando los codos hasta que los hombros queden a la altura de los codos.",
        "Empuja para subir hasta la extensión completa de los brazos."
      ],
      tips: "Evita bajar demasiado si te falta movilidad de hombro: progresa poco a poco.",
      progressionPrev: "Fondos asistidos (banda elástica o máquina)",
      progressionNext: "Fondos lastrados"
    }
  },
  {
    id: "front-lever",
    name: "Front lever (tenue)",
    muscleGroup: "Dos, sangle abdominale, épaules",
    muscles: ["dos", "abdominaux", "obliques", "lombaires", "epaules", "avant-bras"],
    difficulty: "Avancé",
    photo: "",
    description: [
      "Suspendu à la barre, bras tendus.",
      "Tirer le corps à l'horizontale, dos parallèle au sol, jambes tendues et serrées.",
      "Maintenir la position en gainant fort les abdominaux et les lombaires."
    ],
    tips: "Travaille d'abord les progressions (tuck, advanced tuck, straddle) avant la version complète.",
    progressionPrev: "Tuck front lever",
    progressionNext: "Front lever pull-ups",
    es: {
      name: "Front lever (mantenimiento)",
      muscleGroup: "Espalda, core, hombros",
      description: [
        "Suspendido de la barra, brazos extendidos.",
        "Tira del cuerpo hasta la horizontal, espalda paralela al suelo, piernas extendidas y juntas.",
        "Mantén la posición apretando fuerte el core y la zona lumbar."
      ],
      tips: "Trabaja primero las progresiones (tuck, advanced tuck, straddle) antes de la versión completa.",
      progressionPrev: "Tuck front lever",
      progressionNext: "Front lever con dominada"
    }
  },
  {
    id: "squat-pistol",
    name: "Squat pistol (une jambe)",
    muscleGroup: "Quadriceps, fessiers, équilibre",
    muscles: ["quadriceps", "fessiers", "ischios", "mollets", "adducteurs"],
    difficulty: "Avancé",
    photo: "https://images.pexels.com/photos/4803862/pexels-photo-4803862.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout sur une jambe, l'autre jambe tendue devant toi, bras tendus pour l'équilibre.",
      "Descendre en contrôlant jusqu'à ce que la cuisse touche presque le mollet.",
      "Remonter en poussant sur le talon, sans poser l'autre jambe au sol."
    ],
    tips: "Travaille la mobilité de cheville et la version assistée (en tenant un support) avant la version libre.",
    progressionPrev: "Squat bulgare",
    progressionNext: "Squat pistol lesté",
    es: {
      name: "Sentadilla pistol (una pierna)",
      muscleGroup: "Cuádriceps, glúteos, equilibrio",
      description: [
        "De pie sobre una pierna, la otra extendida delante de ti, brazos extendidos para el equilibrio.",
        "Baja controlando el movimiento hasta que el muslo casi toque la pantorrilla.",
        "Sube empujando con el talón, sin apoyar la otra pierna en el suelo."
      ],
      tips: "Trabaja la movilidad de tobillo y la versión asistida (sujetándote a un apoyo) antes de la versión libre.",
      progressionPrev: "Zancada búlgara",
      progressionNext: "Sentadilla pistol lastrada"
    }
  },
  {
    id: "tractions-supination",
    name: "Tractions supination",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "avant-bras"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/3838290/pexels-photo-3838290.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/31622700/13475095_2560_1440_60fps.mp4",
    description: [
      "Saisir la barre en supination (paumes vers toi), mains à largeur d'épaules.",
      "Partir bras tendus, corps gainé.",
      "Tirer jusqu'à ce que le menton dépasse la barre en gardant les coudes proches du corps.",
      "Redescendre en contrôlant jusqu'à extension complète."
    ],
    tips: "Version qui sollicite plus les biceps que la pronation — bonne alternative pour varier le stimulus.",
    progressionPrev: "Tractions supination assistées",
    progressionNext: "Tractions supination lestées",
    es: {
      name: "Dominadas en supinación",
      muscleGroup: "Espalda, bíceps",
      description: [
        "Agarra la barra en supinación (palmas hacia ti), manos a la anchura de los hombros.",
        "Parte con los brazos extendidos, el cuerpo en tensión.",
        "Tira hasta que la barbilla pase la barra manteniendo los codos cerca del cuerpo.",
        "Baja controlando el movimiento hasta la extensión completa."
      ],
      tips: "Versión que exige más al bíceps que la pronación — buena alternativa para variar el estímulo.",
      progressionPrev: "Dominadas en supinación asistidas",
      progressionNext: "Dominadas en supinación lastradas"
    }
  },
  {
    id: "rowing-inverse",
    name: "Rowing inversé (australian pull-up)",
    muscleGroup: "Dos, biceps, trapèzes",
    muscles: ["dos", "biceps", "trapezes"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/8519688/pexels-photo-8519688.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Sous une barre basse (ou table robuste), corps allongé dessous, mains en pronation ou supination.",
      "Corps gainé et aligné, seuls les talons touchent le sol.",
      "Tirer la poitrine vers la barre en rapprochant les omoplates.",
      "Redescendre en contrôlant jusqu'à extension complète des bras."
    ],
    tips: "Plus le corps est horizontal (pieds surélevés), plus l'exercice est difficile — ajuste l'angle selon ton niveau.",
    progressionPrev: "Rowing inversé debout penché (angle plus vertical)",
    progressionNext: "Tractions pronation/supination",
    es: {
      name: "Remo invertido (australian pull-up)",
      muscleGroup: "Espalda, bíceps, trapecios",
      description: [
        "Bajo una barra baja (o mesa resistente), cuerpo tumbado debajo, manos en pronación o supinación.",
        "Cuerpo en tensión y alineado, solo los talones tocan el suelo.",
        "Tira del pecho hacia la barra acercando los omóplatos.",
        "Baja controlando el movimiento hasta la extensión completa de los brazos."
      ],
      tips: "Cuanto más horizontal esté el cuerpo (pies elevados), más difícil es el ejercicio — ajusta el ángulo según tu nivel.",
      progressionPrev: "Remo invertido de pie inclinado (ángulo más vertical)",
      progressionNext: "Dominadas en pronación/supinación"
    }
  },
  {
    id: "tirage-horizontal",
    name: "Tirage horizontal (élastique/poulie)",
    muscleGroup: "Dos, biceps, trapèzes",
    muscles: ["dos", "biceps", "trapezes"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/11876626/pexels-photo-11876626.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/4367642/4367642-hd_1920_1080_30fps.mp4",
    description: [
      "Assis, jambes tendues, élastique ou poignée de poulie tendu devant toi.",
      "Dos droit, tirer les mains vers le buste en rapprochant les omoplates.",
      "Marquer une pause d'une seconde, puis revenir en contrôlant l'étirement."
    ],
    tips: "Garde le buste immobile : le mouvement vient des bras et des omoplates, pas d'un balancement du dos.",
    progressionPrev: "Tirage horizontal avec élastique léger",
    progressionNext: "Rowing inversé",
    es: {
      name: "Remo horizontal (banda/polea)",
      muscleGroup: "Espalda, bíceps, trapecios",
      description: [
        "Sentado, piernas extendidas, banda elástica o polea tensada delante de ti.",
        "Espalda recta, tira de las manos hacia el torso acercando los omóplatos.",
        "Mantén una pausa de un segundo y vuelve controlando el estiramiento."
      ],
      tips: "Mantén el torso inmóvil: el movimiento viene de los brazos y los omóplatos, no de un balanceo de la espalda.",
      progressionPrev: "Remo horizontal con banda ligera",
      progressionNext: "Remo invertido"
    }
  },
  {
    id: "tirage-vertical",
    name: "Tirage vertical (poulie/élastique haut)",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/30165244/pexels-photo-30165244.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/30890377/13207512_1920_1080_30fps.mp4",
    description: [
      "Assis ou debout face à la poulie haute (ou élastique fixé en hauteur), prise large.",
      "Tirer la barre/poignée vers le haut de la poitrine en gardant le buste droit.",
      "Remonter en contrôlant jusqu'à extension complète des bras."
    ],
    tips: "Bonne alternative pour préparer les tractions si tu ne peux pas encore en faire strictes.",
    progressionPrev: "Tirage vertical prise large, charge légère",
    progressionNext: "Tractions pronation",
    es: {
      name: "Jalón al pecho (polea/banda alta)",
      muscleGroup: "Espalda, bíceps",
      description: [
        "Sentado o de pie frente a la polea alta (o banda fijada en altura), agarre amplio.",
        "Tira de la barra/agarre hacia la parte alta del pecho manteniendo el torso recto.",
        "Sube controlando el movimiento hasta la extensión completa de los brazos."
      ],
      tips: "Buena alternativa para preparar las dominadas si todavía no puedes hacerlas estrictas.",
      progressionPrev: "Jalón al pecho agarre amplio, carga ligera",
      progressionNext: "Dominadas en pronación"
    }
  },
  {
    id: "haussements-epaules",
    name: "Haussements d'épaules (shrugs)",
    muscleGroup: "Trapèzes",
    muscles: ["trapezes"],
    difficulty: "Débutant",
    photo: "",
    video: "",
    description: [
      "Debout, haltères ou sac lesté dans chaque main, bras tendus le long du corps.",
      "Hausser les épaules le plus haut possible vers les oreilles, sans rouler les épaules.",
      "Redescendre lentement en contrôlant la charge."
    ],
    tips: "Évite de faire tourner les épaules — le mouvement est purement vertical.",
    progressionPrev: "Shrugs à mains nues",
    progressionNext: "Shrugs lestés lourds",
    es: {
      name: "Encogimientos de hombros (shrugs)",
      muscleGroup: "Trapecios",
      description: [
        "De pie, mancuernas o mochila lastrada en cada mano, brazos extendidos junto al cuerpo.",
        "Sube los hombros lo más alto posible hacia las orejas, sin rotarlos.",
        "Baja lentamente controlando la carga."
      ],
      tips: "Evita rotar los hombros — el movimiento es puramente vertical.",
      progressionPrev: "Shrugs sin peso",
      progressionNext: "Shrugs con carga pesada"
    }
  },
  {
    id: "face-pull",
    name: "Face pull (élastique)",
    muscleGroup: "Épaules, trapèzes, dos",
    muscles: ["epaules", "trapezes", "dos"],
    difficulty: "Débutant",
    photo: "",
    video: "",
    description: [
      "Élastique fixé à hauteur du visage, une extrémité dans chaque main.",
      "Tirer vers le visage en écartant les mains, coudes hauts, en serrant les omoplates.",
      "Revenir lentement en contrôlant l'étirement."
    ],
    tips: "Excellent exercice pour la santé des épaules — parfait en échauffement avant une séance haut du corps.",
    progressionPrev: "Face pull élastique léger",
    progressionNext: "Face pull élastique fort / poulie",
    es: {
      name: "Face pull (banda elástica)",
      muscleGroup: "Hombros, trapecios, espalda",
      description: [
        "Banda elástica fijada a la altura de la cara, un extremo en cada mano.",
        "Tira hacia la cara separando las manos, codos altos, apretando los omóplatos.",
        "Vuelve lentamente controlando el estiramiento."
      ],
      tips: "Excelente ejercicio para la salud del hombro — perfecto como calentamiento antes de una sesión de tren superior.",
      progressionPrev: "Face pull con banda ligera",
      progressionNext: "Face pull con banda fuerte / polea"
    }
  },
  {
    id: "elevation-laterale",
    name: "Élévations latérales",
    muscleGroup: "Épaules",
    muscles: ["epaules"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/29793977/pexels-photo-29793977.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6293119/6293119-uhd_2732_1440_25fps.mp4",
    description: [
      "Debout, un haltère (ou bouteille lestée) dans chaque main, bras le long du corps.",
      "Lever les bras sur les côtés jusqu'à hauteur d'épaule, coudes légèrement fléchis.",
      "Redescendre lentement en contrôlant la charge."
    ],
    tips: "Utilise une charge légère : c'est un mouvement d'isolation, la triche par élan réduit son efficacité.",
    progressionPrev: "Élévations latérales à mains nues",
    progressionNext: "Élévations latérales charge plus lourde",
    es: {
      name: "Elevaciones laterales",
      muscleGroup: "Hombros",
      description: [
        "De pie, una mancuerna (o botella lastrada) en cada mano, brazos junto al cuerpo.",
        "Levanta los brazos hacia los lados hasta la altura del hombro, codos ligeramente flexionados.",
        "Baja lentamente controlando la carga."
      ],
      tips: "Usa una carga ligera: es un movimiento de aislamiento, hacer trampa con impulso reduce su eficacia.",
      progressionPrev: "Elevaciones laterales sin peso",
      progressionNext: "Elevaciones laterales con más carga"
    }
  },
  {
    id: "developpe-militaire",
    name: "Développé militaire",
    muscleGroup: "Épaules, triceps",
    muscles: ["epaules", "triceps"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/7289370/pexels-photo-7289370.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/4367541/4367541-hd_1920_1080_30fps.mp4",
    description: [
      "Debout ou assis, haltères ou barre au niveau des épaules, paumes vers l'avant.",
      "Pousser la charge au-dessus de la tête jusqu'à extension complète des bras.",
      "Redescendre en contrôlant jusqu'au niveau des épaules."
    ],
    tips: "Garde les abdominaux gainés pour éviter de cambrer excessivement le bas du dos.",
    progressionPrev: "Développé militaire assis, charge légère",
    progressionNext: "Développé militaire debout, charge lourde",
    es: {
      name: "Press militar",
      muscleGroup: "Hombros, tríceps",
      description: [
        "De pie o sentado, mancuernas o barra a la altura de los hombros, palmas hacia adelante.",
        "Empuja la carga por encima de la cabeza hasta la extensión completa de los brazos.",
        "Baja controlando el movimiento hasta la altura de los hombros."
      ],
      tips: "Mantén el core apretado para evitar arquear en exceso la zona lumbar.",
      progressionPrev: "Press militar sentado, carga ligera",
      progressionNext: "Press militar de pie, carga pesada"
    }
  },
  {
    id: "curl-biceps",
    name: "Curl biceps (haltères/barre)",
    muscleGroup: "Biceps, avant-bras",
    muscles: ["biceps", "avant-bras"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/3763115/pexels-photo-3763115.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/4367577/4367577-hd_1920_1080_30fps.mp4",
    description: [
      "Debout, haltères ou barre en prise supination, bras tendus le long du corps.",
      "Fléchir les coudes pour remonter la charge vers les épaules, coudes fixes.",
      "Redescendre lentement jusqu'à extension complète."
    ],
    tips: "Évite de balancer le buste pour tricher : isole bien le mouvement au niveau du coude.",
    progressionPrev: "Curl à mains nues ou charge très légère",
    progressionNext: "Curl charge lourde / tempo lent",
    es: {
      name: "Curl de bíceps (mancuernas/barra)",
      muscleGroup: "Bíceps, antebrazos",
      description: [
        "De pie, mancuernas o barra en agarre supino, brazos extendidos junto al cuerpo.",
        "Flexiona los codos para subir la carga hacia los hombros, codos fijos.",
        "Baja lentamente hasta la extensión completa."
      ],
      tips: "Evita balancear el torso para hacer trampa: aísla bien el movimiento a nivel del codo.",
      progressionPrev: "Curl sin peso o con carga muy ligera",
      progressionNext: "Curl con carga pesada / tempo lento"
    }
  },
  {
    id: "curl-marteau",
    name: "Curl marteau",
    muscleGroup: "Biceps, avant-bras",
    muscles: ["biceps", "avant-bras"],
    difficulty: "Débutant",
    photo: "",
    video: "",
    description: [
      "Debout, haltères en prise neutre (paumes face à face), bras le long du corps.",
      "Fléchir les coudes pour remonter la charge, sans tourner les poignets.",
      "Redescendre lentement jusqu'à extension complète."
    ],
    tips: "Sollicite plus le brachial et l'avant-bras que le curl classique — bon complément.",
    progressionPrev: "Curl marteau charge légère",
    progressionNext: "Curl marteau charge lourde",
    es: {
      name: "Curl martillo",
      muscleGroup: "Bíceps, antebrazos",
      description: [
        "De pie, mancuernas en agarre neutro (palmas enfrentadas), brazos junto al cuerpo.",
        "Flexiona los codos para subir la carga, sin girar las muñecas.",
        "Baja lentamente hasta la extensión completa."
      ],
      tips: "Exige más al braquial y al antebrazo que el curl clásico — buen complemento.",
      progressionPrev: "Curl martillo con carga ligera",
      progressionNext: "Curl martillo con carga pesada"
    }
  },
  {
    id: "extension-triceps",
    name: "Extension triceps (nuque/poulie)",
    muscleGroup: "Triceps",
    muscles: ["triceps"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/38167598/pexels-photo-38167598.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6296281/6296281-hd_1080_1920_25fps.mp4",
    description: [
      "Debout ou assis, haltère tenu à deux mains derrière la nuque, coudes pointés vers le haut.",
      "Étendre les bras au-dessus de la tête jusqu'à extension complète.",
      "Redescendre en contrôlant jusqu'à la position de départ, sans écarter les coudes."
    ],
    tips: "Garde les coudes fixes et proches de la tête tout au long du mouvement.",
    progressionPrev: "Extension à la poulie, charge légère",
    progressionNext: "Extension nuque, charge lourde",
    es: {
      name: "Extensión de tríceps (nuca/polea)",
      muscleGroup: "Tríceps",
      description: [
        "De pie o sentado, mancuerna sujeta con dos manos detrás de la nuca, codos apuntando hacia arriba.",
        "Extiende los brazos por encima de la cabeza hasta la extensión completa.",
        "Baja controlando el movimiento hasta la posición inicial, sin abrir los codos."
      ],
      tips: "Mantén los codos fijos y cerca de la cabeza durante todo el movimiento.",
      progressionPrev: "Extensión en polea, carga ligera",
      progressionNext: "Extensión en nuca, carga pesada"
    }
  },
  {
    id: "pompes-diamant",
    name: "Pompes diamant",
    muscleGroup: "Triceps, pectoraux",
    muscles: ["triceps", "pectoraux"],
    difficulty: "Intermédiaire",
    photo: "",
    video: "",
    description: [
      "Mains au sol jointes sous la poitrine, pouces et index formant un losange.",
      "Descendre en fléchissant les coudes près du corps jusqu'à ce que la poitrine frôle les mains.",
      "Pousser pour revenir à la position de départ en gardant le corps aligné."
    ],
    tips: "Plus exigeant pour les triceps que les pompes classiques — commence sur les genoux si besoin.",
    progressionPrev: "Pompes diamant sur les genoux",
    progressionNext: "Pompes diamant pieds surélevés",
    es: {
      name: "Flexiones diamante",
      muscleGroup: "Tríceps, pectorales",
      description: [
        "Manos en el suelo juntas bajo el pecho, pulgares e índices formando un rombo.",
        "Baja flexionando los codos cerca del cuerpo hasta que el pecho roce las manos.",
        "Empuja para volver a la posición inicial manteniendo el cuerpo alineado."
      ],
      tips: "Más exigente para el tríceps que las flexiones clásicas — empieza de rodillas si hace falta.",
      progressionPrev: "Flexiones diamante de rodillas",
      progressionNext: "Flexiones diamante con pies elevados"
    }
  },
  {
    id: "developpe-couche",
    name: "Développé couché",
    muscleGroup: "Pectoraux, triceps, épaules",
    muscles: ["pectoraux", "triceps", "epaules"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/7371361/pexels-photo-7371361.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/5320001/5320001-uhd_2560_1440_25fps.mp4",
    description: [
      "Allongé sur un banc, barre ou haltères au niveau de la poitrine, prise un peu plus large que les épaules.",
      "Descendre la charge en contrôlant jusqu'à toucher légèrement la poitrine.",
      "Pousser pour revenir à l'extension complète des bras."
    ],
    tips: "Garde les omoplates serrées et les pieds bien ancrés au sol pour plus de stabilité.",
    progressionPrev: "Développé couché haltères légers",
    progressionNext: "Développé couché charge lourde",
    es: {
      name: "Press de banca",
      muscleGroup: "Pectorales, tríceps, hombros",
      description: [
        "Tumbado en un banco, barra o mancuernas a la altura del pecho, agarre un poco más ancho que los hombros.",
        "Baja la carga controlando el movimiento hasta rozar ligeramente el pecho.",
        "Empuja para volver a la extensión completa de los brazos."
      ],
      tips: "Mantén los omóplatos apretados y los pies bien anclados al suelo para más estabilidad.",
      progressionPrev: "Press de banca con mancuernas ligeras",
      progressionNext: "Press de banca con carga pesada"
    }
  },
  {
    id: "ecarte-couche",
    name: "Écarté couché (haltères)",
    muscleGroup: "Pectoraux",
    muscles: ["pectoraux"],
    difficulty: "Débutant",
    photo: "",
    video: "https://videos.pexels.com/video-files/8402113/8402113-hd_1080_1920_30fps.mp4",
    description: [
      "Allongé sur un banc, haltères tenus au-dessus de la poitrine, bras légèrement fléchis.",
      "Ouvrir les bras sur les côtés en arc de cercle jusqu'à sentir l'étirement des pectoraux.",
      "Remonter en refermant les bras au-dessus de la poitrine."
    ],
    tips: "Garde une légère flexion des coudes fixe tout du long pour protéger l'articulation.",
    progressionPrev: "Écarté charge très légère",
    progressionNext: "Écarté charge plus lourde / poulie",
    es: {
      name: "Aperturas en banco (mancuernas)",
      muscleGroup: "Pectorales",
      description: [
        "Tumbado en un banco, mancuernas sostenidas encima del pecho, brazos ligeramente flexionados.",
        "Abre los brazos hacia los lados en arco hasta sentir el estiramiento de los pectorales.",
        "Sube cerrando los brazos por encima del pecho."
      ],
      tips: "Mantén una ligera flexión fija de codos durante todo el recorrido para proteger la articulación.",
      progressionPrev: "Aperturas con carga muy ligera",
      progressionNext: "Aperturas con más carga / polea"
    }
  },
  {
    id: "pompes-declinees",
    name: "Pompes déclinées (pieds surélevés)",
    muscleGroup: "Pectoraux, épaules, triceps",
    muscles: ["pectoraux", "epaules", "triceps"],
    difficulty: "Intermédiaire",
    photo: "",
    video: "",
    description: [
      "Mains au sol, pieds posés sur un support surélevé (banc, chaise), corps aligné.",
      "Descendre en fléchissant les coudes jusqu'à ce que la poitrine frôle le sol.",
      "Pousser pour revenir à la position de départ en gardant le gainage."
    ],
    tips: "Plus le support est haut, plus l'accent est mis sur le haut des pectoraux et les épaules.",
    progressionPrev: "Pompes classiques",
    progressionNext: "Pompes déclinées lestées",
    es: {
      name: "Flexiones declinadas (pies elevados)",
      muscleGroup: "Pectorales, hombros, tríceps",
      description: [
        "Manos en el suelo, pies apoyados en un soporte elevado (banco, silla), cuerpo alineado.",
        "Baja flexionando los codos hasta que el pecho roce el suelo.",
        "Empuja para volver a la posición inicial manteniendo la tensión del core."
      ],
      tips: "Cuanto más alto el soporte, más se enfatiza la parte alta del pectoral y los hombros.",
      progressionPrev: "Flexiones clásicas",
      progressionNext: "Flexiones declinadas lastradas"
    }
  },
  {
    id: "gainage-planche",
    name: "Gainage planche",
    muscleGroup: "Abdominaux, lombaires",
    muscles: ["abdominaux", "lombaires"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/6303481/pexels-photo-6303481.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Avant-bras et pointes de pieds au sol, corps aligné de la tête aux talons.",
      "Contracter les abdominaux et les fessiers pour éviter que les hanches montent ou s'affaissent.",
      "Maintenir la position en respirant calmement."
    ],
    tips: "Vise la qualité plutôt que la durée : mieux vaut 20 secondes parfaites que 60 secondes en mauvaise posture.",
    progressionPrev: "Planche sur les genoux",
    progressionNext: "Planche avec délestage (un bras/une jambe levée)",
    es: {
      name: "Plancha abdominal",
      muscleGroup: "Abdominales, lumbares",
      description: [
        "Antebrazos y puntas de los pies en el suelo, cuerpo alineado de la cabeza a los talones.",
        "Contrae los abdominales y los glúteos para evitar que la cadera suba o se hunda.",
        "Mantén la posición respirando con calma."
      ],
      tips: "Busca calidad más que duración: es mejor 20 segundos perfectos que 60 segundos con mala postura.",
      progressionPrev: "Plancha de rodillas",
      progressionNext: "Plancha con descarga (un brazo/una pierna levantada)"
    }
  },
  {
    id: "releve-jambes",
    name: "Relevé de jambes suspendu",
    muscleGroup: "Abdominaux, obliques",
    muscles: ["abdominaux", "obliques"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/4803688/pexels-photo-4803688.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6455076/6455076-uhd_1440_2560_24fps.mp4",
    description: [
      "Suspendu à la barre, bras tendus, corps gainé.",
      "Relever les jambes tendues (ou fléchies pour plus facile) jusqu'à l'horizontale ou plus haut.",
      "Redescendre en contrôlant, sans balancer le corps."
    ],
    tips: "Si tu balances, réduis l'amplitude ou fléchis les genoux : le contrôle prime sur la hauteur.",
    progressionPrev: "Relevé de genoux suspendu",
    progressionNext: "Relevé de jambes tendues + rotation (toes to bar)",
    es: {
      name: "Elevación de piernas en suspensión",
      muscleGroup: "Abdominales, oblicuos",
      description: [
        "Suspendido de la barra, brazos extendidos, cuerpo en tensión.",
        "Eleva las piernas extendidas (o flexionadas para más facilidad) hasta la horizontal o más arriba.",
        "Baja controlando el movimiento, sin balancear el cuerpo."
      ],
      tips: "Si te balanceas, reduce la amplitud o flexiona las rodillas: el control importa más que la altura.",
      progressionPrev: "Elevación de rodillas en suspensión",
      progressionNext: "Elevación de piernas extendidas + rotación (toes to bar)"
    }
  },
  {
    id: "russian-twist",
    name: "Russian twist",
    muscleGroup: "Obliques, abdominaux",
    muscles: ["obliques", "abdominaux"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/5128466/pexels-photo-5128466.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6892537/6892537-uhd_2560_1440_25fps.mp4",
    description: [
      "Assis, buste légèrement penché en arrière, pieds décollés du sol (ou posés pour plus facile).",
      "Tenir une charge légère à deux mains devant toi.",
      "Faire pivoter le buste d'un côté à l'autre en touchant le sol avec la charge à chaque rotation."
    ],
    tips: "Ralentis le mouvement plutôt que d'aller vite : la rotation contrôlée cible bien mieux les obliques.",
    progressionPrev: "Russian twist pieds au sol, sans charge",
    progressionNext: "Russian twist pieds décollés, charge plus lourde",
    es: {
      name: "Russian twist",
      muscleGroup: "Oblicuos, abdominales",
      description: [
        "Sentado, torso ligeramente inclinado hacia atrás, pies despegados del suelo (o apoyados para más facilidad).",
        "Sujeta una carga ligera con las dos manos delante de ti.",
        "Gira el torso de un lado a otro tocando el suelo con la carga en cada rotación."
      ],
      tips: "Ralentiza el movimiento en vez de ir rápido: la rotación controlada trabaja mucho mejor los oblicuos.",
      progressionPrev: "Russian twist con pies en el suelo, sin carga",
      progressionNext: "Russian twist con pies elevados, más carga"
    }
  },
  {
    id: "superman",
    name: "Superman (extension lombaire)",
    muscleGroup: "Lombaires, fessiers",
    muscles: ["lombaires", "fessiers"],
    difficulty: "Débutant",
    photo: "",
    video: "",
    description: [
      "Allongé sur le ventre, bras tendus devant toi.",
      "Lever simultanément bras, poitrine et jambes du sol en contractant le bas du dos et les fessiers.",
      "Maintenir 1-2 secondes puis redescendre en contrôlant."
    ],
    tips: "Mouvement d'amplitude modérée : inutile de lever très haut, la contraction compte plus que la hauteur.",
    progressionPrev: "Superman bras seuls ou jambes seules",
    progressionNext: "Superman avec pause tenue plus longue",
    es: {
      name: "Superman (extensión lumbar)",
      muscleGroup: "Lumbares, glúteos",
      description: [
        "Tumbado boca abajo, brazos extendidos delante de ti.",
        "Levanta a la vez brazos, pecho y piernas del suelo contrayendo la zona lumbar y los glúteos.",
        "Mantén 1-2 segundos y baja controlando el movimiento."
      ],
      tips: "Movimiento de amplitud moderada: no hace falta subir muy alto, la contracción importa más que la altura.",
      progressionPrev: "Superman solo brazos o solo piernas",
      progressionNext: "Superman con pausa mantenida más larga"
    }
  },
  {
    id: "souleve-de-terre",
    name: "Soulevé de terre",
    muscleGroup: "Lombaires, ischios, fessiers, trapèzes",
    muscles: ["lombaires", "ischios", "fessiers", "trapezes", "avant-bras"],
    difficulty: "Avancé",
    photo: "https://images.pexels.com/photos/4853280/pexels-photo-4853280.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/9778003/9778003-uhd_2560_1440_25fps.mp4",
    description: [
      "Barre au sol, pieds à largeur de hanches, tibias proches de la barre.",
      "Dos plat, saisir la barre, poitrine haute, hanches légèrement plus hautes que les genoux.",
      "Pousser dans le sol pour tendre les jambes et les hanches simultanément, barre proche du corps.",
      "Redescendre en contrôlant en gardant le dos plat tout du long."
    ],
    tips: "La technique prime sur la charge : apprends le mouvement à vide ou léger avant d'augmenter le poids.",
    progressionPrev: "Soulevé de terre roumain, charge légère",
    progressionNext: "Soulevé de terre charge lourde",
    es: {
      name: "Peso muerto",
      muscleGroup: "Lumbares, isquiotibiales, glúteos, trapecios",
      description: [
        "Barra en el suelo, pies a la anchura de las caderas, espinillas cerca de la barra.",
        "Espalda plana, agarra la barra, pecho alto, caderas un poco más altas que las rodillas.",
        "Empuja el suelo para extender piernas y caderas a la vez, barra cerca del cuerpo.",
        "Baja controlando el movimiento manteniendo la espalda plana todo el recorrido."
      ],
      tips: "La técnica importa más que la carga: aprende el movimiento sin peso o con poco antes de aumentarlo.",
      progressionPrev: "Peso muerto rumano, carga ligera",
      progressionNext: "Peso muerto con carga pesada"
    }
  },
  {
    id: "squat-back",
    name: "Squat (barre ou charge)",
    muscleGroup: "Quadriceps, fessiers, adducteurs",
    muscles: ["quadriceps", "fessiers", "adducteurs"],
    difficulty: "Intermédiaire",
    photo: "https://images.pexels.com/photos/4853693/pexels-photo-4853693.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/5319755/5319755-uhd_2560_1440_25fps.mp4",
    description: [
      "Barre sur le haut du dos (ou charge tenue devant), pieds à largeur d'épaules.",
      "Descendre en poussant les hanches en arrière et en fléchissant les genoux, dos droit.",
      "Descendre jusqu'à ce que les cuisses soient parallèles au sol (ou plus bas si mobilité le permet).",
      "Pousser dans le sol pour remonter à la position de départ."
    ],
    tips: "Garde les genoux alignés avec les pieds, sans qu'ils rentrent vers l'intérieur.",
    progressionPrev: "Squat au poids du corps",
    progressionNext: "Squat charge lourde",
    es: {
      name: "Sentadilla (barra o carga)",
      muscleGroup: "Cuádriceps, glúteos, aductores",
      description: [
        "Barra en la parte alta de la espalda (o carga sostenida delante), pies a la anchura de los hombros.",
        "Baja empujando las caderas hacia atrás y flexionando las rodillas, espalda recta.",
        "Baja hasta que los muslos queden paralelos al suelo (o más si la movilidad lo permite).",
        "Empuja el suelo para volver a la posición inicial."
      ],
      tips: "Mantén las rodillas alineadas con los pies, sin que se metan hacia adentro.",
      progressionPrev: "Sentadilla con el peso del cuerpo",
      progressionNext: "Sentadilla con carga pesada"
    }
  },
  {
    id: "fentes-avant",
    name: "Fentes avant",
    muscleGroup: "Quadriceps, fessiers, ischios",
    muscles: ["quadriceps", "fessiers", "ischios"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/6339695/pexels-photo-6339695.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6892974/6892974-uhd_2560_1440_25fps.mp4",
    description: [
      "Debout, pieds à largeur de hanches, mains sur les hanches ou charges dans les mains.",
      "Faire un grand pas en avant et descendre jusqu'à ce que les deux genoux forment un angle droit.",
      "Pousser sur le talon avant pour revenir à la position de départ.",
      "Alterner les jambes."
    ],
    tips: "Garde le buste droit et le genou avant aligné avec la cheville, sans dépasser la pointe du pied.",
    progressionPrev: "Fentes statiques (sans avancer)",
    progressionNext: "Fentes marchées lestées",
    es: {
      name: "Zancadas",
      muscleGroup: "Cuádriceps, glúteos, isquiotibiales",
      description: [
        "De pie, pies a la anchura de las caderas, manos en las caderas o con carga en las manos.",
        "Da un paso largo hacia adelante y baja hasta que ambas rodillas formen un ángulo recto.",
        "Empuja con el talón delantero para volver a la posición inicial.",
        "Alterna las piernas."
      ],
      tips: "Mantén el torso recto y la rodilla delantera alineada con el tobillo, sin pasar la punta del pie.",
      progressionPrev: "Zancadas estáticas (sin avanzar)",
      progressionNext: "Zancadas caminando con carga"
    }
  },
  {
    id: "hip-thrust",
    name: "Hip thrust",
    muscleGroup: "Fessiers, ischios",
    muscles: ["fessiers", "ischios"],
    difficulty: "Débutant",
    photo: "",
    video: "",
    description: [
      "Haut du dos appuyé sur un banc, pieds à plat au sol, genoux fléchis, charge sur les hanches (optionnel).",
      "Pousser dans les talons pour lever les hanches jusqu'à extension complète, corps aligné genoux-hanches-épaules.",
      "Contracter fort les fessiers en haut, puis redescendre en contrôlant."
    ],
    tips: "Rentre légèrement le menton et évite de trop cambrer le bas du dos en haut du mouvement.",
    progressionPrev: "Hip thrust au poids du corps",
    progressionNext: "Hip thrust lesté (barre ou disque)",
    es: {
      name: "Hip thrust",
      muscleGroup: "Glúteos, isquiotibiales",
      description: [
        "Parte alta de la espalda apoyada en un banco, pies planos en el suelo, rodillas flexionadas, carga sobre las caderas (opcional).",
        "Empuja con los talones para levantar las caderas hasta la extensión completa, cuerpo alineado rodillas-caderas-hombros.",
        "Contrae fuerte los glúteos arriba y baja controlando el movimiento."
      ],
      tips: "Mete ligeramente la barbilla y evita arquear en exceso la zona lumbar arriba del movimiento.",
      progressionPrev: "Hip thrust con el peso del cuerpo",
      progressionNext: "Hip thrust lastrado (barra o disco)"
    }
  },
  {
    id: "leg-curl-nordique",
    name: "Nordic curl (leg curl nordique)",
    muscleGroup: "Ischios",
    muscles: ["ischios"],
    difficulty: "Avancé",
    photo: "",
    video: "",
    description: [
      "Agenouillé, chevilles bloquées (par un partenaire ou sous un support fixe).",
      "Corps droit des genoux à la tête, descendre lentement vers l'avant en résistant avec les ischios.",
      "Utiliser les mains pour amortir la fin de la descente si besoin, puis revenir en poussant avec les jambes."
    ],
    tips: "Exercice très exigeant : commence avec une amplitude réduite et progresse petit à petit.",
    progressionPrev: "Nordic curl amplitude partielle",
    progressionNext: "Nordic curl amplitude complète sans les mains",
    es: {
      name: "Nordic curl (curl femoral nórdico)",
      muscleGroup: "Isquiotibiales",
      description: [
        "De rodillas, tobillos sujetos (por un compañero o bajo un soporte fijo).",
        "Cuerpo recto de las rodillas a la cabeza, baja lentamente hacia adelante resistiendo con los isquiotibiales.",
        "Usa las manos para amortiguar el final del descenso si hace falta, y vuelve empujando con las piernas."
      ],
      tips: "Ejercicio muy exigente: empieza con una amplitud reducida y progresa poco a poco.",
      progressionPrev: "Nordic curl con amplitud parcial",
      progressionNext: "Nordic curl con amplitud completa sin apoyar las manos"
    }
  },
  {
    id: "mollets-debout",
    name: "Mollets debout (calf raise)",
    muscleGroup: "Mollets",
    muscles: ["mollets"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/13965339/pexels-photo-13965339.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/32115656/13692103_1440_2560_24fps.mp4",
    description: [
      "Debout, avant-pieds sur un rebord surélevé (marche, plaque), talons dans le vide.",
      "Monter le plus haut possible sur la pointe des pieds.",
      "Redescendre en contrôlant jusqu'à sentir l'étirement des mollets."
    ],
    tips: "Fais une pause en haut de chaque répétition pour bien contracter le mollet.",
    progressionPrev: "Mollets debout au sol plat",
    progressionNext: "Mollets debout lestés, une jambe à la fois",
    es: {
      name: "Elevación de talones de pie (calf raise)",
      muscleGroup: "Gemelos",
      description: [
        "De pie, parte delantera de los pies en un borde elevado (escalón, tabla), talones al aire.",
        "Sube lo más alto posible sobre la punta de los pies.",
        "Baja controlando el movimiento hasta sentir el estiramiento de los gemelos."
      ],
      tips: "Haz una pausa arriba en cada repetición para contraer bien el gemelo.",
      progressionPrev: "Elevación de talones en suelo plano",
      progressionNext: "Elevación de talones lastrada, una pierna a la vez"
    }
  },
  {
    id: "corde-a-sauter",
    name: "Corde à sauter",
    muscleGroup: "Mollets, cardio",
    muscles: ["mollets"],
    difficulty: "Débutant",
    photo: "https://images.pexels.com/photos/6339602/pexels-photo-6339602.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6389568/6389568-uhd_1440_2560_25fps.mp4",
    description: [
      "Corde à sauter en main, sauter juste assez haut pour laisser passer la corde.",
      "Atterrir sur la pointe des pieds, genoux légèrement fléchis, pour amortir l'impact.",
      "Garder un rythme régulier, coudes proches du corps."
    ],
    tips: "Commence par des sessions courtes (30-60s) : c'est plus intense pour les mollets qu'il n'y paraît.",
    progressionPrev: "Corde à sauter, sessions courtes",
    progressionNext: "Corde à sauter, double passage ou sessions longues",
    es: {
      name: "Comba (salto de cuerda)",
      muscleGroup: "Gemelos, cardio",
      description: [
        "Cuerda en las manos, salta lo justo para dejar pasar la cuerda.",
        "Aterriza en la punta de los pies, rodillas ligeramente flexionadas, para amortiguar el impacto.",
        "Mantén un ritmo regular, codos cerca del cuerpo."
      ],
      tips: "Empieza con sesiones cortas (30-60s): es más intenso para los gemelos de lo que parece.",
      progressionPrev: "Comba, sesiones cortas",
      progressionNext: "Comba, doble paso o sesiones largas"
    }
  },
  {
    id: "adducteurs-isometrique",
    name: "Copenhagen plank (adducteurs)",
    muscleGroup: "Adducteurs",
    muscles: ["adducteurs"],
    difficulty: "Intermédiaire",
    photo: "",
    video: "",
    description: [
      "Sur le côté, avant-bras au sol, jambe du dessus posée sur un banc, jambe du dessous libre.",
      "Lever le bassin et la jambe libre en gainant fort tout le corps.",
      "Maintenir la position en respirant calmement."
    ],
    tips: "Version plus facile : plie le genou de la jambe surélevée pour réduire le bras de levier.",
    progressionPrev: "Copenhagen plank genou fléchi",
    progressionNext: "Copenhagen plank jambe tendue, tenue longue",
    es: {
      name: "Copenhagen plank (aductores)",
      muscleGroup: "Aductores",
      description: [
        "De lado, antebrazo en el suelo, pierna de arriba apoyada en un banco, pierna de abajo libre.",
        "Levanta la cadera y la pierna libre apretando fuerte todo el cuerpo.",
        "Mantén la posición respirando con calma."
      ],
      tips: "Versión más fácil: flexiona la rodilla de la pierna elevada para reducir el brazo de palanca.",
      progressionPrev: "Copenhagen plank con rodilla flexionada",
      progressionNext: "Copenhagen plank con pierna extendida, mantenimiento largo"
    }
  }
];

/* ---------------- CARTE MUSCULAIRE ---------------- */
/*
  Utilisée par carte-musculaire.html / js/render-carte-musculaire.js.
  Chaque clé correspond à une valeur possible dans le tableau
  "muscles" d'un exercice (voir plus haut). "view" indique sur
  quelle silhouette (avant/arrière) le point apparaît.
*/
const MUSCLE_INFO = {
  pectoraux: {
    name: "Pectoraux",
    view: "front",
    desc: "Muscles de la poitrine. Poussent le bras vers l'avant et rapprochent les bras du corps.",
    es: { name: "Pectorales", desc: "Músculos del pecho. Empujan el brazo hacia adelante y acercan los brazos al cuerpo." }
  },
  obliques: {
    name: "Obliques",
    view: "front",
    desc: "Sur les côtés de la sangle abdominale. Permettent la rotation et la flexion latérale du buste.",
    es: { name: "Oblicuos", desc: "A los lados del abdomen. Permiten la rotación y la flexión lateral del torso." }
  },
  adducteurs: {
    name: "Adducteurs",
    view: "front",
    desc: "Face interne de la cuisse. Rapprochent les jambes du corps et stabilisent le bassin.",
    es: { name: "Aductores", desc: "Cara interna del muslo. Acercan las piernas al cuerpo y estabilizan la pelvis." }
  },
  epaules: {
    name: "Épaules (deltoïdes)",
    view: "front",
    desc: "Enveloppent l'articulation de l'épaule. Permettent de lever et tourner le bras dans toutes les directions.",
    es: { name: "Hombros (deltoides)", desc: "Envuelven la articulación del hombro. Permiten levantar y girar el brazo en todas direcciones." }
  },
  biceps: {
    name: "Biceps",
    view: "front",
    desc: "Face avant du bras. Fléchissent le coude et aident à supiner l'avant-bras (paume vers le haut).",
    es: { name: "Bíceps", desc: "Cara delantera del brazo. Flexionan el codo y ayudan a supinar el antebrazo (palma hacia arriba)." }
  },
  "avant-bras": {
    name: "Avant-bras",
    view: "front",
    desc: "Contrôlent la force de préhension (grip) et les mouvements du poignet.",
    es: { name: "Antebrazos", desc: "Controlan la fuerza de agarre y los movimientos de la muñeca." }
  },
  abdominaux: {
    name: "Abdominaux",
    view: "front",
    desc: "Sangle abdominale. Stabilisent le tronc et permettent la flexion de la colonne.",
    es: { name: "Abdominales", desc: "Zona central del abdomen. Estabilizan el tronco y permiten la flexión de la columna." }
  },
  quadriceps: {
    name: "Quadriceps",
    view: "front",
    desc: "Face avant de la cuisse. Principal extenseur du genou — essentiel pour squats et sauts.",
    es: { name: "Cuádriceps", desc: "Cara delantera del muslo. Principal extensor de la rodilla — esencial para sentadillas y saltos." }
  },
  "vasto-lateral": {
    name: "Vaste latéral",
    view: "front",
    group: "quadriceps",
    desc: "Face externe de la cuisse — l'une des 4 têtes du quadriceps. Bombe la cuisse vers l'extérieur, très sollicité dans les squats profonds.",
    es: { name: "Vasto lateral", desc: "Cara externa del muslo — una de las 4 cabezas del cuádriceps. Da volumen a la cara externa del muslo, muy exigido en sentadillas profundas." }
  },
  "recto-femoral": {
    name: "Droit fémoral",
    view: "front",
    group: "quadriceps",
    desc: "Au centre de la cuisse — la seule des 4 têtes du quadriceps qui traverse aussi la hanche. Fléchit la hanche en plus d'étendre le genou.",
    es: { name: "Recto femoral", desc: "En el centro del muslo — la única de las 4 cabezas del cuádriceps que también cruza la cadera. Flexiona la cadera además de extender la rodilla." }
  },
  "vasto-medial": {
    name: "Vaste médial",
    view: "front",
    group: "quadriceps",
    desc: "Juste au-dessus du genou, côté interne — la fameuse \"goutte\" bien visible chez les corps entraînés. Stabilise la rotule.",
    es: { name: "Vasto medial", desc: "Justo encima de la rodilla, en el lado interno — la famosa \"gota\" bien visible en cuerpos entrenados. Estabiliza la rótula." }
  },
  trapezes: {
    name: "Trapèzes",
    view: "back",
    desc: "Du cou jusqu'au milieu du dos. Stabilisent et bougent l'omoplate et la nuque.",
    es: { name: "Trapecios", desc: "Del cuello hasta la mitad de la espalda. Estabilizan y mueven el omóplato y el cuello." }
  },
  dos: {
    name: "Dos (dorsaux)",
    view: "back",
    desc: "Grand dorsal principalement. Tire le bras vers le bas et l'arrière — clé dans les tractions.",
    es: { name: "Espalda (dorsales)", desc: "Dorsal ancho principalmente. Tira del brazo hacia abajo y atrás — clave en las dominadas." }
  },
  lombaires: {
    name: "Lombaires (bas du dos)",
    view: "back",
    desc: "Bas de la colonne vertébrale. Stabilisent le tronc et permettent l'extension du dos — essentiels pour protéger le dos en musculation.",
    es: { name: "Lumbares", desc: "Parte baja de la columna. Estabilizan el tronco y permiten la extensión de la espalda — esenciales para proteger la espalda." }
  },
  triceps: {
    name: "Triceps",
    view: "back",
    desc: "Face arrière du bras. Étendent le coude — essentiels dans les pompes et les dips.",
    es: { name: "Tríceps", desc: "Cara trasera del brazo. Extienden el codo — esenciales en flexiones y fondos." }
  },
  fessiers: {
    name: "Fessiers",
    view: "back",
    desc: "Grand fessier notamment. Principal extenseur de la hanche — puissance dans squats et sprints.",
    es: { name: "Glúteos", desc: "Glúteo mayor principalmente. Principal extensor de la cadera — potencia en sentadillas y sprints." }
  },
  ischios: {
    name: "Ischio-jambiers",
    view: "back",
    desc: "Face arrière de la cuisse. Fléchissent le genou et étendent la hanche.",
    es: { name: "Isquiotibiales", desc: "Cara trasera del muslo. Flexionan la rodilla y extienden la cadera." }
  },
  "biceps-femoral": {
    name: "Biceps fémoral",
    view: "back",
    group: "ischios",
    desc: "Côté externe de l'arrière de la cuisse — l'un des 3 muscles ischio-jambiers. Fléchit le genou et fait tourner la jambe vers l'extérieur.",
    es: { name: "Bíceps femoral", desc: "Lado externo de la parte trasera del muslo — uno de los 3 isquiotibiales. Flexiona la rodilla y rota la pierna hacia afuera." }
  },
  semitendinoso: {
    name: "Semi-tendineux",
    view: "back",
    group: "ischios",
    desc: "Côté interne, juste sous le fessier — l'un des 3 muscles ischio-jambiers. Longue portion tendineuse bien visible en fin de course.",
    es: { name: "Semitendinoso", desc: "Lado interno, justo bajo el glúteo — uno de los 3 isquiotibiales. Porción tendinosa larga, bien visible al final del recorrido." }
  },
  semimembranoso: {
    name: "Semi-membraneux",
    view: "back",
    group: "ischios",
    desc: "Sous le semi-tendineux, plus proche du genou — l'un des 3 muscles ischio-jambiers. Stabilise le genou en rotation interne.",
    es: { name: "Semimembranoso", desc: "Bajo el semitendinoso, más cerca de la rodilla — uno de los 3 isquiotibiales. Estabiliza la rodilla en rotación interna." }
  },
  mollets: {
    name: "Mollets",
    view: "back",
    desc: "Arrière du tibia. Permettent de se dresser sur la pointe des pieds et propulsent la marche/course.",
    es: { name: "Gemelos", desc: "Parte trasera de la pantorrilla. Permiten ponerse de puntillas e impulsan la marcha/carrera." }
  }
};

/* ---------------- SÉANCES ---------------- */
/*
  exercises: liste de { exerciseId, sets, reps, rest } -> reps peut être un texte ("8-10", "AMRAP", "30s")
*/
const SESSIONS = [
  {
    id: "seance-push",
    name: "Séance Push (haut du corps)",
    day: "Lundi",
    exercises: [
      { exerciseId: "pompes", sets: 4, reps: "12-15", rest: "90s" },
      { exerciseId: "dips", sets: 4, reps: "8-10", rest: "120s" }
    ],
    notes: "Focus poussée : pectoraux, triceps, épaules.",
    es: {
      name: "Sesión Push (tren superior)",
      day: "Lunes",
      notes: "Enfoque empuje: pectorales, tríceps, hombros."
    }
  },
  {
    id: "seance-pull",
    name: "Séance Pull (dos, bras)",
    day: "Mercredi",
    exercises: [
      { exerciseId: "tractions-pronation", sets: 5, reps: "6-10", rest: "120s" },
      { exerciseId: "front-lever", sets: 4, reps: "10-20s", rest: "90s" }
    ],
    notes: "Focus tirage : dos, biceps, gainage.",
    es: {
      name: "Sesión Pull (espalda, brazos)",
      day: "Miércoles",
      notes: "Enfoque tirón: espalda, bíceps, core."
    }
  }
];
