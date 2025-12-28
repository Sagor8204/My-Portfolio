import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0f172a] font-sans">
        <div className="max-w-5xl mx-auto">
          <main>
            <Hero />
            <Experience />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}
