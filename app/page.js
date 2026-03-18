import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "../components/sections/about-section";
import ServicesSection from "../components/sections/services-section";
import PlansSection from "../components/sections/plans-section";
import TrainersSection from "../components/sections/trainers-section";
import ContactSection from "../components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PlansSection />
        <TrainersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
