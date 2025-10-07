import Link from "next/link";

const highlights = [
  {
    title: "Volledig onafhankelijk",
    description:
      "Geen provisies of productdruk. We analyseren de markt breed en adviseren wat echt bij jou past.",
  },
  {
    title: "Heldere strategie",
    description:
      "Van pensioen en vermogensopbouw tot risicoafdekking: elke stap koppelen we aan concrete doelen.",
  },
  {
    title: "Blijvend betrokken",
    description:
      "We monitoren je plan, toetsen wet- en regelgeving en blijven sparringpartner wanneer jouw situatie verandert.",
  },
];

const services = [
  {
    title: "Financiële planning",
    description:
      "Inzicht in inkomsten, vermogen en verplichtingen met scenario’s die laten zien wat er kan én hoe je daar komt.",
    result: "Resultaat: een routekaart voor je financiële keuzes in de komende jaren.",
  },
  {
    title: "Hypotheek- en woonadvies",
    description:
      "Objectieve vergelijking van hypotheekaanbieders, met aandacht voor flexibiliteit, risico’s en toekomstplannen.",
    result: "Resultaat: een woonoplossing die jouw leven ondersteunt in plaats van bepaalt.",
  },
  {
    title: "Bescherming & nalatenschap",
    description:
      "Afstemming van verzekeringen, testament en zakelijke structuren zodat nabestaanden en partners niet voor verrassingen staan.",
    result: "Resultaat: rust door een juridisch en financieel goed geregelde nalatenschap.",
  },
];

const steps = [
  {
    title: "Kennismaking",
    description:
      "In een digitaal of fysiek gesprek verkennen we jouw vragen, doelen en tijdlijn. De eerste kennismaking is altijd kosteloos.",
    outcome: "Je ontvangt een voorstel met onze aanpak en een transparant tarief.",
  },
  {
    title: "Analyse & advies",
    description:
      "We brengen je huidige situatie in kaart, toetsen alternatieven en bouwen een actiegericht plan met prioriteiten.",
    outcome:
      "Je krijgt een duidelijk adviesrapport met kortetermijnacties en strategische aanbevelingen.",
  },
  {
    title: "Implementatie & opvolging",
    description:
      "We begeleiden de uitvoering, houden voortgang bij en plannen vaste momenten om bij te sturen waar nodig.",
    outcome:
      "Je blijft op koers omdat we meekijken, meten en samen nieuwe ontwikkelingen vertalen naar slimme keuzes.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <span className="text-lg font-semibold tracking-tight text-white">
            Adviesneutraal
          </span>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <Link className="transition hover:text-white" href="#diensten">
              Diensten
            </Link>
            <Link className="transition hover:text-white" href="#aanpak">
              Aanpak
            </Link>
            <Link className="transition hover:text-white" href="#contact">
              Contact
            </Link>
          </nav>
          <Link
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-slate-950 sm:block"
            href="#contact"
          >
            Plan een gesprek
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 -z-10 flex justify-center"
          >
            <div className="h-[520px] w-[900px] -translate-y-40 rounded-full bg-sky-500/25 blur-[140px]" />
          </div>
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                Onafhankelijk financieel advies
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Bouw aan financiële rust met een partner die alleen aan jouw
                kant staat.
              </h1>
              <p className="mt-6 text-lg text-slate-200/80">
                Adviesneutraal helpt professionals, ondernemers en gezinnen aan
                een robuust financieel plan. We koppelen expertise aan heldere
                taal zodat je keuzes maakt met vertrouwen.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                  href="#contact"
                >
                  Plan een kennismaking
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                  href="#aanpak"
                >
                  Onze aanpak
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-400">
                Gratis intake binnen 48 uur ingepland, digitaal of op locatie.
              </p>
            </div>
            <div className="w-full max-w-md rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
                Waarom klanten kiezen voor ons
              </h2>
              <ul className="mt-6 grid gap-4">
                {highlights.map((highlight) => (
                  <li
                    key={highlight.title}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-200/90">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200/80">
                      {highlight.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="border-y border-white/10 bg-slate-950/80"
          id="diensten"
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                Diensten
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Eén aanspreekpunt voor elke levensfase en elke financiële
                beslissing.
              </h2>
              <p className="mt-4 text-base text-slate-200/80">
                We verbinden persoonlijke doelen met de beste keuzes in de
                markt. Onze trajecten zijn modulair zodat je instapt waar de
                meeste waarde te winnen is.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/40 transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-200/85">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-6 text-sm font-medium text-sky-200">
                    {service.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-950 via-slate-900/70 to-slate-950" id="aanpak">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                Werkwijze
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Transparant proces met meetbare voortgang.
              </h2>
              <p className="mt-4 text-base text-slate-200/80">
                Elke stap levert inzichten en beslissingen op die je meteen kunt
                toepassen. We werken digitaal samen, maar staan ook naast je bij
                gesprekken met banken, notarissen en andere specialisten.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 ring-1 ring-white/5"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Stap {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-200/85">
                    {step.description}
                  </p>
                  <p className="mt-6 text-sm font-medium text-sky-200">
                    {step.outcome}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20" id="contact">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-800/60 p-10 text-center shadow-xl shadow-slate-950/40">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/80">
              Klaar voor de volgende stap?
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Plan een onafhankelijk adviesgesprek.
            </h2>
            <p className="mt-4 text-base text-slate-200/80">
              Vertel ons kort wat je zoekt en we laten binnen één werkdag weten
              hoe we kunnen helpen. Liever direct schakelen? Bel of stuur een
              bericht via e-mail.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200"
                href="mailto:info@adviesneutraal.nl"
              >
                Mail info@adviesneutraal.nl
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
                href="tel:+31851234567"
              >
                Bel +31 (0)85 123 4567
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              We sturen binnen 24 uur een bevestiging met een voorstel voor de
              afspraak.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Adviesneutraal. Alle rechten voorbehouden.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-white" href="mailto:info@adviesneutraal.nl">
              info@adviesneutraal.nl
            </a>
            <span className="hidden h-4 w-px bg-slate-700 sm:inline" />
            <a className="transition hover:text-white" href="#diensten">
              Diensten
            </a>
            <a className="transition hover:text-white" href="#aanpak">
              Aanpak
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
