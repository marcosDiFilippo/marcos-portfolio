import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import BackgroundEffect from './components/ui/BackgroundEffect/BackgroundEffect';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';

/**
 * App — root component.
 * Assembles all sections in order.
 * No routing needed — single page application.
 */
export default function App() {
  return (
    <>
      <BackgroundEffect />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
