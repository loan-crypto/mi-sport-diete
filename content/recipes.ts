/* ---------------- RECETTES ---------------- */
/*
  ingredients: liste de { ingredientId, grams } -> grams = quantité utilisée dans CETTE recette
  Les macros totales de la recette sont calculées automatiquement à partir des ingrédients.

  Porté depuis legacy-static-site/js/data.js
*/
import type { Recipe } from "./types";

export const RECIPES: Recipe[] = [
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
