import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Switzerland — Professional Websites & AI Automation | El Fennir",
  description:
    "Professional web design for Swiss businesses. Modern websites, AI chatbots and automation. Founded by a Zurich native. From CHF 270. Delivered in 7 days.",
  keywords: [
    "web design switzerland",
    "website agency zurich",
    "ai automation switzerland",
    "web designer zurich",
    "website design switzerland",
    "web development zurich",
    "website agency switzerland",
    "ai chatbot switzerland",
    "web design bern",
    "web design basel",
    "affordable website switzerland",
    "professional website zurich",
    "website creation switzerland",
    "digital agency zurich",
    "swiss web design",
  ],
  openGraph: {
    title: "Web Design Switzerland — Professional Websites & AI Automation",
    description:
      "Modern websites, AI chatbots and automation for Swiss businesses. From CHF 270. Delivered in 7 days.",
    type: "website",
    url: "https://elfennir.com/web-design-switzerland",
    locale: "en_CH",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Switzerland — Professional Websites & AI Automation",
    description:
      "Modern websites, AI chatbots and automation for Swiss businesses. From CHF 270. Delivered in 7 days.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/web-design-switzerland" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Web Design Switzerland",
    description:
      "Professional web design, AI chatbots and automation for Swiss businesses. Founded by a Zurich-raised entrepreneur.",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    founder: {
      "@type": "Person",
      name: "Yassin El Fennir",
      description: "Raised in Zurich, Switzerland. Founder of El Fennir Digital Agency.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    priceRange: "€€",
    areaServed: [
      { "@type": "Country", name: "Switzerland" },
      { "@type": "City", name: "Zurich" },
      { "@type": "City", name: "Bern" },
      { "@type": "City", name: "Basel" },
      { "@type": "City", name: "Geneva" },
      { "@type": "City", name: "Lausanne" },
      { "@type": "City", name: "Lucerne" },
    ],
    sameAs: ["https://wa.me/358466109064", "https://elfennir.com"],
    knowsLanguage: ["en", "de", "es", "fi", "fr"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Design & AI Automation for Switzerland",
    provider: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
    areaServed: { "@type": "Country", name: "Switzerland" },
    serviceType: "Web Design, AI Chatbots, Business Automation",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Website",
        price: "270",
        priceCurrency: "EUR",
        description: "Modern one-page website with SEO and mobile-first design",
      },
      {
        "@type": "Offer",
        name: "Business Website",
        price: "599",
        priceCurrency: "EUR",
        description: "Multi-page website with CMS, blog, and advanced features",
      },
      {
        "@type": "Offer",
        name: "Premium Website + AI",
        price: "999",
        priceCurrency: "EUR",
        description: "Full website with AI chatbot and workflow automation",
      },
    ],
  },
];

const features = [
  {
    title: "Zurich Roots",
    desc: "Our founder grew up in Zurich and understands Swiss business culture, quality standards, and local markets firsthand. We speak your language — literally.",
    color: "#9945ff",
  },
  {
    title: "Multilingual Team",
    desc: "We communicate fluently in English, German, French, Spanish, and Finnish — perfect for Switzerland's diverse business landscape.",
    color: "#00d1ff",
  },
  {
    title: "Swiss Quality, Fair Pricing",
    desc: "Professional websites starting at CHF 270 — without compromising on quality, design, or performance. A fraction of typical Swiss agency rates.",
    color: "#14f195",
  },
  {
    title: "7-Day Delivery",
    desc: "No months of waiting. Your new website goes live within one week — including SEO optimization, responsive design, and hosting setup.",
    color: "#f971ff",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Next.js, React, Tailwind CSS — the same tech stack used by Vercel, Netflix, and Notion. Lightning fast and future-proof.",
    color: "#9945ff",
  },
  {
    title: "AI & Automation Built-In",
    desc: "We integrate intelligent chatbots and workflow automations that handle customer inquiries, book appointments, and qualify leads — around the clock.",
    color: "#00d1ff",
  },
];

const services = [
  {
    title: "Professional Websites",
    desc: "Modern, mobile-optimized websites that represent your brand and rank on Google in Switzerland. SEO, analytics, and hosting included.",
    price: "From CHF 270",
    color: "#00d1ff",
  },
  {
    title: "AI Chatbots",
    desc: "Intelligent chatbots that answer customer questions, book appointments, and qualify leads — automatically, 24 hours a day, 7 days a week.",
    price: "From CHF 500",
    color: "#9945ff",
  },
  {
    title: "Automation & Workflows",
    desc: "n8n-based automations that eliminate repetitive tasks: email marketing, CRM integration, social media management, and more.",
    price: "From CHF 300 + CHF 80/mo",
    color: "#14f195",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Search engine optimization for the Swiss market. Local SEO for Zurich, Bern, Basel, Geneva, and all of Switzerland.",
    price: "Included",
    color: "#f971ff",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "CHF 270",
    eur: "270 EUR",
    features: [
      "One-page website",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
      "SSL & hosting",
      "Delivered in 7 days",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "CHF 599",
    eur: "599 EUR",
    features: [
      "Multi-page website (up to 5 pages)",
      "Content management system",
      "Blog integration",
      "Google Analytics & Search Console",
      "Social media integration",
      "30-day email support",
    ],
    popular: true,
  },
  {
    name: "Premium + AI",
    price: "CHF 999",
    eur: "999 EUR",
    features: [
      "Everything in Business",
      "AI chatbot integrated",
      "Workflow automation",
      "WhatsApp Business integration",
      "Priority support",
      "Monthly performance reports",
    ],
    popular: false,
  },
];

export default function WebDesignSwitzerlandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 left-1/2 w-[500px] h-[500px] bg-[#9945ff]/[0.05] rounded-full blur-[140px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d1ff]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Web Design Switzerland — Zurich Roots
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Web Design
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                for Switzerland
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-5">
              Modern websites, AI chatbots, and business automation for Swiss companies.
              Built by a Zurich-raised founder who understands Swiss quality standards — at prices that make sense.
            </p>
            <p className="text-base text-slate-500 max-w-xl mx-auto mb-10">
              Whether you run an SME in Zurich, a startup in Bern, or a restaurant in Basel — your
              new website is delivered in 7 days. Starting at CHF 270, SEO included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20professional%20website%20for%20my%20business%20in%20Switzerland."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Get a Free Quote on WhatsApp
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── Why Choose El Fennir ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Why Swiss businesses <span className="text-[#9945ff]">choose El Fennir</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Our founder Yassin El Fennir grew up in Zurich and knows the Swiss market inside out.
              We combine Swiss quality expectations with cutting-edge technology — at prices
              accessible to every SME.
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

        {/* ── Services ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-[#00d1ff]">Services</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              From a simple web presence to complete digital transformation — we deliver
              everything under one roof for Swiss businesses across Zurich, Bern, Basel, Geneva, and beyond.
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

        {/* ── Pricing ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Transparent <span className="text-[#14f195]">Pricing</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              No hidden fees, no surprises. Professional websites for Swiss businesses — at a
              fraction of what local agencies charge.
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
                      Most Popular
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
                    href={`https://wa.me/358466109064?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20package%20for%20my%20business%20in%20Switzerland.`}
                    className={`block text-center w-full py-3 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? "sol-btn text-white"
                        : "border border-white/10 text-white hover:border-[#9945ff]/40 hover:bg-white/[0.03]"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About the Founder ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              From Zurich <span className="text-[#00d1ff]">to the World</span>
            </h2>
            <p className="text-slate-400 mb-4">
              Yassin El Fennir was born in Spain, raised in Zurich, and is now based in Zürich, Switzerland.
              This international experience flows into every project: we understand Swiss quality
              expectations, know the local business culture, and work with the latest technologies.
            </p>
            <p className="text-slate-400 mb-4">
              El Fennir serves businesses across all of Switzerland — from sole proprietors in Zurich
              to restaurants in Bern, tech startups in Basel, and professional services in Geneva.
              Our clients value the personal attention, fast delivery times, and outstanding value for money.
            </p>
            <p className="text-slate-500 text-sm">
              We speak English, German, Spanish, Finnish, and French. Remote collaboration worldwide.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Frequently Asked <span className="text-[#9945ff]">Questions</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do you work with Swiss businesses?",
                  a: "Absolutely. Our founder grew up in Zurich and we serve clients across Switzerland — remotely and in person when needed. We communicate in English, German, or French.",
                },
                {
                  q: "How quickly will my website be ready?",
                  a: "Typically within 7 days. More complex projects with AI integration or automation may take 2-3 weeks.",
                },
                {
                  q: "Why are your prices so much lower than Swiss agencies?",
                  a: "We work lean and leverage cutting-edge AI tools to deliver more efficiently. This lets us offer Swiss-level quality at international prices — from CHF 270 instead of CHF 5,000+.",
                },
                {
                  q: "What currencies do you accept?",
                  a: "We accept EUR, CHF, and GBP via bank transfer, Stripe (credit card), or Revolut. CHF payments are no problem at all.",
                },
                {
                  q: "Do you offer AI chatbots and automation?",
                  a: "Yes, it's one of our core competencies. We build AI chatbots that automatically answer customer inquiries, and n8n workflows that eliminate repetitive tasks — saving you hours every week.",
                },
                {
                  q: "Can you help with SEO for the Swiss market?",
                  a: "Every website we build includes SEO optimization for the Swiss market. We optimize for local searches in Zurich, Bern, Basel, Geneva, and across Switzerland in German, English, and French.",
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
              Ready for your new <span className="text-[#14f195]">website</span>?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">
              Get in touch for a free consultation. We&apos;ll analyze your requirements and
              send you a tailored proposal — within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I'd%20like%20a%20professional%20website%20for%20my%20Swiss%20business."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Message us on WhatsApp
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Web%20Design%20Inquiry%20-%20Switzerland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Send an Email
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              yassin@elfennir.com &middot; WhatsApp: +358 46 610 9064 &middot; Serving all of Switzerland remotely
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
