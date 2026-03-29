import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, MapPin, Globe, Share2, UtensilsCrossed, Star, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Ravintolan markkinointi verkossa — Näin saat lisää asiakkaita | El Fennir",
  description:
    "Kattava opas ravintolan digitaaliseen markkinointiin: Google My Business, verkkosivut, sosiaalinen media, verkkomenu, arvostelut ja hakukoneoptimointi.",
  keywords: [
    "ravintolan markkinointi",
    "ravintola digitaalinen markkinointi",
    "ravintola Google My Business",
    "ravintola hakukoneoptimointi",
    "ravintola verkkosivut",
    "ravintola sosiaalinen media",
  ],
  openGraph: {
    title: "Ravintolan markkinointi verkossa — Näin saat lisää asiakkaita",
    description:
      "Opas ravintolan digitaaliseen markkinointiin. Google My Business, verkkosivut, some, arvostelut ja SEO.",
    type: "article",
    url: "https://elfennir.com/blogi/ravintolan-markkinointi",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Ravintolan markkinointi" }],
  },
  alternates: { canonical: "https://elfennir.com/blogi/ravintolan-markkinointi" },
};

export default function RavintolanMarkkinointiPost() {
  const publishDate = "2026-03-25";
  const readTime = "13 min";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ravintolan markkinointi verkossa — Näin saat lisää asiakkaita",
    description:
      "Kattava opas ravintolan digitaaliseen markkinointiin: Google My Business, verkkosivut, sosiaalinen media ja SEO.",
    datePublished: publishDate,
    dateModified: publishDate,
    author: { "@type": "Person", name: "Yassin El Fennir" },
    publisher: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
      logo: { "@type": "ImageObject", url: "https://elfennir.com/images/logo.png" },
    },
    mainEntityOfPage: "https://elfennir.com/blogi/ravintolan-markkinointi",
    wordCount: 1900,
    timeRequired: "PT13M",
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#08080f]" />
      <div className="absolute top-32 left-1/3 w-[600px] h-[600px] bg-[#9945ff]/[0.05] rounded-full blur-[180px]" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-[#14f195]/[0.04] rounded-full blur-[150px]" />

      <article className="relative max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Breadcrumb */}
        <Link
          href="/blogi"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#14f195] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Takaisin blogiin
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(publishDate).toLocaleDateString("fi-FI")}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {readTime} lukuaika
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ravintolan markkinointi verkossa —{" "}
          <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
            Näin saat lisää asiakkaita
          </span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-[#9945ff]/40 pl-6">
          Ravintola-ala on äärimmäisen kilpailtu. Pelkkä hyvä ruoka ei riitä — asiakkaiden pitää löytää sinut verkosta ensin. Tässä oppaassa käymme läpi kaikki tärkeimmät digitaalisen markkinoinnin keinot, joilla ravintola saa lisää asiakkaita vuonna 2026.
        </p>

        {/* Content */}
        <div className="space-y-10">

          {/* Intro */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Miksi digitaalinen markkinointi on ravintoloille elintärkeää?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Tiesitkö, että 78 % suomalaisista etsii ravintolaa Googlesta ennen vierailua? Ja 60 % tekee päätöksen ravintolasta kännykällään viimeisen tunnin sisällä? Jos ravintolasi ei näy hauissa, menetät asiakkaita kilpailijoille — joka ikinen päivä.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Digitaalinen markkinointi ei tarkoita vain mainoksia. Se on kokonaisuus, johon kuuluvat verkkosivut, Google-näkyvyys, sosiaalinen media, arvostelut ja hakukoneoptimointi. Jokainen näistä on kuin yksi tuoli ravintolassasi — jos yksikin puuttuu, kokonaisuus ontuu.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Hyvä uutinen: et tarvitse massiivista mainosbudjettia. Suurin osa alla mainituista keinoista on joko ilmaisia tai erittäin edullisia. Tarvitset vain oikean strategian ja johdonmukaisuutta.
            </p>
          </section>

          {/* Google My Business */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                1. Google My Business — Ravintolan tärkein ilmaistyökalu
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Google My Business (Google Yritysprofiili) on ehdottomasti tärkein yksittäinen työkalu ravintolan verkkonäkyvyydelle. Kun asiakas hakee &quot;ravintola lähellä&quot; tai &quot;pizza Helsinki&quot;, Google näyttää ensimmäisenä karttanäkymän — ja siellä pitää olla sinun ravintolasi.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Optimoi profiilisi kunnolla: lisää kaikki aukioloajat (myös juhlapyhät), päivitä menu säännöllisesti, lataa ammattitasoisia kuvia ruoka-annoksista ja ravintolan tunnelmasta. Vastaa kaikkiin arvosteluihin — sekä positiivisiin että negatiivisiin. Google suosii aktiivisia profiileja.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Julkaise Google-päivityksiä vähintään kerran viikossa: tarjoukset, uudet annokset, tapahtumat. Tämä pitää profiilisi aktiivisena ja parantaa sijoitustasi paikallisissa hauissa. Yllättävän harva ravintola käyttää tätä ilmaista ominaisuutta.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Muista myös lisätä attribuutit: onko terassi, tarjoatteko lounasta, onko vegaanisia vaihtoehtoja? Nämä tiedot auttavat Google-hakua yhdistämään ravintolasi oikeisiin hakuihin.
            </p>
          </section>

          {/* Website */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <Globe size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                2. Ammattimaiset verkkosivut — Ravintolasi digitaalinen julkisivu
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Ravintolan verkkosivut ovat kuin ravintolasi julkisivu — ne luovat ensivaikutelman. Jos sivut ovat hitaat, vanhanaikaiset tai vaikeakäyttöiset mobiilissa, asiakas klikkaa seuraavan ravintolan sivuille. Sinulla on noin 3 sekuntia aikaa vakuuttaa kävijä.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Ravintolan verkkosivuilta pitää löytyä vähintään: menu (mieluiten suoraan sivulla, ei PDF-linkki), aukioloajat, sijainti kartalla, varausmahdollisuus ja yhteystiedot. Kauniit kuvat ruoka-annoksista ovat välttämättömiä — ne herättävät ruokahalun ja vakuuttavat asiakkaan.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Mobiilioptimoidut sivut ovat erityisen tärkeitä ravintoloille, koska suurin osa asiakkaista selaa kännykällään. Sivuston pitää latautua alle 3 sekunnissa ja varaus- tai yhteydenottopainikkeen pitää olla näkyvillä heti etusivulla.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Katso lisää{" "}
              <Link href="/ravintola-verkkosivut" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                ravintolan verkkosivut
              </Link>{" "}
              -palvelusivultamme, jossa kerromme tarkemmin ravintolalle räätälöidyistä ratkaisuista.
            </p>
          </section>

          {/* Social Media */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <Share2 size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                3. Sosiaalinen media — Ruokakuvat myyvät
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Instagram ja TikTok ovat ravintoloiden unelmakanavat. Ruokasisältö on somessa ylivoimaisesti suosituinta — kaunis annoskuva tai lyhyt video keittiöstä voi kerätä tuhansia näyttökertoja ilman senttiäkään mainontaan.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Julkaise säännöllisesti: 3–5 kertaa viikossa riittää. Sisältöideoita: päivän annos, kokin vinkki, behind-the-scenes-materiaalia keittiöstä, asiakkaiden kokemuksia, sesongin uutuudet. Tarinat (Stories) ovat erinomaisia aukioloaikojen ja tarjousten viestimiseen.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Hyödynnä käyttäjien luomaa sisältöä (UGC): kannusta asiakkaita jakamaan kuvia annoksistaan ja tagaamaan ravintolasi. Jaa parhaita kuvia omalla tilillä. Tämä on ilmaista markkinointia, joka luo yhteisöllisyyttä ja luottamusta.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Facebook on edelleen tärkeä varsinkin tapahtumien markkinointiin ja vanhemman kohderyhmän tavoittamiseen. Luo tapahtumasivuja teemailloille, livemusiikin illoille ja muille erikoistapahtumille.
            </p>
          </section>

          {/* Online Menu */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <UtensilsCrossed size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                4. Verkkomenu — Ei PDF-tiedostoja, kiitos
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Yksi yleisimmistä virheistä on menun jakaminen PDF-tiedostona. PDF:t ovat hitaita, vaikeasti luettavissa mobiilissa ja Google ei pysty indeksoimaan niiden sisältöä tehokkaasti. Tämä tarkoittaa, ettei menuusi näy hakutuloksissa.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Paras ratkaisu on HTML-muotoinen menu suoraan verkkosivuilla. Jokainen annos omalla rivillä, selkeä hinnoittelu, allergeeni-info ja kauniit kuvat. Tämä parantaa käyttäjäkokemusta, SEO-näkyvyyttä ja konversiota — asiakas näkee menun heti ilman latausaikaa.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Bonus: lisää strukturoitu data (schema.org Menu-tyyppi) verkkosivuillesi. Tämä auttaa Googlea ymmärtämään menusi rakenteen ja voi johtaa rikastettuihin hakutuloksiin, joissa annokset ja hinnat näkyvät suoraan Googlessa.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <Star size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                5. Arvostelut — Ravintolan digitaalinen maine
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Google-arvostelut ovat ravintolan digitaalinen suusta suuhun -markkinointi. 93 % kuluttajista lukee arvostelut ennen ravintolaan menemistä. Ravintola, jolla on 4,5 tähteä ja 200 arvostelua, voittaa aina ravintolan, jolla on 4,8 tähteä mutta vain 10 arvostelua.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Kannusta aktiivisesti asiakkaita jättämään arvostelu: laskun yhteydessä, pöytästandeilla QR-koodilla tai kiitos-viestissä varauksen jälkeen. Tee arvostelun jättämisestä mahdollisimman helppoa — yksi klikkaus QR-koodista suoraan Google-arvosteluun.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Vastaa jokaiseen arvosteluun — myös negatiivisiin. Ammattimainen vastaus negatiiviseen arvosteluun näyttää muille lukijoille, että välität asiakaskokemuksesta. Älä koskaan vastaa vihastuneesti tai puolustavasti. Myönnä mahdollinen virhe ja tarjoa ratkaisua.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Älä unohda muita alustoja: TripAdvisor, Yelp ja Facebook ovat myös tärkeitä. Pidä profiilisi ajan tasalla kaikilla alustoilla ja seuraa mainettasi säännöllisesti.
            </p>
          </section>

          {/* SEO */}
          <section>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                <Search size={20} className="text-[#9945ff]" />
              </div>
              <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                6. Paikallinen SEO — Näy hauissa &quot;ravintola lähellä&quot;
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Paikallinen hakukoneoptimointi (Local SEO) on ravintolan digitaalisen markkinoinnin peruskivi. Tavoitteena on, että ravintolasi näkyy korkealla, kun joku hakee &quot;ravintola + kaupunki&quot; tai &quot;ruokapaikka lähellä&quot;.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Paikallisen SEOn perusteet: optimoitu Google Yritysprofiili, johdonmukaiset NAP-tiedot (nimi, osoite, puhelinnumero) kaikissa hakemistoissa, paikalliset avainsanat verkkosivuilla ja backlinkit paikallisilta sivustoilta (kaupungin ravintolalistat, paikallislehdet).
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Käytä verkkosivuillasi paikallisia avainsanoja luonnollisesti: &quot;italialainen ravintola Helsingissä&quot;, &quot;paras brunssi Tamperella&quot;, &quot;lounas Espoon keskus&quot;. Luo erillisiä alasivuja eri palveluille: lounaslista, brunssi, catering, juhlatilat.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Blogi on erinomainen keino parantaa SEO-näkyvyyttä. Kirjoita reseptejä, kerro kokin tarinasta, esittele sesongin raaka-aineita. Jokainen blogipostaus on uusi mahdollisuus näkyä hauissa ja tuoda uusia kävijöitä sivuillesi.
            </p>
          </section>

          {/* Summary */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Yhteenveto: ravintolan markkinoinnin tarkistuslista
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tässä kaikki tärkeimmät asiat tiivistettynä. Käy lista läpi ja tarkista, mitkä ovat jo kunnossa ja mihin kannattaa panostaa seuraavaksi:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "Google My Business -profiili optimoitu ja aktiivinen",
                "Ammattimaiset, mobiilioptimoitu verkkosivut",
                "HTML-muotoinen menu verkkosivuilla (ei PDF)",
                "Instagram-tili aktiivinen, 3–5 julkaisua viikossa",
                "Google-arvostelut yli 4 tähteä, aktiivinen vastaaminen",
                "Paikallinen SEO kunnossa: NAP-tiedot, avainsanat",
                "Varausmahdollisuus verkossa (oma tai kolmannen osapuolen)",
                "Strukturoitu data (schema.org) verkkosivuilla",
                "Sähköpostimarkkinointi kanta-asiakkaille",
                "Sosiaalisen median mainokset kohdennetusti",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <span className="w-6 h-6 rounded-full bg-[#9945ff]/20 text-[#9945ff] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              Et tarvitse kaikkea kerralla. Aloita tärkeimmistä — Google-profiili ja verkkosivut — ja laajenna siitä. Johdonmukaisuus on avain: pienikin säännöllinen panostus tuottaa tuloksia ajan mittaan.
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-[#9945ff]/20 bg-gradient-to-br from-[#9945ff]/[0.05] to-[#14f195]/[0.03] p-8 text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-3">
              Tarvitseeko ravintolasi ammattimaiset verkkosivut?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Suunnittelemme ravintoloille optimoidut verkkosivut, jotka tuovat asiakkaita ja toimivat täydellisesti mobiilissa. Kysy ilmainen tarjous.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Olen%20ravintola-alan%20yritt%C3%A4j%C3%A4%20ja%20tarvitsen%20apua%20verkkosivujen%20kanssa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#14f195] text-[#08080f] font-semibold text-sm hover:shadow-[0_4px_25px_rgba(20,241,149,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Ota yhteyttä WhatsAppissa
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blogi"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#14f195] transition-colors"
          >
            <ArrowLeft size={14} />
            Takaisin blogiin
          </Link>
        </div>
      </article>
    </main>
  );
}
