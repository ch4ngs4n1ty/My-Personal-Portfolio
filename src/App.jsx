import { useState, useEffect } from 'react'
import './App.css'
import ParticleIntro from './components/ParticleIntro'
import ShootingStars from './components/ShootingStars'
import Header from './components/Header'
import Contact from './components/Contact'
import Divider from './components/Divider'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Tools from './components/Tools'

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenParticleIntro');
    
    if (hasSeenIntro) {
      // Skip intro if already seen in this session
      setShowIntro(false);
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <>
      {/* Particle Intro Animation */}
      {showIntro && <ParticleIntro onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Shooting Stars Background */}
          <ShootingStars />

          {/* Header with Typing Animation */}
          <Header />

          {/* Social Media Contact Links */}
          <Contact />

          <Divider />

          {/* About Me Section */}
          <About />

          <Divider />

          {/* Work Experiences */}
          <Experiences />

          <Divider />

          {/* Projects Portfolio */}
          <Projects />

          <Divider />

          {/* Tools & Technologies */}
          <Tools />
        </>
      )}
    </>
  )
}

export default App
