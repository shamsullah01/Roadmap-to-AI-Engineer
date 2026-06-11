# Pathweights — the AI engineer roadmap

A self-paced curriculum from Python basics to production LLM systems, with a
checkpoint quiz that earns you XP. Progress and XP persist in localStorage,
so it survives refreshes and works with no backend at all.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Works out of the box on Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.js        fonts (Bricolage Grotesque / Instrument Sans / JetBrains Mono) + metadata
  page.js          entry point
  globals.css      the entire design system — tokens at the top in :root
components/
  App.js           hero, sidebar (level card + stage nav), layout
  Roadmap.js       the vertical rail with expandable stages and topic checkboxes
  Quiz.js          the checkpoint game: shuffled questions, streaks, results breakdown
lib/
  data.js          all curriculum + quiz content (edit this to extend the roadmap)
  useProgress.js   state + localStorage persistence + XP/level math
```

## Extending it

- **Add a topic or stage** — edit `lib/data.js`. Totals, progress bars,
  and the stage nav all derive from it automatically.
- **Add quiz questions** — append to `QUESTIONS` in `lib/data.js` with a
  `stage` id, options, the index of the correct answer, and a one-line `note`
  explanation shown after answering.
- **Tune the game** — `TOPIC_XP`, `QUESTION_XP`, `STREAK_BONUS`, and the
  `LEVELS` thresholds live at the bottom of `lib/data.js`.
- **Restyle** — every color, radius, and font role is a CSS variable in
  `:root` at the top of `app/globals.css`.

## New in v1.1

### Dark mode
The toggle in the top bar switches themes; your choice is saved, and first
visits follow your system preference. A tiny inline script applies the theme
before paint, so there's no flash of the wrong mode. All dark colors live in
the `html[data-theme="dark"]` block at the top of `globals.css`.

### Review mode (spaced repetition, the simple kind)
Every question you miss goes into a persistent review pile. The quiz intro
and results screens show a "Review missed (n)" button that runs only those
questions — answer one correctly and it leaves the pile. The pile survives
refreshes and full checkpoint re-runs.

### Optional cross-device sync (Supabase)
The app is local-first: with no configuration it behaves exactly as before.
To sync progress across devices:

1. Create a free project at supabase.com, then run this in its SQL editor:

```sql
create table progress (
  id uuid primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table progress enable row level security;

create policy "device sync" on progress
  for all to anon
  using (true)
  with check (true);
```

2. Copy `.env.local.example` to `.env.local` and fill in your project URL
   and anon key (Project settings → API).
3. Restart the dev server. The footer will read "progress synced".

How it works: each browser generates an anonymous device id, and progress is
upserted to one row per device with a debounce. On load, the remote copy wins
if it exists; otherwise local progress is pushed up. The Supabase client is
loaded dynamically, so it never ships in the bundle unless configured.

**A caveat worth knowing:** this is convenience sync without sign-in, and the
policy above lets any anonymous client write to the table — fine for a
personal project, not for real users. To take it further, add Supabase Auth,
key rows by `auth.uid()`, and tighten the policy to
`using (auth.uid() = id)`.
# Roadmap-to-AI-Engineer
