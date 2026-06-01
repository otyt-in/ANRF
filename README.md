# ANRF Website

Aranya Niran Rosewood Foundation website built with Next.js, Sanity and Vercel.

## Preview

Open `preview.html` directly for a design preview without a server.

For a local static server, double-click `Start-ANRF-Preview.bat` and keep the terminal open.

## Real App

Install dependencies and run:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## CMS

Set these environment variables locally and on Vercel:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then visit `/studio` to edit content.

Until Sanity is configured, the site uses fallback content from `lib/content.ts`.

## Deployment

Import this repo into Vercel. Vercel will install dependencies and build the Next.js app.

Connect the custom domain only after the Vercel preview URL and CMS workflow look good.
