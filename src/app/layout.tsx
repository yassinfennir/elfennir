import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LanguageProvider } from "@/i18n/LanguageContext";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elfennir.com"),
  title: {
    default: "El Fennir — Websites, AI & Automation for Businesses | Finland, Spain, Switzerland, Dubai",
    template: "%s | El Fennir",
  },
  description:
    "Professional websites, AI chatbots & automation for businesses. Based in Finland, serving Spain, Switzerland, Dubai & worldwide. Premium digital solutions that drive growth.",
  keywords: [
    "web design", "AI automation", "website development", "business website",
    "verkkosivut yritykselle", "kotisivut", "tekoäly", "automaatio",
    "diseño web", "páginas web", "automatización IA",
    "Webdesign", "Webseite erstellen", "KI Automatisierung",
    "web design Dubai", "website agency Finland", "El Fennir",
  ],
  authors: [{ name: "Yassin El Fennir", url: "https://elfennir.com" }],
  creator: "Yassin El Fennir",
  publisher: "El Fennir",
  formatDetection: { telephone: true, email: true },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://elfennir.com",
    languages: {
      "fi": "https://elfennir.com",
      "en": "https://elfennir.com",
      "es": "https://elfennir.com",
      "de": "https://elfennir.com",
      "fr": "https://elfennir.com",
      "sv": "https://elfennir.com",
      "it": "https://elfennir.com",
      "pt": "https://elfennir.com",
      "x-default": "https://elfennir.com",
    },
  },
  openGraph: {
    title: "El Fennir — Websites, AI & Automation for Businesses",
    description:
      "Professional websites, AI chatbots & automation. Finland, Spain, Switzerland, Dubai & worldwide.",
    type: "website",
    url: "https://elfennir.com",
    siteName: "El Fennir",
    locale: "fi_FI",
    alternateLocale: ["en_US", "es_ES", "de_CH", "fr_FR", "sv_SE", "it_IT", "pt_PT"],
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "El Fennir — AI Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Fennir — Websites, AI & Automation for Businesses",
    description: "Professional websites & AI automation. Finland, Spain, Switzerland, Dubai & worldwide.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

// Global JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "El Fennir",
  url: "https://elfennir.com",
  logo: "https://elfennir.com/images/logo.png",
  description: "Professional websites, AI chatbots & automation for businesses worldwide.",
  founder: {
    "@type": "Person",
    name: "Yassin El Fennir",
    jobTitle: "CEO & Full-Stack Developer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espoo",
    addressCountry: "FI",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+358-46-6109064",
    contactType: "sales",
    availableLanguage: ["Finnish", "English", "Spanish", "German", "French", "Swedish", "Italian", "Portuguese"],
  },
  sameAs: [
    "https://www.linkedin.com/in/yassinfennir/",
  ],
  areaServed: [
    { "@type": "Country", name: "Finland" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Italy" },
    { "@type": "Country", name: "Portugal" },
  ],
  knowsLanguage: ["fi", "en", "es", "de", "fr", "sv", "it", "pt"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "El Fennir",
  url: "https://elfennir.com",
  inLanguage: ["fi", "en", "es", "de", "fr", "sv", "it", "pt"],
  publisher: {
    "@type": "Organization",
    name: "El Fennir",
    logo: "https://elfennir.com/images/logo.png",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "El Fennir",
  image: "https://elfennir.com/images/logo.png",
  url: "https://elfennir.com",
  telephone: "+358466109064",
  email: "yassin@elfennir.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espoo",
    addressRegion: "Uusimaa",
    addressCountry: "FI",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 60.2055,
    longitude: 24.6559,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Website Development", description: "Professional business websites" },
        price: "270",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "AI Chatbot & Automation", description: "AI-powered chatbots and workflow automation" },
        price: "540",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Premium Digital Package", description: "Full digital transformation with website, AI, and automation" },
        price: "830",
        priceCurrency: "EUR",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
