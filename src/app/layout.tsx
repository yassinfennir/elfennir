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
  title: "Yassin El Fennir — Verkkosivujen suunnittelu & tekoälyautomaatio | Zürich, Sveitsi",
  description:
    "Ammattimainen verkkosivujen suunnittelu ja tekoälyautomaatiopalvelut Zürichissä. Modernit verkkosivut, digitaaliset ratkaisut ja älykkäät automaatiojärjestelmät, jotka auttavat yrityksiä houkuttelemaan lisää asiakkaita ja kasvamaan nopeammin.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Yassin El Fennir — Verkkosivujen suunnittelu & tekoälyautomaatio | Zürich, Sveitsi",
    description:
      "Ammattimainen verkkosivujen suunnittelu ja tekoälyautomaatio Zürichissä. Modernit verkkosivut ja digitaaliset ratkaisut yrityksille.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Yassin El Fennir — El Fennir",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Yassin El Fennir — Verkkosivujen suunnittelu & tekoälyautomaatio",
    description: "Ammattimainen verkkosivujen suunnittelu ja tekoälyautomaatio Zürichissä.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className="dark">
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
