import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
