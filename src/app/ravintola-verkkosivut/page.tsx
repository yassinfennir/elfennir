import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ravintolan verkkosivut jotka tuovat asiakkaita — valmiina 5 päivässä | El Fennir",
  description:
    "Ammattimaiset ravintolan verkkosivut alkaen 990 €. Online-varaukset, ruokalista, Google-näkyvyys ja mobiilikäyttökokemus. Yli 10 ravintolaa luottaa meihin.",
  keywords: [
    "ravintola verkkosivut",
    "ravintolan nettisivut",
    "ravintolan kotisivut",
    "ruokalista verkkosivuille",
    "ravintola Google-näkyvyys",
    "ravintola nettisivut hinta",
    "ravintolan verkkosivu suunnittelu",
  ],
  openGraph: {
    title: "Ravintolan verkkosivut jotka tuovat asiakkaita — valmiina 5 päivässä",
    description:
      "Modernit ravintolasivut ruokalistalla, varauksilla ja Google-optimoinnilla. Alkaen 990 €.",
    type: "website",
    url: "https://elfennir.com/ravintola-verkkosivut",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir" }],
  },
  alternates: { canonical: "https://elfennir.com/ravintola-verkkosivut" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Ravintolan verkkosivujen suunnittelu",
  provider: {
    "@type": "LocalBusiness",
    name: "El Fennir",
    url: "https://elfennir.com",
    telephone: "+358466109064",
    address: { "@type": "PostalAddress", addressLocality: "Zürich", addressCountry: "CH" },
  },
  areaServed: { "@type": "Country", name: "Finland" },
  description:
    "Ammattimaiset ravintolan verkkosivut ruokalistalla, online-varauksilla ja Google-optimoinnilla.",
};

const portfolioProjects = [
  {
    name: "Kazumi",
    type: "Japanilainen ravintola",
    desc: "Upea japanilaistyylinen design ruokalistalla ja pöytävarausjärjestelmällä. Kaunis visuaalinen ilme, joka kunnioittaa japanilaista estetiikkaa.",
    features: ["Ruokalista", "Pöytävaraukset", "Google Maps", "Mobiilioptimoitu"],
    color: "#9945ff",
  },
  {
    name: "Fluffy Bites",
    type: "Kahvila & leivonnaiset",
    desc: "Herkkä ja kutsuva kahvilasivu, joka esittelee leivonnaiset ja erikoiskahvit. Pehmeä väripaletti ja herkullinen valokuvaus.",
    features: ["Tuotekatalogi", "Tilausjärjestelmä", "Instagram-feed", "SEO"],
    color: "#f971ff",
  },
  {
    name: "Amherkut",
    type: "Marokkolais-suomalainen keittiö",
    desc: "Brändilähtöinen design kahdelle toimipisteelle. Monipuolinen ruokalista ja kulttuurinen tarina osana verkkosivuja.",
    features: ["Multi-location", "Ruokalista", "Tarina-osio", "Google-näkyvyys"],
    color: "#14f195",
  },
  {
    name: "Mekon",
    type: "Aasialainen ravintola",
    desc: "Moderni ja eloisa design, joka houkuttelee uusia asiakkaita. Nopeat latausajat ja selkeä ruokalistanavigaatio.",
    features: ["Menu-design", "Galleria", "SEO-optimoitu", "Responsiivinen"],
    color: "#00d1ff",
  },
];

export default function RavintolaVerkkosivutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#08080f] text-slate-300">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f971ff]/[0.06] via-transparent to-transparent" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#f971ff]/[0.04] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#9945ff]/[0.04] rounded-full blur-[120px]" />

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block text-sm text-[#f971ff] mb-4 tracking-wide uppercase">
              Ravintolan verkkosivut
            </span>
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ravintolan verkkosivut jotka tuovat asiakkaita
              <span className="block bg-gradient-to-r from-[#f971ff] via-[#9945ff] to-[#00d1ff] bg-clip-text text-transparent">
                — valmiina 5 päivässä
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              Ravintolaasi ei löydetä, jos et näy verkossa. Saat modernit verkkosivut ruokalistalla,
              online-varauksilla ja Google-näkyvyydellä — ja asiakkaat löytävät tiensä pöytääsi.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Tarvitsen%20verkkosivut%20ravintolalleni."
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
              Pyydä tarjous ravintolasivuista
            </a>
          </div>
        </section>

        {/* ── Restaurant-Specific Features ── */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Kaikki mitä ravintolasi <span className="text-[#f971ff]">tarvitsee verkossa</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Olemme suunnitelleet kymmeniä ravintoloiden verkkosivuja. Tiedämme, mitä toimii.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Digitaalinen ruokalista", desc: "Kaunis, helposti päivitettävä ruokalista allergiatiedoilla ja hinnoilla. Toimii kaikilla laitteilla.", color: "#f971ff" },
                { title: "Online-pöytävaraukset", desc: "Asiakkaat varaavat pöydän suoraan sivuiltasi. Vähemmän puhelinsoittoja, enemmän varauksia.", color: "#9945ff" },
                { title: "Google Maps & NAP", desc: "Oikeat yhteystiedot, aukioloajat ja sijainti. Löydyt Google Mapsista ja paikallishauista.", color: "#14f195" },
                { title: "Ruokakuvagalleria", desc: "Ammattimaiset kuvat annoksistasi, jotka saavat asiakkaan nälkäiseksi ja tekemään varauksen.", color: "#00d1ff" },
                { title: "WhatsApp-tilaus", desc: "Suora WhatsApp-linkki tilauksia ja varauksia varten. Matala kynnys yhteydenotolle.", color: "#25D366" },
                { title: "Google-arvostelut", desc: "Näytä parhaat Google-arvostelusi sivuillasi. Sosiaalinen todiste tuo uusia asiakkaita.", color: "#f971ff" },
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

        {/* ── Portfolio ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#9945ff]/[0.03] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-6">
              Ravintolat, jotka <span className="text-[#00d1ff]">luottavat meihin</span>
            </h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              Tässä muutama esimerkki ravintoloista, joille olemme rakentaneet verkkosivut.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioProjects.map((project, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                      style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                    >
                      {project.name[0]}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{project.name}</h3>
                      <p className="text-slate-500 text-sm">{project.type}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-5">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f, fi) => (
                      <span
                        key={fi}
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: `${project.color}10`,
                          borderColor: `${project.color}25`,
                          color: project.color,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Restaurants Choose Us ── */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Miksi ravintolat <span className="text-[#14f195]">valitsevat meidät</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { stat: "10+", label: "Ravintolaa palveltu", desc: "Japanilaisista fine dining -ravintoloista pikaruokapaikkoihin" },
                { stat: "5 pv", label: "Keskimääräinen toimitusaika", desc: "Saat ravintolasi verkkosivut käyttöön alle viikossa" },
                { stat: "+35 %", label: "Lisää online-varauksia", desc: "Keskimääräinen varausten kasvu sivujen julkaisun jälkeen" },
                { stat: "100 %", label: "Tyytyväisyys", desc: "Jokainen ravintoloitsija on suositellut meitä eteenpäin" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent mb-2">{item.stat}</div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-20 bg-gradient-to-b from-transparent via-[#f971ff]/[0.02] to-transparent">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, s) => (
                <svg key={s} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-white font-medium italic mb-6">
              &quot;Verkkosivujen ansiosta varaukset kasvoivat huomattavasti. Asiakkaat kehuvat sivujen ulkoasua ja helppoutta. Paras investointi ravintolaamme pitkään aikaan.&quot;
            </blockquote>
            <p className="text-[#f971ff] font-semibold">Ravintoloitsija, Helsinki</p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-white mb-6">
              Valmis tuomaan <span className="bg-gradient-to-r from-[#f971ff] to-[#9945ff] bg-clip-text text-transparent">ravintolasi verkkoon?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Kerro meille ravintolastasi ja saat räätälöidyn ehdotuksen 24 tunnissa.
              Ensimmäinen konsultaatio on aina ilmainen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/358466109064?text=Hei!%20Tarvitsen%20verkkosivut%20ravintolalleni.%20Voisimmeko%20keskustella?"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.553 4.12 1.52 5.856L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.652-.506-5.198-1.394l-.372-.222-3.862 1.01 1.03-3.77-.243-.387A9.713 9.713 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/></svg>
                Aloita tästä — WhatsApp
              </a>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white font-semibold text-lg hover:border-[#9945ff]/40 hover:bg-white/[0.03] transition-all"
              >
                Katso kaikki projektit
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
