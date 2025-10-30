import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Process } from "./components/Process";
import { Technologies } from "./components/Technologies";
import { Benefits } from "./components/Benefits";
import { Portfolio } from "./components/Portfolio";
import { CTABanner } from "./components/CTABanner";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";
import { CustomCursor } from "./components/CustomCursor";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Technologies />
        <Benefits />
        <Portfolio />
        <CTABanner />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
