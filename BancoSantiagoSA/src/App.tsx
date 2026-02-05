import './App.css'
import { Header } from './components/layout/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Location } from './components/Location'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Location />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
