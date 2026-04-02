import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Schweiz — Professionelle Websites & KI-Automatisierung | El Fennir",
  description:
    "Professionelles Webdesign in der Schweiz. Moderne Webseiten, KI-Chatbots und Automatisierung für Schweizer Unternehmen. Ab CHF 490. Gegründet in Zürich.",
  keywords: [
    "webdesign schweiz",
    "website erstellen schweiz",
    "ki automatisierung schweiz",
    "webseite zürich",
    "webdesign zürich",
    "webdesign agentur schweiz",
    "homepage erstellen schweiz",
    "website agentur zürich",
    "webseite erstellen lassen schweiz",
    "professionelle website schweiz",
    "ki chatbot schweiz",
    "automatisierung schweiz",
    "günstige webseite schweiz",
    "webentwicklung zürich",
    "website design bern",
    "webdesign basel",
  ],
  openGraph: {
    title: "Webdesign Schweiz — Professionelle Websites & KI-Automatisierung",
    description:
      "Moderne Webseiten, KI-Chatbots und Automatisierung für Schweizer Unternehmen. Ab CHF 490. Lieferung in 7 Tagen.",
    type: "website",
    url: "https://elfennir.com/webdesign-schweiz",
    locale: "de_CH",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Schweiz — Professionelle Websites & KI-Automatisierung",
    description:
      "Moderne Webseiten, KI-Chatbots und Automatisierung für Schweizer Unternehmen. Ab CHF 490.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/webdesign-schweiz" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Webdesign Schweiz",
    description:
      "Professionelles Webdesign, KI-Chatbots und Automatisierung für Schweizer Unternehmen. Gegründet von einem in Zürich aufgewachsenen Unternehmer.",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    founder: {
      "@type": "Person",
      name: "Yassin El Fennir",
      description: "In Zürich aufgewachsen, Gründer von El Fennir Digital Agency",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    priceRange: "€€",
    areaServed: [
      { "@type": "Country", name: "Switzerland" },
      { "@type": "City", name: "Zürich" },
      { "@type": "City", name: "Bern" },
      { "@type": "City", name: "Basel" },
      { "@type": "City", name: "Genf" },
      { "@type": "City", name: "Lausanne" },
    ],
    sameAs: ["https://wa.me/358466109064", "https://elfennir.com"],
    knowsLanguage: ["de", "en", "es", "fi", "fr"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Webdesign & KI-Automatisierung für die Schweiz",
    provider: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
    areaServed: { "@type": "Country", name: "Switzerland" },
    serviceType: "Webdesign, KI-Chatbots, Automatisierung",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Website",
        price: "490",
        priceCurrency: "CHF",
        description: "Moderne One-Page-Website mit SEO und mobilem Design",
      },
      {
        "@type": "Offer",
        name: "Business Website",
        price: "990",
        priceCurrency: "CHF",
        description: "Mehrseitige Website mit CMS, Blog und erweiterten Funktionen",
      },
      {
        "@type": "Offer",
        name: "Premium Website + KI",
        price: "1490",
        priceCurrency: "CHF",
        description: "Komplette Website mit KI-Chatbot und Automatisierungen",
      },
    ],
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://elfennir.com" },
    { "@type": "ListItem", position: 2, name: "Webdesign Schweiz", item: "https://elfennir.com/webdesign-schweiz" },
  ],
};

const features = [
  {
    title: "Verwurzelt in Zürich",
    desc: "Unser Gründer ist in Zürich aufgewachsen und versteht die Schweizer Geschäftskultur, Qualitätsstandards und lokale Märkte aus erster Hand.",
    color: "#9945ff",
  },
  {
    title: "Mehrsprachig",
    desc: "Wir kommunizieren fliessend auf Deutsch, Englisch, Spanisch, Finnisch und Französisch — ideal für die mehrsprachige Schweiz.",
    color: "#00d1ff",
  },
  {
    title: "Schweizer Qualität, faire Preise",
    desc: "Professionelle Webseiten ab CHF 490 — ohne Kompromisse bei Qualität, Design oder Performance. Deutlich günstiger als lokale Agenturen.",
    color: "#14f195",
  },
  {
    title: "Lieferung in 7 Tagen",
    desc: "Keine monatelangen Wartezeiten. Ihre neue Website ist innerhalb einer Woche online — inklusive SEO und responsivem Design.",
    color: "#f971ff",
  },
  {
    title: "Modernste Technologie",
    desc: "Next.js, React, Tailwind CSS — dieselbe Technologie, die Vercel, Netflix und Notion verwenden. Blitzschnell und zukunftssicher.",
    color: "#9945ff",
  },
  {
    title: "KI & Automatisierung",
    desc: "Wir integrieren intelligente Chatbots und Automatisierungen, die Ihre Kunden betreuen, Termine buchen und Leads qualifizieren — rund um die Uhr.",
    color: "#00d1ff",
  },
];

const services = [
  {
    title: "Professionelle Webseiten",
    desc: "Moderne, mobiloptimierte Websites, die Ihre Marke perfekt repräsentieren und bei Google in der Schweiz ranken. SEO und Analytics inklusive.",
    price: "Ab CHF 490",
    color: "#00d1ff",
  },
  {
    title: "KI-Chatbots",
    desc: "Intelligente Chatbots, die Kundenanfragen beantworten, Termine buchen und Leads qualifizieren — automatisch, 24 Stunden am Tag, 7 Tage die Woche.",
    price: "Ab CHF 500",
    color: "#9945ff",
  },
  {
    title: "Automatisierung & Workflows",
    desc: "n8n-basierte Automatisierungen, die repetitive Aufgaben eliminieren: E-Mail-Marketing, CRM-Integration, Social Media und mehr.",
    price: "Ab CHF 300 + CHF 80/Mt.",
    color: "#14f195",
  },
  {
    title: "SEO & Digitales Marketing",
    desc: "Suchmaschinenoptimierung für den Schweizer Markt. Lokales SEO für Zürich, Bern, Basel und die gesamte Schweiz.",
    price: "Inklusive",
    color: "#f971ff",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "CHF 490",
    eur: "450 €",
    features: [
      "One-Page-Website",
      "Responsives Design",
      "SEO-Grundoptimierung",
      "Kontaktformular",
      "SSL & Hosting",
      "Lieferung in 7 Tagen",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "CHF 990",
    eur: "910 €",
    features: [
      "Mehrseitige Website (bis 5 Seiten)",
      "CMS für einfache Verwaltung",
      "Blog-Integration",
      "Google Analytics & Search Console",
      "Social-Media-Integration",
      "E-Mail-Support 30 Tage",
    ],
    popular: true,
  },
  {
    name: "Premium + KI",
    price: "CHF 1'490",
    eur: "1'370 €",
    features: [
      "Alles aus Business",
      "KI-Chatbot integriert",
      "Workflow-Automatisierung",
      "WhatsApp-Business-Integration",
      "Prioritäts-Support",
      "Monatliche Performance-Berichte",
    ],
    popular: false,
  },
];

export default function WebdesignSchweizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-[#9945ff]/[0.05] rounded-full blur-[140px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d1ff]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Webdesign Schweiz — Gegr&uuml;ndet in Z&uuml;rich
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professionelles Webdesign
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                f&uuml;r die Schweiz
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-5">
              Moderne Webseiten, KI-Chatbots und Automatisierung f&uuml;r Schweizer Unternehmen.
              Von einem in Z&uuml;rich aufgewachsenen Gr&uuml;nder — mit Schweizer Qualit&auml;tsanspr&uuml;chen, zu fairen Preisen.
            </p>
            <p className="text-base text-slate-500 max-w-xl mx-auto mb-10">
              Ob KMU in Z&uuml;rich, Startup in Bern oder Gastronomiebetrieb in Basel — wir liefern Ihre
              Website in 7 Tagen. Ab CHF 490, inklusive SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hallo!%20Ich%20brauche%20eine%20professionelle%20Website%20f%C3%BCr%20mein%20Unternehmen%20in%20der%20Schweiz."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Kostenloses Angebot via WhatsApp
              </a>
              <Link
                href="/preise-schweiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* ── Warum El Fennir ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Warum Schweizer Unternehmen <span className="text-[#9945ff]">El Fennir w&auml;hlen</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Unser Gr&uuml;nder Yassin El Fennir ist in Z&uuml;rich aufgewachsen und versteht den Schweizer Markt
              aus erster Hand. Wir kombinieren Schweizer Qualit&auml;tsanspr&uuml;che mit modernster Technologie
              und bieten dabei Preise, die f&uuml;r jedes KMU erschwinglich sind.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <svg className="w-5 h-5" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dienstleistungen ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Unsere <span className="text-[#00d1ff]">Dienstleistungen</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Vom einfachen Webauftritt bis zur kompletten digitalen Transformation — wir liefern
              alles aus einer Hand f&uuml;r Schweizer Unternehmen in Z&uuml;rich, Bern, Basel, Genf und dar&uuml;ber hinaus.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: service.color }}
                  />
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                  <span className="text-sm font-semibold" style={{ color: service.color }}>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Preise ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Transparente <span className="text-[#14f195]">Preise</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Keine versteckten Kosten, keine &Uuml;berraschungen. Professionelle Webseiten f&uuml;r Schweizer
              Unternehmen — zu einem Bruchteil der &uuml;blichen Agenturpreise.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all ${
                    plan.popular
                      ? "border-[#9945ff]/40 bg-[#9945ff]/[0.04] shadow-lg shadow-[#9945ff]/10"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9945ff] text-white text-xs font-semibold">
                      Beliebt
                    </span>
                  )}
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">({plan.eur})</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <svg className="w-4 h-4 text-[#14f195] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/358466109064?text=Hallo!%20Ich%20interessiere%20mich%20f%C3%BCr%20das%20Paket%20%22{plan.name}%22%20f%C3%BCr%20mein%20Unternehmen%20in%20der%20Schweiz."
                    className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "sol-btn text-white"
                        : "border border-white/10 text-white hover:border-[#9945ff]/40 hover:bg-white/[0.03]"
                    }`}
                  >
                    Jetzt anfragen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Über den Gründer ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Von Z&uuml;rich <span className="text-[#00d1ff]">in die Welt</span>
            </h2>
            <p className="text-slate-400 mb-4">
              Yassin El Fennir wurde in Spanien geboren, wuchs in Z&uuml;rich auf und lebt heute in Z&uuml;rich, Schweiz.
              Diese internationale Erfahrung fliesst in jedes Projekt ein: Wir verstehen den Schweizer
              Qualit&auml;tsanspruch, kennen die lokale Gesch&auml;ftskultur und arbeiten mit modernsten Technologien.
            </p>
            <p className="text-slate-400 mb-4">
              El Fennir bedient Unternehmen in der gesamten Schweiz — von Einzelunternehmen in Z&uuml;rich
              &uuml;ber Restaurants in Bern bis hin zu Tech-Startups in Basel. Unsere Kunden sch&auml;tzen
              die pers&ouml;nliche Betreuung, schnelle Lieferzeiten und das hervorragende Preis-Leistungs-Verh&auml;ltnis.
            </p>
            <p className="text-slate-500 text-sm">
              Wir sprechen Deutsch, Englisch, Spanisch, Finnisch und Franz&ouml;sisch. Remote-Zusammenarbeit weltweit.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              H&auml;ufig gestellte <span className="text-[#9945ff]">Fragen</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Arbeiten Sie auch mit Schweizer Unternehmen?",
                  a: "Ja! Unser Gründer ist in Zürich aufgewachsen. Wir betreuen Kunden in der gesamten Schweiz — remote und persönlich bei Bedarf. Die Kommunikation ist auf Deutsch, Englisch oder Französisch möglich.",
                },
                {
                  q: "Wie schnell ist meine Website fertig?",
                  a: "In der Regel innerhalb von 7 Tagen. Bei komplexeren Projekten mit KI-Integration oder Automatisierung kann es 2-3 Wochen dauern.",
                },
                {
                  q: "Warum sind Ihre Preise so günstig im Vergleich zu Schweizer Agenturen?",
                  a: "Wir arbeiten schlank und nutzen modernste KI-Tools, um effizienter zu liefern. Dadurch können wir Schweizer Qualität zu internationalen Preisen anbieten — ab CHF 490 statt CHF 5'000+.",
                },
                {
                  q: "In welcher Währung kann ich bezahlen?",
                  a: "Wir akzeptieren EUR, CHF und GBP via Banküberweisung, Stripe (Kreditkarte) oder Revolut. CHF-Zahlungen sind kein Problem.",
                },
                {
                  q: "Bieten Sie auch KI-Chatbots und Automatisierung an?",
                  a: "Ja, das ist eine unserer Kernkompetenzen. Wir integrieren KI-Chatbots, die Kundenanfragen automatisch beantworten, und n8n-Workflows, die repetitive Aufgaben eliminieren.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                  <p className="text-slate-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Bereit f&uuml;r Ihre neue <span className="text-[#14f195]">Website</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">
              Kontaktieren Sie uns f&uuml;r ein kostenloses Erstgespr&auml;ch. Wir analysieren Ihre Anforderungen und
              erstellen Ihnen ein massgeschneidertes Angebot — innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/358466109064?text=Hallo!%20Ich%20m%C3%B6chte%20eine%20professionelle%20Website%20f%C3%BCr%20mein%20Schweizer%20Unternehmen."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                WhatsApp schreiben
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Webdesign-Anfrage%20Schweiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                E-Mail senden
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              yassin@elfennir.com &middot; WhatsApp: +358 46 610 9064 &middot; Remote-Service f&uuml;r die ganze Schweiz
            </p>
          </div>
        </section>
        {/* Alle Preise + Kunden */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-slate-400 mb-6">
              &Uuml;ber 50 zufriedene Kunden in der Schweiz und weltweit
            </p>
            <Link
              href="/preise-schweiz"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#14f195]/30 text-[#14f195] font-semibold text-lg hover:bg-[#14f195]/[0.05] transition-all"
            >
              Alle Preise ansehen &rarr;
            </Link>
          </div>
        </section>

        {/* Unsere Standorte */}
        <section className="py-20 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Unsere <span className="text-[#00d1ff]">Standorte</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Professionelles Webdesign f&uuml;r die wichtigsten Schweizer St&auml;dte &mdash; remote und zuverl&auml;ssig.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Z\u00fcrich", href: "/webdesign-zuerich", desc: "Wirtschaftszentrum der Schweiz", color: "#9945ff" },
                { name: "Bern", href: "/webdesign-bern", desc: "Bundesstadt und Verwaltungszentrum", color: "#00d1ff" },
                { name: "Basel", href: "/webdesign-basel", desc: "Pharma- und Kulturmetropole am Rhein", color: "#14f195" },
                { name: "Luzern", href: "/webdesign-luzern", desc: "Perle der Zentralschweiz", color: "#f971ff" },
                { name: "Winterthur", href: "/webdesign-winterthur", desc: "Innovationsstandort im Kanton Z\u00fcrich", color: "#9945ff" },
                { name: "St. Gallen", href: "/webdesign-st-gallen", desc: "Tor zur Ostschweiz und HSG-Stadt", color: "#00d1ff" },
              ].map((city, i) => (
                <Link
                  key={i}
                  href={city.href}
                  className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                >
                  <div
                    className="w-3 h-3 rounded-full mb-4"
                    style={{ backgroundColor: city.color }}
                  />
                  <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-2 group-hover:text-[#00d1ff] transition-colors">
                    Webdesign {city.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{city.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
