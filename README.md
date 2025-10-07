# Adviesneutraal Klantenservice Energie

Single-page website voor de energie-klantenservice van Adviesneutraal. De pagina focust op telefonische conversies, met een mobiele sticky call-to-action, gebouwd met Next.js (App Router) en Tailwind CSS.

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

- `src/app/page.tsx` – hoofdpagina met hero, belredenen en sticky CTA
- `src/app/layout.tsx` – globale layout en metadata voor energie-klantenservice
- `src/app/globals.css` – Tailwind imports, kleuren en fontinstellingen

## Beschikbare scripts

- `npm run dev` – development server
- `npm run build` – production build, klaar voor Vercel
- `npm run start` – start de gecompileerde app
- `npm run lint` – voert ESLint uit

## Deployen op Vercel

1. Push de repository naar GitHub of GitLab.
2. Koppel de repository in het Vercel dashboard.
3. Kies het pre-set Next.js framework (standaard instellingen werken direct).
4. Na de eerste deploy kun je environment-variabelen, custom domeinen of analytics toevoegen vanuit Vercel.

## Verdere stappen

- Vervang de voorbeeld e-mail (`energie@adviesneutraal.nl`) door het juiste adres.
- Voeg extra bewijsvoering toe (bijv. reviews of keurmerken) in `src/app/page.tsx`.
- Plaats favicon en social share-afbeeldingen in `public/` voor een complete branding.
