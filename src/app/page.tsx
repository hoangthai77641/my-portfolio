import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
