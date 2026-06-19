import { useEffect, useState } from 'react';
import './App.css';
import IntroOverlay from './components/IntroOverlay';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Constellation from './components/Constellation';
import PortfolioChat from './components/PortfolioChat';
import Divider from './components/Divider';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .timeline-item, .project-card, .tool-item');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

function App() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('intro_done'));

  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => sessionStorage.setItem('intro_done', '1'), 2400);
    return () => clearTimeout(timer);
  }, [showIntro]);

  useReveal();

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}

      <CustomCursor />
      <BackgroundCanvas />
      <Navigation />

      <main>
        <Header />
        <Constellation />
        <PortfolioChat />

        <Divider label="// 01 — Identity" />
        <About />

        <Divider label="// 02 — History" />
        <Experiences />

        <Divider label="// 03 — Work" />
        <Projects />

        <Divider label="// 04 — Arsenal" />
        <Tools />

        <Divider label="// 05 — Contact" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
