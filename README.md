# Adviesneutraal Landing Page

Marketing site for Adviesneutraal, gebouwd met Next.js (App Router) en Tailwind CSS. De site is opgezet voor een eerste Vercel-deploy en vormt een basis voor toekomstige contentuitbreiding.

## Getting Started

Installeer afhankelijkheden:

```bash
npm install
```

Start de development server:

```bash
npm run dev
```

Open daarna [http://localhost:3000](http://localhost:3000) om de landing page te bekijken. Live reload staat standaard aan.

Belangrijke bestanden:

- `src/app/page.tsx` – hoofdpagina met copy, secties en call to action
- `src/app/layout.tsx` – globale layout en metadata
- `src/app/globals.css` – Tailwind imports en themakleuren

## Beschikbare scripts

- `npm run dev` – development server (standaard met Turbopack)
- `npm run build` – production build, klaar voor Vercel
- `npm run start` – start de gecompileerde app
- `npm run lint` – voert ESLint uit

## Deployen op Vercel

1. Push de repository naar GitHub of GitLab.
2. Koppel de repository in het Vercel dashboard.
3. Kies het pre-set Next.js framework (standaard instellingen werken direct).
4. Na de eerste deploy kun je environment-variabelen, custom domeinen of analytics toevoegen vanuit Vercel.

## Verdere stappen

- Vul echte contactgegevens in bij de CTA in `src/app/page.tsx`.
- Voeg waar nodig extra secties of contentblokken toe (bijvoorbeeld testimonials of blogposts).
- Voeg favicon en social share-afbeeldingen toe in de map `public`.
