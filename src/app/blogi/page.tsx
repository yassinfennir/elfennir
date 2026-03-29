import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogi — Digitaalisen liiketoiminnan asiantuntijavinkit | El Fennir",
  description:
    "Lue asiantuntija-artikkelit verkkosivuista, tekoälystä, automaatiosta ja digitaalisesta markkinoinnista. Käytännön vinkit pk-yrityksille ja yrittäjille.",
  keywords: [
    "verkkosivut blogi",
    "digitaalinen markkinointi",
    "tekoäly yritys",
    "automaatio blogi",
    "pk-yritys digitalisaatio",
    "verkkosivut vinkit",
  ],
  openGraph: {
    title: "Blogi — Digitaalisen liiketoiminnan asiantuntijavinkit | El Fennir",
    description:
      "Asiantuntija-artikkelit verkkosivuista, tekoälystä ja digitaalisesta markkinoinnista pk-yrityksille.",
    type: "website",
    url: "https://elfennir.com/blogi",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "El Fennir Blogi" }],
  },
  alternates: { canonical: "https://elfennir.com/blogi" },
};

const blogPosts = [
  {
    slug: "verkkosivut-yritykselle-2026",
    title: "Verkkosivut yritykselle 2026 — Täydellinen opas",
    description:
      "Kattava opas yrityksen verkkosivujen hankintaan vuonna 2026. Hinnat, aikataulu, DIY vs. ammattilainen ja kaikki mitä sinun tarvitsee tietää.",
    date: "2026-03-15",
    readTime: "12 min",
    tags: ["Verkkosivut", "Yrityksille", "Opas"],
  },
  {
    slug: "tekoaly-pk-yritys",
    title: "Tekoäly pk-yritykselle — 10 tapaa säästää aikaa ja rahaa",
    description:
      "Käytännön esimerkit siitä, miten pienet ja keskisuuret yritykset voivat hyödyntää tekoälyä arjessa. Chatbotit, automaatio, laskutus ja paljon muuta.",
    date: "2026-03-20",
    readTime: "14 min",
    tags: ["Tekoäly", "Automaatio", "PK-yritys"],
  },
  {
    slug: "ravintolan-markkinointi",
    title: "Ravintolan markkinointi verkossa — Näin saat lisää asiakkaita",
    description:
      "Kattava opas ravintolan digitaaliseen markkinointiin: Google My Business, verkkosivut, sosiaalinen media, arvostelut ja hakukoneoptimointi.",
    date: "2026-03-25",
    readTime: "13 min",
    tags: ["Ravintola", "Markkinointi", "SEO"],
  },
];

export default function BlogiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "El Fennir Blogi",
    description: "Digitaalisen liiketoiminnan asiantuntijavinkit",
    url: "https://elfennir.com/blogi",
    publisher: {
      "@type": "Organization",
      name: "El Fennir",
      url: "https://elfennir.com",
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05050a] via-[#08080f] to-[#08080f]" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/[0.06] rounded-full blur-[180px]" />
      <div className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-[#14f195]/[0.04] rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#14f195] font-medium text-sm tracking-widest uppercase mb-4">
            Blogi
          </p>
          <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Blogi —{" "}
            <span className="bg-gradient-to-r from-[#9945ff] via-[#14f195] to-[#00d1ff] bg-clip-text text-transparent">
              Digitaalisen liiketoiminnan
            </span>{" "}
            asiantuntijavinkit
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Käytännön vinkit verkkosivuihin, tekoälyyn ja digitaaliseen markkinointiin. Autamme
            suomalaisia yrityksiä kasvamaan verkossa.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogi/${post.slug}`}
              className="group block"
            >
              <article className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-500 hover:border-[#9945ff]/30 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(153,69,255,0.1)] hover:-translate-y-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#9945ff]/10 text-[#9945ff] border border-[#9945ff]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="font-[var(--font-heading)] text-xl font-bold text-white mb-3 group-hover:text-[#14f195] transition-colors duration-300">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {new Date(post.date).toLocaleDateString("fi-FI")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[#14f195] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lue <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 max-w-2xl mx-auto">
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-4">
              Tarvitsetko apua digitaalisessa kasvussa?
            </h2>
            <p className="text-slate-400 mb-6">
              Ota yhteyttä ja keskustellaan, miten voimme auttaa yritystäsi kasvamaan verkossa.
            </p>
            <a
              href="https://wa.me/358466109064?text=Hei!%20Tulin%20blogin%20kautta.%20Haluaisin%20keskustella%20yhteisty%C3%B6st%C3%A4."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#14f195] text-[#08080f] font-semibold text-sm hover:shadow-[0_4px_25px_rgba(20,241,149,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Ota yhteyttä WhatsAppissa
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
