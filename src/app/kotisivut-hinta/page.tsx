import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kotisivujen hinta 2026 — läpinäkyvä hinnoittelu | El Fennir",
  description:
    "Kotisivujen hinta 2026: Starter 990 €, Business 2 490 €, Premium 4 990 €. Vertaa hintoja ja valitse paras vaihtoehto yrityksellesi. Ei piilokuluja.",
  keywords: [
    "kotisivut hinta",
    "verkkosivut hinta",
    "kotisivujen hinta",
    "nettisivut hinta",
    "verkkosivujen hinta 2026",
    "edullinen verkkosivut",
    "halpa kotisivut",
    "mitä verkkosivut maksaa",
  ],
  openGraph: {
    title: "Kotisivujen hinta 2026 — läpinäkyvä hinnoittelu ilman yllätyksiä",
    description:
      "Vertaa verkkosivujen hintoja: omatekoiset, toimiston ja meidän hinnat rinnakkain. Alkaen 990 €.",
    type: "website",
    url: "https://elfennir.com/kotisivut-hinta",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  alternates: { canonical: "https://elfennir.com/kotisivut-hinta" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Verkkosivujen suunnittelu ja kehitys",
  provider: {
    "@type": "LocalBusiness",
    name: "El Fennir",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    address: { "@type": "PostalAddress", addressLocality: "Zürich", addressCountry: "CH" },
  },
  areaServed: { "@type": "Country", name: "Finland" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Verkkosivupaketit",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter-verkkosivut" },
        price: "990",
        priceCurrency: "EUR",
        description: "1-5-sivuinen yrityssivusto, responsiivinen design, SEO, yhteydenottolomake",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business-verkkosivut" },
        price: "2490",
        priceCurrency: "EUR",
        description: "Laajempi sivusto, blogi, AI-chatbot, edistynyt SEO, integraatiot",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium-verkkosivut" },
        price: "4990",
        priceCurrency: "EUR",
        description: "Täysin räätälöity ratkaisu, verkkokauppa, automaatiot, premium-tuki",
      },
    ],
  },
};

export default function KotisivutHintaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#14f195]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-[#14f195]/[0.04] rounded-full blur-[140px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#14f195] mb-4 tracking-wide uppercase">
              Kotisivujen hinta 2026
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kotisivujen hinta 2026
              <span className="block bg-gradient-to-r from-[#14f195] via-[#00d1ff] to-[#9945ff] bg-clip-text text-transparent">
                — läpinäkyvä hinnoittelu ilman yllätyksiä
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Tiedä etukäteen, mitä maksat. Vertaa eri vaihtoehtoja ja valitse yrityksellesi
              paras ratkaisu — ilman piilokuluja tai yllätyksiä.
            </p>
          </div>
        </section>

        {/* ── Price Comparison Table ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Vertaa: <span className="text-[#00d1ff]">El Fennir</span> vs. perinteinen toimisto vs. tee-se-itse
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              Katsotaan rehellisesti, mitä saat eri vaihtoehdoilla.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-slate-400 font-medium border-b border-white/[0.06]">Ominaisuus</th>
                    <th className="p-4 text-center border-b border-[#9945ff]/30">
                      <div className="text-[#9945ff] font-bold text-lg">El Fennir</div>
                      <div className="text-slate-400 text-sm">990 - 4 990 €</div>
                    </th>
                    <th className="p-4 text-center border-b border-white/[0.06]">
                      <div className="text-slate-300 font-bold text-lg">Mainostoimisto</div>
                      <div className="text-slate-400 text-sm">3 000 - 15 000 €</div>
                    </th>
                    <th className="p-4 text-center border-b border-white/[0.06]">
                      <div className="text-slate-300 font-bold text-lg">Tee-se-itse</div>
                      <div className="text-slate-400 text-sm">0 - 300 € / vuosi</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Toimitusaika", us: "5-14 päivää", agency: "4-12 viikkoa", diy: "Viikkoja-kuukausia" },
                    { feature: "Räätälöity design", us: true, agency: true, diy: false },
                    { feature: "Mobiilioptimointi", us: true, agency: true, diy: "Vaihtelee" },
                    { feature: "SEO-optimointi", us: true, agency: "Lisämaksusta", diy: false },
                    { feature: "AI-chatbot", us: "Business+", agency: "Lisämaksusta", diy: false },
                    { feature: "Nopeus (Core Web Vitals)", us: "95+ piste", agency: "Vaihtelee", diy: "40-60 piste" },
                    { feature: "Ylläpito ja tuki", us: "Sis. hintaan", agency: "200-500 €/kk", diy: "Itse" },
                    { feature: "Sisällönhallinta", us: true, agency: true, diy: true },
                    { feature: "SSL-sertifikaatti", us: true, agency: true, diy: "Vaihtelee" },
                    { feature: "Henkilökohtainen yhteyshenkilö", us: true, agency: "Vaihtelee", diy: false },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="p-4 text-slate-300 font-medium">{row.feature}</td>
                      <td className="p-4 text-center bg-[#9945ff]/[0.03]">
                        {row.us === true ? (
                          <svg className="w-5 h-5 text-[#14f195] mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        ) : row.us === false ? (
                          <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                          <span className="text-[#14f195] font-medium text-sm">{row.us}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.agency === true ? (
                          <svg className="w-5 h-5 text-[#14f195] mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        ) : row.agency === false ? (
                          <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                          <span className="text-yellow-400/80 text-sm">{row.agency}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.diy === true ? (
                          <svg className="w-5 h-5 text-[#14f195] mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        ) : row.diy === false ? (
                          <svg className="w-5 h-5 text-red-400 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                          <span className="text-yellow-400/80 text-sm">{row.diy}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Detailed Pricing Cards ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Valitse <span className="text-[#9945ff]">pakettisi</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "990",
                  monthly: "49",
                  color: "#00d1ff",
                  popular: false,
                  features: [
                    "1-5 sivua",
                    "Responsiivinen design",
                    "SEO-perusoptimointi",
                    "Yhteydenottolomake",
                    "SSL-sertifikaatti",
                    "Google Analytics",
                    "1 kk ilmainen tuki",
                    "Valmis 7 päivässä",
                  ],
                },
                {
                  name: "Business",
                  price: "2 490",
                  monthly: "149",
                  color: "#9945ff",
                  popular: true,
                  features: [
                    "5-15 sivua",
                    "Räätälöity premium-design",
                    "Edistynyt SEO",
                    "AI-chatbot",
                    "Blogi & sisällönhallinta",
                    "Nopeusoptimointi",
                    "Integraatiot (Stripe, CRM)",
                    "WhatsApp-integraatio",
                    "3 kk ilmainen tuki",
                    "Valmis 10 päivässä",
                  ],
                },
                {
                  name: "Premium",
                  price: "4 990",
                  monthly: "299",
                  color: "#14f195",
                  popular: false,
                  features: [
                    "Rajaton sivumäärä",
                    "Täysin räätälöity",
                    "Verkkokauppa",
                    "AI-automaatiot",
                    "N8N-työnkulut",
                    "Monikielisyys",
                    "A/B-testaus",
                    "Priority-tuki 24/7",
                    "6 kk ilmainen tuki",
                    "Valmis 14 päivässä",
                  ],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl border transition-all ${
                    plan.popular
                      ? "border-[#9945ff]/40 bg-[#9945ff]/[0.06] shadow-xl shadow-[#9945ff]/10"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-white bg-gradient-to-r from-[#9945ff] to-[#00d1ff] px-4 py-1 rounded-full">
                      Suosituin
                    </span>
                  )}
                  <h3 className="text-white font-bold text-2xl mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price} €</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6">+ ylläpito {plan.monthly} €/kk</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: plan.color }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-slate-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/358466109064?text=Hei!%20Olen%20kiinnostunut%20pakettista%20${plan.name}."
                    className="block w-full text-center py-3 rounded-xl font-semibold transition-all"
                    style={{
                      backgroundColor: `${plan.color}15`,
                      border: `1px solid ${plan.color}40`,
                      color: plan.color,
                    }}
                  >
                    Tilaa {plan.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI Section ── */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Verkkosivut ovat <span className="text-[#14f195]">investointi, ei kulu</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12 text-lg">
              Laske, kuinka nopeasti verkkosivut maksavat itsensä takaisin.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {[
                { value: "+40 %", label: "Lisää yhteydenottoja", desc: "Keskimääräinen kasvu ensimmäisen kuukauden aikana" },
                { value: "3-6 kk", label: "Takaisinmaksuaika", desc: "Verkkosivut maksavat itsensä takaisin uusien asiakkaiden kautta" },
                { value: "24/7", label: "Myyntityötä kellon ympäri", desc: "Verkkosivut myyvät puolestasi myös yöllä ja viikonloppuisin" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="text-3xl font-bold text-[#00d1ff] mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <p className="text-slate-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#00d1ff]/[0.02] to-transparent">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Usein kysytyt <span className="text-[#00d1ff]">kysymykset</span> hinnoittelusta
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Onko hinnassa piilokuluja?",
                  a: "Ei. Maksat kertamaksun verkkosivuista ja pienen kuukausimaksun ylläpidosta. Kaikki kulut kerrotaan etukäteen.",
                },
                {
                  q: "Voinko maksaa erissä?",
                  a: "Kyllä! Tarjoamme joustavan maksusuunnitelman. 50 % alussa, 50 % kun sivut ovat valmiit.",
                },
                {
                  q: "Mitä ylläpitomaksu sisältää?",
                  a: "Hosting, SSL-sertifikaatti, tekniset päivitykset, tietoturvapäivitykset, varmuuskopiot ja tekninen tuki.",
                },
                {
                  q: "Entä jos en ole tyytyväinen lopputulokseen?",
                  a: "Teemme rajattomasti muutoksia suunnitteluvaiheessa. Et maksa lopullista summaa ennen kuin olet tyytyväinen.",
                },
                {
                  q: "Miksi El Fennir on edullisempi kuin perinteinen toimisto?",
                  a: "Käytämme tehokkaita työkaluja ja moderneja teknologioita. Ei turhaa byrokratiaa tai välikäsiä — vain suora kommunikaatio ja nopeaa toteutusta.",
                },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.q}</h3>
                  <p className="text-slate-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Pyydä <span className="bg-gradient-to-r from-[#14f195] to-[#00d1ff] bg-clip-text text-transparent">ilmainen tarjous</span> tänään
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Kerro meille projektistasi ja saat räätälöidyn tarjouksen 24 tunnissa. Ei sitoumuksia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hei!%20Haluaisin%20tarjouksen%20verkkosivuista."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Pyydä tarjous WhatsAppissa
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Lähetä viesti
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
                { href: "/ravintola-verkkosivut", label: "Ravintolan verkkosivut", desc: "Erikoistunut ravintola-ala" },
                { href: "/tekoaly-automaatio", label: "Tekoälyautomaatio", desc: "Säästä aikaa ja rahaa" },
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
