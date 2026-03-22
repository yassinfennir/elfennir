import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { SectionDivider3D, ScrollingMarquee } from "@/components/SectionDivider3D";
import { SocialBar } from "@/components/SocialBar";

export default function Home() {
  return (
    <main>
      <SocialBar />
      <Hero />
      <ScrollingMarquee words={["WEBSITES", "AI", "AUTOMATION", "DESIGN", "CHATBOTS", "SEO", "N8N"]} />
      <Problem />
      <SectionDivider3D />
      <Services />
      <TechStack />
      <SectionDivider3D />
      <WhyUs />
      <Pricing />
      <ScrollingMarquee words={["STARTER", "BUSINESS", "PREMIUM", "ENTERPRISE", "CUSTOM"]} />
      <Process />
      <Portfolio />
      <SectionDivider3D />
      <Testimonials />
      <About />
      <TrustBadges />
      <FAQ />
      <Contact />
    </main>
  );
}
