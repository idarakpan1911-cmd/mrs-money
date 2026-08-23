# Lumen

A Next.js 15, TypeScript, Tailwind starter for a safe, teen-focused Catholic learning platform.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production verification: `npm run build`.

## What is already functional

- Responsive App Router pages and a keyboard-accessible navigation shell.
- Interactive saint search, quiz answer feedback, lesson completion, prayer saving, and question-form confirmation.
- A small browser-only journey store so lesson completions and saved prayers persist across refreshes while prototyping.

## Authentication and data

The screens deliberately do **not** store credentials. Before production, connect `components/auth-form.tsx` to Supabase Auth or Firebase Auth, enforce a 13+ / jurisdiction-appropriate consent flow, and put user progress, favorites, game scores, questions, and moderator roles behind authenticated server routes plus row-level security. Never expose leaderboard identities or enable direct messaging by default.

Suggested tables: `profiles`, `lesson_progress`, `prayer_saves`, `verse_saves`, `saint_favorites`, `game_scores`, `badges`, `questions`, `moderation_reports`, and `notification_preferences`. Use a private nickname (not a name/location) for any future leaderboard.

### Production integration checklist

1. Create a Supabase project, enable email/password auth, and set the redirect URLs.
2. Copy `.env.example` to `.env.local`; only expose the URL and anon key to the browser.
3. Add SQL migrations with row-level security: users can only read/write their own profile, saves, progress, and questions; moderators/admins receive server-verified roles.
4. Replace the browser-only `JourneyProvider` mutations with authenticated server actions or API routes. Validate every request on the server.
5. Route questions and reports to a moderation queue. Do not publish content automatically, enable direct messaging, or show identifiable leaderboard data.

## Deploy to Vercel

Push this repository, import it at Vercel, set the production auth/database environment variables there, and deploy. Vercel detects Next.js automatically. Configure the auth provider&apos;s allowed redirect URLs for both the Vercel domain and local development.
