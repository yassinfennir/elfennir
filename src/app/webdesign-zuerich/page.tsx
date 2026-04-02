"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Webdesign Zürich",
    description:
      "Professionelles Webdesign in Zürich. Moderne Websites, KI-Chatbots und Automatisierung für Zürcher Unternehmen. Gegründet von einem in Zürich aufgewachsenen Unternehmer.",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    founder: {
      "@type": "Person",
      name: "Yassin El Fennir",
      description:
        "In Zürich aufgewachsen, Gründer von El Fennir Digital Agency",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zürich",
      addressLocality: "Zürich",
      postalCode: "8000",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Zürich" },
      { "@type": "City", name: "Winterthur" },
      { "@type": "City", name: "Uster" },
      { "@type": "City", name: "Dübendorf" },
      { "@type": "City", name: "Dietikon" },
      { "@type": "AdministrativeArea", name: "Kanton Zürich" },
    ],
    sameAs: ["https://wa.me/358466109064", "https://elfennir.com"],
    knowsLanguage: ["de", "en", "es", "fi"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Webdesign Zürich — Professionelle Websites",
    provider: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
    areaServed: { "@type": "City", name: "Zürich" },
    serviceType: "Webdesign, KI-Chatbots, Automatisierung",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Website",
        price: "490",
        priceCurrency: "CHF",
        description:
          "Moderne One-Page-Website mit SEO und mobilem Design für Zürcher Unternehmen",
      },
      {
        "@type": "Offer",
        name: "Business Website",
        price: "990",
        priceCurrency: "CHF",
        description:
          "Mehrseitige Website mit CMS, Blog und erweiterten Funktionen",
      },
      {
        "@type": "Offer",
        name: "Premium Website + KI",
        price: "1490",
        priceCurrency: "CHF",
        description:
          "Komplette Website mit KI-Chatbot und Automatisierungen für Zürich",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine professionelle Website in Zürich?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bei El Fennir beginnen professionelle Websites ab CHF 490. Je nach Umfang und Funktionen liegen die Preise zwischen CHF 490 und CHF 1'490. Deutlich günstiger als die meisten Zürcher Agenturen, die oft ab CHF 5'000 starten.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Erstellung einer Website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In der Regel ist Ihre Website innerhalb von 7 Tagen online. Komplexere Projekte mit KI-Integration oder Automatisierung dauern 2–3 Wochen.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch KI-Chatbots für Zürcher Unternehmen an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir integrieren intelligente KI-Chatbots, die Kundenanfragen automatisch beantworten, Termine buchen und Leads qualifizieren — rund um die Uhr.",
        },
      },
      {
        "@type": "Question",
        name: "Arbeiten Sie vor Ort in Zürich?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unser Gründer ist in Zürich aufgewachsen und kennt den lokalen Markt bestens. Wir arbeiten sowohl remote als auch persönlich mit Zürcher Kunden zusammen.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Technologien verwenden Sie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir verwenden modernste Technologien wie Next.js, React und Tailwind CSS — dieselben Tools, die auch Netflix, Vercel und Notion nutzen. Ihre Website ist blitzschnell und zukunftssicher.",
        },
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
    { "@type": "ListItem", position: 3, name: "Webdesign Zürich", item: "https://elfennir.com/webdesign-zuerich" },
  ],
};

const features = [
  {
    title: "In Zürich aufgewachsen",
    desc: "Unser Gründer kennt den Zürcher Markt aus erster Hand — von der Bahnhofstrasse bis Oerlikon. Wir verstehen Ihre Kunden, weil wir selbst Zürcher sind.",
    color: "#9945ff",
    icon: "map",
  },
  {
    title: "Modernste Technologie",
    desc: "Next.js, React, Tailwind CSS — dieselben Tools, die Netflix und Notion verwenden. Ihre Website lädt blitzschnell und ist für die Zukunft gerüstet.",
    color: "#00d1ff",
    icon: "code",
  },
  {
    title: "Faire Preise in CHF",
    desc: "Ab CHF 490 statt CHF 5'000+ bei lokalen Zürcher Agenturen. Kein Kompromiss bei Qualität — nur bei überhöhten Preisen.",
    color: "#14f195",
    icon: "price",
  },
  {
    title: "Lieferung in 7 Tagen",
    desc: "Keine monatelangen Wartezeiten. Ihre Website ist innerhalb einer Woche online — inklusive SEO, responsivem Design und SSL.",
    color: "#f971ff",
    icon: "clock",
  },
  {
    title: "KI & Automatisierung",
    desc: "Intelligente Chatbots und n8n-Workflows, die Kundenanfragen beantworten, Termine buchen und Leads qualifizieren — 24/7.",
    color: "#9945ff",
    icon: "ai",
  },
  {
    title: "Mehrsprachig",
    desc: "Wir kommunizieren auf Deutsch, Englisch, Spanisch und Finnisch. Ideal für internationale Unternehmen in Zürich.",
    color: "#00d1ff",
    icon: "globe",
  },
];

const services = [
  {
    title: "Professionelle Webseiten",
    desc: "Moderne, mobiloptimierte Websites, die Ihr Zürcher Unternehmen perfekt repräsentieren und bei Google auf Seite 1 ranken.",
    price: "Ab CHF 490",
    color: "#00d1ff",
  },
  {
    title: "KI-Chatbots",
    desc: "Intelligente Chatbots, die Kundenanfragen automatisch beantworten, Termine buchen und Leads qualifizieren — rund um die Uhr.",
    price: "Ab CHF 550",
    color: "#9945ff",
  },
  {
    title: "Automatisierung & Workflows",
    desc: "n8n-basierte Automatisierungen: E-Mail-Marketing, CRM-Integration, Social Media und vieles mehr — massgeschneidert für Ihr Unternehmen.",
    price: "Ab CHF 350 + 90 CHF/Mt.",
    color: "#14f195",
  },
  {
    title: "SEO & Lokales Marketing",
    desc: "Suchmaschinenoptimierung speziell für den Zürcher Markt. Werden Sie gefunden, wenn Kunden in Zürich nach Ihren Leistungen suchen.",
    price: "Inklusive",
    color: "#f971ff",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Erstgespräch",
    desc: "Kostenlose Beratung via WhatsApp oder E-Mail. Wir analysieren Ihre Anforderungen und definieren den Projektumfang.",
    color: "#9945ff",
  },
  {
    step: "02",
    title: "Design & Entwicklung",
    desc: "Wir erstellen Ihre massgeschneiderte Website mit modernsten Technologien. Sie erhalten regelmässig Vorschauen zur Freigabe.",
    color: "#00d1ff",
  },
  {
    step: "03",
    title: "Review & Feedback",
    desc: "Sie prüfen das Ergebnis und geben Feedback. Bis zu 2 Revisionsrunden sind inklusive — bis Sie 100 % zufrieden sind.",
    color: "#14f195",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Ihre Website geht live. SEO, Analytics und 30 Tage Support sind inklusive. Optional: laufende Wartung und Weiterentwicklung.",
    color: "#f971ff",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "CHF 490",
    subtitle: "Perfekt für Einzelunternehmer in Zürich",
    features: [
      "One-Page-Website",
      "Responsives Design (Mobil + Desktop)",
      "SEO-Grundoptimierung für Zürich",
      "Kontaktformular",
      "SSL-Zertifikat & Hosting",
      "Lieferung in 7 Tagen",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "CHF 990",
    subtitle: "Für wachsende KMU in Zürich",
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
    subtitle: "Komplett-Paket mit Automatisierung",
    features: [
      "Alles aus Business",
      "KI-Chatbot integriert",
      "Workflow-Automatisierung (n8n)",
      "WhatsApp-Business-Integration",
      "Prioritäts-Support",
      "Monatliche Performance-Berichte",
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: "Was kostet eine professionelle Website in Zürich?",
    a: "Bei uns beginnen professionelle Websites ab CHF 490. Je nach Umfang und Funktionen liegen die Preise zwischen CHF 490 und CHF 1'490. Das ist deutlich günstiger als die meisten Zürcher Agenturen, die oft ab CHF 5'000 starten — ohne Qualitätsverlust.",
  },
  {
    q: "Wie lange dauert es, bis meine Website online ist?",
    a: "In der Regel ist Ihre Website innerhalb von 7 Tagen live. Komplexere Projekte mit KI-Chatbot oder Automatisierungen dauern 2–3 Wochen. Wir halten Sie über den gesamten Prozess auf dem Laufenden.",
  },
  {
    q: "Arbeiten Sie vor Ort in Zürich oder remote?",
    a: "Unser Gründer ist in Zürich aufgewachsen und kennt die Stadt bestens. Wir arbeiten sowohl remote als auch persönlich mit Zürcher Kunden zusammen. Die meisten Projekte lassen sich effizient remote abwickeln.",
  },
  {
    q: "Kann ich auch auf Deutsch kommunizieren?",
    a: "Selbstverständlich! Deutsch ist unsere Hauptsprache für Schweizer Kunden. Wir sprechen ausserdem Englisch, Spanisch und Finnisch — ideal für internationale Teams in Zürich.",
  },
  {
    q: "Bieten Sie auch laufende Wartung und Support an?",
    a: "Ja. Nach dem Launch sind 30 Tage E-Mail-Support inklusive. Darüber hinaus bieten wir monatliche Wartungspakete an — inklusive Updates, Sicherheitschecks und Performance-Monitoring.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function WebdesignZuerichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SEO metadata via head */}
      <title>
        Webdesign Zürich — Professionelle Websites für Ihr Unternehmen | El
        Fennir
      </title>
      <meta
        name="description"
        content="Professionelles Webdesign in Zürich. Moderne Websites, KI-Chatbots und Automatisierung für Zürcher Unternehmen. Ab CHF 490. Lieferung in 7 Tagen."
      />
      <meta
        name="keywords"
        content="webdesign zürich, website erstellen zürich, webdesign agentur zürich, homepage erstellen zürich, webseite zürich, webentwicklung zürich, ki chatbot zürich, website zürich kosten, professionelle website zürich, webdesigner zürich, seo zürich, webdesign kanton zürich"
      />
      <meta
        property="og:title"
        content="Webdesign Zürich — Professionelle Websites & KI-Automatisierung"
      />
      <meta
        property="og:description"
        content="Moderne Websites, KI-Chatbots und Automatisierung für Zürcher Unternehmen. Ab CHF 490. Lieferung in 7 Tagen."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://elfennir.com/webdesign-zuerich"
      />
      <meta property="og:locale" content="de_CH" />
      <meta
        property="og:image"
        content="https://elfennir.com/images/logo.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Webdesign Zürich — Professionelle Websites & KI-Automatisierung"
      />
      <meta
        name="twitter:description"
        content="Moderne Websites, KI-Chatbots und Automatisierung für Zürcher Unternehmen. Ab CHF 490."
      />
      <link
        rel="canonical"
        href="https://elfennir.com/webdesign-zuerich"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* Back Navigation */}
        <div className="fixed top-6 left-6 z-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Startseite</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-[#9945ff]/[0.05] rounded-full blur-[140px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d1ff]/[0.04] rounded-full blur-[120px]" />

          <motion.div
            className="relative max-w-5xl mx-auto px-6 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase"
            >
              Webdesign Z&uuml;rich &mdash; Von einem Z&uuml;rcher gegr&uuml;ndet
            </motion.span>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Webdesign Z&uuml;rich
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                Professionelle Websites f&uuml;r Ihr Unternehmen
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-5"
            >
              Moderne Webseiten, KI-Chatbots und Automatisierung f&uuml;r Z&uuml;rcher
              Unternehmen. Von einem in Z&uuml;rich aufgewachsenen Gr&uuml;nder &mdash;
              mit Schweizer Qualit&auml;t, zu fairen Preisen.
            </motion.p>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-slate-500 max-w-xl mx-auto mb-10"
            >
              Ob KMU in Z&uuml;rich-City, Startup in Oerlikon oder Restaurant in
              Wiedikon &mdash; wir liefern Ihre Website in 7 Tagen. Ab CHF 490,
              inklusive SEO.
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://wa.me/358466109064?text=Hallo!%20Ich%20brauche%20eine%20professionelle%20Website%20f%C3%BCr%20mein%20Unternehmen%20in%20Z%C3%BCrich."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                </svg>
                Kostenloses Angebot via WhatsApp
              </a>
              <Link
                href="/preise-schweiz"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Preise ansehen
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Dienstleistungen */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4"
              >
                Unsere{" "}
                <span className="text-[#00d1ff]">Dienstleistungen</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-center max-w-2xl mx-auto mb-14"
              >
                Vom einfachen Webauftritt bis zur kompletten digitalen
                Transformation &mdash; alles aus einer Hand f&uuml;r Ihr Z&uuml;rcher
                Unternehmen.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                  >
                    <div
                      className="w-3 h-3 rounded-full mb-4"
                      style={{ backgroundColor: service.color }}
                    />
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {service.desc}
                    </p>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      {service.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Warum El Fennir */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6"
              >
                Warum Z&uuml;rcher Unternehmen{" "}
                <span className="text-[#9945ff]">El Fennir w&auml;hlen</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-center max-w-2xl mx-auto mb-14"
              >
                Wir kombinieren lokale Marktkenntnis mit modernster Technologie
                und bieten Schweizer Qualit&auml;t zu fairen Preisen &mdash; weil wir
                wissen, dass jeder Franken z&auml;hlt.
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: item.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Prozess */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4"
              >
                Unser{" "}
                <span className="text-[#14f195]">Prozess</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-center max-w-2xl mx-auto mb-14"
              >
                In 4 einfachen Schritten zu Ihrer neuen Website &mdash;
                transparent, effizient und ohne b&ouml;se &Uuml;berraschungen.
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.12 * i }}
                    className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                  >
                    <span
                      className="text-4xl font-bold opacity-20 absolute top-4 right-4"
                      style={{ color: step.color }}
                    >
                      {step.step}
                    </span>
                    <div
                      className="w-3 h-3 rounded-full mb-4"
                      style={{ backgroundColor: step.color }}
                    />
                    <h3 className="text-white font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Preise */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4"
              >
                Transparente{" "}
                <span className="text-[#14f195]">Preise</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-center max-w-2xl mx-auto mb-14"
              >
                Keine versteckten Kosten. Professionelle Webseiten f&uuml;r
                Z&uuml;rcher Unternehmen &mdash; zu einem Bruchteil der &uuml;blichen
                Agenturpreise.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-6">
                {pricing.map((plan, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.12 * i }}
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
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-slate-500 text-xs mb-3">
                      {plan.subtitle}
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <svg
                            className="w-4 h-4 text-[#14f195] mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/358466109064?text=Hallo!%20Ich%20interessiere%20mich%20f%C3%BCr%20das%20${encodeURIComponent(plan.name)}-Paket%20f%C3%BCr%20mein%20Unternehmen%20in%20Z%C3%BCrich.`}
                      className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? "sol-btn text-white"
                          : "border border-white/10 text-white hover:border-[#9945ff]/40 hover:bg-white/[0.03]"
                      }`}
                    >
                      Jetzt anfragen
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14"
              >
                H&auml;ufig gestellte{" "}
                <span className="text-[#9945ff]">Fragen</span>
              </motion.h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.08 * i }}
                    className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                  >
                    <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                    <p className="text-slate-400 text-sm">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6"
              >
                Bereit f&uuml;r Ihre neue{" "}
                <span className="text-[#14f195]">Website</span>?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 max-w-xl mx-auto mb-10"
              >
                Kontaktieren Sie uns f&uuml;r ein kostenloses Erstgespr&auml;ch. Wir
                analysieren Ihre Anforderungen und erstellen ein
                massgeschneidertes Angebot &mdash; innerhalb von 24 Stunden.
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <a
                  href="https://wa.me/358466109064?text=Hallo!%20Ich%20m%C3%B6chte%20eine%20professionelle%20Website%20f%C3%BCr%20mein%20Unternehmen%20in%20Z%C3%BCrich."
                  className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                  </svg>
                  WhatsApp schreiben
                </a>
                <a
                  href="mailto:yassin@elfennir.com?subject=Webdesign-Anfrage%20Z%C3%BCrich"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
                >
                  E-Mail senden
                </a>
              </motion.div>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-slate-500 text-sm"
              >
                yassin@elfennir.com &middot; WhatsApp: +358 46 610 9064 &middot;
                Webdesign f&uuml;r Z&uuml;rich und den ganzen Kanton
              </motion.p>
            </motion.div>
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

        {/* Weitere Standorte */}
        <section className="py-12 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-xl font-bold text-white mb-6">
              Weitere Standorte
            </h2>
            <p className="text-slate-500 text-sm mb-4">
              <Link href="/webdesign-schweiz" className="text-[#00d1ff] hover:underline">
                Webdesign Schweiz
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/webdesign-bern" className="px-4 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all text-sm">Webdesign Bern</Link>
              <Link href="/webdesign-basel" className="px-4 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all text-sm">Webdesign Basel</Link>
              <Link href="/webdesign-luzern" className="px-4 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all text-sm">Webdesign Luzern</Link>
              <Link href="/webdesign-winterthur" className="px-4 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all text-sm">Webdesign Winterthur</Link>
              <Link href="/webdesign-st-gallen" className="px-4 py-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#9945ff]/40 transition-all text-sm">Webdesign St. Gallen</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
