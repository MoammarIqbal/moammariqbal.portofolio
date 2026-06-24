import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Scroll reveal with IntersectionObserver
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all section containers
    // Hidden state is applied via JS so crawlers see content by default
    const sections = document.querySelectorAll('.section, .quick-stats');
    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(24px)';
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <QuickStats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
