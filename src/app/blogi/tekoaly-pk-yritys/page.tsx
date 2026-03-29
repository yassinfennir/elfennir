import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, Bot, Zap, Receipt, PenTool, CalendarCheck, BarChart3, Mail, ShieldCheck, Users, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Tekoäly pk-yritykselle — 10 tapaa säästää aikaa ja rahaa | El Fennir",
  description:
    "Käytännön opas tekoälyn hyödyntämiseen pk-yrityksissä. 10 konkreettista tapaa, joilla chatbotit, automaatio ja AI säästävät aikaa ja rahaa suomalaisille yrityksille.",
  keywords: [
    "tekoäly pk-yritys",
    "AI automaatio yritys",
    "tekoäly säästää aikaa",
    "chatbot yritykselle",
    "automaatio pk-yritys",
    "tekoäly käytännössä",
  ],
  openGraph: {
    title: "Tekoäly pk-yritykselle — 10 tapaa säästää aikaa ja rahaa",
    description:
      "10 konkreettista tapaa hyödyntää tekoälyä pk-yrityksen arjessa. Chatbotit, automaatio, laskutus ja paljon muuta.",
    type: "article",
    url: "https://elfennir.com/blogi/tekoaly-pk-yritys",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "Tekoäly pk-yritykselle" }],
  },
  alternates: { canonical: "https://elfennir.com/blogi/tekoaly-pk-yritys" },
};

const aiExamples = [
  {
    icon: Bot,
    title: "1. Asiakaspalveluchatbot verkkosivuille",
    before: "Yrittäjä vastaa samoihin kysymyksiin sähköpostitse 15 kertaa päivässä. Vastausaika on 2–24 tuntia ja asiakkaat kyllästyvät odottamaan.",
    after: "Tekoälychatbot vastaa yleisimpiin kysymyksiin sekunneissa, 24/7. Yrittäjälle jää vain monimutkaiset tapaukset. Vastausaika putoaa tunneista sekunteihin ja asiakastyytyväisyys nousee.",
    savings: "Säästö: 10–15 h/viikko asiakaspalvelussa",
  },
  {
    icon: CalendarCheck,
    title: "2. Automaattinen ajanvarausjärjestelmä",
    before: "Asiakas soittaa, yrittäjä selaa kalenteria, ehdottaa aikoja, asiakas valitsee, yrittäjä vahvistaa. Prosessi kestää 10–15 minuuttia per varaus ja puhelinsoittoja tulee 20 päivässä.",
    after: "Asiakas varaa ajan suoraan verkkosivuilta. Järjestelmä tarkistaa saatavuuden, lähettää vahvistuksen ja muistutuksen automaattisesti. Nolla manuaalista työtä.",
    savings: "Säästö: 3–5 h/päivä ajanvarauksissa",
  },
  {
    icon: Users,
    title: "3. Liidien generointi ja kvalifiointi",
    before: "Myyntitiimi käy läpi kaikki yhteydenotot manuaalisesti. Paljon aikaa kuluu kylmiin liideihin, jotka eivät koskaan osta. Konversioaste matala.",
    after: "Tekoäly pisteyttää liidit automaattisesti käyttäytymisen perusteella. Myyntitiimi saa listan kuumimmista liideistä ja keskittyy niihin. Lead scoring nostaa konversioastetta 20–40 %.",
    savings: "Säästö: 30–50 % myyntitiimin ajasta",
  },
  {
    icon: Receipt,
    title: "4. Automaattinen laskutus ja kirjanpito",
    before: "Yrittäjä tekee laskut manuaalisesti Excelissä tai laskutusohjelmassa. Kuittien käsittely vie tunteja kuukaudessa. Inhimilliset virheet ovat yleisiä.",
    after: "Tekoäly tunnistaa kuitit kuvauksista, kategorisoi menot automaattisesti ja luo laskupohjat sopimusten perusteella. Virhemarginaali putoaa lähes nollaan.",
    savings: "Säästö: 8–12 h/kk taloushallinnossa",
  },
  {
    icon: PenTool,
    title: "5. Sisällöntuotanto ja markkinointi",
    before: "Yrittäjä yrittää kirjoittaa blogipostauksia ja somepäivityksiä illalla töiden jälkeen. Julkaisutahti on epäsäännöllinen ja laatu vaihtelee. SEO-optimointi jää tekemättä.",
    after: "Tekoäly tuottaa SEO-optimoitua sisältöä, ehdottaa aiheita hakuvolyymien perusteella ja luo sosiaalisen median päivitykset automaattisesti. Yrittäjä tarkistaa ja julkaisee.",
    savings: "Säästö: 5–10 h/viikko sisällöntuotannossa",
  },
  {
    icon: Mail,
    title: "6. Sähköpostimarkkinoinnin automaatio",
    before: "Massasähköpostit kaikille kontakteille samalla viestillä. Avausprosentti alle 15 %, klikkausprosentti alle 2 %. Asiakkaat peruuttavat tilauksen.",
    after: "Tekoäly segmentoi asiakkaat ja lähettää personoituja viestejä oikea-aikaisesti. Tervetuloa-sarjat, hylätyn ostoskorin muistutukset ja syntymäpäiväviestit toimivat automaattisesti. Avausprosentti nousee 35–50 %:iin.",
    savings: "Säästö: 4–6 h/viikko + parempi konversio",
  },
  {
    icon: BarChart3,
    title: "7. Data-analytiikka ja raportointi",
    before: "Yrittäjä tuijottaa Google Analyticsin lukuja ymmärtämättä, mitä ne tarkoittavat. Päätökset tehdään tuntumalla, ei datalla.",
    after: "Tekoäly analysoi dataa, tunnistaa trendejä ja tuottaa selkokielisiä raportteja: &quot;Viime kuussa mobiilikävijät kasvoivat 34 %, mutta konversioaste laski. Suositus: optimoi mobiilisivun yhteydenottolomake.&quot;",
    savings: "Säästö: paremmat päätökset + 2–3 h/viikko",
  },
  {
    icon: ShieldCheck,
    title: "8. Petosten tunnistaminen ja tietoturva",
    before: "Verkkokauppa menettää rahaa palautuspetosten ja varastettujen luottokorttien takia. Manuaalinen tarkistus on hidasta.",
    after: "Tekoälyjärjestelmä analysoi ostokäyttäytymistä reaaliajassa ja merkitsee epäilyttävät tapahtumat. Petostappiot putoavat jopa 80 %.",
    savings: "Säästö: huomattava vähennys petostappioissa",
  },
  {
    icon: Zap,
    title: "9. Prosessiautomaatio (n8n, Make, Zapier)",
    before: "Työntekijä kopioi tietoja manuaalisesti järjestelmästä toiseen: CRM → sähköposti → projektinhallinta → laskutus. Virheitä syntyy ja aikaa kuluu.",
    after: "Automaatiotyökalut yhdistävät järjestelmät toisiinsa. Uusi asiakas CRM:ssä → automaattinen tervetuloa-sähköposti → projektikortti Trelloon → laskupohja valmiina. Nolla manuaalista työtä.",
    savings: "Säästö: 10–20 h/viikko rutiinitehtävissä",
  },
  {
    icon: Lightbulb,
    title: "10. Tuotekehitys ja asiakasymmärrys",
    before: "Tuotekehitys perustuu yrittäjän omiin oletuksiin. Asiakaspalaute kerätään satunnaisesti ja analysoidaan harvoin.",
    after: "Tekoäly analysoi asiakaspalautteen, arvostelut ja tukipyynnöt automaattisesti. Se tunnistaa toistuvat teemat ja ehdottaa konkreettisia parannuksia. Tuotekehitys perustuu dataan, ei arvauksiin.",
    savings: "Säästö: paremmat tuotteet + nopeampi kehityssykli",
  },
];

export default function TekoalyPkYritysPost() {
  const publishDate = "2026-03-20";
  const readTime = "14 min";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tekoäly pk-yritykselle — 10 tapaa säästää aikaa ja rahaa",
    description:
      "Käytännön opas tekoälyn hyödyntämiseen pk-yrityksissä. 10 konkreettista tapaa säästää aikaa ja rahaa.",
    datePublished: publishDate,
    dateModified: publishDate,
    author: { "@type": "Person", name: "Yassin El Fennir" },
    publisher: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
      logo: { "@type": "ImageObject", url: "https://elfennir.com/images/logo.png" },
    },
    mainEntityOfPage: "https://elfennir.com/blogi/tekoaly-pk-yritys",
    wordCount: 2000,
    timeRequired: "PT14M",
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#08080f]" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-[#9945ff]/[0.05] rounded-full blur-[180px]" />
      <div className="absolute bottom-60 left-1/3 w-[400px] h-[400px] bg-[#14f195]/[0.04] rounded-full blur-[150px]" />

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
          Tekoäly pk-yritykselle —{" "}
          <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">
            10 tapaa säästää aikaa ja rahaa
          </span>
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-[#9945ff]/40 pl-6">
          Tekoäly ei ole enää vain suuryritysten työkalu. Vuonna 2026 pk-yritykset voivat hyödyntää tekoälyä arkisissa tehtävissä ja säästää kymmeniä tunteja viikossa. Tässä 10 konkreettista tapaa, joilla tekoäly voi muuttaa yrityksesi toimintaa.
        </p>

        {/* Intro */}
        <div className="space-y-10">
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Tekoälyn vallankumous pk-yrityksissä
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Suomessa on yli 280 000 pk-yritystä, ja suurin osa kamppailee saman ongelman kanssa: liian vähän aikaa, liian paljon rutiinitehtäviä. Tekoäly tarjoaa ratkaisun. McKinseyn tutkimuksen mukaan tekoälyä hyödyntävät pk-yritykset kasvavat 2–3 kertaa nopeammin kuin kilpailijansa.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Mutta miten aloittaa? Ei tarvitse investoida miljoonia tai palkata datatieteilijöitä. Nykyaikaiset tekoälytyökalut ovat edullisia, helppokäyttöisiä ja integroituvat suoraan olemassa oleviin järjestelmiin. Tärkeintä on tunnistaa ne osa-alueet, joissa tekoäly tuottaa suurimman hyödyn juuri sinun yritykselläsi.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Käydään läpi 10 käytännön tapaa, joilla pk-yritys voi hyödyntää tekoälyä — jokaiseen esimerkkiin sisältyy ennen/jälkeen-vertailu, jotta näet konkreettisen hyödyn.
            </p>
          </section>

          {/* 10 Examples */}
          {aiExamples.map((example) => {
            const Icon = example.icon;
            return (
              <section key={example.title}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#9945ff]/10 border border-[#9945ff]/20 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#9945ff]" />
                  </div>
                  <h2 className="font-[var(--font-heading)] text-xl font-bold text-white pt-1.5">
                    {example.title}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-3">
                  <div className="rounded-xl border border-red-500/10 bg-red-500/[0.03] p-4">
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                      Ennen
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{example.before}</p>
                  </div>
                  <div className="rounded-xl border border-[#14f195]/10 bg-[#14f195]/[0.03] p-4">
                    <p className="text-xs font-semibold text-[#14f195] uppercase tracking-wider mb-2">
                      Jälkeen (tekoälyllä)
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">{example.after}</p>
                  </div>
                </div>

                <p className="text-[#14f195] text-sm font-medium flex items-center gap-2">
                  <Zap size={14} />
                  {example.savings}
                </p>
              </section>
            );
          })}

          {/* Summary */}
          <section>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Miten aloittaa tekoälyn käyttöönotto?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Aloita pienestä. Valitse yksi osa-alue — esimerkiksi asiakaspalveluchatbot tai ajanvarauksen automaatio — ja kokeile sitä kuukauden ajan. Mittaa tulokset: kuinka paljon aikaa säästyy, miten asiakastyytyväisyys muuttuu, kasvaako myynti?
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Kun näet ensimmäiset tulokset, laajenna automaatiota vaihe kerrallaan. Tärkeintä on, ettei tarvitse tehdä kaikkea kerralla. Jokainen automatisoitu prosessi vapauttaa aikaa ydinliiketoimintaan ja strategiseen ajatteluun.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Lue lisää{" "}
              <Link href="/tekoaly-automaatio" className="text-[#14f195] underline underline-offset-4 hover:text-white transition-colors">
                tekoäly- ja automaatiopalveluistamme
              </Link>{" "}
              ja ota yhteyttä — autamme sinua löytämään juuri ne ratkaisut, jotka tuottavat suurimman hyödyn yrityksellesi.
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-2xl border border-[#9945ff]/20 bg-gradient-to-br from-[#9945ff]/[0.05] to-[#14f195]/[0.03] p-8 text-center">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-3">
              Valjasta tekoäly yrityksesi käyttöön
            </h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Kerro meille yrityksesi tarpeista ja saat ilmaisen arvion tekoälyn mahdollisuuksista. Vastaamme 24 tunnin sisällä.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Olen%20kiinnostunut%20tekoälyratkaisuista%20yritykselleni.%20Voisimmeko%20keskustella%3F"
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
