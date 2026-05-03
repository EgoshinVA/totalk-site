import './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Download from './components/Download'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Download />
      <Footer />
    </div>
  )
}
