import './App.css'
import ShootingStars from './components/ShootingStars'
import Header from './components/Header'
import Contact from './components/Contact'
import Divider from './components/Divider'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Tools from './components/Tools'

function App() {
  return (
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
  )
}

export default App
