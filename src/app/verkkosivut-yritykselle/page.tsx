import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ammattimaiset verkkosivut yritykselle | Tuloksia 7 päivässä — El Fennir",
  description:
    "Tilaa ammattimaiset verkkosivut yrityksellesi alkaen 990 €. Mobiilioptimoidut, hakukoneoptimoidut ja tuloshakuiset sivut valmiina 7 päivässä. Yli 50 tyytyväistä asiakasta.",
  keywords: [
    "verkkosivut yritykselle",
    "yrityksen verkkosivut",
    "kotisivut yritykselle",
    "verkkosivut hinta",
    "verkkosivujen suunnittelu",
    "nettisivut yritykselle",
    "edulliset verkkosivut",
    "verkkosivut yrittäjälle",
  ],
  openGraph: {
    title: "Ammattimaiset verkkosivut yritykselle — tuloksia 7 päivässä",
    description:
      "Modernit, hakukoneoptimoidut verkkosivut yrityksellesi alkaen 990 €. Valmiina viikossa.",
    type: "website",
    url: "https://elfennir.com/verkkosivut-yritykselle",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  alternates: { canonical: "https://elfennir.com/verkkosivut-yritykselle" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "El Fennir — Verkkosivujen suunnittelu",
  description:
    "Ammattimainen verkkosivujen suunnittelu ja kehitys yrityksille. Modernit, nopeat ja hakukoneoptimoidut verkkosivut.",
  url: "https://elfennir.com",
  telephone: "+358466109064",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
  priceRange: "€€",
  areaServed: { "@type": "Country", name: "Finland" },
  sameAs: ["https://wa.me/358466109064"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Verkkosivupalvelut",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Starter-verkkosivut" },
        price: "990",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Business-verkkosivut" },
        price: "2490",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium-verkkosivut" },
        price: "4990",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function VerkkosivutYrityksellePage() {
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
              Verkkosivut yritykselle
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ammattimaiset verkkosivut yrityksellesi
              <span className="block bg-gradient-to-r from-[#9945ff] via-[#00d1ff] to-[#14f195] bg-clip-text text-transparent">
                — tuloksia 7 päivässä
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Lopeta asiakkaiden menettäminen vanhentuneilla verkkosivuilla. Saat modernit,
              mobiilioptimoidut ja hakukoneystävälliset sivut, jotka tuovat sinulle lisää
              yhteydenottoja ja kauppaa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hei!%20Haluan%20ammattimaiset%20verkkosivut%20yritykselleni."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Ota yhteyttä WhatsAppissa
              </a>
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Katso hinnat
              </Link>
            </div>
          </div>
        </section>

        {/* ── Problem Section ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Miksi yrityksesi <span className="text-[#f971ff]">menettää asiakkaita</span> juuri nyt?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
                  title: "Vanhentuneet sivut",
                  desc: "75 % kuluttajista arvioi yrityksesi uskottavuuden verkkosivujesi perusteella. Vanhat sivut karkoittavat asiakkaat kilpailijoille.",
                },
                {
                  icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3",
                  title: "Ei mobiilioptimointia",
                  desc: "Yli 70 % nettiliikenteestä tulee puhelimista. Jos sivusi eivät toimi mobiilissa, menetät valtaosan potentiaalisista asiakkaista.",
                },
                {
                  icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
                  title: "Näkymätön Googlessa",
                  desc: "Ilman hakukoneoptimointia yrityksesi ei löydy hakutuloksista. 90 % klikkaa vain ensimmäisen sivun tuloksia.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#9945ff]/20 transition-all"
                >
                  <svg className="w-10 h-10 text-[#f971ff] mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution Section ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Ratkaisu: <span className="bg-gradient-to-r from-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">verkkosivut, jotka myyvät puolestasi</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14 text-lg">
              Rakennamme yrityksellesi modernit verkkosivut, jotka latautuvat salamannopeasti,
              näkyvät Googlessa ja muuttavat kävijät asiakkaiksi.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Räätälöity design", desc: "Ainutlaatuinen ulkoasu, joka erottaa sinut kilpailijoista. Ei geneerisiä teemoja.", color: "#9945ff" },
                { title: "Mobiilioptimoitu", desc: "Täydellinen näkymä jokaisella laitteella — puhelimesta pöytäkoneeseen.", color: "#00d1ff" },
                { title: "Hakukoneoptimoitu (SEO)", desc: "Google löytää sivusi ja nostaa sinut hakutuloksissa kilpailijoiden ohi.", color: "#14f195" },
                { title: "Nopeat latausajat", desc: "Alle 2 sekunnin latausajat Next.js-teknologialla. Nopeus = parempi SEO + enemmän myyntiä.", color: "#f971ff" },
                { title: "Yhteydenottolomake & CTA", desc: "Selkeät toimintakehotukset, jotka ohjaavat kävijän ottamaan yhteyttä tai ostamaan.", color: "#9945ff" },
                { title: "Valmiina 7 päivässä", desc: "Ei kuukausia odottelua. Saat valmiit sivut viikossa — takuu.", color: "#00d1ff" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all group"
                >
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

        {/* ── Pricing Preview ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Läpinäkyvä <span className="text-[#14f195]">hinnoittelu</span>
            </h2>
            <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
              Ei piilokuluja. Tiedät etukäteen, mitä maksat.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "990 €", desc: "1-5-sivuinen yrityssivusto. Sisältää responsiivisen designin, SEO-perusoptimoinnin ja yhteydenottolomakkeen.", color: "#00d1ff" },
                { name: "Business", price: "2 490 €", desc: "Laajempi sivusto blogilla, AI-chatbotilla, edistyneellä SEO:lla ja integraatioilla. Suosituin valinta.", color: "#9945ff", popular: true },
                { name: "Premium", price: "4 990 €", desc: "Täysin räätälöity ratkaisu verkkokaupalla, automaatioilla ja premium-tuella. Yrityksille jotka haluavat kaiken.", color: "#14f195" },
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
                      Suosituin
                    </span>
                  )}
                  <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: plan.color }}>
                    {plan.price}
                  </div>
                  <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: plan.color }}
                  >
                    Katso kaikki ominaisuudet &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#14f195]/[0.02] to-transparent">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Mitä <span className="text-[#00d1ff]">asiakkaamme</span> sanovat
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Saimme upeat verkkosivut viikossa. Yhteydenotot kasvoivat 40 % ensimmäisen kuukauden aikana!",
                  name: "Mikko L.",
                  role: "Autokorjaamo, Helsinki",
                },
                {
                  quote: "Ammattitaitoinen ja nopea palvelu. Lopputulos ylitti odotukset — suosittelen lämpimästi.",
                  name: "Sanna K.",
                  role: "Kauneushoitola, Espoo",
                },
                {
                  quote: "Ravintolamme verkkosivut ovat nyt modernit ja asiakkaat löytävät meille Googlesta. Paras investointi pitkään aikaan.",
                  name: "Ahmed R.",
                  role: "Ravintola, Vantaa",
                },
                {
                  quote: "Hinnoittelu oli selkeä ja lopputulos premium-tasoa. Ei piilokuluja, kuten aiemmalla toimistolla.",
                  name: "Laura M.",
                  role: "Konsulttiyritys, Turku",
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
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Valmiina kasvattamaan <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">yritystäsi verkossa?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Ota yhteyttä tänään ja saat ilmaisen konsultaation. Kerromme, miten verkkosivut
              voivat tuoda sinulle lisää asiakkaita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hei!%20Haluan%20tietää%20lisää%20verkkosivuista%20yritykselleni."
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Ilmainen konsultaatio
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
                { href: "/kotisivut-hinta", label: "Kotisivujen hinnat 2026", desc: "Läpinäkyvä hinnoittelu" },
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
