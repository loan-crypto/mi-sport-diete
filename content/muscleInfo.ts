/* ---------------- CARTE MUSCULAIRE ---------------- */
/*
  Utilisée par carte-musculaire.html / js/render-carte-musculaire.js.
  Chaque clé correspond à une valeur possible dans le tableau
  "muscles" d'un exercice. "view" indique sur quelle silhouette
  (avant/arrière) le point apparaît.

  Porté depuis legacy-static-site/js/data.js
*/
import type { MuscleInfo } from "./types";

export const MUSCLE_INFO: Record<string, MuscleInfo> = {
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
