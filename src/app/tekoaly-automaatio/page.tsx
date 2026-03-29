import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tekoälyautomaatio yritykselle — säästä 20 tuntia viikossa | El Fennir",
  description:
    "Tekoäly- ja automaatioratkaisut yrityksellesi. AI-chatbotit, työnkulkuautomaatiot ja älykkäät järjestelmät. Säästä aikaa, vähennä virheitä ja kasvata liikevaihtoasi.",
  keywords: [
    "tekoäly automaatio",
    "tekoäly yritys",
    "AI automaatio",
    "automaatio yritykselle",
    "chatbot yritykselle",
    "tekoäly ratkaisu",
    "n8n automaatio",
    "liiketoiminta-automaatio",
  ],
  openGraph: {
    title: "Tekoälyautomaatio yritykselle — säästä 20 tuntia viikossa",
    description:
      "AI-chatbotit, työnkulkuautomaatiot ja älykkäät järjestelmät yrityksellesi. Aloita automaatio tänään.",
    type: "website",
    url: "https://elfennir.com/tekoaly-automaatio",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  alternates: { canonical: "https://elfennir.com/tekoaly-automaatio" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tekoälyautomaatio ja AI-ratkaisut",
  provider: {
    "@type": "LocalBusiness",
    name: "El Fennir",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    address: { "@type": "PostalAddress", addressLocality: "Espoo", addressCountry: "FI" },
  },
  areaServed: { "@type": "Country", name: "Finland" },
  description: "Tekoäly- ja automaatioratkaisut yrityksille. AI-chatbotit, N8N-työnkulut ja älykkäät järjestelmät.",
};

export default function TekoalyAutomaatioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00d1ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#00d1ff]/[0.05] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#9945ff]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#00d1ff] mb-4 tracking-wide uppercase">
              Tekoäly &amp; Automaatio
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tekoälyautomaatio yrityksellesi
              <span className="block bg-gradient-to-r from-[#00d1ff] via-[#9945ff] to-[#f971ff] bg-clip-text text-transparent">
                — säästä 20 tuntia viikossa
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Lopeta manuaalinen työ. Automatisoi toistuvat tehtävät, vastaa asiakkaille 24/7
              ja anna tekoälyn hoitaa rutiinit — niin voit keskittyä kasvattamiseen.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Olen%20kiinnostunut%20tekoälyautomaatiosta%20yritykseeni."
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
              Kysy lisää WhatsAppissa
            </a>
          </div>
        </section>

        {/* ── Use Cases by Industry ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Tekoäly <span className="text-[#9945ff]">toimialallesi</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Tekoälyautomaatio sopii jokaiselle toimialalle. Tässä muutama esimerkki.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Ravintolat",
                  icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z",
                  color: "#f971ff",
                  automations: ["AI-chatbot varausten hallintaan", "Automaattiset tilausvahvistukset", "Ruuhka-ajan ennustaminen", "Sosiaalisen median sisällön luonti"],
                },
                {
                  industry: "Verkkokaupat",
                  icon: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
                  color: "#14f195",
                  automations: ["Automaattiset tuotesuositukset", "Hylättyjen ostoskorien palautus", "Varastohälytykset", "Asiakaspalvelu-chatbot"],
                },
                {
                  industry: "Palveluyritykset",
                  icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
                  color: "#00d1ff",
                  automations: ["Ajanvaraus-automaatio", "Automaattiset muistutukset", "Laskutusautomaatio", "Asiakaspalaute-keräys"],
                },
                {
                  industry: "Kiinteistöala",
                  icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h1.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
                  color: "#9945ff",
                  automations: ["Lead-kvalifiointi chatbotilla", "Automaattiset näyttöajan varaukset", "Kohdeasiakas-seuranta", "Dokumenttien automaattinen käsittely"],
                },
                {
                  industry: "Terveys & Hyvinvointi",
                  icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
                  color: "#f971ff",
                  automations: ["Ajanvarausjärjestelmä", "Potilasmuistutukset", "Hoito-ohjeiden automaattinen lähetys", "Palaute- ja NPS-kyselyt"],
                },
                {
                  industry: "Logistiikka",
                  icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-10.5H6.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125h3m-3 0h8.25m-8.25 0V5.625m0 12.75h8.25m0 0v-1.875m0 1.875h2.625M15 15.75v-1.875m0 0V5.625m0 8.25H6.375",
                  color: "#14f195",
                  automations: ["Lähetysseuranta-automaatio", "Tilausstatuspäivitykset", "Reitin optimointi AI:lla", "Automaattiset raportit"],
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all">
                  <svg className="w-10 h-10 mb-4" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <h3 className="text-white font-bold text-xl mb-4">{item.industry}</h3>
                  <ul className="space-y-2">
                    {item.automations.map((a, ai) => (
                      <li key={ai} className="flex items-start gap-2">
                        <svg className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-slate-400 text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Before / After ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              <span className="text-[#f971ff]">Ennen</span> vs. <span className="text-[#14f195]">jälkeen</span> automaation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/[0.03]">
                <h3 className="text-red-400 font-bold text-xl mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  Ilman automaatiota
                </h3>
                <ul className="space-y-4">
                  {[
                    "20+ tuntia viikossa manuaalista työtä",
                    "Asiakasviesteihin vastaaminen viiveellä",
                    "Inhimilliset virheet laskutuksessa",
                    "Liidien katoaminen ilman seurantaa",
                    "Tiedon siirtäminen käsin järjestelmästä toiseen",
                    "Väsymys toistuviin rutiineihin",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="p-8 rounded-2xl border border-[#14f195]/20 bg-[#14f195]/[0.03]">
                <h3 className="text-[#14f195] font-bold text-xl mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Automaation jälkeen
                </h3>
                <ul className="space-y-4">
                  {[
                    "Säästä 20+ tuntia viikossa automaatioilla",
                    "AI-chatbot vastaa asiakkaille 24/7",
                    "Nolla virheitä automaattisessa laskutuksessa",
                    "Jokainen liidi seurataan automaattisesti",
                    "Tiedot synkronoituvat reaaliajassa järjestelmien välillä",
                    "Keskity strategiseen kasvuun, ei rutiineihin",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#14f195]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Tools ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Teknologiat, joita <span className="text-[#00d1ff]">käytämme</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "N8N", desc: "Visuaalinen automaatioalusta. Yhdistää kaikki järjestelmäsi.", color: "#EA4B71" },
                { name: "OpenAI / Claude", desc: "Älykkäät AI-chatbotit ja sisällöntuotanto.", color: "#00d1ff" },
                { name: "WhatsApp API", desc: "Automaattiset viestit ja asiakasvuorovaikutus.", color: "#25D366" },
                { name: "Stripe", desc: "Automaattinen laskutus ja maksunhallinta.", color: "#635BFF" },
              ].map((tool, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-white/10 transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: `${tool.color}15`, border: `1px solid ${tool.color}30` }}
                  >
                    <svg className="w-6 h-6" style={{ color: tool.color }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{tool.name}</h3>
                  <p className="text-slate-400 text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Valmiina <span className="bg-gradient-to-r from-[#00d1ff] to-[#9945ff] bg-clip-text text-transparent">automatisoimaan</span> yrityksesi?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Kerro meille, mitä tehtäviä haluat automatisoida. Suunnittelemme sinulle räätälöidyn
              ratkaisun ilmaisessa konsultaatiossa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hei!%20Haluan%20kuulla%20lisää%20tekoälyautomaatiosta."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Ilmainen automaatiokonsultaatio
              </a>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Katso palvelumme
              </Link>
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/verkkosivut-yritykselle", label: "Verkkosivut yritykselle", desc: "Tuloksia 7 päivässä" },
                { href: "/kotisivut-hinta", label: "Kotisivujen hinnat 2026", desc: "Läpinäkyvä hinnoittelu" },
                { href: "/ravintola-verkkosivut", label: "Ravintolan verkkosivut", desc: "Erikoistunut ravintola-ala" },
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
