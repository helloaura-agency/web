import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FAQ } from "./components/FAQ";
import { Portfolio } from "./components/Portfolio";
// import { Careers } from "./components/Careers";
import { ThemeProvider } from "./components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
