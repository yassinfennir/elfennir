import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design Spain | Professional Websites + AI Automation from 270 EUR — El Fennir",
  description:
    "Professional web design for businesses in Spain. Modern websites, AI chatbots and automation from 270 EUR. Delivered in 7 days. 50+ happy clients across Europe.",
  keywords: [
    "web design spain",
    "website agency spain",
    "AI automation spain",
    "web design madrid",
    "web design barcelona",
    "business website spain",
    "professional website spain",
    "affordable web design spain",
    "AI chatbot for business",
    "business automation spain",
    "website development spain",
    "web developer spain",
  ],
  openGraph: {
    title: "Professional Web Design in Spain — from 270 EUR | El Fennir",
    description:
      "Modern websites, AI chatbots and automation for businesses in Spain. Results in 7 days.",
    type: "website",
    url: "https://elfennir.com/web-design-spain",
    locale: "en_US",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir - Web Design Spain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Design in Spain — El Fennir",
    description: "Websites + AI + automation for businesses in Spain from 270 EUR.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/web-design-spain" },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Web Design & AI Automation",
    description:
      "Professional web design agency and AI automation provider for businesses in Spain. Modern websites, intelligent chatbots and workflow automation.",
    url: "https://elfennir.com/web-design-spain",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    founder: { "@type": "Person", name: "Yassin El Fennir" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Finland" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    sameAs: [
      "https://wa.me/358466109064",
      "https://elfennir.com",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Professional Web Design",
    provider: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design & AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Professional Website" },
          price: "270",
          priceCurrency: "EUR",
          description: "Modern, SEO-optimized responsive website for businesses.",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI Chatbot" },
          price: "500",
          priceCurrency: "EUR",
          description: "Custom AI-powered chatbot providing 24/7 customer support.",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "AI Workflow Automation" },
          price: "300",
          priceCurrency: "EUR",
          description: "Business process automation using n8n and artificial intelligence.",
        },
      ],
    },
  },
];

export default function WebDesignSpainPage() {
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
          <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-[#00d1ff]/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#14f195]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Professional Web Design in Spain
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Websites that turn visitors into customers
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                — from 270 EUR
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              We build professional websites, AI chatbots and workflow automations for
              businesses across Spain. Delivered in 7 days, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I%20need%20a%20professional%20website%20for%20my%20business%20in%20Spain."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Contact on WhatsApp
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Web%20design%20inquiry%20Spain"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Send email
              </a>
            </div>
          </div>
        </section>

        {/* ── Why El Fennir ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Why <span className="text-[#14f195]">50+ businesses</span> trust El Fennir
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                  title: "7-Day Delivery",
                  desc: "No waiting months. Your professional website is live and running in just one week.",
                  color: "#9945ff",
                },
                {
                  icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
                  title: "AI-Powered Technology",
                  desc: "We use artificial intelligence to build faster websites, smarter chatbots and advanced automations.",
                  color: "#00d1ff",
                },
                {
                  icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
                  title: "Transparent Pricing",
                  desc: "Starting from 270 EUR. No hidden costs, no surprises. You know exactly what you pay before we start.",
                  color: "#14f195",
                },
                {
                  icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418",
                  title: "Serving All of Europe",
                  desc: "Based in Zürich, Switzerland, serving clients in Spain, Finland, Dubai and across Europe with the same quality.",
                  color: "#f971ff",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all text-center"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <svg className="w-7 h-7" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Our <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">services</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14 text-lg">
              Everything your business needs to grow online. Web design, artificial
              intelligence and automation from a single provider.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Websites",
                  price: "From 270 EUR",
                  color: "#9945ff",
                  features: [
                    "Modern, responsive design",
                    "Full SEO optimization",
                    "Ultra-fast loading speed",
                    "Integrated contact forms",
                    "Mobile and tablet friendly",
                    "SSL certificate included",
                  ],
                },
                {
                  title: "AI Chatbots",
                  price: "From 500 EUR",
                  color: "#00d1ff",
                  popular: true,
                  features: [
                    "24/7 customer support",
                    "Intelligent AI responses",
                    "WhatsApp integration",
                    "Automatic lead qualification",
                    "Customized for your business",
                    "Analytics dashboard",
                  ],
                },
                {
                  title: "AI Automation",
                  price: "From 300 EUR + 80 EUR/mo",
                  color: "#14f195",
                  features: [
                    "Email and CRM automation",
                    "n8n workflow builder",
                    "Integration with your tools",
                    "Save 20+ hours per week",
                    "Automated reporting",
                    "Monthly support & maintenance",
                  ],
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all ${
                    service.popular
                      ? "border-[#00d1ff]/40 bg-[#00d1ff]/[0.05] shadow-lg shadow-[#00d1ff]/10"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {service.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-gradient-to-r from-[#00d1ff] to-[#9945ff] px-4 py-1 rounded-full">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                  <div className="text-2xl font-bold mb-6" style={{ color: service.color }}>
                    {service.price}
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              How we <span className="text-[#00d1ff]">work</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Contact", desc: "Tell us what you need via WhatsApp or email. No commitment required." },
                { step: "02", title: "Proposal", desc: "Within 24 hours you receive a custom proposal with a fixed price." },
                { step: "03", title: "Development", desc: "We build your website, chatbot or automation with cutting-edge technology." },
                { step: "04", title: "Delivery", desc: "In 7 days everything is live, online and working. Support included." },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9945ff]/20 to-[#00d1ff]/20 border border-[#9945ff]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SEO ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#14f195]/[0.02] to-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Frequently asked <span className="text-[#14f195]">questions</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How much does a professional website cost in Spain?",
                  a: "Our professional websites start from 270 EUR for a 1-5 page site. More complex projects with AI chatbot and automations have custom pricing. No hidden fees ever.",
                },
                {
                  q: "How long does it take to build my website?",
                  a: "We deliver complete websites in 7 days. More complex projects with advanced integrations may take 2-3 weeks. Always with a guaranteed delivery date.",
                },
                {
                  q: "Do you work with businesses across all of Spain?",
                  a: "Yes. We work remotely with businesses in Madrid, Barcelona, Valencia, Seville, Bilbao and all of Spain. We also serve clients in Switzerland, Finland and Dubai.",
                },
                {
                  q: "What does the AI chatbot service include?",
                  a: "The chatbot includes custom setup for your business, training with your data, WhatsApp and website integration, 24/7 automated support and an analytics dashboard.",
                },
                {
                  q: "Do you offer support after delivery?",
                  a: "Yes. All our projects include WhatsApp support. For automations we offer monthly maintenance starting at 80 EUR per month.",
                },
                {
                  q: "What technologies do you use?",
                  a: "We build with Next.js, React and Tailwind CSS for blazing-fast performance. Our AI chatbots use the latest language models, and automations run on n8n workflows.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to take your business{" "}
              <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
                to the next level?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Contact us today for a free consultation. We will show you how a professional
              website and AI can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hi!%20I'd%20like%20a%20free%20consultation%20for%20my%20business%20in%20Spain."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Free consultation
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Web%20design%20inquiry%20Spain"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                yassin@elfennir.com
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Phone: <a href="tel:+358466109064" className="text-[#00d1ff] hover:underline">+358 46 6109064</a>
            </p>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/diseno-web-espana", label: "Diseno Web Espana (Espanol)", desc: "Nuestros servicios en espanol" },
                { href: "/verkkosivut-yritykselle", label: "Verkkosivut yritykselle", desc: "Our services in Finnish" },
                { href: "/", label: "El Fennir — Home", desc: "All services & pricing" },
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
