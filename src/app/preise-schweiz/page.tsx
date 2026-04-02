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
  Phone,
  Mail,
  MapPin,
  Clock,
  Palette,
  Code,
  Rocket,
  Users,
  Heart,
  DollarSign,
  Globe,
  Megaphone,
  X,
} from "lucide-react";
import { useState } from "react";

/* ─── Constantes ─── */

const WHATSAPP_NUMBER = "358466109064";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "yassin@elfennir.com";
const PHONE_DISPLAY = "+358 46 610 9064";

const EASE = [0.22, 1, 0.36, 1] as const;
const DUR = 0.8;

function waUrl(msg: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
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
          "1-3 Seiten, Mobiloptimiert, Kontaktformular, WhatsApp-Button, SEO-Grundlagen, 1 Jahr Support, Lieferung 5-7 Tage",
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
          "Bis 7 Seiten, Premium-Design, Terminbuchung, Google Maps, AI-Chatbot, Blog-System, 2 Jahre Support, Lieferung 5-7 Tage",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "990",
          priceCurrency: "CHF",
          valueAddedTaxIncluded: true,
        },
      },
      {
        "@type": "Offer",
        name: "Premium Website",
        price: "1490",
        priceCurrency: "CHF",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: "https://elfennir.com/preise-schweiz",
        description:
          "Komplett massgeschneidert, alle Business-Features, E-Commerce/Shop, Automatisierungen, Lead-Generierung, 3 Jahre Support, Priority-Support",
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
          text: "Unsere Starter-Websites beginnen ab CHF 490 fuer 1-3 Seiten. Business-Websites mit KI-Chatbot kosten CHF 990, und das Premium-Paket mit voller Automatisierung liegt bei CHF 1'490.",
        },
      },
      {
        "@type": "Question",
        name: "Wie schnell ist meine Website fertig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alle Pakete werden in 5-7 Werktagen geliefert. Express-Lieferung ist gegen Aufpreis moeglich.",
        },
      },
      {
        "@type": "Question",
        name: "Wie viele Revisionen sind inklusive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter: 2 Revisionsrunden. Business: 3 Revisionsrunden. Premium: Unbegrenzte Revisionen bis Sie zufrieden sind.",
        },
      },
      {
        "@type": "Question",
        name: "Ist Hosting inklusive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir richten professionelles Hosting fuer Sie ein. Das erste Jahr ist bei allen Paketen inklusive.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich eine eigene Domain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Falls Sie noch keine Domain haben, helfen wir Ihnen bei der Registrierung. Die Kosten betragen ca. CHF 15-25/Jahr je nach Endung (.ch, .com).",
        },
      },
      {
        "@type": "Question",
        name: "Ist SEO inklusive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, alle Pakete enthalten SEO-Grundoptimierung (Meta-Tags, Schema.org, Sitemap, schnelle Ladezeiten). Fuer fortgeschrittenes SEO empfehlen wir unser SEO-Paket Add-On.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie Support nach der Lieferung?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Je nach Paket erhalten Sie 1-3 Jahre Support inklusive. Danach bieten wir Wartungsvertraege ab CHF 90/Monat an.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Zahlungsmethoden akzeptieren Sie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bankueberweisung (CHF/EUR), Kreditkarte via Stripe, Revolut und TWINT. 50% Anzahlung bei Auftragsbestaetigung, 50% bei Lieferung.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Webdesign & KI-Automatisierung",
    description:
      "Professionelle Webdesign-Loesungen, KI-Chatbots und Automatisierung fuer Schweizer Unternehmen.",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zuerich",
      addressCountry: "CH",
    },
    priceRange: "CHF 490 - CHF 1490",
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    sameAs: [
      "https://linkedin.com/in/yassin-fennir-712a19385",
      "https://github.com/yassinfennir",
    ],
  },
];

/* ─── Datos de precios ─── */

interface PricingPlan {
  name: string;
  icon: typeof Zap;
  price: string;
  desc: string;
  features: string[];
  popular: boolean;
  whatsappMsg: string;
  delivery: string;
  support: string;
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    icon: Zap,
    price: "490",
    desc: "Perfekt fuer KMU, Restaurants und Dienstleister, die eine professionelle Online-Praesenz brauchen.",
    features: [
      "1-3 Seiten",
      "Mobiloptimiert & schnell",
      "Kontaktformular",
      "WhatsApp-Button",
      "SEO-Grundlagen",
      "SSL-Zertifikat & Hosting",
      "Cookie-Banner (DSGVO/DSG)",
      "1 Jahr Support",
      "Lieferung in 5-7 Tagen",
    ],
    popular: false,
    whatsappMsg:
      "Hallo! Ich interessiere mich fuer das Starter-Paket (CHF 490) fuer mein Unternehmen in der Schweiz. Koennen wir die Details besprechen?",
    delivery: "5-7 Tage",
    support: "1 Jahr",
  },
  {
    name: "Business",
    icon: Star,
    price: "990",
    desc: "Fuer Unternehmen, die eine starke digitale Praesenz mit KI-Integration und Buchungssystem wuenschen.",
    features: [
      "Bis zu 7 Seiten",
      "Premium-Design",
      "Terminbuchung",
      "Google Maps Integration",
      "AI-Chatbot",
      "Blog-System",
      "Erweiterte SEO-Optimierung",
      "Social-Media-Integration",
      "2 Jahre Support",
      "Lieferung in 5-7 Tagen",
    ],
    popular: true,
    whatsappMsg:
      "Hallo! Ich interessiere mich fuer das Business-Paket (CHF 990) mit KI-Chatbot fuer mein Unternehmen in der Schweiz.",
    delivery: "5-7 Tage",
    support: "2 Jahre",
  },
  {
    name: "Premium",
    icon: Crown,
    price: "1'490",
    desc: "Die komplette digitale Loesung: massgeschneidert, automatisiert und mit persoenlichem Entwickler.",
    features: [
      "Komplett massgeschneidert",
      "Alle Business-Features",
      "E-Commerce / Shop",
      "Automatisierungen (n8n)",
      "Lead-Generierung",
      "CRM-Integration",
      "Mehrsprachig (DE/EN/FR/IT)",
      "3 Jahre Support",
      "Persoenlicher Entwickler",
      "Priority-Support",
    ],
    popular: false,
    whatsappMsg:
      "Hallo! Ich interessiere mich fuer das Premium-Paket (CHF 1'490) fuer mein Unternehmen in der Schweiz. Ich moechte die volle Automatisierung.",
    delivery: "5-7 Tage",
    support: "3 Jahre",
  },
];

/* ─── Add-Ons ─── */

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
    name: "AI Chatbot",
    price: "CHF 590",
    desc: "Intelligenter Chatbot, der Kundenanfragen 24/7 beantwortet, Termine bucht und Leads qualifiziert.",
    color: "#9945ff",
  },
  {
    icon: Workflow,
    name: "n8n Automatisierung",
    price: "CHF 390 + CHF 100/Mt.",
    desc: "Workflows die repetitive Aufgaben eliminieren: E-Mail, CRM, Rechnungen, Social Media.",
    color: "#00d1ff",
  },
  {
    icon: Search,
    name: "SEO-Paket",
    price: "CHF 190/Monat",
    desc: "Lokales SEO fuer die Schweiz: Google My Business, Keywords, Backlinks, monatliche Berichte.",
    color: "#14f195",
  },
  {
    icon: Megaphone,
    name: "Social Media Automation",
    price: "CHF 490",
    desc: "Automatisierte Beitraege, Planung und Cross-Posting auf allen Plattformen.",
    color: "#f97316",
  },
  {
    icon: Mail,
    name: "E-Mail Marketing",
    price: "CHF 350",
    desc: "Professionelle E-Mail-Kampagnen, Newsletter-Setup und automatisierte Sequenzen.",
    color: "#ec4899",
  },
  {
    icon: Palette,
    name: "Logo & Branding",
    price: "CHF 290",
    desc: "Professionelles Logo-Design, Farbpalette, Typografie und Brand Guidelines.",
    color: "#eab308",
  },
];

/* ─── Comparison Table ─── */

interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  business: boolean | string;
  premium: boolean | string;
}

const COMPARISON: ComparisonRow[] = [
  { feature: "Anzahl Seiten", starter: "1-3", business: "Bis 7", premium: "Unbegrenzt" },
  { feature: "Mobiloptimiert", starter: true, business: true, premium: true },
  { feature: "Kontaktformular", starter: true, business: true, premium: true },
  { feature: "WhatsApp-Button", starter: true, business: true, premium: true },
  { feature: "SEO-Grundlagen", starter: true, business: true, premium: true },
  { feature: "SSL & Hosting", starter: true, business: true, premium: true },
  { feature: "DSGVO/DSG-konform", starter: true, business: true, premium: true },
  { feature: "Premium-Design", starter: false, business: true, premium: true },
  { feature: "Terminbuchung", starter: false, business: true, premium: true },
  { feature: "Google Maps", starter: false, business: true, premium: true },
  { feature: "AI-Chatbot", starter: false, business: true, premium: true },
  { feature: "Blog-System", starter: false, business: true, premium: true },
  { feature: "E-Commerce / Shop", starter: false, business: false, premium: true },
  { feature: "Automatisierungen", starter: false, business: false, premium: true },
  { feature: "Lead-Generierung", starter: false, business: false, premium: true },
  { feature: "CRM-Integration", starter: false, business: false, premium: true },
  { feature: "Mehrsprachig", starter: false, business: false, premium: true },
  { feature: "Persoenlicher Entwickler", starter: false, business: false, premium: true },
  { feature: "Priority-Support", starter: false, business: false, premium: true },
  { feature: "Support-Dauer", starter: "1 Jahr", business: "2 Jahre", premium: "3 Jahre" },
  { feature: "Lieferzeit", starter: "5-7 Tage", business: "5-7 Tage", premium: "5-7 Tage" },
];

/* ─── Process Steps ─── */

interface ProcessStep {
  icon: typeof Phone;
  title: string;
  desc: string;
  step: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Phone,
    title: "Beratung",
    desc: "Kostenloses Erstgespraech per WhatsApp oder Telefon. Wir analysieren Ihre Anforderungen und beraten Sie zum passenden Paket.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Wir erstellen ein massgeschneidertes Design, das Ihre Marke perfekt repraesentiert. Sie erhalten einen Entwurf zur Freigabe.",
    step: "02",
  },
  {
    icon: Code,
    title: "Entwicklung",
    desc: "Ihr Projekt wird mit modernster Technologie umgesetzt: schnell, sicher und mobiloptimiert. Regelmaessige Updates inklusive.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Finale Pruefung, SEO-Optimierung und Go-Live. Ihre Website ist online und bereit, Kunden zu gewinnen.",
    step: "04",
  },
];

/* ─── Garantien ─── */

interface Guarantee {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
}

const GUARANTEES: Guarantee[] = [
  {
    icon: ShieldCheck,
    title: "30-Tage Zufriedenheitsgarantie",
    desc: "Nicht zufrieden? Wir ueberarbeiten Ihr Projekt kostenlos, bis es perfekt ist.",
  },
  {
    icon: DollarSign,
    title: "Festpreise ohne versteckte Kosten",
    desc: "Der vereinbarte Preis ist der Endpreis. Keine Ueberraschungen, keine Zusatzgebuehren.",
  },
  {
    icon: Heart,
    title: "Bezahlung erst bei Zufriedenheit",
    desc: "50% Anzahlung, 50% erst nach Lieferung und Ihrer Freigabe. Null Risiko.",
  },
  {
    icon: Lock,
    title: "Website gehoert Ihnen",
    desc: "Alle Dateien, der Code und die Domain gehoeren Ihnen. 100% Eigentumsrecht.",
  },
];

/* ─── FAQ ─── */

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Was kostet eine professionelle Website in der Schweiz?",
    answer:
      "Unsere Starter-Websites beginnen ab CHF 490 fuer 1-3 Seiten mit modernem Design, SEO und mobilem Layout. Das Business-Paket mit KI-Chatbot und Terminbuchung kostet CHF 990, und das Premium-Paket mit voller Automatisierung liegt bei CHF 1'490. Alle Preise sind Einmalzahlungen ohne versteckte Kosten.",
  },
  {
    question: "Wie schnell wird meine Website geliefert?",
    answer:
      "Alle Pakete liefern wir in 5-7 Werktagen. Express-Lieferung ist gegen Aufpreis moeglich. Wir halten Sie waehrend des gesamten Prozesses auf dem Laufenden.",
  },
  {
    question: "Wie viele Revisionen sind inklusive?",
    answer:
      "Starter: 2 Revisionsrunden. Business: 3 Revisionsrunden. Premium: Unbegrenzte Revisionen, bis Sie vollstaendig zufrieden sind. Unser Ziel ist Ihre 100%ige Zufriedenheit.",
  },
  {
    question: "Ist Hosting inklusive?",
    answer:
      "Ja! Wir richten professionelles, schnelles Hosting fuer Sie ein. Das erste Jahr ist bei allen Paketen inklusive. Danach betragen die Kosten ca. CHF 10-20/Monat je nach Anforderungen.",
  },
  {
    question: "Brauche ich eine eigene Domain?",
    answer:
      "Falls Sie noch keine Domain haben, helfen wir Ihnen bei der Registrierung. Die Kosten betragen ca. CHF 15-25/Jahr je nach Endung (.ch, .com, .swiss). Falls Sie bereits eine Domain besitzen, verbinden wir diese.",
  },
  {
    question: "Ist SEO inklusive?",
    answer:
      "Ja, alle Pakete enthalten eine SEO-Grundoptimierung: Meta-Tags, Schema.org-Markup, Sitemap, schnelle Ladezeiten und mobile Optimierung. Fuer fortgeschrittenes lokales SEO (Google My Business, Keywords, Backlinks) empfehlen wir unser SEO-Paket Add-On fuer CHF 190/Monat.",
  },
  {
    question: "Bieten Sie Support nach der Lieferung?",
    answer:
      "Ja! Je nach Paket erhalten Sie 1-3 Jahre Support inklusive. Das umfasst technischen Support, kleine Anpassungen und Sicherheitsupdates. Danach bieten wir guenstige Wartungsvertraege ab CHF 90/Monat an.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer:
      "Wir akzeptieren Bankueberweisung (CHF und EUR), Kreditkarte via Stripe, Revolut und TWINT. Die Zahlung erfolgt in zwei Teilen: 50% Anzahlung bei Auftragsbestaetigung und 50% bei Lieferung der fertigen Website.",
  },
];

/* ─── Social Proof ─── */

const CLIENTS = [
  "Nordic Globe",
  "Kazumi Sushi",
  "Ha-Fix Oy",
  "Mekon",
  "Fudis House",
  "Smart Group OY",
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
            transition={{ delay: 0.05 * i, duration: DUR, ease: EASE }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#9945ff]/20 transition-all duration-300"
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
      <Check size={12} className="text-emerald-400" />
    </div>
  );
}

function XIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0">
      <X size={10} className="text-slate-600" />
    </div>
  );
}

/* ─── Pagina principal ─── */

export default function PreiseSchweizPage() {
  return (
    <>
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

        {/* ══════════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="relative pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-10 left-1/2 w-[700px] h-[700px] bg-[#9945ff]/[0.05] rounded-full blur-[180px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#14f195]/[0.03] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR, ease: EASE }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14f195]/10 border border-[#14f195]/20 mb-6"
            >
              <MapPin size={14} className="text-[#14f195]" />
              <span className="text-sm text-[#14f195] font-medium">
                Standort: Z&uuml;rich, Schweiz
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: DUR, ease: EASE }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Professionelle Webdesign-L&ouml;sungen
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                f&uuml;r Schweizer Unternehmen
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: DUR, ease: EASE }}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-6"
            >
              Von der Idee zur fertigen Website in 5-7 Tagen. Moderne Technologie,
              KI-Integration und Schweizer Qualit&auml;t &mdash; zu transparenten Festpreisen.
            </motion.p>

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: DUR, ease: EASE }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10"
            >
              {[
                { value: "50+", label: "Projekte" },
                { value: "4", label: "L\u00e4nder" },
                { value: "100%", label: "Zufriedenheitsgarantie" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Hero CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: DUR, ease: EASE }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href={waUrl(
                  "Hallo! Ich moechte ein kostenloses Erstgespraech fuer mein Schweizer Unternehmen vereinbaren."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white font-semibold transition-all hover:shadow-lg hover:shadow-[#9945ff]/30 hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Kostenloses Erstgespr&auml;ch
              </a>
              <a
                href="#preise"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Preise ansehen
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            2. SOCIAL PROOF BAR
        ══════════════════════════════════════════════════════════ */}
        <section className="py-12 border-y border-white/[0.04]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center text-sm text-slate-500 uppercase tracking-wider mb-8"
            >
              Vertrauen von 50+ Unternehmen
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: DUR, ease: EASE }}
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
            >
              {CLIENTS.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.6, ease: EASE }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <Globe size={14} className="text-[#9945ff]" />
                  <span className="text-sm text-slate-300 font-medium">
                    {client}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            3. PRICING CARDS
        ══════════════════════════════════════════════════════════ */}
        <section id="preise" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-16"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                W&auml;hlen Sie Ihr{" "}
                <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">
                  Paket
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Alle Preise in CHF &middot; Einmalzahlung &middot; Keine
                Abonnements &middot; Support inklusive
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
              {PLANS.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.15 * i, duration: DUR, ease: EASE }}
                  whileHover={{
                    scale: plan.popular ? 1.03 : 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className={`relative p-8 rounded-3xl transition-all duration-500 ${
                    plan.popular
                      ? "bg-gradient-to-b from-[#9945ff]/[0.12] to-[#9945ff]/[0.04] border-2 border-[#9945ff]/25 shadow-[0_0_60px_rgba(153,69,255,0.12)] md:scale-[1.05]"
                      : "bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white text-xs font-bold rounded-full shadow-lg shadow-[#9945ff]/40 border border-white/10 uppercase tracking-wider">
                      <Star size={10} fill="white" />
                      Empfohlen
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          plan.popular
                            ? "bg-[#9945ff]/20 border border-[#9945ff]/30"
                            : "bg-white/[0.04] border border-white/[0.08]"
                        }`}
                      >
                        <plan.icon
                          size={18}
                          className={
                            plan.popular ? "text-[#9945ff]" : "text-slate-400"
                          }
                        />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                      {plan.desc}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="text-sm text-slate-500">CHF</span>
                      <span className="font-[var(--font-heading)] text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-4">
                      Einmalig &middot; Keine Abos &middot; MwSt. inklusive
                    </p>

                    {/* Delivery & Support badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[11px] text-[#00d1ff] font-semibold px-2.5 py-1 bg-[#00d1ff]/10 border border-[#00d1ff]/20 rounded-full">
                        <Clock size={10} className="inline mr-1 -mt-0.5" />
                        {plan.delivery}
                      </span>
                      <span className="text-[11px] text-[#14f195] font-semibold px-2.5 py-1 bg-[#14f195]/10 border border-[#14f195]/20 rounded-full">
                        <ShieldCheck size={10} className="inline mr-1 -mt-0.5" />
                        {plan.support} Support
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.popular
                              ? "bg-emerald-500/15"
                              : "bg-emerald-500/10"
                          }`}
                        >
                          <Check
                            size={12}
                            className="text-emerald-400"
                          />
                        </div>
                        <span className="text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp CTA */}
                  <a
                    href={waUrl(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white hover:shadow-lg hover:shadow-[#9945ff]/30 hover:scale-[1.02]"
                        : "border border-white/10 text-white hover:border-[#9945ff]/40 hover:bg-white/[0.03]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Jetzt anfragen</span>
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

        {/* ══════════════════════════════════════════════════════════
            4. ADD-ONS
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-14"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                Optionale{" "}
                <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">
                  Add-Ons
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Erweitern Sie Ihre Website mit leistungsstarken
                Zusatzfunktionen &mdash; einzeln buchbar zu jedem Paket.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADD_ONS.map((addon, i) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.08 * i, duration: DUR, ease: EASE }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(153,69,255,0.05)]"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${addon.color}15`,
                      border: `1px solid ${addon.color}30`,
                    }}
                  >
                    <addon.icon size={20} style={{ color: addon.color }} />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold text-lg">
                      {addon.name}
                    </h3>
                  </div>
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
                    style={{
                      color: addon.color,
                      backgroundColor: `${addon.color}15`,
                      border: `1px solid ${addon.color}30`,
                    }}
                  >
                    {addon.price}
                  </span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {addon.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            5. COMPARISON TABLE
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-14"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                Pakete im{" "}
                <span className="text-[#00d1ff]">Vergleich</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Alle Features auf einen Blick &mdash; finden Sie das passende Paket
                f&uuml;r Ihr Unternehmen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="overflow-x-auto rounded-2xl border border-white/[0.06]"
            >
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left text-sm text-slate-400 font-medium p-4 bg-white/[0.02]">
                      Feature
                    </th>
                    <th className="text-center text-sm text-white font-semibold p-4 bg-white/[0.02]">
                      Starter
                      <span className="block text-xs text-slate-500 font-normal mt-0.5">
                        CHF 490
                      </span>
                    </th>
                    <th className="text-center text-sm text-white font-semibold p-4 bg-[#9945ff]/[0.08] border-x border-[#9945ff]/20">
                      Business
                      <span className="block text-xs text-[#9945ff] font-normal mt-0.5">
                        CHF 990
                      </span>
                    </th>
                    <th className="text-center text-sm text-white font-semibold p-4 bg-white/[0.02]">
                      Premium
                      <span className="block text-xs text-slate-500 font-normal mt-0.5">
                        CHF 1&apos;490
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/[0.04] ${
                        i % 2 === 0 ? "bg-white/[0.01]" : ""
                      }`}
                    >
                      <td className="text-sm text-slate-300 p-4">
                        {row.feature}
                      </td>
                      {(["starter", "business", "premium"] as const).map(
                        (tier) => {
                          const val = row[tier];
                          const isBusiness = tier === "business";
                          return (
                            <td
                              key={tier}
                              className={`text-center p-4 ${
                                isBusiness
                                  ? "bg-[#9945ff]/[0.04] border-x border-[#9945ff]/10"
                                  : ""
                              }`}
                            >
                              {typeof val === "boolean" ? (
                                <div className="flex justify-center">
                                  {val ? <CheckIcon /> : <XIcon />}
                                </div>
                              ) : (
                                <span className="text-sm text-white font-medium">
                                  {val}
                                </span>
                              )}
                            </td>
                          );
                        }
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            6. PROCESS
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-16"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                So funktioniert&apos;s &mdash;{" "}
                <span className="text-[#14f195]">4 einfache Schritte</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Von der ersten Kontaktaufnahme bis zum Go-Live Ihrer Website &mdash;
                transparent und effizient.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.15 * i, duration: DUR, ease: EASE }}
                  className="relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#14f195]/20 transition-all duration-300 group"
                >
                  <div className="absolute -top-3 -left-1 text-6xl font-bold text-white/[0.03] font-[var(--font-heading)] select-none group-hover:text-[#14f195]/[0.06] transition-colors">
                    {step.step}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center mb-4">
                      <step.icon size={22} className="text-[#14f195]" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            7. GARANTIEN
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-14"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                Unsere{" "}
                <span className="text-[#14f195]">Garantien</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Wir stehen hinter unserer Arbeit. Ihr Erfolg ist unser Erfolg.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {GUARANTEES.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.1 * i, duration: DUR, ease: EASE }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#14f195]/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#14f195]/10 border border-[#14f195]/20 flex items-center justify-center shrink-0">
                    <g.icon size={22} className="text-[#14f195]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {g.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            8. FAQ
        ══════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="text-center mb-14"
            >
              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-4">
                H&auml;ufig gestellte{" "}
                <span className="text-[#9945ff]">Fragen</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto">
                Alles, was Sie &uuml;ber Preise, Zahlung und Lieferung wissen
                m&uuml;ssen.
              </p>
            </motion.div>

            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            9. CTA
        ══════════════════════════════════════════════════════════ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9945ff]/[0.06] to-transparent" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#9945ff]/[0.06] rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2" />

          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: DUR, ease: EASE }}
              className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Bereit f&uuml;r Ihre neue{" "}
              <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
                Website
              </span>
              ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1, duration: DUR, ease: EASE }}
              className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
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
              transition={{ delay: 0.2, duration: DUR, ease: EASE }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a
                href={waUrl(
                  "Hallo! Ich moechte ein kostenloses Erstgespraech fuer mein Schweizer Unternehmen vereinbaren."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9945ff] to-[#00d1ff] text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-[#9945ff]/30 hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Kostenloses Erstgespr&auml;ch
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Webdesign-Anfrage%20Schweiz`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                <Mail size={18} />
                E-Mail senden
              </a>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: DUR }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} />
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Z&uuml;rich, Schweiz
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── Trust bar final ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: DUR, ease: EASE }}
              className="flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/[0.04]"
            >
              {[
                { label: "Schweizer Qualitaet", icon: ShieldCheck },
                { label: "DSGVO/DSG-konform", icon: Lock },
                { label: "100% Zufriedenheitsgarantie", icon: Check },
                { label: "Sichere Zahlung via Stripe", icon: ShieldCheck },
                { label: "Standort: Zuerich", icon: MapPin },
              ].map((badge) => (
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
