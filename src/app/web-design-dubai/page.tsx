import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Dubai — Luxury Websites & AI Automation for UAE Businesses | El Fennir",
  description:
    "Premium web design agency serving Dubai and the UAE. Luxury websites, AI chatbots, and automation for restaurants, salons, real estate, and hospitality. European quality, fast delivery. From 270 EUR (~1,100 AED).",
  keywords: [
    "web design dubai",
    "website agency dubai",
    "AI automation dubai UAE",
    "digital agency dubai",
    "web developer dubai",
    "website design UAE",
    "luxury website dubai",
    "restaurant website dubai",
    "salon website dubai",
    "real estate website dubai",
    "AI chatbot dubai",
    "web development UAE",
    "affordable website dubai",
    "business website dubai",
    "ecommerce website dubai",
  ],
  openGraph: {
    title: "Web Design Dubai — Luxury Websites & AI Automation | El Fennir",
    description:
      "Premium web design and AI automation for Dubai businesses. Restaurants, salons, real estate, hospitality. European quality at competitive rates. From ~1,100 AED.",
    type: "website",
    url: "https://elfennir.com/web-design-dubai",
    locale: "en_AE",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir — Web Design Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Dubai — Luxury Websites & AI Automation | El Fennir",
    description:
      "Premium web design and AI automation for Dubai businesses. European quality, fast delivery. From ~1,100 AED.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/web-design-dubai" },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "El Fennir — Web Design Dubai",
  description:
    "Premium web design agency serving Dubai and the UAE. Luxury websites, AI chatbots, and automation solutions for restaurants, salons, real estate firms, and hospitality businesses.",
  url: "https://elfennir.com/web-design-dubai",
  telephone: "+358466109064",
  email: "yassin@elfennir.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "$$",
  sameAs: ["https://wa.me/358466109064", "https://elfennir.com"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design & AI Services Dubai",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter Website Dubai" },
        price: "270",
        priceCurrency: "EUR",
        description: "Professional 1-5 page website for Dubai businesses with SEO and mobile-first design.",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business Website Dubai" },
        price: "599",
        priceCurrency: "EUR",
        description: "Extended website with AI chatbot, booking system, and advanced SEO for Dubai businesses.",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium Website + AI Automation Dubai" },
        price: "999",
        priceCurrency: "EUR",
        description: "Full custom website with AI chatbot, n8n automations, multilingual support for UAE market.",
      },
    ],
  },
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & AI Automation Dubai",
  provider: {
    "@type": "Organization",
    name: "El Fennir",
    url: "https://elfennir.com",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  serviceType: "Web Design, AI Chatbots, Business Automation",
  description:
    "European-quality web design and AI-powered automation for businesses in Dubai, Abu Dhabi, and across the UAE. Specializing in restaurants, salons, real estate, and hospitality.",
};

export default function WebDesignDubaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9945ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 left-1/2 w-[600px] h-[600px] bg-[#9945ff]/[0.05] rounded-full blur-[160px] -translate-x-1/2" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d1ff]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Premium Web Design Agency in Dubai
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Luxury Websites & AI Automation
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                for Dubai Businesses
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              European-quality web design built for the UAE market. We create stunning websites
              and intelligent AI systems for restaurants, salons, real estate firms, and hospitality
              brands across Dubai and the Emirates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20premium%20website%20for%20my%20business%20in%20Dubai."
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Get a Free Quote on WhatsApp
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Web%20Design%20Inquiry%20-%20Dubai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Dubai Businesses Choose El Fennir ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Why Dubai businesses <span className="text-[#9945ff]">choose El Fennir</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              We combine European design precision with deep understanding of the Dubai market.
              Your brand deserves a website that matches the luxury standard of the UAE.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "European Design Quality", desc: "Swiss precision meets Dubai luxury. We build with Next.js, React, and Tailwind CSS — the same stack used by world-class brands.", color: "#9945ff" },
                { title: "48-72 Hour Delivery", desc: "No weeks of waiting. We deliver professional websites in 2-3 days so you can start attracting customers immediately.", color: "#00d1ff" },
                { title: "Competitive Pricing", desc: "Premium quality at a fraction of Dubai agency rates. Starting from just 270 EUR (~1,100 AED) with no hidden fees.", color: "#14f195" },
                { title: "AI-Powered Features", desc: "Intelligent chatbots that answer customer queries in English and Arabic, book appointments, and qualify leads 24/7.", color: "#f971ff" },
                { title: "SEO That Ranks in UAE", desc: "We optimize for Google.ae and local Dubai searches to drive organic traffic from customers in your area.", color: "#9945ff" },
                { title: "Multilingual Support", desc: "Websites in English, Arabic, and any language you need. RTL support included for Arabic content.", color: "#00d1ff" },
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

        {/* ── Services for Dubai ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Our <span className="text-[#00d1ff]">Services in Dubai</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              From luxury restaurant websites to AI-powered real estate platforms, we build
              digital solutions that drive revenue for UAE businesses.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Luxury Website Design",
                  desc: "Visually stunning, mobile-first websites that reflect the premium standards of Dubai. Perfect for restaurants, hotels, and high-end brands. Fully responsive with fast load times.",
                  price: "From 270 EUR / ~1,100 AED",
                  color: "#00d1ff",
                },
                {
                  title: "AI Chatbots for Business",
                  desc: "Intelligent chatbots that handle reservations, answer FAQs, and qualify leads in English and Arabic. Ideal for restaurants, salons, clinics, and real estate agencies in Dubai.",
                  price: "From 500 EUR / ~2,050 AED",
                  color: "#9945ff",
                },
                {
                  title: "Business Automation (n8n)",
                  desc: "Automate your operations: appointment booking, invoice generation, CRM integration, WhatsApp notifications, and more. Save 10+ hours per week on repetitive tasks.",
                  price: "From 300 EUR setup + 80 EUR/mo",
                  color: "#14f195",
                },
                {
                  title: "E-Commerce & Online Menus",
                  desc: "Online ordering systems for restaurants, product catalogs for retail, and full e-commerce stores with Stripe or local payment gateway integration for the UAE market.",
                  price: "Custom pricing",
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

        {/* ── Industries We Serve in Dubai ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Industries we serve <span className="text-[#14f195]">across Dubai & UAE</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              We specialize in high-demand sectors where a strong online presence drives real revenue.
              Every website is tailored to your industry and target audience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { name: "Restaurants & Cafes", desc: "Online menus, reservations, Google Maps integration", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
                { name: "Salons & Barbershops", desc: "Booking systems, service galleries, price lists", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
                { name: "Real Estate", desc: "Property listings, virtual tours, lead capture", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
                { name: "Hotels & Hospitality", desc: "Luxury showcases, booking integration, multilingual", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
                { name: "Retail & E-Commerce", desc: "Product catalogs, online stores, payment gateways", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
                { name: "Fitness & Wellness", desc: "Class schedules, membership portals, trainer profiles", icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" },
              ].map((industry, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                  <h3 className="text-white font-semibold mb-1">{industry.name}</h3>
                  <p className="text-slate-500 text-sm">{industry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Transparent <span className="text-[#00d1ff]">Pricing for Dubai</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              No hidden fees, no surprises. European quality at rates that make sense for
              businesses of every size in the UAE.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  priceEUR: "270",
                  priceAED: "~1,100",
                  desc: "Professional 1-5 page website with responsive design, SEO basics, contact forms, and Google Maps. Perfect for new businesses in Dubai.",
                  features: ["Mobile-first design", "SEO optimized", "Contact form + WhatsApp", "Google Maps integration", "48-72h delivery"],
                  color: "#00d1ff",
                },
                {
                  name: "Business",
                  priceEUR: "599",
                  priceAED: "~2,450",
                  desc: "Extended website with AI chatbot, booking system, advanced SEO, and multilingual support. Ideal for restaurants, salons, and service businesses.",
                  features: ["Everything in Starter", "AI chatbot (EN + AR)", "Online booking system", "Blog / news section", "Analytics dashboard"],
                  color: "#9945ff",
                  popular: true,
                },
                {
                  name: "Premium",
                  priceEUR: "999",
                  priceAED: "~4,100",
                  desc: "Full custom solution with e-commerce, n8n automations, CRM integration, and priority support. Built for ambitious Dubai businesses.",
                  features: ["Everything in Business", "E-commerce / online orders", "n8n workflow automation", "CRM integration", "Priority support"],
                  color: "#14f195",
                },
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
                  <div className="mb-1">
                    <span className="text-3xl font-bold" style={{ color: plan.color }}>EUR {plan.priceEUR}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-4">{plan.priceAED} AED</p>
                  <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-slate-300">
                        <svg className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/358466109064?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20package%20for%20my%20business%20in%20Dubai.`}
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

        {/* ── How It Works ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              How it <span className="text-[#9945ff]">works</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Message Us", desc: "Send us a WhatsApp message or email with your business details. No forms, no meetings required.", color: "#00d1ff" },
                { step: "02", title: "We Build", desc: "We research your business, design your site, and build it within 48-72 hours. You review a live preview.", color: "#9945ff" },
                { step: "03", title: "You Approve", desc: "Review the preview, request any changes. We refine until you are 100% satisfied with the result.", color: "#14f195" },
                { step: "04", title: "Go Live", desc: "We launch your website, set up analytics and SEO. Your Dubai business is online and ready to grow.", color: "#f971ff" },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="text-3xl font-bold mb-3" style={{ color: s.color }}>{s.step}</div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Dubai Areas We Serve ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Serving businesses <span className="text-[#14f195]">across Dubai & the UAE</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              From Downtown Dubai to JBR, Business Bay to DIFC — we build websites for businesses
              throughout the Emirates.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Downtown Dubai", "Dubai Marina", "JBR", "Business Bay",
                "DIFC", "Jumeirah", "Deira", "Bur Dubai",
                "Al Barsha", "Palm Jumeirah", "Abu Dhabi", "Sharjah",
              ].map((area, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-[#9945ff]/20 transition-all">
                  <span className="text-white font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-center mt-8 text-sm">
              Also serving Ajman, Ras Al Khaimah, Fujairah, and businesses across the entire UAE.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Frequently Asked <span className="text-[#00d1ff]">Questions</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do I need to be in Switzerland to work with El Fennir?",
                  a: "No. We work 100% remotely via WhatsApp and email. Many of our clients are based in Dubai and across the UAE. Communication is seamless regardless of location.",
                },
                {
                  q: "What makes you different from Dubai-based agencies?",
                  a: "We combine European design standards with highly competitive pricing. While local Dubai agencies charge AED 10,000-50,000+, we deliver the same or better quality starting from ~1,100 AED. Plus, we deliver in 48-72 hours, not weeks.",
                },
                {
                  q: "Can you build websites in Arabic?",
                  a: "Yes. We support full RTL (right-to-left) layouts for Arabic content, as well as multilingual websites in English, Arabic, and other languages.",
                },
                {
                  q: "Do you offer AI chatbots for my restaurant or salon?",
                  a: "Absolutely. Our AI chatbots can handle reservations, answer FAQs, and qualify leads in English and Arabic, operating 24/7 without any manual effort from your side.",
                },
                {
                  q: "How do I pay?",
                  a: "We accept bank transfers (EUR and AED), Stripe (credit/debit cards), PayPal, and Revolut. Payment is simple and secure.",
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
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to elevate your <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">Dubai business?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Get a free consultation and a live preview of your website within 48 hours.
              No meetings, no commitments — just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20website%20for%20my%20business%20in%20Dubai.%20Can%20we%20talk?"
                className="sol-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Free Consultation on WhatsApp
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Dubai%20Web%20Design%20Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Email yassin@elfennir.com
              </a>
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/website-espoo", label: "Website Design Espoo", desc: "Our services for Espoo businesses" },
                { href: "/verkkosivut-yritykselle", label: "Verkkosivut yritykselle", desc: "Websites for Finnish businesses" },
                { href: "/tekoaly-automaatio", label: "AI Automation", desc: "AI chatbots & n8n automation" },
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
