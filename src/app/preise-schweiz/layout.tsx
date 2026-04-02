import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Preise Schweiz — Webdesign, KI-Chatbots & Automatisierung | El Fennir",
  description:
    "Transparente Preise fuer Schweizer Unternehmen. Professionelle Websites ab CHF 490, KI-Chatbots ab CHF 890, Automatisierung ab CHF 490. Gegruendet in Zuerich.",
  keywords: [
    "webdesign preise schweiz",
    "website kosten schweiz",
    "webseite erstellen preis",
    "webdesign preise zuerich",
    "homepage kosten schweiz",
    "ki chatbot preis schweiz",
    "webseite kosten",
    "website agentur preise schweiz",
    "guenstige webseite schweiz",
    "automatisierung kosten schweiz",
    "webentwicklung preise zuerich",
    "n8n automatisierung schweiz",
    "professionelle website chf",
    "webdesign angebot schweiz",
    "website erstellen lassen kosten",
  ],
  openGraph: {
    title: "Preise Schweiz — Webdesign & KI-Automatisierung | El Fennir",
    description:
      "Transparente Preise fuer Schweizer Unternehmen. Websites ab CHF 490, KI-Chatbots ab CHF 890. Lieferung in 5-7 Tagen.",
    type: "website",
    url: "https://elfennir.com/preise-schweiz",
    locale: "de_CH",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "El Fennir — Webdesign Preise Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preise Schweiz — Webdesign & KI-Automatisierung | El Fennir",
    description:
      "Professionelle Websites ab CHF 490. KI-Chatbots, Automatisierung & mehr fuer Schweizer Unternehmen.",
    images: ["/images/logo.png"],
  },
  alternates: { canonical: "https://elfennir.com/preise-schweiz" },
};

export default function PreiseSchweizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
