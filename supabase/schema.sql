-- Esquema Supabase para "Mon Sport & Diète".
-- Ejecutar en el SQL Editor de tu proyecto Supabase (una sola vez).
-- Todas las tablas son datos PERSONALES (journal, fotos, ajustes) — el
-- contenido de referencia (recetas, ejercicios...) vive en el repo, no aqui.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- exercise_logs: seguimiento de peso/series/reps por ejercicio
-- ---------------------------------------------------------------------
create table exercise_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  exercise_id text not null,
  date date not null,
  weight numeric,
  sets integer,
  reps text,
  note text,
  created_at timestamptz not null default now()
);

alter table exercise_logs enable row level security;

create policy "exercise_logs: owner full access"
  on exercise_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- meal_logs: seguimiento de comidas (recetas comidas)
-- ---------------------------------------------------------------------
create table meal_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null,
  date date not null,
  note text,
  created_at timestamptz not null default now()
);

alter table meal_logs enable row level security;

create policy "meal_logs: owner full access"
  on meal_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- progression_photos: galeria de progreso fisico
-- ---------------------------------------------------------------------
create table progression_photos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  weight numeric,
  note text,
  photo_path text not null, -- ruta dentro del bucket "progress-photos"
  created_at timestamptz not null default now()
);

alter table progression_photos enable row level security;

create policy "progression_photos: owner full access"
  on progression_photos for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- planner_entries: planificador/calendario de comidas y sesiones
-- ---------------------------------------------------------------------
create table planner_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  slot text not null check (slot in ('breakfast', 'lunch', 'dinner', 'snack', 'session')),
  ref_type text not null check (ref_type in ('recipe', 'session')),
  ref_id text not null,
  created_at timestamptz not null default now()
);

alter table planner_entries enable row level security;

create policy "planner_entries: owner full access"
  on planner_entries for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- chat_settings: clave de API de Claude + modelo elegido, por usuario
-- ---------------------------------------------------------------------
create table chat_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  api_key text,
  model text not null default 'claude-sonnet-4-5',
  updated_at timestamptz not null default now()
);

alter table chat_settings enable row level security;

create policy "chat_settings: owner full access"
  on chat_settings for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- profiles: objetivo + peso actual (alimenta el contador de calorias y
-- los valores por defecto del generador de programa)
-- ---------------------------------------------------------------------
create table profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  goal text check (goal in ('volume', 'secher', 'maintien')),
  current_weight numeric,
  updated_at timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "profiles: owner full access"
  on profiles for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ---------------------------------------------------------------------
-- Indices utiles para las consultas mas frecuentes
-- ---------------------------------------------------------------------
create index exercise_logs_user_exercise_idx on exercise_logs (user_id, exercise_id, date desc);
create index meal_logs_user_date_idx on meal_logs (user_id, date desc);
create index planner_entries_user_date_idx on planner_entries (user_id, date);

-- ---------------------------------------------------------------------
-- Storage: bucket privado para fotos de progresion.
-- Crea el bucket "progress-photos" desde el dashboard (Storage > New
-- bucket > Private), luego aplica esta politica para que cada usuario
-- solo pueda leer/escribir dentro de su propia carpeta {user_id}/...
-- ---------------------------------------------------------------------
create policy "progress-photos: owner read/write own folder"
  on storage.objects for all
  using (bucket_id = 'progress-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'progress-photos' and (storage.foldername(name))[1] = auth.uid()::text);
