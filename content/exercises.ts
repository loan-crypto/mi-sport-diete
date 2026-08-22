/* ---------------- EXERCICES ---------------- */
/*
  difficulty: "Débutant" | "Intermédiaire" | "Avancé"
  description: liste d'étapes détaillées (exécution du mouvement)

  Porté depuis legacy-static-site/js/data.js
*/
import type { Exercise } from "./types";

export const EXERCISES: Exercise[] = [
  {
    id: "tractions-pronation",
    name: "Tractions pronation",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "avant-bras"],
    difficulty: "Intermédiaire",
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Poids du corps",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/6303481/pexels-photo-6303481.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6023273/6023273-hd_1920_1080_25fps.mp4",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Salle de sport",
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
    equipment: "Salle de sport",
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
    equipment: "Poids du corps",
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
    equipment: "Salle de sport",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
    equipment: "Poids du corps",
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
  },
  {
    id: "burpees",
    name: "Burpees",
    muscleGroup: "Cardio, corps entier",
    muscles: ["pectoraux", "epaules", "triceps", "abdominaux", "quadriceps", "fessiers", "mollets"],
    difficulty: "Intermédiaire",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/30246184/pexels-photo-30246184.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout, pieds à largeur d'épaules, descendre en squat et poser les mains au sol devant les pieds.",
      "Sauter les jambes vers l'arrière pour atterrir en position de pompe, corps aligné.",
      "Effectuer une pompe (optionnel pour les débutants), puis ramener les pieds vers les mains d'un bond.",
      "Sauter verticalement en tendant les bras au-dessus de la tête pour terminer le mouvement."
    ],
    tips: "Garde un rythme soutenu mais contrôlé : la qualité d'exécution prime sur la vitesse pour éviter de casser le dos.",
    progressionPrev: "Burpees sans pompe ni saut (version marchée)",
    progressionNext: "Burpees avec traction ou box jump",
    es: {
      name: "Burpees",
      muscleGroup: "Cardio, cuerpo completo",
      description: [
        "De pie, pies a la anchura de los hombros, baja en sentadilla y coloca las manos en el suelo delante de los pies.",
        "Salta las piernas hacia atrás para aterrizar en posición de flexión, cuerpo alineado.",
        "Realiza una flexión (opcional para principiantes), luego lleva los pies hacia las manos de un salto.",
        "Salta verticalmente extendiendo los brazos por encima de la cabeza para terminar el movimiento."
      ],
      tips: "Mantén un ritmo sostenido pero controlado: la calidad de ejecución importa más que la velocidad para no dañar la espalda.",
      progressionPrev: "Burpees sin flexión ni salto (versión caminada)",
      progressionNext: "Burpees con dominada o salto al cajón"
    }
  },
  {
    id: "mountain-climbers",
    name: "Mountain climbers",
    muscleGroup: "Abdominaux, cardio, épaules",
    muscles: ["abdominaux", "obliques", "epaules", "quadriceps", "pectoraux"],
    difficulty: "Débutant",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/6516165/pexels-photo-6516165.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Position de pompe haute, mains sous les épaules, corps aligné de la tête aux talons.",
      "Ramener un genou vers la poitrine en gardant le dos plat et les hanches basses.",
      "Revenir en extension et répéter immédiatement avec l'autre jambe, dans un mouvement de course.",
      "Accélérer progressivement le rythme tout en gardant le gainage."
    ],
    tips: "Ne laisse pas les hanches monter : garde le bassin stable comme en position de planche.",
    progressionPrev: "Mountain climbers lents, genoux vers l'extérieur",
    progressionNext: "Mountain climbers pieds sur suspension (TRX) ou croisés",
    es: {
      name: "Mountain climbers",
      muscleGroup: "Abdominales, cardio, hombros",
      description: [
        "Posición de flexión alta, manos bajo los hombros, cuerpo alineado de la cabeza a los talones.",
        "Lleva una rodilla hacia el pecho manteniendo la espalda plana y las caderas bajas.",
        "Vuelve a la extensión y repite inmediatamente con la otra pierna, en un movimiento de carrera.",
        "Acelera progresivamente el ritmo manteniendo la tensión del core."
      ],
      tips: "No dejes que las caderas suban: mantén la pelvis estable como en la posición de plancha.",
      progressionPrev: "Mountain climbers lentos, rodillas hacia afuera",
      progressionNext: "Mountain climbers con pies en suspensión (TRX) o cruzados"
    }
  },
  {
    id: "squat-bulgare",
    name: "Squat bulgare (fente arrière surélevée)",
    muscleGroup: "Quadriceps, fessiers, ischios",
    muscles: ["quadriceps", "fessiers", "ischios", "adducteurs"],
    difficulty: "Intermédiaire",
    equipment: "Poids du corps",
    photo: "",
    video: "",
    description: [
      "Dos face à un banc, poser le dessus d'un pied sur le banc derrière toi, l'autre jambe en appui devant.",
      "Descendre en fléchissant le genou avant jusqu'à ce que la cuisse soit proche de l'horizontale.",
      "Garder le buste droit et le genou avant aligné avec le pied, sans qu'il dépasse trop la pointe.",
      "Pousser dans le talon avant pour remonter à la position de départ."
    ],
    tips: "Avance suffisamment la jambe d'appui pour que le genou ne parte pas trop loin devant les orteils.",
    progressionPrev: "Fentes avant classiques",
    progressionNext: "Squat bulgare avec haltères",
    es: {
      name: "Sentadilla búlgara (zancada trasera elevada)",
      muscleGroup: "Cuádriceps, glúteos, isquiotibiales",
      description: [
        "De espaldas a un banco, apoya el empeine de un pie sobre el banco detrás de ti, la otra pierna adelante en apoyo.",
        "Baja flexionando la rodilla delantera hasta que el muslo quede casi horizontal.",
        "Mantén el torso erguido y la rodilla delantera alineada con el pie, sin que sobrepase mucho la punta.",
        "Empuja con el talón delantero para volver a la posición inicial."
      ],
      tips: "Adelanta lo suficiente la pierna de apoyo para que la rodilla no se desplace demasiado por delante de los dedos del pie.",
      progressionPrev: "Zancadas frontales clásicas",
      progressionNext: "Sentadilla búlgara con mancuernas"
    }
  },
  {
    id: "souleve-terre-roumain",
    name: "Soulevé de terre roumain",
    muscleGroup: "Ischios, fessiers, lombaires",
    muscles: ["ischios", "fessiers", "lombaires", "dos"],
    difficulty: "Intermédiaire",
    equipment: "Salle de sport",
    photo: "",
    video: "",
    description: [
      "Debout, barre ou haltères tenus devant les cuisses, pieds à largeur de hanches, genoux légèrement fléchis.",
      "Pousser les hanches vers l'arrière en gardant le dos droit, la charge glisse le long des cuisses.",
      "Descendre jusqu'à ressentir un étirement des ischios, sans arrondir le dos.",
      "Remonter en poussant les hanches vers l'avant et en contractant les fessiers."
    ],
    tips: "Garde la charge proche du corps tout du long : plus elle s'éloigne, plus le bas du dos est sollicité inutilement.",
    progressionPrev: "Soulevé de terre roumain jambes plus fléchies, charge légère",
    progressionNext: "Soulevé de terre roumain unilatéral (une jambe)",
    es: {
      name: "Peso muerto rumano",
      muscleGroup: "Isquiotibiales, glúteos, lumbares",
      description: [
        "De pie, barra o mancuernas sostenidas delante de los muslos, pies a la anchura de las caderas, rodillas ligeramente flexionadas.",
        "Empuja las caderas hacia atrás manteniendo la espalda recta, la carga se desliza a lo largo de los muslos.",
        "Baja hasta sentir un estiramiento de los isquiotibiales, sin redondear la espalda.",
        "Sube empujando las caderas hacia adelante y contrayendo los glúteos."
      ],
      tips: "Mantén la carga cerca del cuerpo todo el recorrido: cuanto más se aleje, más se sobrecarga la zona lumbar innecesariamente.",
      progressionPrev: "Peso muerto rumano con rodillas más flexionadas y carga ligera",
      progressionNext: "Peso muerto rumano unilateral (una pierna)"
    }
  },
  {
    id: "rowing-haltere-unilateral",
    name: "Rowing haltère unilatéral",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "avant-bras", "trapezes"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/38641891/pexels-photo-38641891.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Un genou et une main en appui sur un banc, l'autre pied au sol, dos plat et parallèle au sol.",
      "Tenir un haltère dans la main libre, bras tendu vers le sol.",
      "Tirer l'haltère vers la hanche en amenant le coude vers l'arrière, coude proche du corps.",
      "Redescendre en contrôlant jusqu'à extension complète du bras."
    ],
    tips: "Évite de tourner le buste : garde les épaules alignées tout au long du mouvement.",
    progressionPrev: "Rowing unilatéral charge légère",
    progressionNext: "Rowing unilatéral charge lourde",
    es: {
      name: "Remo unilateral con mancuerna",
      muscleGroup: "Espalda, bíceps",
      description: [
        "Una rodilla y una mano apoyadas en un banco, el otro pie en el suelo, espalda plana y paralela al suelo.",
        "Sostén una mancuerna en la mano libre, brazo extendido hacia el suelo.",
        "Tira de la mancuerna hacia la cadera llevando el codo hacia atrás, codo cerca del cuerpo.",
        "Baja controlando el movimiento hasta la extensión completa del brazo."
      ],
      tips: "Evita rotar el torso: mantén los hombros alineados durante todo el movimiento.",
      progressionPrev: "Remo unilateral con carga ligera",
      progressionNext: "Remo unilateral con carga pesada"
    }
  },
  {
    id: "tirage-poulie-basse",
    name: "Tirage poulie basse (rowing assis)",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "trapezes", "avant-bras"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/4162482/pexels-photo-4162482.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/4367642/4367642-hd_1920_1080_30fps.mp4",
    description: [
      "Assis face à la poulie basse, pieds calés sur les cales-pieds, genoux légèrement fléchis, dos droit.",
      "Saisir la poignée, bras tendus, buste vertical.",
      "Tirer la poignée vers le bas du buste en amenant les coudes vers l'arrière et en resserrant les omoplates.",
      "Revenir en contrôlant jusqu'à extension complète des bras, sans arrondir le dos."
    ],
    tips: "Ne te penche pas en arrière pour tirer plus lourd : garde le buste stable et laisse le dos travailler.",
    progressionPrev: "Tirage poulie basse charge légère",
    progressionNext: "Tirage poulie basse prise serrée, charge lourde",
    es: {
      name: "Remo sentado en polea baja",
      muscleGroup: "Espalda, bíceps",
      description: [
        "Sentado frente a la polea baja, pies apoyados en los soportes, rodillas ligeramente flexionadas, espalda recta.",
        "Agarra la manija, brazos extendidos, torso vertical.",
        "Tira de la manija hacia la parte baja del torso llevando los codos hacia atrás y juntando los omóplatos.",
        "Vuelve controlando el movimiento hasta la extensión completa de los brazos, sin redondear la espalda."
      ],
      tips: "No te inclines hacia atrás para tirar más peso: mantén el torso estable y deja que la espalda trabaje.",
      progressionPrev: "Remo en polea baja con carga ligera",
      progressionNext: "Remo en polea baja con agarre estrecho y carga pesada"
    }
  },
  {
    id: "presse-jambes",
    name: "Presse à jambes (leg press)",
    muscleGroup: "Quadriceps, fessiers, ischios",
    muscles: ["quadriceps", "fessiers", "ischios"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/6844939/pexels-photo-6844939.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/36457367/15459404_2560_1440_30fps.mp4",
    description: [
      "Assis dans la machine, dos et tête calés contre le dossier, pieds à largeur d'épaules sur la plateforme.",
      "Déverrouiller les cales de sécurité et fléchir les genoux pour descendre la plateforme en contrôle.",
      "Descendre jusqu'à ce que les genoux forment un angle d'environ 90°, sans que le bas du dos décolle.",
      "Pousser dans la plateforme pour remonter, sans verrouiller complètement les genoux en haut."
    ],
    tips: "Garde toujours une légère flexion des genoux en haut du mouvement pour protéger l'articulation.",
    progressionPrev: "Presse à jambes charge légère, amplitude réduite",
    progressionNext: "Presse à jambes charge lourde, une jambe à la fois",
    es: {
      name: "Prensa de piernas (leg press)",
      muscleGroup: "Cuádriceps, glúteos, isquiotibiales",
      description: [
        "Sentado en la máquina, espalda y cabeza apoyadas en el respaldo, pies a la anchura de los hombros sobre la plataforma.",
        "Desbloquea los seguros y flexiona las rodillas para bajar la plataforma con control.",
        "Baja hasta que las rodillas formen un ángulo de unos 90°, sin que la zona lumbar se despegue.",
        "Empuja la plataforma para subir, sin bloquear completamente las rodillas arriba."
      ],
      tips: "Mantén siempre una ligera flexión de rodillas en la parte alta del movimiento para proteger la articulación.",
      progressionPrev: "Prensa de piernas con carga ligera, recorrido reducido",
      progressionNext: "Prensa de piernas con carga pesada, una pierna a la vez"
    }
  },
  {
    id: "fessier-poulie",
    name: "Fessier à la poulie (kickback / abduction)",
    muscleGroup: "Fessiers",
    muscles: ["fessiers", "ischios", "adducteurs"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/6539861/pexels-photo-6539861.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Attacher une manchette à la poulie basse au niveau de la cheville, face ou dos à la machine selon la variante.",
      "Pour le kickback : en légère inclinaison, tendre la jambe vers l'arrière en contractant le fessier.",
      "Pour l'abduction : jambe tendue sur le côté, écarter la jambe latéralement contre la résistance.",
      "Revenir en contrôlant le mouvement sans laisser la charge tirer le bassin."
    ],
    tips: "Isole bien le mouvement dans la hanche : évite de compenser avec le bas du dos ou le buste.",
    progressionPrev: "Fessier à la poulie, charge légère",
    progressionNext: "Fessier à la poulie, charge lourde, tenue en fin de mouvement",
    es: {
      name: "Glúteo en polea (patada / abducción)",
      muscleGroup: "Glúteos",
      description: [
        "Sujeta un brazalete a la polea baja a la altura del tobillo, de frente o de espaldas a la máquina según la variante.",
        "Para la patada de glúteo: con ligera inclinación, extiende la pierna hacia atrás contrayendo el glúteo.",
        "Para la abducción: pierna extendida hacia el lado, aparta la pierna lateralmente contra la resistencia.",
        "Vuelve controlando el movimiento sin dejar que la carga arrastre la pelvis."
      ],
      tips: "Aísla bien el movimiento en la cadera: evita compensar con la zona lumbar o el torso.",
      progressionPrev: "Glúteo en polea con carga ligera",
      progressionNext: "Glúteo en polea con carga pesada y mantenimiento al final del recorrido"
    }
  },
  {
    id: "curl-pupitre",
    name: "Curl pupitre (banc Scott)",
    muscleGroup: "Biceps",
    muscles: ["biceps", "avant-bras"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "",
    video: "",
    description: [
      "Assis, les triceps posés sur le pupitre incliné, barre ou haltères tenus en supination (paumes vers le haut).",
      "Partir bras presque tendus, sans verrouiller complètement les coudes.",
      "Fléchir les coudes pour remonter la charge vers les épaules, en gardant les bras collés au pupitre.",
      "Redescendre lentement jusqu'à l'extension de départ."
    ],
    tips: "Ne redescends jamais en relâchement total : garde une légère tension pour protéger le tendon du biceps.",
    progressionPrev: "Curl pupitre à un bras, charge légère",
    progressionNext: "Curl pupitre, charge lourde ou barre EZ",
    es: {
      name: "Curl en banco Scott (predicador)",
      muscleGroup: "Bíceps",
      description: [
        "Sentado, los tríceps apoyados en el banco inclinado, barra o mancuernas sujetas en supinación (palmas hacia arriba).",
        "Parte con los brazos casi extendidos, sin bloquear completamente los codos.",
        "Flexiona los codos para subir la carga hacia los hombros, manteniendo los brazos pegados al banco.",
        "Baja lentamente hasta la extensión inicial."
      ],
      tips: "Nunca bajes con relajación total: mantén una ligera tensión para proteger el tendón del bíceps.",
      progressionPrev: "Curl en banco Scott a un brazo, carga ligera",
      progressionNext: "Curl en banco Scott con carga pesada o barra EZ"
    }
  },
  {
    id: "extension-mollets-assis",
    name: "Extension mollets assis",
    muscleGroup: "Mollets",
    muscles: ["mollets"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "",
    video: "",
    description: [
      "Assis à la machine, genoux sous les rouleaux rembourrés, pointes de pieds posées sur la plateforme, talons dans le vide.",
      "Descendre les talons le plus bas possible pour étirer les mollets.",
      "Pousser sur la pointe des pieds pour monter le plus haut possible en contractant fort les mollets.",
      "Redescendre en contrôlant, sans rebondir."
    ],
    tips: "Marque une pause d'une seconde en haut du mouvement pour maximiser la contraction du mollet.",
    progressionPrev: "Extension mollets debout au poids du corps",
    progressionNext: "Extension mollets assis, charge lourde, unilatéral",
    es: {
      name: "Elevación de talón sentado (gemelos)",
      muscleGroup: "Gemelos",
      description: [
        "Sentado en la máquina, rodillas bajo los rodillos acolchados, puntas de los pies sobre la plataforma, talones al aire.",
        "Baja los talones lo más posible para estirar los gemelos.",
        "Empuja con la punta de los pies para subir lo más alto posible contrayendo fuerte los gemelos.",
        "Baja controlando el movimiento, sin rebotar."
      ],
      tips: "Haz una pausa de un segundo en la parte alta del movimiento para maximizar la contracción del gemelo.",
      progressionPrev: "Elevación de talón de pie con el peso del cuerpo",
      progressionNext: "Elevación de talón sentado con carga pesada, unilateral"
    }
  },
  {
    id: "gainage-lateral",
    name: "Gainage latéral (side plank)",
    muscleGroup: "Obliques, abdominaux",
    muscles: ["obliques", "abdominaux", "epaules"],
    difficulty: "Débutant",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/9645062/pexels-photo-9645062.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "https://videos.pexels.com/video-files/6023266/6023266-uhd_2560_1440_25fps.mp4",
    description: [
      "Allongé sur le côté, appui sur l'avant-bras (coude sous l'épaule) ou la main, jambes tendues et empilées.",
      "Lever les hanches du sol pour former une ligne droite de la tête aux pieds.",
      "Maintenir la position en gainant les obliques, sans laisser le bassin s'affaisser.",
      "Relâcher en contrôle et répéter de l'autre côté."
    ],
    tips: "Si la version jambes tendues est trop difficile, plie les genoux au sol pour réduire le bras de levier.",
    progressionPrev: "Gainage latéral genoux fléchis",
    progressionNext: "Gainage latéral avec jambe levée ou lesté",
    es: {
      name: "Plancha lateral (side plank)",
      muscleGroup: "Oblicuos, abdominales",
      description: [
        "Tumbado de lado, apoyo en el antebrazo (codo bajo el hombro) o la mano, piernas extendidas y apiladas.",
        "Levanta las caderas del suelo para formar una línea recta de la cabeza a los pies.",
        "Mantén la posición apretando los oblicuos, sin dejar que la pelvis se hunda.",
        "Suelta con control y repite del otro lado."
      ],
      tips: "Si la versión con piernas extendidas es demasiado difícil, flexiona las rodillas en el suelo para reducir el brazo de palanca.",
      progressionPrev: "Plancha lateral con rodillas flexionadas",
      progressionNext: "Plancha lateral con pierna elevada o lastrada"
    }
  },
  {
    id: "pompes-archer",
    name: "Pompes archer (archer push-up)",
    muscleGroup: "Pectoraux, triceps, épaules",
    muscles: ["pectoraux", "triceps", "epaules", "abdominaux"],
    difficulty: "Avancé",
    equipment: "Poids du corps",
    photo: "",
    video: "",
    description: [
      "Mains bien plus larges que les épaules, corps aligné comme pour une pompe classique.",
      "Descendre en pliant un bras tandis que l'autre reste tendu et glisse sur le côté.",
      "Descendre jusqu'à ce que la poitrine frôle presque le sol du côté du bras fléchi.",
      "Pousser pour remonter et alterner le côté de travail à chaque répétition ou série."
    ],
    tips: "Maîtrise d'abord les pompes larges classiques avant de tenter la version archer, plus exigeante en force unilatérale.",
    progressionPrev: "Pompes larges (mains très écartées)",
    progressionNext: "Pompes à un bras",
    es: {
      name: "Flexión arquero (archer push-up)",
      muscleGroup: "Pectorales, tríceps, hombros",
      description: [
        "Manos mucho más separadas que los hombros, cuerpo alineado como en una flexión clásica.",
        "Baja flexionando un brazo mientras el otro permanece extendido y se desliza hacia el lado.",
        "Baja hasta que el pecho casi roce el suelo del lado del brazo flexionado.",
        "Empuja para subir y alterna el lado de trabajo en cada repetición o serie."
      ],
      tips: "Domina primero las flexiones anchas clásicas antes de intentar la versión arquero, más exigente en fuerza unilateral.",
      progressionPrev: "Flexiones anchas (manos muy separadas)",
      progressionNext: "Flexión a un brazo"
    }
  },
  {
    id: "muscle-up",
    name: "Muscle-up",
    muscleGroup: "Dos, pectoraux, triceps, épaules",
    muscles: ["dos", "pectoraux", "triceps", "epaules", "biceps", "avant-bras", "abdominaux"],
    difficulty: "Avancé",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/4803682/pexels-photo-4803682.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Suspendu à la barre, prise en pronation légèrement plus large que les épaules.",
      "Tirer explosivement pour faire passer la poitrine au-dessus de la barre, en enchaînant sans pause avec une transition du poignet.",
      "Une fois les bras au-dessus de la barre, pousser en extension complète comme pour un dip.",
      "Redescendre en contrôlant chaque phase, sans se laisser tomber brutalement."
    ],
    tips: "Travaille séparément la traction haute (tirage explosif) et le dip avant de chercher à lier les deux en un seul mouvement fluide.",
    progressionPrev: "Tractions explosives + dips séparés",
    progressionNext: "Muscle-up strict (sans élan) ou lesté",
    es: {
      name: "Muscle-up",
      muscleGroup: "Espalda, pectorales, tríceps, hombros",
      description: [
        "Suspendido de la barra, agarre en pronación un poco más ancho que los hombros.",
        "Tira explosivamente para llevar el pecho por encima de la barra, encadenando sin pausa una transición de muñeca.",
        "Una vez los brazos por encima de la barra, empuja hasta la extensión completa como en un fondo (dip).",
        "Baja controlando cada fase, sin dejarte caer bruscamente."
      ],
      tips: "Trabaja por separado la tracción alta (tirón explosivo) y el fondo antes de buscar unir ambos en un solo movimiento fluido.",
      progressionPrev: "Dominadas explosivas + fondos por separado",
      progressionNext: "Muscle-up estricto (sin impulso) o lastrado"
    }
  },
  {
    id: "handstand-push-up",
    name: "Handstand push-up (pompes en équilibre)",
    muscleGroup: "Épaules, triceps",
    muscles: ["epaules", "triceps", "avant-bras", "abdominaux"],
    difficulty: "Avancé",
    equipment: "Poids du corps",
    photo: "",
    video: "",
    description: [
      "En équilibre sur les mains contre un mur, corps aligné, jambes tendues appuyées contre le mur.",
      "Descendre en fléchissant les coudes jusqu'à ce que la tête frôle presque le sol.",
      "Pousser fort dans les mains pour remonter en extension complète des bras.",
      "Garder le gainage abdominal tout du long pour éviter de cambrer le dos."
    ],
    tips: "Commence par la tenue de position (handstand hold) puis les négatives lentes avant les répétitions complètes.",
    progressionPrev: "Pompes pike (pyramide, pieds surélevés)",
    progressionNext: "Handstand push-up en équilibre libre (sans mur)",
    es: {
      name: "Flexión en pino (handstand push-up)",
      muscleGroup: "Hombros, tríceps",
      description: [
        "En equilibrio sobre las manos contra una pared, cuerpo alineado, piernas extendidas apoyadas en la pared.",
        "Baja flexionando los codos hasta que la cabeza casi roce el suelo.",
        "Empuja fuerte con las manos para subir hasta la extensión completa de los brazos.",
        "Mantén la tensión abdominal todo el recorrido para evitar arquear la espalda."
      ],
      tips: "Empieza con el mantenimiento de la posición (handstand hold) y luego negativas lentas antes de las repeticiones completas.",
      progressionPrev: "Flexiones pike (pirámide, pies elevados)",
      progressionNext: "Flexión en pino en equilibrio libre (sin pared)"
    }
  },
  {
    id: "good-morning",
    name: "Good morning (flexion de buste à la barre)",
    muscleGroup: "Lombaires, ischios, fessiers",
    muscles: ["lombaires", "ischios", "fessiers", "dos"],
    difficulty: "Intermédiaire",
    equipment: "Salle de sport",
    photo: "",
    video: "",
    description: [
      "Barre posée sur le haut du dos comme pour un squat, pieds à largeur de hanches, genoux légèrement fléchis.",
      "Pousser les hanches vers l'arrière en inclinant le buste vers l'avant, dos plat.",
      "Descendre jusqu'à ce que le buste soit presque parallèle au sol, en sentant l'étirement des ischios.",
      "Remonter en poussant les hanches vers l'avant et en contractant les lombaires et les fessiers."
    ],
    tips: "Commence avec une charge très légère : ce mouvement sollicite fortement le bas du dos si l'exécution est imprécise.",
    progressionPrev: "Good morning à la barre vide",
    progressionNext: "Good morning charge plus lourde, jambes tendues",
    es: {
      name: "Good morning (flexión de torso con barra)",
      muscleGroup: "Lumbares, isquiotibiales, glúteos",
      description: [
        "Barra colocada en la parte alta de la espalda como en una sentadilla, pies a la anchura de las caderas, rodillas ligeramente flexionadas.",
        "Empuja las caderas hacia atrás inclinando el torso hacia adelante, espalda plana.",
        "Baja hasta que el torso quede casi paralelo al suelo, sintiendo el estiramiento de los isquiotibiales.",
        "Sube empujando las caderas hacia adelante y contrayendo los lumbares y los glúteos."
      ],
      tips: "Empieza con una carga muy ligera: este movimiento exige mucho la zona lumbar si la ejecución no es precisa.",
      progressionPrev: "Good morning con la barra vacía",
      progressionNext: "Good morning con más carga, piernas extendidas"
    }
  },
  {
    id: "kettlebell-swing",
    name: "Kettlebell swing",
    muscleGroup: "Fessiers, ischios, lombaires",
    muscles: ["fessiers", "ischios", "lombaires", "abdominaux"],
    difficulty: "Intermédiaire",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/13106615/pexels-photo-13106615.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout, pieds un peu plus larges que les épaules, kettlebell tenu à deux mains devant toi.",
      "Initier le mouvement en poussant les hanches vers l'arrière (hip hinge), pas en pliant les genoux comme un squat.",
      "Claquer les hanches vers l'avant pour projeter le kettlebell jusqu'à hauteur d'épaules, bras relâchés."
    ],
    tips: "Le mouvement vient des hanches, pas des bras : les bras ne font que guider le kettlebell.",
    progressionPrev: "Kettlebell swing à deux mains, amplitude réduite (hauteur poitrine)",
    progressionNext: "Kettlebell swing à un bras",
    es: {
      name: "Kettlebell swing",
      muscleGroup: "Glúteos, isquiotibiales, lumbares",
      description: [
        "De pie, pies un poco más abiertos que los hombros, kettlebell sujeta con las dos manos delante de ti.",
        "Inicia el movimiento empujando las caderas hacia atrás (bisagra de cadera), no flexionando las rodillas como en una sentadilla.",
        "Extiende las caderas hacia adelante con fuerza para proyectar la kettlebell hasta la altura de los hombros, brazos relajados."
      ],
      tips: "El movimiento viene de las caderas, no de los brazos: los brazos solo guían la kettlebell.",
      progressionPrev: "Kettlebell swing a dos manos, amplitud reducida (altura de pecho)",
      progressionNext: "Kettlebell swing a un brazo"
    }
  },
  {
    id: "squat-gobelet",
    name: "Squat gobelet (goblet squat)",
    muscleGroup: "Quadriceps, fessiers",
    muscles: ["quadriceps", "fessiers", "adducteurs", "abdominaux"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/36387535/pexels-photo-36387535.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout, pieds à largeur d'épaules, haltère tenu à deux mains contre la poitrine, coudes vers le bas.",
      "Descendre en squat en gardant le buste droit et l'haltère proche du corps, jusqu'à ce que les coudes frôlent l'intérieur des genoux.",
      "Pousser dans les talons pour remonter en position debout."
    ],
    tips: "Cette version aide à garder le buste droit — bon premier pas avant le squat à la barre.",
    progressionPrev: "Squat au poids du corps",
    progressionNext: "Squat back (barre)",
    es: {
      name: "Sentadilla goblet (con mancuerna)",
      muscleGroup: "Cuádriceps, glúteos",
      description: [
        "De pie, pies a la anchura de los hombros, mancuerna sujeta con las dos manos contra el pecho, codos hacia abajo.",
        "Baja en sentadilla manteniendo el torso recto y la mancuerna cerca del cuerpo, hasta que los codos rocen el interior de las rodillas.",
        "Empuja con los talones para volver a la posición de pie."
      ],
      tips: "Esta versión ayuda a mantener el torso recto — buen primer paso antes de la sentadilla con barra.",
      progressionPrev: "Sentadilla con el propio peso corporal",
      progressionNext: "Sentadilla con barra (squat back)"
    }
  },
  {
    id: "rowing-barre",
    name: "Rowing barre buste penché",
    muscleGroup: "Dos, biceps",
    muscles: ["dos", "biceps", "trapezes", "avant-bras"],
    difficulty: "Intermédiaire",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/3025027/pexels-photo-3025027.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout, genoux légèrement fléchis, buste incliné vers l'avant à environ 45°, dos plat, barre tenue à largeur d'épaules.",
      "Tirer la barre vers le bas du buste en amenant les coudes vers l'arrière, sans bouger le dos.",
      "Redescendre la barre en contrôlant jusqu'à extension complète des bras."
    ],
    tips: "Garde le dos plat tout le mouvement : si tu dois t'arrondir pour tirer plus lourd, réduis la charge.",
    progressionPrev: "Rowing haltère unilatéral",
    progressionNext: "Rowing barre plus lourd, prise plus large",
    es: {
      name: "Remo con barra inclinado",
      muscleGroup: "Espalda, bíceps",
      description: [
        "De pie, rodillas ligeramente flexionadas, torso inclinado hacia adelante unos 45°, espalda plana, barra sujeta a la anchura de los hombros.",
        "Tira de la barra hacia la parte baja del torso llevando los codos hacia atrás, sin mover la espalda.",
        "Baja la barra controlando el movimiento hasta la extensión completa de los brazos."
      ],
      tips: "Mantén la espalda plana durante todo el movimiento: si necesitas encorvarte para tirar más peso, reduce la carga.",
      progressionPrev: "Rowing con mancuerna a un brazo",
      progressionNext: "Remo con barra más pesado, agarre más ancho"
    }
  },
  {
    id: "chaise-murale",
    name: "Chaise (wall sit)",
    muscleGroup: "Quadriceps",
    muscles: ["quadriceps", "fessiers"],
    difficulty: "Débutant",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/6740055/pexels-photo-6740055.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Dos plaqué contre un mur, pieds à largeur de hanches, un peu éloignés du mur.",
      "Descendre en glissant le dos le long du mur jusqu'à ce que les cuisses soient parallèles au sol, genoux à 90°.",
      "Maintenir la position, poids réparti sur toute la plante des pieds."
    ],
    tips: "Les genoux ne doivent pas dépasser la pointe des pieds — ajuste la distance au mur si besoin.",
    progressionPrev: "Chaise avec appui des mains sur les cuisses",
    progressionNext: "Chaise sur une jambe",
    es: {
      name: "Silla contra la pared (wall sit)",
      muscleGroup: "Cuádriceps",
      description: [
        "Espalda apoyada contra una pared, pies a la anchura de las caderas, un poco alejados de la pared.",
        "Baja deslizando la espalda por la pared hasta que los muslos queden paralelos al suelo, rodillas a 90°.",
        "Mantén la posición, el peso repartido en toda la planta de los pies."
      ],
      tips: "Las rodillas no deben sobrepasar la punta de los pies — ajusta la distancia a la pared si hace falta.",
      progressionPrev: "Silla con apoyo de las manos en los muslos",
      progressionNext: "Silla a una pierna"
    }
  },
  {
    id: "curl-concentre",
    name: "Curl concentré",
    muscleGroup: "Biceps",
    muscles: ["biceps", "avant-bras"],
    difficulty: "Débutant",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/7188051/pexels-photo-7188051.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Assis, coude posé contre l'intérieur de la cuisse, haltère tenu en prise supination, bras tendu vers le sol.",
      "Fléchir le coude pour amener l'haltère vers l'épaule, sans bouger le coude.",
      "Redescendre lentement jusqu'à extension complète."
    ],
    tips: "L'isolement est total ici : reste très strict, ne balance pas le buste pour aider le mouvement.",
    progressionPrev: "Curl biceps classique (debout)",
    progressionNext: "Curl concentré charge plus lourde, tempo lent",
    es: {
      name: "Curl de concentración",
      muscleGroup: "Bíceps",
      description: [
        "Sentado, codo apoyado contra la parte interna del muslo, mancuerna sujeta en agarre supino, brazo extendido hacia el suelo.",
        "Flexiona el codo para llevar la mancuerna hacia el hombro, sin mover el codo.",
        "Baja lentamente hasta la extensión completa."
      ],
      tips: "Aquí el aislamiento es total: mantente muy estricto, no balancees el torso para ayudar al movimiento.",
      progressionPrev: "Curl de bíceps clásico (de pie)",
      progressionNext: "Curl de concentración con más carga, tempo lento"
    }
  },
  {
    id: "box-jump",
    name: "Box jump (saut sur caisse)",
    muscleGroup: "Quadriceps, fessiers, mollets",
    muscles: ["quadriceps", "fessiers", "mollets", "abdominaux"],
    difficulty: "Intermédiaire",
    equipment: "Poids du corps",
    photo: "https://images.pexels.com/photos/9602281/pexels-photo-9602281.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout face à une caisse ou un support stable, pieds à largeur d'épaules.",
      "Fléchir légèrement les genoux et balancer les bras vers l'arrière, puis sauter en projetant les bras vers l'avant.",
      "Atterrir en douceur sur la caisse, genoux fléchis pour absorber le choc, puis se redresser complètement.",
      "Redescendre en marchant (pas en sautant) pour préserver les genoux."
    ],
    tips: "Choisis une hauteur de caisse où tu atterris facilement en pleine extension des hanches — la hauteur n'est pas l'objectif, la technique oui.",
    progressionPrev: "Squat sauté sans caisse",
    progressionNext: "Box jump plus haut, ou avec charge légère",
    es: {
      name: "Box jump (salto a cajón)",
      muscleGroup: "Cuádriceps, glúteos, gemelos",
      description: [
        "De pie frente a un cajón o soporte estable, pies a la anchura de los hombros.",
        "Flexiona ligeramente las rodillas y balancea los brazos hacia atrás, luego salta proyectando los brazos hacia adelante.",
        "Aterriza con suavidad sobre el cajón, rodillas flexionadas para absorber el impacto, y termina de enderezarte por completo.",
        "Baja caminando (no saltando) para cuidar las rodillas."
      ],
      tips: "Elige una altura de cajón en la que aterrices con facilidad en extensión completa de caderas — la altura no es el objetivo, la técnica sí.",
      progressionPrev: "Sentadilla con salto sin cajón",
      progressionNext: "Box jump más alto, o con carga ligera"
    }
  },
  {
    id: "tirage-menton",
    name: "Tirage menton (barre)",
    muscleGroup: "Épaules, trapèzes",
    muscles: ["epaules", "trapezes", "avant-bras"],
    difficulty: "Intermédiaire",
    equipment: "Salle de sport",
    photo: "https://images.pexels.com/photos/34043578/pexels-photo-34043578.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    video: "",
    description: [
      "Debout, barre tenue en prise pronation, mains rapprochées, bras tendus devant les cuisses.",
      "Tirer la barre verticalement le long du corps en amenant les coudes vers le haut et vers l'extérieur, jusqu'à hauteur de poitrine.",
      "Redescendre lentement en contrôlant la charge."
    ],
    tips: "Arrête le mouvement si tu ressens une gêne à l'épaule — l'amplitude complète n'est pas obligatoire pour tout le monde.",
    progressionPrev: "Tirage menton à l'élastique",
    progressionNext: "Tirage menton charge plus lourde",
    es: {
      name: "Remo al mentón (con barra)",
      muscleGroup: "Hombros, trapecios",
      description: [
        "De pie, barra sujeta en agarre pronado, manos juntas, brazos extendidos delante de los muslos.",
        "Tira de la barra verticalmente a lo largo del cuerpo llevando los codos hacia arriba y hacia afuera, hasta la altura del pecho.",
        "Baja lentamente controlando la carga."
      ],
      tips: "Detén el movimiento si sientes molestias en el hombro — la amplitud completa no es obligatoria para todo el mundo.",
      progressionPrev: "Remo al mentón con banda elástica",
      progressionNext: "Remo al mentón con más carga"
    }
  },
  {
    id: "pompes-pike",
    name: "Pompes pike (pike push-up)",
    muscleGroup: "Épaules, triceps",
    muscles: ["epaules", "triceps", "abdominaux"],
    difficulty: "Intermédiaire",
    equipment: "Poids du corps",
    photo: "",
    video: "",
    description: [
      "Position de pompe, hanches levées vers le plafond pour former un V inversé, mains un peu plus larges que les épaules.",
      "Fléchir les coudes pour amener le sommet du crâne vers le sol entre les mains.",
      "Pousser pour revenir à la position de départ, sans casser la position de V."
    ],
    tips: "Plus les pieds sont surélevés (banc, chaise), plus les épaules travaillent — bonne progression vers le handstand push-up.",
    progressionPrev: "Pompes classiques",
    progressionNext: "Handstand push-up (pompes en équilibre)",
    es: {
      name: "Flexión pike (pike push-up)",
      muscleGroup: "Hombros, tríceps",
      description: [
        "Posición de flexión, caderas elevadas hacia el techo formando una V invertida, manos un poco más abiertas que los hombros.",
        "Flexiona los codos para llevar la parte superior de la cabeza hacia el suelo entre las manos.",
        "Empuja para volver a la posición inicial, sin romper la forma de V."
      ],
      tips: "Cuanto más elevados estén los pies (banco, silla), más trabajan los hombros — buena progresión hacia el handstand push-up.",
      progressionPrev: "Flexiones clásicas",
      progressionNext: "Handstand push-up (flexión en equilibrio)"
    }
  },
  {
    id: "l-sit",
    name: "L-sit",
    muscleGroup: "Abdominaux, hanches",
    muscles: ["abdominaux", "obliques"],
    difficulty: "Avancé",
    equipment: "Poids du corps",
    photo: "",
    video: "",
    description: [
      "Assis au sol ou en appui sur des barres parallèles/deux supports, mains à côté des hanches.",
      "Pousser dans les mains pour lever tout le corps, jambes tendues devant à l'horizontale.",
      "Maintenir la position, dos droit, épaules basses loin des oreilles."
    ],
    tips: "Si l'horizontale complète est trop dure, commence genoux pliés (tuck L-sit) — même gainage, moins de levier.",
    progressionPrev: "Tuck L-sit (genoux pliés vers la poitrine)",
    progressionNext: "L-sit sur barre de tractions, ou V-sit",
    es: {
      name: "L-sit",
      muscleGroup: "Abdominales, caderas",
      description: [
        "Sentado en el suelo o apoyado en paralelas/dos soportes, manos junto a las caderas.",
        "Empuja con las manos para levantar todo el cuerpo, piernas extendidas al frente en horizontal.",
        "Mantén la posición, espalda recta, hombros bajos lejos de las orejas."
      ],
      tips: "Si la horizontal completa es muy difícil, empieza con las rodillas dobladas (tuck L-sit) — mismo gainage, menos palanca.",
      progressionPrev: "Tuck L-sit (rodillas hacia el pecho)",
      progressionNext: "L-sit en barra de dominadas, o V-sit"
    }
  }
];
