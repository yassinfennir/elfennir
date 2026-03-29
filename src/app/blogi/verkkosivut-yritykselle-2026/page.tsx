import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Verkkosivut yritykselle 2026 — Täydellinen opas | El Fennir",
  description:
    "Kattava opas yrityksen verkkosivujen hankintaan vuonna 2026. Hinnat, aikataulu, mitä kannattaa huomioida, DIY vs. ammattilainen — kaikki yhdessä artikkelissa.",
  keywords: [
    "verkkosivut yritykselle",
    "yrityksen verkkosivut 2026",
    "verkkosivut hinta",
    "kotisivut yritykselle",
    "verkkosivujen hankinta",
    "verkkosivut opas",
  ],
  openGraph: {
    title: "Verkkosivut yritykselle 2026 — Täydellinen opas",
    description:
      "Kattava opas yrityksen verkkosivujen hankintaan. Hinnat, aikataulu ja vinkit onnistuneeseen verkkosivuprojektiin.",
    type: "article",
    url: "https://elfennir.com/blogi/verkkosivut-yritykselle-2026",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Verkkosivut yritykselle 2026" }],
  },
  alternates: { canonical: "https://elfennir.com/blogi/verkkosivut-yritykselle-2026" },
};

export default function VerkkosivutYrityksellePost() {
  const publishDate = "2026-03-15";
  const readTime = "12 min";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Verkkosivut yritykselle 2026 — Täydellinen opas",
    description:
      "Kattava opas yrityksen verkkosivujen hankintaan vuonna 2026. Hinnat, aikataulu, DIY vs. ammattilainen.",
    datePublished: publishDate,
    dateModified: publishDate,
    author: { "@type": "Person", name: "Yassin El Fennir" },
    publisher: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
      logo: { "@type": "ImageObject", url: "https://elfennir.com/images/logo.png" },
    },
    mainEntityOfPage: "https://elfennir.com/blogi/verkkosivut-yritykselle-2026",
    wordCount: 1800,
    timeRequired: "PT12M",
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#08080f]" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/[0.05] rounded-full blur-[180px]" />
      <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-[#14f195]/[0.04] rounded-full blur-[150px]" />

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
          Verkkosivut yritykselle 2026 —{" "}
          <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
            Täydellinen opas
          </span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-[#9945ff]/40 pl-6">
          Verkkosivut ovat yrityksen tärkein digitaalinen käyntikortti. Tässä kattavassa oppaassa käymme läpi kaiken, mitä sinun tarvitsee tietää yrityksen verkkosivujen hankinnasta vuonna 2026 — hinnoista aikatauluun ja tee-se-itse-ratkaisuista ammattilaispalveluihin.
        </p>

        {/* Content */}
        <div className="prose-custom space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Miksi yritys tarvitsee verkkosivut vuonna 2026?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Vuonna 2026 yli 90 % suomalaisista etsii tuotteita ja palveluita ensimmäiseksi verkosta. Jos yritykselläsi ei ole verkkosivuja — tai ne ovat vanhentuneet — menetät potentiaalisia asiakkaita joka päivä. Verkkosivut eivät ole enää valinnainen lisä, vaan välttämätön osa liiketoimintaa.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Moderni verkkosivusto toimii yrityksen myyntikoneistona 24/7. Se vastaa asiakkaiden kysymyksiin, esittelee palvelut ja tuotteet, kerää yhteydenottoja ja rakentaa luottamusta brändiin. Ilman verkkosivuja jäät kilpailijoiden jalkoihin — ja se on fakta, ei mielipide.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Tutkimusten mukaan 75 % kuluttajista arvioi yrityksen uskottavuuden sen verkkosivujen perusteella. Huonosti suunnitellut tai hitaat sivut karkottavat kävijät sekunneissa. Samalla Googlen hakualgoritmi suosii nopeita, mobiiliystävällisiä ja sisältörikkaita sivustoja, joten verkkosivujen laatu vaikuttaa suoraan näkyvyyteesi hakutuloksissa.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Verkkosivut ovat myös investointi, joka maksaa itsensä takaisin. Hyvin suunniteltu sivusto voi tuoda kymmeniä uusia asiakkaita kuukaudessa ilman jatkuvia mainoskuluja. Se on paras mahdollinen tapa yhdistää hakukoneoptimointi, sisältömarkkinointi ja konversio-optimointi yhdeksi kokonaisuudeksi.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Mitä verkkosivut maksavat vuonna 2026?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Verkkosivujen hinta vaihtelee merkittävästi riippuen laajuudesta, toiminnallisuuksista ja tekijästä. Tässä realistinen katsaus vuoden 2026 hintatasoon Suomessa:
            </p>
            <div className="space-y-4 mb-6">
              {[
                { level: "Yksinkertaiset esittelysivut", price: "500–1 500 €", desc: "1–5 sivua, perustiedot yrityksestä, yhteydenottolomake" },
                { level: "Ammattimaiset yrityssivut", price: "1 500–4 000 €", desc: "5–15 sivua, SEO-optimointi, mobiiliresponsiivinen, analytiikka" },
                { level: "Verkkokauppa tai laaja sivusto", price: "4 000–15 000 €", desc: "Verkkokauppatoiminnot, integraatiot, räätälöity suunnittelu" },
                { level: "Räätälöity web-sovellus", price: "10 000 € +", desc: "Asiakasportaalit, automaatiot, tekoälytoiminnot" },
              ].map((item) => (
                <div
                  key={item.level}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">{item.level}</h3>
                    <span className="text-[#14f195] font-bold text-sm">{item.price}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Hinta ei kuitenkaan ole ainoa mittari. Halvalla tehty sivusto, joka ei konvertoi kävijöitä asiakkaiksi, on kalliimpi kuin ammattimaisesti tehty sivusto, joka tuo jatkuvasti uusia asiakkaita. Katso{" "}
              <Link href="/kotisivut-hinta" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                kotisivujen hintavertailu
              </Link>{" "}
              saadaksesi tarkemman käsityksen kuluista.
            </p>
            <p className="text-slate-300 leading-relaxed">
              On myös tärkeää muistaa jatkuvat kulut: verkkotunnus (10–20 €/vuosi), web-hotelli (5–30 €/kk) ja mahdolliset päivitykset. Ammattilaispalveluna saat usein ylläpitosopimuksen, joka kattaa kaikki tekniset päivitykset ja tietoturvakorjaukset.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Verkkosivuprojektin aikataulu
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Moni yrittäjä ihmettelee, kuinka kauan verkkosivujen tekeminen kestää. Realistinen aikataulu riippuu projektin laajuudesta:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { phase: "Suunnittelu ja strategia", time: "1–2 viikkoa", detail: "Tavoitteiden määrittely, kilpailija-analyysi, sivukartan suunnittelu" },
                { phase: "Visuaalinen suunnittelu", time: "1–2 viikkoa", detail: "Wireframet, visuaalinen ilme, brändiin sopiva design" },
                { phase: "Kehitys ja toteutus", time: "2–4 viikkoa", detail: "Koodaus, sisällöntuotanto, integraatiot" },
                { phase: "Testaus ja julkaisu", time: "1 viikko", detail: "Toimivuustestaus, nopeusoptimointi, SEO-tarkistus" },
              ].map((item) => (
                <div key={item.phase} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="w-2 h-2 rounded-full bg-[#9945ff] mt-2 shrink-0" />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-white text-sm">{item.phase}</h3>
                      <span className="text-[#14f195] text-xs font-medium">{item.time}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              Kokonaisuudessaan ammattimaisten verkkosivujen tekeminen kestää tyypillisesti 4–8 viikkoa. Kiireellisissä tapauksissa pienemmät sivustot voidaan toteuttaa jo 1–2 viikossa, mutta suosittelemme aina riittävää suunnitteluaikaa, jotta lopputulos vastaa tavoitteita.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Mitä yrityksen verkkosivuilta pitää löytyä?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Hyvät yrityksen verkkosivut eivät ole pelkkä digitaalinen esite. Ne ovat strategisesti suunniteltu työkalu, joka muuttaa kävijät asiakkaiksi. Vuonna 2026 onnistuneet verkkosivut sisältävät seuraavat elementit:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Selkeä arvolupaus heti etusivulla",
                "Mobiiliresponsiivinen suunnittelu",
                "Nopea latautuminen (alle 3 sekuntia)",
                "Hakukoneoptimoitu sisältö (SEO)",
                "Selkeät toimintakehotukset (CTA)",
                "Yhteydenottolomake tai chat",
                "Asiakasarvostelut ja referenssit",
                "HTTPS-suojaus ja tietoturva",
                "Analytiikka ja seuranta",
                "Saavutettavuus (WCAG-standardit)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#14f195] mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed">
              Nämä eivät ole pelkkiä suosituksia — ne ovat vaatimuksia, joita Google ja käyttäjät odottavat. Sivusto, joka jättää nämä huomioimatta, häviää kilpailun sekä hakutuloksissa että käyttäjäkokemuksessa. Lisää aiheesta voit lukea{" "}
              <Link href="/verkkosivut-yritykselle" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                verkkosivut yritykselle
              </Link>{" "}
              -palvelusivultamme.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Tee-se-itse vs. ammattilainen — kumpi kannattaa?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Yksi yleisimmistä kysymyksistä on: &quot;Kannattaako tehdä verkkosivut itse vai palkata ammattilainen?&quot; Vastaus riippuu tilanteestasi, mutta käydään molemmat vaihtoehdot rehellisesti läpi.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-3">
                  Tee-se-itse (Wix, Squarespace, WordPress)
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Edullinen aloituskustannus</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Pääset alkuun nopeasti</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Täysi hallinta sisältöön</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> Rajoitettu suunnitteluvapaus</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> SEO-haasteet ilman osaamista</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> Aika pois ydinliiketoiminnasta</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> Hitaat latausajat ja template-ilme</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#9945ff]/20 bg-[#9945ff]/[0.03] p-6">
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-white mb-3">
                  Ammattilainen
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Räätälöity brändin mukainen design</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> SEO-optimoitu alusta alkaen</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Nopeat latausajat ja suorituskyky</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Konversio-optimoitu rakenne</li>
                  <li className="flex items-start gap-2"><span className="text-[#14f195]">+</span> Ylläpito ja tuki mukana</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> Suurempi alkuinvestointi</li>
                  <li className="flex items-start gap-2"><span className="text-red-400">−</span> Riippuvuus tekijästä (osittain)</li>
                </ul>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4">
              Jos olet yksityisyrittäjä tai harrastusbloggaaja, tee-se-itse-ratkaisu voi riittää. Mutta jos yrityksesi tarvitsee ammattimaisen vaikutelman, hakukonenäkyvyyden ja konversiot — ammattilaisen palkkaaminen on lähes aina parempi investointi.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Ajattele asiaa näin: verkkosivut ovat kuin myyntihenkilö, joka on töissä 24/7. Haluatko palkata siihen harjoittelijan vai kokeneen ammattilaisen? Pienellä lisäpanostuksella saat sivuston, joka tuo uusia asiakkaita kuukaudesta toiseen.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Hyvä ammattilainen huolehtii myös teknisistä yksityiskohdista: Google Analytics -seuranta, konversioseuranta, nopeusoptimointi, strukturoitu data (schema.org), meta-tagit ja responsiivisuus. Nämä asiat tekevät valtavan eron hakukonenäkyvyydessä ja käyttäjäkokemuksessa.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Miten valita oikea verkkosivutoimisto?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Suomessa on satoja verkkosivutoimistoja, mutta kaikki eivät ole samanarvoisia. Tässä 6 asiaa, joihin kannattaa kiinnittää huomiota valitessasi tekijää:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { num: "1", title: "Portfolio ja referenssit", text: "Pyydä nähtäväksi aiempia töitä ja asiakaskokemuksia. Hyvä toimisto esittelee ylpeästi tekemiään sivustoja." },
                { num: "2", title: "Teknologia ja modernit työkalut", text: "Kysy mitä teknologiaa käytetään. Modernit ratkaisut kuten Next.js, React ja headless CMS tarjoavat ylivoimaista suorituskykyä." },
                { num: "3", title: "SEO-osaaminen", text: "Verkkosivut ilman hakukoneoptimointia ovat kuin kauppa ilman opasteita. Varmista, että tekijä ymmärtää SEOn." },
                { num: "4", title: "Selkeä hinnoittelu", text: "Vältä toimistoja, jotka eivät anna selkeää hinta-arviota etukäteen. Ammattimaisuuteen kuuluu läpinäkyvyys." },
                { num: "5", title: "Ylläpito ja jatkokehitys", text: "Hyvä kumppani on mukana myös julkaisun jälkeen. Kysy ylläpitosopimuksista ja päivityskäytännöistä." },
                { num: "6", title: "Kommunikaatio", text: "Tärkeintä on sujuva yhteistyö. Valitse tekijä, joka kuuntelee tarpeitasi ja selittää asiat ymmärrettävästi." },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <span className="w-7 h-7 rounded-full bg-[#9945ff]/20 text-[#9945ff] text-xs font-bold flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Yhteenveto
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Verkkosivut yritykselle vuonna 2026 ovat välttämättömyys, ei vaihtoehto. Hyvin suunniteltu sivusto tuo uusia asiakkaita, rakentaa luottamusta ja erottaa sinut kilpailijoista. Investointi ammattimaisiin verkkosivuihin maksaa itsensä takaisin moninkertaisesti.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Tärkeintä on aloittaa: määrittele tavoitteet, aseta budjetti ja valitse luotettava kumppani. Vaikka budjetti olisi rajallinen, on aina parempi aloittaa kuin odottaa — markkinat eivät odota sinua.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Katso myös{" "}
              <Link href="/kotisivut-hinta" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                kotisivujen hinnat
              </Link>{" "}
              ja{" "}
              <Link href="/verkkosivut-yritykselle" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                verkkosivut yritykselle
              </Link>{" "}
              -sivumme saadaksesi lisätietoja palveluistamme.
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-[#9945ff]/20 bg-gradient-to-br from-[#9945ff]/[0.05] to-[#14f195]/[0.03] p-8 text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-3">
              Haluatko ammattimaiset verkkosivut yrityksellesi?
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Ota yhteyttä ja kerro projektistasi. Saat ilmaisen kartoituksen ja tarjouksen 24 tunnin sisällä.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Olen%20kiinnostunut%20verkkosivuista%20yritykselleni.%20Voisimmeko%20keskustella%3F"
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
