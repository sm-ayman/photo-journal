import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Footer />
    </>
  )
}

export default App
