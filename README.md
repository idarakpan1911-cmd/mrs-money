# Lumen

A Next.js 15, TypeScript, Tailwind starter for a safe, teen-focused Catholic learning platform.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production verification: `npm run build`.

## Authentication and data

The screens deliberately do **not** store credentials. Before production, connect `components/auth-form.tsx` to Supabase Auth or Firebase Auth, enforce a 13+ / jurisdiction-appropriate consent flow, and put user progress, favorites, game scores, questions, and moderator roles behind authenticated server routes plus row-level security. Never expose leaderboard identities or enable direct messaging by default.

Suggested tables: `profiles`, `lesson_progress`, `prayer_saves`, `verse_saves`, `saint_favorites`, `game_scores`, `badges`, `questions`, `moderation_reports`, and `notification_preferences`. Use a private nickname (not a name/location) for any future leaderboard.

## Deploy to Vercel

Push this repository, import it at Vercel, set the production auth/database environment variables there, and deploy. Vercel detects Next.js automatically. Configure the auth provider&apos;s allowed redirect URLs for both the Vercel domain and local development.
