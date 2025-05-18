import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Footer from './components/Footer'

import 'bootswatch/dist/brite/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './index.css'

function App() {

  return (
    <div className='bg-lines'>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
