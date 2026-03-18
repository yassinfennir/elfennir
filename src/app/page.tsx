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
export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <TechStack />
      <WhyUs />
      <Pricing />
      <Process />
      <Portfolio />
      <Testimonials />
      <About />
      <TrustBadges />
      <FAQ />
      <Contact />
    </main>
  );
}
