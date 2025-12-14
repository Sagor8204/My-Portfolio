import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f172a] font-sans">
        <div className="max-w-275 mx-auto">
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
