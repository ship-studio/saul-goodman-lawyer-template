import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseResults } from "@/components/sections/CaseResults";
import { TeamProfiles } from "@/components/sections/TeamProfiles";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <PracticeAreas />
        <WhyChooseUs />
        <CaseResults />
        <TeamProfiles />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
