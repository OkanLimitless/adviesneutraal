const phoneDisplay = "085 087 0276";
const phoneHref = "tel:+31850870276";
const emailAddress = "energie@adviesneutraal.nl";
const emailHref = `mailto:${emailAddress}`;

const benefits = [
  {
    title: "Direct verbonden",
    description:
      "Binnen 20 seconden contact met een energie-expert. Geen wachtrij, geen doorkiesmenu’s.",
  },
  {
    title: "Persoonlijke service",
    description:
      "Je krijgt een vast aanspreekpunt dat meteen met je meekijkt naar facturen, contracten en storingen.",
  },
  {
    title: "Onafhankelijke hulp",
    description:
      "We werken samen met meerdere leveranciers en zoeken de snelste oplossing voor jouw vraag.",
  },
  {
    title: "Ook ’s avonds bereikbaar",
    description:
      "Bel wanneer het jou uitkomt. We staan klaar tot laat in de avond en in het weekend.",
  },
];

const callReasons = [
  {
    title: "Vragen over factuur of voorschot",
    description:
      "Laat ons meekijken naar onduidelijke posten, termijnbedragen of terugbetalingen.",
  },
  {
    title: "Contract wijzigen of verlengen",
    description:
      "Direct uitleg over tarieven, looptijden en de beste optie voor jouw situatie.",
  },
  {
    title: "Overstappen naar andere leverancier",
    description:
      "We regelen de overstap zonder onderbreking en vergelijken met actuele aanbiedingen.",
  },
  {
    title: "Storing melden of oplossen",
    description:
      "Wij schakelen met de juiste partij en houden je op de hoogte tot het verholpen is.",
  },
];

const trustSignals = [
  "Duizenden tevreden bellers per jaar",
  "Geen wachtrij: we pakken je gesprek direct op",
  "Altijd een oplossing of vervolgstap binnen hetzelfde gesprek",
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-white text-slate-900">
      <header className="border-b border-white/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            Adviesneutraal Klantenservice Energie
          </span>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden text-slate-500 sm:inline">
              Binnen 20 seconden iemand aan de lijn
            </span>
            <a
              className="hidden rounded-full bg-sky-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-sky-700 sm:inline-flex sm:items-center sm:justify-center"
              href={phoneHref}
            >
              Bel nu
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-28 md:pb-16">
        <section className="px-4 pb-14 pt-12 sm:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">
              Klantenservice Energie
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Direct hulp bij al je energiezaken – bel nu
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Binnen 20 seconden praat je met een deskundige energie-expert. We
              lossen factuurvragen, contractwijzigingen en storingen meteen met je
              op.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
              <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
                Bel direct
              </p>
              <a className="text-3xl font-semibold text-slate-900" href={phoneHref}>
                {phoneDisplay}
              </a>
            </div>
            <a
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-700 sm:w-auto"
              href={phoneHref}
            >
              Bel nu – direct verbonden
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Direct verbonden • Geen wachttijd • Normaal tarief
            </p>
            <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex items-start gap-3 rounded-2xl border border-white bg-white/70 p-4 text-left shadow-sm shadow-slate-200/60"
                >
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    ●
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                      {benefit.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white px-4 py-12 sm:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                Waarmee mogen we je helpen?
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Onze energie-experts luisteren mee, denken vooruit en zorgen voor
                een concrete vervolgstap tijdens het gesprek.
              </p>
            </div>
            <div className="space-y-3">
              {callReasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm transition hover:border-sky-200 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                    <span className="hidden text-lg text-sky-500 sm:inline">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600"
              href={phoneHref}
            >
              Bel nu – direct verbonden
            </a>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-lg shadow-slate-200/70">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
              Ervaring van klanten
            </p>
            <p className="mt-4 text-2xl font-semibold text-slate-900">
              “Gebeld binnen 20 seconden – super snel geholpen!”
            </p>
            <p className="mt-3 text-sm text-slate-600">Sandra M., Amsterdam</p>
            <div className="mt-6 flex flex-col items-center gap-2 text-left sm:flex-row sm:justify-center sm:text-center">
              <ul className="space-y-2 text-sm text-slate-600">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-900 px-4 py-12 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Klaar om direct antwoord te krijgen?
            </h2>
            <p className="mt-4 text-sm text-slate-200 sm:text-base">
              Bel {phoneDisplay} en je spreekt binnen 20 seconden een specialist.
              We staan voor je klaar bij elke energie-gerelateerde vraag.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600 sm:w-auto"
                href={phoneHref}
              >
                Bel {phoneDisplay}
              </a>
              <a
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                href={emailHref}
              >
                Terugbellen aanvragen
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-300">
              Bereikbaar van 08:00 tot 22:00 uur, ook in het weekend.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/90 px-4 py-6 text-left text-sm text-slate-500 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Adviesneutraal Klantenservice Energie. Alle rechten
            voorbehouden.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="hover:text-slate-700" href="/privacy">
              Privacyverklaring
            </a>
            <span className="hidden h-4 w-px bg-slate-200 sm:inline" />
            <span className="text-slate-400">
              Onafhankelijke klantenservice voor al uw energievraag.
            </span>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-orange-400/40 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md flex-col">
          <a
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-600"
            href={phoneHref}
          >
            Bel nu – direct verbonden
          </a>
          <p className="mt-2 text-center text-xs text-slate-500">
            {phoneDisplay} • Normaal beltarief • Geen wachtrij
          </p>
        </div>
      </div>
    </div>
  );
}
