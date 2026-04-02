import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseno Web Profesional en Espana | Paginas Web + IA desde 270 EUR — El Fennir",
  description:
    "Diseno web profesional para empresas en Espana. Paginas web modernas, chatbots con IA y automatizacion desde 270 EUR. Entrega en 7 dias. Mas de 50 clientes satisfechos en Europa.",
  keywords: [
    "diseno web espana",
    "paginas web profesionales espana",
    "automatizacion IA espana",
    "diseno web madrid",
    "diseno web barcelona",
    "crear pagina web empresa espana",
    "agencia web espana",
    "paginas web baratas espana",
    "chatbot IA para empresas",
    "automatizacion empresas espana",
    "diseno web profesional",
    "web para negocios espana",
  ],
  openGraph: {
    title: "Diseno Web Profesional en Espana — desde 270 EUR | El Fennir",
    description:
      "Paginas web modernas, chatbots con IA y automatizacion para empresas en Espana. Resultados en 7 dias.",
    type: "website",
    url: "https://elfennir.com/diseno-web-espana",
    locale: "es_ES",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir - Diseno Web Espana" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseno Web Profesional en Espana — El Fennir",
    description: "Paginas web + IA + automatizacion para empresas en Espana desde 270 EUR.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/diseno-web-espana" },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "El Fennir — Diseno Web y Automatizacion IA",
    description:
      "Agencia de diseno web profesional y automatizacion con inteligencia artificial para empresas en Espana. Paginas web modernas, chatbots y automatizacion de procesos.",
    url: "https://elfennir.com/diseno-web-espana",
    telephone: "+358466109064",
    email: "yassin@elfennir.com",
    founder: { "@type": "Person", name: "Yassin El Fennir" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zürich",
      addressCountry: "CH",
    },
    priceRange: "EUR EUR",
    areaServed: [
      { "@type": "Country", name: "Spain" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Finland" },
    ],
    sameAs: [
      "https://wa.me/358466109064",
      "https://elfennir.com",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseno Web Profesional",
    provider: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Diseno Web y IA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Pagina Web Profesional" },
          price: "270",
          priceCurrency: "EUR",
          description: "Pagina web moderna y optimizada para SEO con diseno responsive.",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Chatbot con Inteligencia Artificial" },
          price: "500",
          priceCurrency: "EUR",
          description: "Chatbot IA personalizado que atiende clientes 24/7.",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Automatizacion de Procesos con IA" },
          price: "300",
          priceCurrency: "EUR",
          description: "Automatizacion de workflows con n8n e inteligencia artificial.",
        },
      ],
    },
  },
];

export default function DisenoWebEspanaPage() {
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
          <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#9945ff]/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#14f195]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Diseno web profesional en Espana
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Paginas web que convierten visitantes en clientes
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                — desde 270 EUR
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Creamos paginas web profesionales, chatbots con inteligencia artificial y
              automatizaciones para empresas en toda Espana. Entrega en 7 dias, sin letra
              pequena.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hola!%20Quiero%20una%20p%C3%A1gina%20web%20profesional%20para%20mi%20negocio%20en%20Espa%C3%B1a."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Consulta%20diseno%20web%20Espana"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Enviar email
              </a>
            </div>
          </div>
        </section>

        {/* ── Por que El Fennir ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Por que <span className="text-[#14f195]">mas de 50 empresas</span> confian en nosotros
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
                  title: "Entrega en 7 dias",
                  desc: "No esperes meses. Tu pagina web profesional lista y funcionando en una semana.",
                  color: "#9945ff",
                },
                {
                  icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
                  title: "Tecnologia con IA",
                  desc: "Usamos inteligencia artificial para crear webs mas rapidas, chatbots inteligentes y automatizaciones avanzadas.",
                  color: "#00d1ff",
                },
                {
                  icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
                  title: "Precios transparentes",
                  desc: "Desde 270 EUR. Sin costes ocultos, sin sorpresas. Sabes exactamente lo que pagas antes de empezar.",
                  color: "#14f195",
                },
                {
                  icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418",
                  title: "Servicio en toda Europa",
                  desc: "Operamos desde Zürich, Suiza y servimos clientes en Espana, Finlandia, Dubai y toda Europa.",
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

        {/* ── Servicios ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Nuestros <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">servicios</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14 text-lg">
              Todo lo que tu negocio necesita para crecer en el mundo digital. Diseno web,
              inteligencia artificial y automatizacion en un solo proveedor.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Paginas Web Profesionales",
                  price: "Desde 270 EUR",
                  color: "#9945ff",
                  features: [
                    "Diseno moderno y responsive",
                    "Optimizacion SEO completa",
                    "Velocidad de carga ultrarapida",
                    "Formulario de contacto integrado",
                    "Compatible con moviles y tablets",
                    "Certificado SSL incluido",
                  ],
                },
                {
                  title: "Chatbots con IA",
                  price: "Desde 500 EUR",
                  color: "#00d1ff",
                  popular: true,
                  features: [
                    "Atencion al cliente 24/7",
                    "Respuestas inteligentes con IA",
                    "Integracion con WhatsApp",
                    "Cualificacion automatica de leads",
                    "Personalizado para tu negocio",
                    "Panel de estadisticas",
                  ],
                },
                {
                  title: "Automatizacion con IA",
                  price: "Desde 300 EUR + 80 EUR/mes",
                  color: "#14f195",
                  features: [
                    "Automatizacion de emails y CRM",
                    "Workflows con n8n",
                    "Integracion con tus herramientas",
                    "Ahorro de +20 horas/semana",
                    "Informes automaticos",
                    "Soporte y mantenimiento mensual",
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
                      Mas popular
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

        {/* ── Proceso ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Como <span className="text-[#00d1ff]">trabajamos</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Contacto", desc: "Nos cuentas que necesitas por WhatsApp o email. Sin compromiso." },
                { step: "02", title: "Propuesta", desc: "En 24 horas recibes una propuesta personalizada con precio cerrado." },
                { step: "03", title: "Desarrollo", desc: "Creamos tu web, chatbot o automatizacion con tecnologia de ultima generacion." },
                { step: "04", title: "Entrega", desc: "En 7 dias tienes todo listo, online y funcionando. Soporte incluido." },
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
              Preguntas <span className="text-[#14f195]">frecuentes</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Cuanto cuesta una pagina web profesional en Espana?",
                  a: "Nuestras paginas web profesionales empiezan desde 270 EUR para un sitio de 1-5 paginas. Los proyectos mas complejos con chatbot IA y automatizaciones tienen precios personalizados. Sin costes ocultos.",
                },
                {
                  q: "En cuanto tiempo estara lista mi web?",
                  a: "Entregamos paginas web completas en 7 dias. Proyectos mas complejos con integraciones avanzadas pueden tardar 2-3 semanas. Siempre con fecha de entrega garantizada.",
                },
                {
                  q: "Trabajais con empresas de toda Espana?",
                  a: "Si. Trabajamos de forma remota con empresas en Madrid, Barcelona, Valencia, Sevilla, Bilbao y toda Espana. Tambien servimos clientes en Suiza, Finlandia y Dubai.",
                },
                {
                  q: "Que incluye el servicio de chatbot con IA?",
                  a: "El chatbot incluye configuracion personalizada para tu negocio, entrenamiento con tu informacion, integracion con WhatsApp y tu web, atencion 24/7 automatica y panel de estadisticas.",
                },
                {
                  q: "Ofreceis soporte despues de la entrega?",
                  a: "Si. Todos nuestros proyectos incluyen soporte por WhatsApp. Para automatizaciones ofrecemos mantenimiento mensual desde 80 EUR/mes.",
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
              Listo para llevar tu negocio{" "}
              <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
                al siguiente nivel?
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Contactanos hoy y recibe una consulta gratuita. Te explicamos como una web
              profesional y la inteligencia artificial pueden transformar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hola!%20Me%20interesa%20una%20consulta%20gratuita%20para%20mi%20negocio%20en%20Espa%C3%B1a."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Consulta gratuita
              </a>
              <a
                href="mailto:yassin@elfennir.com?subject=Consulta%20diseno%20web%20Espana"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                yassin@elfennir.com
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Telefono: <a href="tel:+358466109064" className="text-[#00d1ff] hover:underline">+358 46 6109064</a>
            </p>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/web-design-spain", label: "Web Design Spain (English)", desc: "Our services in English" },
                { href: "/verkkosivut-yritykselle", label: "Verkkosivut yritykselle", desc: "Palvelumme suomeksi" },
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
