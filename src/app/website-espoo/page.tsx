import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Website Design in Espoo — Your Local Web Partner | El Fennir",
  description:
    "Professional website design and development for businesses in Espoo. Modern, fast, SEO-optimized websites for local businesses. Based in Zürich, Switzerland. Starting from 990 EUR. Ready in 7 days.",
  keywords: [
    "website design espoo",
    "web design espoo",
    "web developer espoo",
    "website espoo",
    "website development espoo finland",
    "affordable website espoo",
    "business website espoo",
    "local web design finland",
  ],
  openGraph: {
    title: "Professional Website Design in Espoo — Your Local Web Partner",
    description:
      "Modern, fast, SEO-optimized websites for businesses in Espoo. Starting from 990 EUR. Ready in 7 days.",
    type: "website",
    url: "https://elfennir.com/website-espoo",
    locale: "en_US",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  alternates: { canonical: "https://elfennir.com/website-espoo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "El Fennir — Web Design Espoo",
  description:
    "Professional website design and development for businesses in Espoo. Modern, fast, SEO-optimized websites for local and international businesses. Based in Zürich, Switzerland.",
  url: "https://elfennir.com",
  telephone: "+358466109064",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressRegion: "Zürich",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.3769,
    longitude: 8.5417,
  },
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Espoo" },
    { "@type": "City", name: "Helsinki" },
    { "@type": "City", name: "Vantaa" },
    { "@type": "AdministrativeArea", name: "Greater Helsinki Area" },
  ],
  sameAs: ["https://wa.me/358466109064"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter Website" },
        price: "990",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Website" },
        price: "2490",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium Website" },
        price: "4990",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function WebsiteEspooPage() {
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
              Web Design in Espoo
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Professional Website Design in Espoo
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                — Your Local Web Partner
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Based in Zürich, Switzerland, we build modern, lightning-fast websites that help businesses in Espoo
              and international companies attract more customers and grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20professional%20website%20for%20my%20business%20in%20Espoo."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
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

        {/* ── Why Espoo Businesses Choose Us ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Why Espoo businesses <span className="text-[#9945ff]">choose El Fennir</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              We understand the local market. Whether you run a restaurant in Tapiola, a consulting
              firm in Otaniemi, or an international startup in Keilaniemi — we build websites that convert.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Local Expertise", desc: "Based in Zürich, Switzerland, we understand Finnish business culture and the Greater Helsinki market inside out.", color: "#9945ff" },
                { title: "Bilingual Service", desc: "We communicate fluently in Finnish and English. Perfect for international businesses operating in Finland.", color: "#00d1ff" },
                { title: "Lightning Fast Delivery", desc: "Your website is ready within 7 days. No months of waiting — we move at startup speed.", color: "#14f195" },
                { title: "SEO That Ranks", desc: "We optimize for local searches like 'restaurant Espoo' or 'consultant Espoo' to bring you organic traffic.", color: "#f971ff" },
                { title: "Modern Tech Stack", desc: "Next.js, React, Tailwind CSS — the same technologies used by Vercel, Netflix, and Notion.", color: "#9945ff" },
                { title: "Ongoing Support", desc: "Hosting, maintenance, and updates included. You focus on your business, we handle the tech.", color: "#00d1ff" },
              ].map((item, i) => (
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
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Our <span className="text-[#00d1ff]">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Business Websites",
                  desc: "Professional websites that represent your brand, generate leads, and rank on Google. Fully responsive and optimized.",
                  price: "From 990 EUR",
                  color: "#00d1ff",
                },
                {
                  title: "E-Commerce Solutions",
                  desc: "Online stores with Stripe payments, product management, and automated order processing. Sell 24/7.",
                  price: "From 2,490 EUR",
                  color: "#9945ff",
                },
                {
                  title: "AI Chatbots & Automation",
                  desc: "Intelligent chatbots that answer customer questions, book appointments, and qualify leads — automatically.",
                  price: "Custom pricing",
                  color: "#14f195",
                },
                {
                  title: "SEO & Digital Marketing",
                  desc: "Get found on Google. We optimize your website for local and national search queries to drive organic traffic.",
                  price: "Included with all plans",
                  color: "#f971ff",
                },
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                  <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.desc}</p>
                  <span className="text-sm font-semibold" style={{ color: service.color }}>{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Espoo Areas We Serve ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Serving businesses <span className="text-[#14f195]">across Espoo</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              From Tapiola to Leppävaara, Matinkylä to Otaniemi — we serve businesses throughout Espoo and the Greater Helsinki area.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Tapiola", "Leppävaara", "Matinkylä", "Espoon keskus",
                "Otaniemi", "Keilaniemi", "Olari", "Soukka",
                "Kivenlahti", "Westend", "Haukilahti", "Mankkaa",
              ].map((area, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-[#9945ff]/20 transition-all">
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-center mt-8 text-sm">
              Also serving Helsinki, Vantaa, and clients across Finland and internationally.
            </p>
          </div>
        </section>

        {/* ── Pricing Preview ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Transparent <span className="text-[#00d1ff]">Pricing</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "990", desc: "1-5 page business website with responsive design, SEO basics, and contact forms.", color: "#00d1ff" },
                { name: "Business", price: "2,490", desc: "Extended website with blog, AI chatbot, advanced SEO, and third-party integrations.", color: "#9945ff", popular: true },
                { name: "Premium", price: "4,990", desc: "Fully custom solution with e-commerce, automations, multilingual support, and priority care.", color: "#14f195" },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all ${
                    plan.popular
                      ? "border-[#9945ff]/40 bg-[#9945ff]/[0.05] shadow-lg shadow-[#9945ff]/10"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-gradient-to-r from-[#9945ff] to-[#00d1ff] px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: plan.color }}>
                    EUR {plan.price}
                  </div>
                  <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                  <a
                    href={`https://wa.me/358466109064?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20package.`}
                    className="block w-full text-center py-3 rounded-xl font-semibold transition-all"
                    style={{
                      backgroundColor: `${plan.color}15`,
                      border: `1px solid ${plan.color}40`,
                      color: plan.color,
                    }}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              What our <span className="text-[#9945ff]">clients say</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "El Fennir delivered an outstanding website for our consulting firm. Fast, professional, and the end result exceeded our expectations.",
                  name: "International Consulting Firm",
                  location: "Keilaniemi, Espoo",
                },
                {
                  quote: "As an expat running a business in Espoo, I needed someone who understands both Finnish and international markets. El Fennir was the perfect fit.",
                  name: "Tech Startup Founder",
                  location: "Otaniemi, Espoo",
                },
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-4">&quot;{t.quote}&quot;</p>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to grow your <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">business online?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation today. We will show you how a professional website
              can bring more customers to your Espoo business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20website%20for%20my%20business%20in%20Espoo.%20Can%20we%20talk?"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Free Consultation on WhatsApp
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/verkkosivut-yritykselle", label: "Verkkosivut yritykselle", desc: "Websites for businesses (FI)" },
                { href: "/kotisivut-hinta", label: "Kotisivujen hinnat", desc: "Transparent pricing (FI)" },
                { href: "/ravintola-verkkosivut", label: "Ravintolan verkkosivut", desc: "Restaurant websites (FI)" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#9945ff]/30 transition-all group"
                >
                  <p className="text-white font-semibold group-hover:text-[#00d1ff] transition-colors">{link.label}</p>
                  <p className="text-slate-500 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
