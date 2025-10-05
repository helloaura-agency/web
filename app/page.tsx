import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { Portfolio } from "./components/Portfolio";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppBadge from "./components/WhatsappBadge";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import { ScrollProgress } from "./components/ScrollProgress";

export default function Home() {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <ScrollProgress />
        <div className="min-h-screen bg-black dark:bg-black light:bg-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <FAQ />
            {/* <Careers /> */}
            <Contact />
          </main>
          <Footer />
        </div>
        <WhatsAppBadge />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
