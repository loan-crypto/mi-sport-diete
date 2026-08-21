# Mon Sport & Diète

Carnet personal de entrenamiento y nutrición — recetas, ingredientes,
ejercicios, sesiones, generador de programa, carta muscular interactiva,
planificador semanal, contador de calorías y seguimiento sincronizado
entre dispositivos.

Migrado desde una versión 100% estática (HTML/CSS/JS sin build) a
**Next.js + Supabase**. El sitio anterior sigue disponible tal cual en
[`legacy-static-site/`](legacy-static-site/) como referencia.

## Stack

- **Next.js** (App Router, TypeScript) exportado como sitio estático
  (`output: "export"`) — se sigue publicando gratis en GitHub Pages.
- **Supabase**: autenticación (email + contraseña, sin registro público),
  base de datos (Postgres con Row Level Security) para tu seguimiento
  personal, y Storage para tus fotos de progresión.
- El **contenido de referencia** (recetas, ingredientes, ejercicios,
  sesiones, info de músculos) sigue viviendo en archivos del repo
  (`content/*.ts`), no en la base de datos — es contenido compartido, no
  personal, y así conservas el flujo de "abro el archivo, agrego un
  bloque" de siempre.

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completa con tus claves de Supabase
npm run dev
```

Abre `http://localhost:3000/mi-sport-diete` (el `basePath` coincide con
el de producción en GitHub Pages).

## Configurar Supabase (una sola vez)

1. Crea un proyecto gratis en [supabase.com](https://supabase.com).
2. En el **SQL Editor** del proyecto, ejecuta el contenido de
   [`supabase/schema.sql`](supabase/schema.sql) — crea todas las tablas
   de tu seguimiento personal con sus políticas de seguridad.
3. En **Storage**, crea un bucket llamado `progress-photos` (privado).
   La política de acceso ya viene incluida al final de `schema.sql`.
4. En **Authentication → Users**, crea tu propio usuario (email +
   contraseña) — no hay pantalla de registro público en el sitio.
5. En **Project Settings → API**, copia la **Project URL** y la
   **anon public key** a tu `.env.local` (ver `.env.example`). Son
   claves públicas pensadas para el navegador — la seguridad real la dan
   las políticas de la base de datos, no el secreto de esta clave.

## Desplegar en GitHub Pages

El repo incluye `.github/workflows/deploy.yml`: cada push a `main`
compila el sitio y lo publica automáticamente.

Antes del primer despliegue:

1. En **Settings → Pages** del repo, en "Build and deployment" elige
   **GitHub Actions** como fuente (no "Deploy from a branch").
2. En **Settings → Secrets and variables → Actions**, agrega dos
   secrets: `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   (los mismos valores de tu `.env.local`).
3. Haz push a `main` — el Action compila y publica en unos minutos.

## Migrar tu historial del sitio anterior

Si ya tenías datos guardados en el sitio estático (localStorage), ve a
esa versión antigua, usa **Journal → Exporter mes données (.json)**, y
en el nuevo sitio, inicia sesión y usa **Journal → Importar un archivo**
con ese mismo `.json`. Sube tus entrenos, comidas y fotos de progresión a
tu cuenta de Supabase automáticamente.

## Agregar contenido (recetas, ingredientes, ejercicios, sesiones)

Igual que antes, solo que ahora en TypeScript tipado:

- `content/recipes.ts` — recetas
- `content/ingredients.ts` — ingredientes
- `content/exercises.ts` — ejercicios
- `content/sessions.ts` — sesiones
- `content/muscleInfo.ts` — info de músculos (carta muscular)

Copia un bloque existente y ajusta los campos — `content/types.ts` tiene
la forma exacta de cada uno. El sub-objeto `es: {...}` es opcional y
traduce al español solo los campos que quieras (lo que falte cae al
francés automáticamente, vía `tData()` en `lib/i18n/context.tsx`).

## Idioma (Francés / Español)

Igual que antes: botón FR/ES en el menú, elección guardada en
`localStorage`. El diccionario de textos fijos está en
`lib/i18n/dictionary.ts`.

## Chat con Claude

Sigue siendo una llamada directa navegador → API de Anthropic con tu
propia clave (creada en [console.anthropic.com](https://console.anthropic.com)).
La diferencia: la clave ahora se guarda en Supabase (tabla
`chat_settings`, protegida por RLS a tu usuario) en vez de en el
`localStorage` de un solo navegador — así está disponible en cualquier
dispositivo donde inicies sesión, con el mismo nivel de exposición que
antes (nunca pasa por un servidor propio).

## Estructura del proyecto

```
app/                    rutas (App Router) — una carpeta por pantalla
components/             componentes React reutilizables
  auth/                 RequireAuth (protege paginas personales)
  chat/                 ChatWidget
  layout/               SiteHeader, SiteFooter, PageTheme, StripeDivider
  media/                PhotoOrPlaceholder, VideoOrPlaceholder
  motion/               ScrollReveal
  programme/            ExoThumb
  tracking/             formularios de seguimiento + grafico + contador
content/                contenido de referencia (recetas, ejercicios...)
lib/
  i18n/                 diccionario + contexto FR/ES
  supabase/             cliente + CRUD de cada tabla
  auth/                 contexto de sesion
  programme.ts          algoritmo del generador de programa
  format.ts             calculo de macros, busqueda por id
  calorieTargets.ts     formulas del contador de calorias
  dateUtils.ts          helpers de fechas del planificador
supabase/schema.sql     esquema SQL a ejecutar una vez en tu proyecto
legacy-static-site/     el sitio anterior (HTML/CSS/JS puro), de referencia
```

## Próximas ideas

- Editor de contenido dentro del sitio (hoy sigue siendo editar archivos).
- Notificaciones/recordatorios de entrenamiento.
- Compartir el planificador semanal con otra persona.
