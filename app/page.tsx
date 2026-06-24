import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkDock from "@/components/WorkDock";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <main>
        <Hero />
        <WorkDock />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </LenisProvider>
  );
}
