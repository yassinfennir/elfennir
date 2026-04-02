"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Star,
  Crown,
  Zap,
  MessageCircle,
  Bot,
  Workflow,
  Search,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

/* ─── Constantes ─── */

const WHATSAPP_NUMBER = "358466109064";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const ANIMATION_EASE = [0.22, 1, 0.36, 1] as const;
const ANIMATION_DURATION = 0.8;

function whatsappUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

/* ─── Schema.org JSON-LD ─── */

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Webdesign Preise Schweiz — El Fennir",
    description:
      "Premium Webdesign, KI-Chatbots und Automatisierung fuer Schweizer Unternehmen. Ab CHF 490.",
    brand: { "@type": "Brand", name: "El Fennir" },
    offers: [
      {
        "@type": "Offer",
        name: "Starter Website",
        price: "490",
        priceCurrency: "CHF",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://elfennir.com/preise-schweiz",
        description:
          "1-3 Seiten, modernes Design, mobiloptimiert, SEO, Kontaktformular, WhatsApp, 1 Jahr Support",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "490",
          priceCurrency: "CHF",
          valueAddedTaxIncluded: true,
        },
      },
      {
        "@type": "Offer",
        name: "Business Website",
        price: "990",
        priceCurrency: "CHF",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://elfennir.com/preise-schweiz",
        description:
          "Bis zu 7 Seiten, Premium-Design, KI-Chatbot, Google Maps, Terminbuchung, 2 Jahre Support",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "990",
          priceCurrency: "CHF",
          valueAddedTaxIncluded: true,
        },
      },
      {
        "@type": "Offer",
        name: "Premium + KI Website",
        price: "1490",
        priceCurrency: "CHF",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://elfennir.com/preise-schweiz",
        description:
          "Unbegrenzte Seiten, KI-Automatisierung, E-Commerce, SEO-Strategie, Google Ads, 3 Jahre Support",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1490",
          priceCurrency: "CHF",
          valueAddedTaxIncluded: true,
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet eine professionelle Website in der Schweiz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unsere Starter-Websites beginnen ab CHF 490 fuer 1-3 Seiten. Business-Websites mit KI-Chatbot kosten CHF 990, und das Premium-Paket mit voller KI-Automatisierung liegt bei CHF 1'490.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich bezahlen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir akzeptieren Bankueberweisung (CHF/EUR), Kreditkarte via Stripe, Revolut und TWINT. 50% Anzahlung bei Auftragsbestaetigung, 50% bei Lieferung.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell ist meine Website fertig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter-Websites liefern wir in 5-7 Tagen, Business-Websites in 7-10 Tagen und Premium-Projekte in 2-3 Wochen.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie Support nach der Lieferung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Je nach Paket erhalten Sie 1-3 Jahre Support inklusive. Danach bieten wir guenstige Wartungsvertraege ab CHF 90/Monat an.",
        },
      },
      {
        "@type": "Question",
        name: "Ist die Website DSGVO-konform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, alle unsere Websites sind vollstaendig DSGVO- und DSG-konform (Schweizer Datenschutzgesetz). Cookie-Banner, Datenschutzerklaerung und impressum sind inklusive.",
        },
      },
    ],
  },
];

/* ─── Datos de precios ─── */

interface PricingPlan {
  name: string;
  icon: typeof Zap;
  price: string;
  formattedPrice: string;
  desc: string;
  features: string[];
  popular: boolean;
  gradient: string;
  borderClass: string;
  glowColor: string;
  whatsappMessage: string;
  delivery: string;
  support: string;
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    icon: Zap,
    price: "490",
    formattedPrice: "CHF 490",
    desc: "Perfekt fuer KMU, Restaurants und Dienstleister, die eine professionelle Online-Praesenz brauchen.",
    features: [
      "1-3 Seiten, modernes Design",
      "Mobiloptimiert & schnell",
      "SEO-Grundoptimierung",
      "Kontaktformular + WhatsApp-Button",
      "SSL-Zertifikat & Hosting",
      "Google Analytics Integration",
      "Cookie-Banner (DSGVO/DSG)",
      "Lieferung in 5-7 Tagen",
      "1 Jahr Support inklusive",
    ],
    popular: false,
    gradient: "from-slate-500/5 to-slate-600/5",
    borderClass: "border-white/[0.06] hover:border-slate-400/20",
    glowColor: "#9945ff",
    whatsappMessage:
      "Hallo! Ich interessiere mich fuer das Starter-Paket (CHF 490) fuer mein Unternehmen in der Schweiz. Koennen wir die Details besprechen?",
    delivery: "5-7 Tage",
    support: "1 Jahr",
  },
  {
    name: "Business",
    icon: Star,
    price: "990",
    formattedPrice: "CHF 990",
    desc: "Fuer Unternehmen, die eine starke digitale Praesenz mit KI-Integration und Buchungssystem wuenschen.",
    features: [
      "Bis zu 7 Seiten, Premium-Design",
      "KI-Chatbot Integration",
      "Google Maps + Bewertungen",
      "Terminbuchungssystem",
      "Blog / News-Bereich",
      "Social-Media-Integration",
      "Erweiterte SEO-Optimierung",
      "E-Mail-Marketing Setup",
      "Lieferung in 7-10 Tagen",
      "2 Jahre Support inklusive",
    ],
    popular: true,
    gradient: "from-[#9945ff]/[0.12] to-[#9945ff]/[0.04]",
    borderClass: "border-[#9945ff]/25",
    glowColor: "#9945ff",
    whatsappMessage:
      "Hallo! Ich interessiere mich fuer das Business-Paket (CHF 990) mit KI-Chatbot fuer mein Unternehmen in der Schweiz.",
    delivery: "7-10 Tage",
    support: "2 Jahre",
  },
  {
    name: "Premium + KI",
    icon: Crown,
    price: "1'490",
    formattedPrice: "CHF 1'490",
    desc: "Die komplette digitale Loesung: Website, KI-Automatisierung, E-Commerce und persoenlicher Entwickler.",
    features: [
      "Unbegrenzte Seiten",
      "Vollstaendige KI-Automatisierung (n8n)",
      "E-Commerce / Buchungssystem",
      "SEO-Strategie + Google Ads Setup",
      "WhatsApp Business API",
      "CRM-Integration",
      "Monatliche Performance-Berichte",
      "Mehrsprachig (DE/EN/FR/IT)",
      "Lieferung in 2-3 Wochen",
      "3 Jahre Support + persoenlicher Entwickler",
    ],
    popular: false,
    gradient: "from-violet-500/5 to-purple-600/5",
    borderClass: "border-white/[0.06] hover:border-violet-400/20",
    glowColor: "#14f195",
    whatsappMessage:
      "Hallo! Ich interessiere mich fuer das Premium + KI Paket (CHF 1'490) fuer mein Unternehmen in der Schweiz. Ich moechte die volle KI-Automatisierung.",
    delivery: "2-3 Wochen",
    support: "3 Jahre",
  },
];

interface AddOn {
  icon: typeof Bot;
  name: string;
  price: string;
  desc: string;
  color: string;
}

const ADD_ONS: AddOn[] = [
  {
    icon: Bot,
    name: "KI-Chatbot",
    price: "CHF 890",
    desc: "Intelligenter Chatbot, der Kundenanfragen 24/7 beantwortet, Termine bucht und Leads qualifiziert.",
    color: "#9945ff",
  },
  {
    icon: Workflow,
    name: "n8n Automatisierung",
    price: "CHF 490 + CHF 150/Mt.",
    desc: "Workflows die repetitive Aufgaben eliminieren: E-Mail, CRM, Rechnungen, Social Media.",
    color: "#00d1ff",
  },
  {
    icon: Search,
    name: "SEO-Paket",
    price: "CHF 450/Monat",
    desc: "Lokales SEO fuer die Schweiz: Google My Business, Keywords, Backlinks, monatliche Berichte.",
    color: "#14f195",
  },
  {
    icon: Lock,
    name: "Cyber Security Audit",
    price: "CHF 690",
    desc: "Umfassende Sicherheitspruefung: Schwachstellen, DSGVO/DSG-Compliance, Penetrationstest.",
    color: "#f971ff",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Was kostet eine professionelle Website in der Schweiz?",
    answer:
      "Unsere Starter-Websites beginnen ab CHF 490 fuer 1-3 Seiten mit modernem Design, SEO und mobilem Layout. Das Business-Paket mit KI-Chatbot und Terminbuchung kostet CHF 990, und das Premium-Paket mit voller KI-Automatisierung liegt bei CHF 1'490. Alle Preise sind Einmalzahlungen — keine versteckten Kosten.",
  },
  {
    question: "Wie kann ich bezahlen?",
    answer:
      "Wir akzeptieren Bankueberweisung (CHF und EUR), Kreditkarte via Stripe, Revolut und TWINT. Die Zahlung erfolgt in zwei Teilen: 50% Anzahlung bei Auftragsbestaetigung und 50% bei Lieferung der fertigen Website.",
  },
  {
    question: "Wie schnell wird meine Website geliefert?",
    answer:
      "Starter-Websites liefern wir in 5-7 Werktagen, Business-Websites in 7-10 Werktagen und Premium-Projekte in 2-3 Wochen. Express-Lieferung ist gegen Aufpreis moeglich — sprechen Sie uns einfach an.",
  },
  {
    question: "Gibt es Support nach der Lieferung?",
    answer:
      "Ja! Je nach Paket erhalten Sie 1-3 Jahre Support inklusive. Das umfasst technischen Support, kleine Anpassungen und Sicherheitsupdates. Nach Ablauf bieten wir guenstige Wartungsvertraege ab CHF 90/Monat.",
  },
  {
    question: "Ist die Website DSGVO- und DSG-konform?",
    answer:
      "Selbstverstaendlich. Alle unsere Websites sind vollstaendig DSGVO-konform (EU) und entsprechen dem Schweizer Datenschutzgesetz (DSG). Cookie-Banner, Datenschutzerklaerung und Impressum sind immer inklusive.",
  },
];

const TRUST_BADGES = [
  { label: "Schweizer Qualitaet", icon: ShieldCheck },
  { label: "DSGVO-konform", icon: Lock },
  { label: "100% Zufriedenheitsgarantie", icon: Check },
  { label: "Sichere Zahlung via Stripe", icon: ShieldCheck },
  { label: "Gegruendet in Zuerich", icon: Star },
];

/* ─── Componentes ─── */

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: 0.05 * i,
              duration: ANIMATION_DURATION,
              ease: ANIMATION_EASE,
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {item.question}
                </h3>
                {isOpen ? (
                  <ChevronUp size={18} className="text-[#9945ff] shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-slate-500 shrink-0" />
                )}
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── WhatsApp icon SVG ─── */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
    </svg>
  );
}

/* ─── Pagina principal ─── */

export default function PreiseSchweizPage() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Back navigation ── */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Zurueck zur Startseite
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="relative pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-10 left-1/2 w-[600px] h-[600px] bg-[#9945ff]/[0.05] rounded-full blur-[160px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#14f195]/[0.03] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="inline-block text-sm text-[#14f195] mb-4 tracking-wide uppercase"
            >
              Preise &mdash; Webdesign Schweiz
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Transparente Preise
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                f&uuml;r Schweizer Unternehmen
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-5"
            >
              Professionelle Websites, KI-Chatbots und Automatisierung &mdash;
              Schweizer Qualit&auml;t zu fairen Preisen. Keine versteckten
              Kosten.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="text-sm text-slate-500 max-w-xl mx-auto mb-10"
            >
              Alle Preise in CHF &middot; Einmalzahlung &middot; Keine
              Abonnements &middot; Support inklusive
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="flex flex-wrap items-center justify-center gap-6 mb-8"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2"
                >
                  <badge.icon size={14} className="text-[#14f195]" />
                  <span className="text-xs text-slate-400 font-medium">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {PLANS.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: 0.1 * i,
                    duration: ANIMATION_DURATION,
                    ease: ANIMATION_EASE,
                  }}
                  className={`relative p-8 rounded-3xl transition-all duration-500 ${
                    plan.popular
                      ? `bg-gradient-to-b ${plan.gradient} border-2 ${plan.borderClass} shadow-[0_0_40px_rgba(153,69,255,0.1)] scale-[1.03]`
                      : `bg-gradient-to-b ${plan.gradient} border ${plan.borderClass}`
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white text-xs font-bold rounded-full shadow-lg shadow-[#9945ff]/40 border border-white/10">
                      <Star size={10} fill="white" />
                      Empfohlen
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          plan.popular
                            ? "bg-[#9945ff]/20 border border-[#9945ff]/30"
                            : "bg-white/[0.04] border border-white/[0.08]"
                        }`}
                      >
                        <plan.icon
                          size={16}
                          className={
                            plan.popular ? "text-[#9945ff]" : "text-slate-400"
                          }
                        />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm mb-5">{plan.desc}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="font-[var(--font-heading)] text-4xl font-bold text-white">
                        {plan.formattedPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] text-slate-500">
                        Einmalig &middot; Keine Abos
                      </span>
                    </div>

                    {/* Delivery & Support badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[11px] text-[#00d1ff] font-semibold px-2.5 py-1 bg-[#00d1ff]/10 border border-[#00d1ff]/20 rounded-full">
                        Lieferung: {plan.delivery}
                      </span>
                      <span className="text-[11px] text-[#14f195] font-semibold px-2.5 py-1 bg-[#14f195]/10 border border-[#14f195]/20 rounded-full">
                        {plan.support} Support
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <div
                          className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
                              ? "bg-[#9945ff]/15"
                              : "bg-white/[0.04]"
                          }`}
                        >
                          <Check
                            size={11}
                            className={
                              plan.popular
                                ? "text-[#9945ff]"
                                : "text-slate-500"
                            }
                          />
                        </div>
                        <span className="text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp CTA */}
                  <a
                    href={whatsappUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white hover:shadow-lg hover:shadow-[#9945ff]/30"
                        : "border border-white/10 text-white hover:border-[#9945ff]/40 hover:bg-white/[0.03]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Jetzt via WhatsApp anfragen</span>
                    <MessageCircle
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>

                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-slate-500">
                    <Lock size={9} />
                    50% Anzahlung &middot; 50% bei Lieferung
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Add-Ons ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4"
            >
              Optionale{" "}
              <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">
                Add-Ons
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: 0.1,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="text-slate-400 text-center max-w-2xl mx-auto mb-14"
            >
              Erweitern Sie Ihre Website mit leistungsstarken
              Zusatzfunktionen &mdash; einzeln buchbar zu jedem Paket.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {ADD_ONS.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: 0.1 * i,
                    duration: ANIMATION_DURATION,
                    ease: ANIMATION_EASE,
                  }}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${addon.color}15`,
                        border: `1px solid ${addon.color}30`,
                      }}
                    >
                      <addon.icon
                        size={18}
                        style={{ color: addon.color }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-white font-semibold">
                          {addon.name}
                        </h3>
                        <span
                          className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{
                            color: addon.color,
                            backgroundColor: `${addon.color}15`,
                            border: `1px solid ${addon.color}30`,
                          }}
                        >
                          {addon.price}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{addon.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4"
            >
              H&auml;ufig gestellte{" "}
              <span className="text-[#9945ff]">Fragen</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: 0.1,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="text-slate-400 text-center max-w-xl mx-auto mb-14"
            >
              Alles, was Sie &uuml;ber Preise, Zahlung und Lieferung wissen
              m&uuml;ssen.
            </motion.p>

            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6"
            >
              Bereit f&uuml;r Ihre neue{" "}
              <span className="text-[#14f195]">Website</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: 0.1,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="text-slate-400 max-w-xl mx-auto mb-10"
            >
              Kontaktieren Sie uns f&uuml;r ein kostenloses
              Erstgespr&auml;ch. Wir analysieren Ihre Anforderungen und
              erstellen Ihnen ein massgeschneidertes Angebot &mdash; innerhalb
              von 24 Stunden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: 0.2,
                duration: ANIMATION_DURATION,
                ease: ANIMATION_EASE,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href={whatsappUrl(
                  "Hallo! Ich moechte ein kostenloses Erstgespraech fuer mein Schweizer Unternehmen vereinbaren."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#9945ff]/30"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Kostenloses Erstgespr&auml;ch
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Webdesign-Anfrage%20Schweiz%20-%20Preise"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                E-Mail senden
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: ANIMATION_DURATION }}
              className="text-slate-500 text-sm"
            >
              yassin@elfennir.com &middot; WhatsApp: +358 46 610 9064
              &middot; Schweizer Qualit&auml;t, weltweit verf&uuml;gbar
            </motion.p>
          </div>
        </section>

        {/* ── Trust bar final ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
              className="flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/[0.04]"
            >
              {TRUST_BADGES.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <badge.icon size={14} className="text-[#14f195]" />
                  <span className="text-xs text-slate-400 font-medium">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}