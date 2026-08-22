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
    photo: "https://images.pexels.com/photos/29535635/pexels-photo-29535635.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
    photo: "https://images.pexels.com/photos/5969347/pexels-photo-5969347.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
    photo: "https://images.pexels.com/photos/28675074/pexels-photo-28675074.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
    photo: "https://images.pexels.com/photos/9213962/pexels-photo-9213962.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
    photo: "https://images.pexels.com/photos/31647294/pexels-photo-31647294.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
    photo: "https://images.pexels.com/photos/14263510/pexels-photo-14263510.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
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
  },
  {
    id: "bol-fromage-blanc-myrtilles-amandes",
    name: "Bol de fromage blanc, myrtilles & amandes",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/14564748/pexels-photo-14564748.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "fromage-blanc", grams: 200 },
      { ingredientId: "myrtilles", grams: 100 },
      { ingredientId: "amandes", grams: 15 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Verser le fromage blanc dans un bol.",
      "Ajouter les myrtilles fraîches ou surgelées (décongelées).",
      "Parsemer d'amandes concassées et d'un filet de miel."
    ],
    notes: "Petit-déjeuner rapide et riche en protéines, parfait si tu manques de temps le matin.",
    es: {
      name: "Bol de queso fresco batido, arándanos y almendras",
      category: "Desayuno",
      steps: [
        "Vierte el queso fresco batido en un bol.",
        "Añade los arándanos frescos o congelados (descongelados).",
        "Espolvorea con almendras troceadas y un chorrito de miel."
      ],
      notes: "Desayuno rápido y rico en proteína, perfecto si vas con poco tiempo por la mañana."
    }
  },
  {
    id: "smoothie-bowl-banane-myrtilles-chia",
    name: "Smoothie bowl banane, myrtilles & graines de chia",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/8230033/pexels-photo-8230033.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "banane", grams: 120 },
      { ingredientId: "yaourt-grec", grams: 150 },
      { ingredientId: "myrtilles", grams: 80 },
      { ingredientId: "graines-de-chia", grams: 15 }
    ],
    steps: [
      "Mixer la banane, le yaourt grec et la moitié des myrtilles jusqu'à obtenir une texture épaisse et lisse.",
      "Verser dans un bol.",
      "Garnir avec le reste des myrtilles et les graines de chia.",
      "Servir immédiatement, à la cuillère."
    ],
    notes: "Version « bol » du smoothie classique, plus rassasiante grâce à la texture épaisse et aux graines de chia.",
    es: {
      name: "Smoothie bowl de plátano, arándanos y semillas de chía",
      category: "Desayuno",
      steps: [
        "Bate el plátano, el yogur griego y la mitad de los arándanos hasta conseguir una textura espesa y lisa.",
        "Vierte en un bol.",
        "Decora con el resto de los arándanos y las semillas de chía.",
        "Sirve enseguida, con cuchara."
      ],
      notes: "Versión «bol» del batido clásico, más saciante gracias a la textura espesa y a las semillas de chía."
    }
  },
  {
    id: "oeufs-brouilles-tomate-epinards",
    name: "Œufs brouillés, tomate & épinards sur pain complet",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/38516089/pexels-photo-38516089.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "oeuf", grams: 150 },
      { ingredientId: "tomate", grams: 100 },
      { ingredientId: "epinards", grams: 80 },
      { ingredientId: "pain-complet", grams: 60 },
      { ingredientId: "huile-olive", grams: 5 }
    ],
    steps: [
      "Faire revenir la tomate coupée en dés et les épinards dans l'huile d'olive quelques minutes.",
      "Battre les œufs et les verser dans la poêle.",
      "Brouiller à feu doux jusqu'à la cuisson souhaitée.",
      "Servir sur une tranche de pain complet grillée."
    ],
    notes: "Variante salée et pleine de légumes de l'omelette classique, bon apport en fer grâce aux épinards.",
    es: {
      name: "Huevos revueltos, tomate y espinacas sobre pan integral",
      category: "Desayuno",
      steps: [
        "Sofríe el tomate cortado en dados y las espinacas en el aceite de oliva unos minutos.",
        "Bate los huevos y viértelos en la sartén.",
        "Revuelve a fuego suave hasta la cocción deseada.",
        "Sirve sobre una rebanada de pan integral tostado."
      ],
      notes: "Variante salada y llena de verdura de la tortilla clásica, buen aporte de hierro gracias a las espinacas."
    }
  },
  {
    id: "porridge-avoine-pomme-cannelle",
    name: "Porridge avoine, pomme & cannelle",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/4382900/pexels-photo-4382900.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 50 },
      { ingredientId: "pomme", grams: 100 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Cuire les flocons d'avoine avec de l'eau ou du lait à feu doux.",
      "Couper la pomme en petits dés et l'ajouter en fin de cuisson avec une pincée de cannelle.",
      "Sucrer avec un peu de miel si besoin.",
      "Servir chaud."
    ],
    notes: "La cannelle n'apporte quasiment pas de calories mais donne beaucoup de goût, pratique pour réduire le sucre ajouté.",
    es: {
      name: "Porridge de avena, manzana y canela",
      category: "Desayuno",
      steps: [
        "Cocina los copos de avena con agua o leche a fuego suave.",
        "Corta la manzana en dados pequeños y añádela al final de la cocción con una pizca de canela.",
        "Endulza con un poco de miel si lo necesitas.",
        "Sirve caliente."
      ],
      notes: "La canela apenas aporta calorías pero da mucho sabor, práctica para reducir el azúcar añadido."
    }
  },
  {
    id: "omelette-feta-tomate-epinards",
    name: "Omelette feta, tomate & épinards",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/27331092/pexels-photo-27331092.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "oeuf", grams: 150 },
      { ingredientId: "feta", grams: 40 },
      { ingredientId: "tomate", grams: 80 },
      { ingredientId: "epinards", grams: 60 }
    ],
    steps: [
      "Faire revenir les épinards et la tomate coupée en dés quelques minutes à la poêle.",
      "Battre les œufs et les verser sur les légumes.",
      "Émietter la feta sur le dessus.",
      "Cuire à feu moyen jusqu'à ce que l'omelette soit prise, plier en deux et servir."
    ],
    notes: "La feta étant salée et grasse, une petite quantité suffit à parfumer toute l'omelette.",
    es: {
      name: "Tortilla de feta, tomate y espinacas",
      category: "Desayuno",
      steps: [
        "Sofríe las espinacas y el tomate cortado en dados unos minutos en la sartén.",
        "Bate los huevos y viértelos sobre las verduras.",
        "Desmenuza la feta por encima.",
        "Cocina a fuego medio hasta que la tortilla cuaje, dobla por la mitad y sirve."
      ],
      notes: "Como la feta es salada y grasa, una pequeña cantidad basta para dar sabor a toda la tortilla."
    }
  },
  {
    id: "cabillaud-riz-poivrons-rotis",
    name: "Cabillaud, riz complet & poivrons rôtis",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/13770555/pexels-photo-13770555.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "cabillaud", grams: 150 },
      { ingredientId: "riz-complet", grams: 100 },
      { ingredientId: "poivron", grams: 150 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Préchauffer le four à 200°C et faire rôtir les poivrons coupés en lanières avec un peu d'huile d'olive pendant 20 minutes.",
      "Cuire le riz complet selon les instructions du paquet.",
      "Cuire le cabillaud au four ou à la vapeur environ 12-15 minutes.",
      "Assembler le tout dans une assiette."
    ],
    notes: "Le cabillaud est un poisson blanc très maigre, une bonne alternative au saumon ou au thon pour varier les sources de protéines.",
    es: {
      name: "Bacalao, arroz integral y pimientos asados",
      category: "Almuerzo / Cena",
      steps: [
        "Precalienta el horno a 200°C y asa los pimientos cortados en tiras con un poco de aceite de oliva durante 20 minutos.",
        "Cocina el arroz integral según las instrucciones del paquete.",
        "Cocina el bacalao al horno o al vapor unos 12-15 minutos.",
        "Sirve todo en un plato."
      ],
      notes: "El bacalao es un pescado blanco muy magro, una buena alternativa al salmón o al atún para variar las fuentes de proteína."
    }
  },
  {
    id: "riz-thon-tomate-carotte",
    name: "Riz complet, thon, tomate & carotte",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/9218773/pexels-photo-9218773.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "riz-complet", grams: 100 },
      { ingredientId: "thon-conserve", grams: 120 },
      { ingredientId: "tomate", grams: 100 },
      { ingredientId: "carotte", grams: 80 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le riz complet selon les instructions du paquet et laisser tiédir.",
      "Égoutter le thon et l'émietter.",
      "Râper la carotte et couper la tomate en dés.",
      "Mélanger tous les ingrédients et assaisonner avec l'huile d'olive, sel et poivre."
    ],
    notes: "Se prépare à l'avance et se mange froid ou tiède, pratique pour un repas à emporter.",
    es: {
      name: "Arroz integral, atún, tomate y zanahoria",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina el arroz integral según las instrucciones del paquete y déjalo templar.",
        "Escurre el atún y desmenúzalo.",
        "Ralla la zanahoria y corta el tomate en dados.",
        "Mezcla todos los ingredientes y aliña con el aceite de oliva, sal y pimienta."
      ],
      notes: "Se prepara con antelación y se come frío o templado, práctico para llevar."
    }
  },
  {
    id: "curry-pois-chiches-carotte-epinards",
    name: "Curry de pois chiches, carotte & épinards",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/9287035/pexels-photo-9287035.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 2,
    ingredients: [
      { ingredientId: "pois-chiches", grams: 300 },
      { ingredientId: "carotte", grams: 150 },
      { ingredientId: "epinards", grams: 150 },
      { ingredientId: "huile-olive", grams: 15 },
      { ingredientId: "riz-complet", grams: 160 }
    ],
    steps: [
      "Faire revenir la carotte coupée en dés dans l'huile d'olive quelques minutes.",
      "Ajouter les pois chiches et les épices à curry, mouiller avec un peu d'eau et laisser mijoter 10 minutes.",
      "Ajouter les épinards en fin de cuisson et laisser réduire 2-3 minutes.",
      "Servir avec le riz complet cuit à part."
    ],
    notes: "Recette végétarienne complète en protéines végétales, se prépare facilement en plus grande quantité pour deux repas.",
    es: {
      name: "Curry de garbanzos, zanahoria y espinacas",
      category: "Almuerzo / Cena",
      steps: [
        "Sofríe la zanahoria cortada en dados en el aceite de oliva unos minutos.",
        "Añade los garbanzos y las especias de curry, moja con un poco de agua y deja cocer a fuego lento 10 minutos.",
        "Añade las espinacas al final de la cocción y deja reducir 2-3 minutos.",
        "Sirve con el arroz integral cocido por separado."
      ],
      notes: "Receta vegetariana completa en proteína vegetal, fácil de preparar en mayor cantidad para dos comidas."
    }
  },
  {
    id: "salade-quinoa-feta-concombre-tomate",
    name: "Salade de quinoa, feta, concombre & tomate",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/12786340/pexels-photo-12786340.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "quinoa", grams: 80 },
      { ingredientId: "feta", grams: 50 },
      { ingredientId: "concombre", grams: 100 },
      { ingredientId: "tomate", grams: 100 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le quinoa selon les instructions du paquet et laisser refroidir.",
      "Couper le concombre et la tomate en dés.",
      "Mélanger le quinoa avec les légumes et la feta émiettée.",
      "Assaisonner avec l'huile d'olive, sel et poivre."
    ],
    notes: "Salade fraîche façon méditerranéenne, se prépare la veille et se garde bien au frais.",
    es: {
      name: "Ensalada de quinoa, feta, pepino y tomate",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la quinoa según las instrucciones del paquete y déjala enfriar.",
        "Corta el pepino y el tomate en dados.",
        "Mezcla la quinoa con las verduras y la feta desmenuzada.",
        "Aliña con el aceite de oliva, sal y pimienta."
      ],
      notes: "Ensalada fresca de estilo mediterráneo, se prepara el día antes y se conserva bien en frío."
    }
  },
  {
    id: "wrap-poulet-avocat-tomate",
    name: "Wrap de poulet, avocat & tomate",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/29535640/pexels-photo-29535640.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "tortilla-ble-complet", grams: 60 },
      { ingredientId: "poulet-blanc", grams: 120 },
      { ingredientId: "avocat", grams: 60 },
      { ingredientId: "tomate", grams: 60 }
    ],
    steps: [
      "Cuire le blanc de poulet à la poêle et le couper en lanières ou l'émietter.",
      "Réchauffer légèrement la tortilla de blé complet pour qu'elle se roule facilement.",
      "Garnir avec le poulet, l'avocat écrasé ou en tranches et la tomate coupée en dés.",
      "Rouler fermement le wrap et couper en deux."
    ],
    notes: "Bonne option à emporter, plus digeste qu'un sandwich classique grâce à la tortilla de blé complet.",
    es: {
      name: "Wrap de pollo, aguacate y tomate",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la pechuga de pollo a la plancha y córtala en tiras o desmenúzala.",
        "Calienta un poco la tortilla de trigo integral para que se enrolle fácilmente.",
        "Rellena con el pollo, el aguacate machacado o en láminas y el tomate cortado en dados.",
        "Enrolla el wrap firmemente y corta por la mitad."
      ],
      notes: "Buena opción para llevar, más ligero que un sándwich clásico gracias a la tortilla de trigo integral."
    }
  },
  {
    id: "dinde-haricots-verts-patate-douce",
    name: "Dinde, haricots verts & patate douce",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/9219079/pexels-photo-9219079.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "dinde-blanc", grams: 150 },
      { ingredientId: "haricots-verts", grams: 150 },
      { ingredientId: "patate-douce", grams: 200 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Couper la patate douce en cubes et la faire cuire au four ~25 minutes à 200°C avec un peu d'huile d'olive.",
      "Cuire le blanc de dinde à la poêle.",
      "Cuire les haricots verts à la vapeur 8-10 minutes.",
      "Assembler le tout dans une assiette."
    ],
    notes: "Repas simple et équilibré, la dinde permet de varier les sources de protéines maigres en dehors du poulet.",
    es: {
      name: "Pavo, judías verdes y boniato",
      category: "Almuerzo / Cena",
      steps: [
        "Corta el boniato en cubos y ásalo al horno ~25 minutos a 200°C con un poco de aceite de oliva.",
        "Cocina la pechuga de pavo a la plancha.",
        "Cocina las judías verdes al vapor 8-10 minutos.",
        "Sirve todo en un plato."
      ],
      notes: "Comida sencilla y equilibrada, el pavo permite variar las fuentes de proteína magra más allá del pollo."
    }
  },
  {
    id: "chocolat-noir-amandes",
    name: "Chocolat noir & amandes",
    category: "Collation",
    photo: "https://images.pexels.com/photos/4051122/pexels-photo-4051122.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "chocolat-noir", grams: 20 },
      { ingredientId: "amandes", grams: 15 }
    ],
    steps: [
      "Casser le chocolat noir en petits carrés.",
      "Servir avec une petite poignée d'amandes."
    ],
    notes: "Collation plaisir en petite quantité, à réserver aux jours où tu as encore de la marge calorique.",
    es: {
      name: "Chocolate negro y almendras",
      category: "Merienda",
      steps: [
        "Rompe el chocolate negro en trozos pequeños.",
        "Sirve con un puñado pequeño de almendras."
      ],
      notes: "Merienda de placer en poca cantidad, resérvala para los días en que aún tengas margen calórico."
    }
  },
  {
    id: "yaourt-myrtilles-chia",
    name: "Yaourt grec, myrtilles & graines de chia",
    category: "Collation",
    photo: "https://images.pexels.com/photos/4491391/pexels-photo-4491391.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "yaourt-grec", grams: 200 },
      { ingredientId: "myrtilles", grams: 80 },
      { ingredientId: "graines-de-chia", grams: 10 }
    ],
    steps: [
      "Verser le yaourt grec dans un bol ou un pot.",
      "Ajouter les myrtilles et les graines de chia.",
      "Mélanger et laisser reposer 5 minutes si tu veux que les graines de chia gonflent un peu."
    ],
    notes: "Collation riche en protéines et en fibres, tient bien au corps entre deux repas.",
    es: {
      name: "Yogur griego, arándanos y semillas de chía",
      category: "Merienda",
      steps: [
        "Vierte el yogur griego en un bol o un tarro.",
        "Añade los arándanos y las semillas de chía.",
        "Mezcla y deja reposar 5 minutos si quieres que las semillas de chía se hinchen un poco."
      ],
      notes: "Merienda rica en proteína y fibra, sacia bien entre dos comidas."
    }
  },
  {
    id: "pomme-beurre-cacahuete",
    name: "Pomme & beurre de cacahuète",
    category: "Collation",
    photo: "https://images.pexels.com/photos/33489594/pexels-photo-33489594.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "pomme", grams: 150 },
      { ingredientId: "beurre-cacahuete", grams: 20 }
    ],
    steps: [
      "Laver et couper la pomme en quartiers ou en tranches.",
      "Tremper chaque morceau dans le beurre de cacahuète, ou le servir à côté pour tartiner."
    ],
    notes: "Collation simple à préparer sans cuisson, bon équilibre entre glucides et bonnes graisses.",
    es: {
      name: "Manzana y mantequilla de cacahuete",
      category: "Merienda",
      steps: [
        "Lava y corta la manzana en cuartos o láminas.",
        "Moja cada trozo en la mantequilla de cacahuete, o sírvela al lado para untar."
      ],
      notes: "Merienda sencilla sin cocción, buen equilibrio entre carbohidratos y grasas saludables."
    }
  },
  {
    id: "oeufs-durs-carotte",
    name: "Œufs durs & bâtonnets de carotte",
    category: "Collation",
    photo: "https://images.pexels.com/photos/15583257/pexels-photo-15583257.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "oeuf", grams: 120 },
      { ingredientId: "carotte", grams: 100 }
    ],
    steps: [
      "Cuire les œufs à l'eau bouillante pendant 9-10 minutes puis les refroidir sous l'eau froide.",
      "Écaler les œufs et les couper en deux.",
      "Couper la carotte en bâtonnets.",
      "Servir ensemble, avec une pincée de sel si besoin."
    ],
    notes: "Collation très pratique à préparer à l'avance, riche en protéines pour un minimum d'efforts.",
    es: {
      name: "Huevos duros y bastoncitos de zanahoria",
      category: "Merienda",
      steps: [
        "Cocina los huevos en agua hirviendo durante 9-10 minutos y luego enfríalos bajo agua fría.",
        "Pélalos y córtalos por la mitad.",
        "Corta la zanahoria en bastoncitos.",
        "Sirve juntos, con una pizca de sal si lo necesitas."
      ],
      notes: "Merienda muy práctica de preparar con antelación, rica en proteína con un esfuerzo mínimo."
    }
  },
  {
    id: "pancakes-banane",
    name: "Pancakes avoine & banane",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/14263510/pexels-photo-14263510.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 60 },
      { ingredientId: "oeuf", grams: 100 },
      { ingredientId: "banane", grams: 120 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Mixer l'avoine, les œufs et la banane écrasée jusqu'à obtenir une pâte lisse.",
      "Faire cuire des petites galettes dans une poêle légèrement huilée, 2-3 minutes de chaque côté.",
      "Empiler les pancakes et napper d'un filet de miel."
    ],
    notes: "Version sans farine ni sucre ajouté — l'avoine et la banane suffisent pour la texture et le moelleux.",
    es: {
      name: "Panqueques de avena y plátano",
      category: "Desayuno",
      steps: [
        "Mezcla la avena, los huevos y el plátano aplastado hasta obtener una masa lisa.",
        "Cocina pequeñas tortitas en una sartén con un poco de aceite, 2-3 minutos por lado.",
        "Apila las tortitas y añade un chorrito de miel."
      ],
      notes: "Versión sin harina ni azúcar añadido: la avena y el plátano bastan para la textura y la esponjosidad."
    }
  },
  {
    id: "toast-avocat-oeuf",
    name: "Toast avocat & œuf poché",
    category: "Petit-déjeuner",
    photo: "https://images.pexels.com/photos/14623893/pexels-photo-14623893.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "pain-complet", grams: 60 },
      { ingredientId: "avocat", grams: 80 },
      { ingredientId: "oeuf", grams: 50 }
    ],
    steps: [
      "Faire pocher l'œuf dans une eau frémissante additionnée d'un peu de vinaigre, 3 minutes.",
      "Griller les tranches de pain complet.",
      "Écraser l'avocat à la fourchette et l'étaler sur le pain, saler et poivrer.",
      "Poser l'œuf poché par-dessus et servir immédiatement."
    ],
    notes: "Petit-déjeuner rapide et rassasiant grâce aux bonnes graisses de l'avocat et aux protéines de l'œuf.",
    es: {
      name: "Tostada de aguacate y huevo escalfado",
      category: "Desayuno",
      steps: [
        "Escalfa el huevo en agua a fuego suave con un poco de vinagre, 3 minutos.",
        "Tuesta las rebanadas de pan integral.",
        "Aplasta el aguacate con un tenedor y extiéndelo sobre el pan, sala y añade pimienta al gusto.",
        "Coloca el huevo escalfado encima y sirve de inmediato."
      ],
      notes: "Desayuno rápido y saciante gracias a las grasas buenas del aguacate y las proteínas del huevo."
    }
  },
  {
    id: "buddha-bowl-pois-chiches",
    name: "Buddha bowl pois chiches & légumes",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/17597408/pexels-photo-17597408.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "pois-chiches", grams: 150 },
      { ingredientId: "quinoa", grams: 80 },
      { ingredientId: "poivron", grams: 80 },
      { ingredientId: "concombre", grams: 80 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le quinoa selon les instructions du paquet.",
      "Égoutter et rincer les pois chiches, les faire revenir 5 minutes à la poêle avec un peu d'huile d'olive.",
      "Couper le poivron et le concombre en dés.",
      "Assembler tous les éléments dans un bol et arroser du reste d'huile d'olive."
    ],
    notes: "Un bol complet et végétal, riche en fibres et en protéines — parfait pour un déjeuner qui tient au corps.",
    es: {
      name: "Buddha bowl de garbanzos y verduras",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la quinoa según las instrucciones del paquete.",
        "Escurre y enjuaga los garbanzos, saltéalos 5 minutos en la sartén con un poco de aceite de oliva.",
        "Corta el pimiento y el pepino en dados.",
        "Monta todos los elementos en un bol y riega con el resto del aceite de oliva."
      ],
      notes: "Un bol completo y vegetal, rico en fibra y en proteína — perfecto para un almuerzo que sacia de verdad."
    }
  },
  {
    id: "saumon-riz-haricots-verts",
    name: "Saumon, riz complet & haricots verts",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/30674445/pexels-photo-30674445.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "saumon", grams: 150 },
      { ingredientId: "riz-complet", grams: 100 },
      { ingredientId: "haricots-verts", grams: 150 },
      { ingredientId: "huile-olive", grams: 10 }
    ],
    steps: [
      "Cuire le riz complet selon les instructions du paquet.",
      "Cuire le pavé de saumon au four ou à la poêle, environ 12-15 minutes.",
      "Cuire les haricots verts à la vapeur 8-10 minutes.",
      "Assembler dans une assiette et arroser d'un filet d'huile d'olive."
    ],
    notes: "Riche en oméga-3 grâce au saumon — une bonne alternative au poulet pour varier les sources de protéines.",
    es: {
      name: "Salmón, arroz integral y judías verdes",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina el arroz integral según las instrucciones del paquete.",
        "Cocina el filete de salmón al horno o a la plancha, unos 12-15 minutos.",
        "Cocina las judías verdes al vapor 8-10 minutos.",
        "Sirve todo en un plato y aliña con un chorrito de aceite de oliva."
      ],
      notes: "Rico en omega-3 gracias al salmón — una buena alternativa al pollo para variar las fuentes de proteína."
    }
  },
  {
    id: "wrap-poulet-avocat",
    name: "Wrap poulet, avocat & crudités",
    category: "Déjeuner / Dîner",
    photo: "https://images.pexels.com/photos/9624298/pexels-photo-9624298.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "tortilla-ble-complet", grams: 60 },
      { ingredientId: "poulet-blanc", grams: 120 },
      { ingredientId: "avocat", grams: 60 },
      { ingredientId: "tomate", grams: 50 },
      { ingredientId: "concombre", grams: 50 }
    ],
    steps: [
      "Cuire le blanc de poulet à la poêle et le couper en lamelles.",
      "Écraser légèrement l'avocat et l'étaler sur la tortilla.",
      "Ajouter le poulet, la tomate et le concombre coupés en morceaux.",
      "Rouler fermement la tortilla et couper en deux."
    ],
    notes: "Pratique à emporter — un bon équilibre protéines/légumes pour un déjeuner sur le pouce.",
    es: {
      name: "Wrap de pollo, aguacate y crudités",
      category: "Almuerzo / Cena",
      steps: [
        "Cocina la pechuga de pollo a la plancha y córtala en tiras.",
        "Aplasta ligeramente el aguacate y extiéndelo sobre la tortilla.",
        "Añade el pollo, el tomate y el pepino cortados en trozos.",
        "Enrolla la tortilla con firmeza y córtala por la mitad."
      ],
      notes: "Práctico para llevar — un buen equilibrio proteína/verdura para un almuerzo rápido."
    }
  },
  {
    id: "yaourt-myrtilles-amandes",
    name: "Yaourt grec, myrtilles & amandes",
    category: "Collation",
    photo: "https://images.pexels.com/photos/17927967/pexels-photo-17927967.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "yaourt-grec", grams: 200 },
      { ingredientId: "myrtilles", grams: 80 },
      { ingredientId: "amandes", grams: 15 },
      { ingredientId: "miel", grams: 10 }
    ],
    steps: [
      "Verser le yaourt grec dans un bol.",
      "Ajouter les myrtilles et les amandes concassées par-dessus.",
      "Terminer avec un filet de miel."
    ],
    notes: "Collation simple et rapide, riche en protéines grâce au yaourt grec.",
    es: {
      name: "Yogur griego, arándanos y almendras",
      category: "Merienda",
      steps: [
        "Vierte el yogur griego en un bol.",
        "Añade los arándanos y las almendras troceadas por encima.",
        "Termina con un chorrito de miel."
      ],
      notes: "Merienda simple y rápida, rica en proteína gracias al yogur griego."
    }
  },
  {
    id: "boules-energie-dattes",
    name: "Boules d'énergie dattes & cacahuète",
    category: "Collation",
    photo: "https://images.pexels.com/photos/27850074/pexels-photo-27850074.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "dattes", grams: 100 },
      { ingredientId: "beurre-cacahuete", grams: 30 },
      { ingredientId: "avoine", grams: 40 },
      { ingredientId: "chocolat-noir", grams: 20 }
    ],
    steps: [
      "Dénoyauter les dattes et les mixer avec le beurre de cacahuète et l'avoine jusqu'à obtenir une pâte collante.",
      "Former des petites boules avec les mains.",
      "Faire fondre le chocolat noir au bain-marie et y tremper les boules, ou le saupoudrer râpé par-dessus.",
      "Réserver au réfrigérateur au moins 30 minutes avant de déguster."
    ],
    notes: "Se conservent une semaine au frigo — pratiques à préparer à l'avance pour une collation avant l'entraînement.",
    es: {
      name: "Bolitas energéticas de dátiles y cacahuete",
      category: "Merienda",
      steps: [
        "Deshuesa los dátiles y mézclalos con la crema de cacahuete y la avena hasta obtener una pasta pegajosa.",
        "Forma pequeñas bolitas con las manos.",
        "Funde el chocolate negro al baño maría y sumerge las bolitas, o espolvoréalo rallado por encima.",
        "Guarda en el frigorífico al menos 30 minutos antes de disfrutarlas."
      ],
      notes: "Se conservan una semana en el frigorífico — prácticas de preparar con antelación para una merienda antes de entrenar."
    }
  },
  {
    id: "bowl-banane-avoine-cacahuete",
    name: "Bowl banane, avoine & beurre de cacahuète",
    category: "Collation / Post-entraînement",
    photo: "https://images.pexels.com/photos/19571076/pexels-photo-19571076.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    servings: 1,
    ingredients: [
      { ingredientId: "avoine", grams: 50 },
      { ingredientId: "yaourt-grec", grams: 150 },
      { ingredientId: "banane", grams: 120 },
      { ingredientId: "beurre-cacahuete", grams: 20 }
    ],
    steps: [
      "Mélanger l'avoine avec le yaourt grec et laisser reposer quelques minutes.",
      "Couper la banane en rondelles et les disposer sur le dessus.",
      "Ajouter une cuillère de beurre de cacahuète."
    ],
    notes: "Version 'overnight oats' express — encore meilleur préparé la veille au soir et laissé au frigo toute la nuit.",
    es: {
      name: "Bowl de plátano, avena y crema de cacahuete",
      category: "Merienda / Post-entrenamiento",
      steps: [
        "Mezcla la avena con el yogur griego y deja reposar unos minutos.",
        "Corta el plátano en rodajas y colócalas por encima.",
        "Añade una cucharada de crema de cacahuete."
      ],
      notes: "Versión 'overnight oats' exprés — todavía mejor si se prepara la noche anterior y se deja en el frigorífico toda la noche."
    }
  }
];
