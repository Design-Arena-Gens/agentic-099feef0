## Hi There

A playful micro-site that serves gentle greetings in multiple languages, paired with live time and day context. Tap the shuffle action to explore new messages whenever you want a friendly nudge.

## Tech Stack

- Next.js App Router with TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- `next/font` for the Geist type family

## Local Development

```bash
npm install
npm run dev
```

The site runs on [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Deployment

The project is ready to deploy on Vercel (`vercel deploy --prod`). Update the greeting list in `src/components/InteractiveHello.tsx` to keep the conversation growing.
