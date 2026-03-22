import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { IntroSplash } from "@/components/IntroSplash";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yassin El Fennir — #1 AI Web Agency | Websites & Automation in 24h",
  description:
    "Professional AI-powered web agency. Custom websites, chatbots, and n8n automations delivered in 24-72 hours. From €299. Based in Finland, serving globally.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Yassin El Fennir — #1 AI Web Agency | Websites & Automation in 24h",
    description:
      "Professional AI-powered web agency. Custom websites, chatbots, and n8n automations. From €299.",
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
    title: "Yassin El Fennir — #1 AI Web Agency",
    description: "Custom websites, AI chatbots & automations from €299. Delivered in 24h.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <LanguageProvider>
          <IntroSplash>
            <SmoothScroll>
              <Navbar />
              {children}
              <Footer />
            </SmoothScroll>
          </IntroSplash>
        </LanguageProvider>
      </body>
    </html>
  );
}
