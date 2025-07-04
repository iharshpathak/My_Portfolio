import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Extracurriculars from './components/Extracurriculars'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import { Toaster, toast } from 'sonner';

function App() {

  return (
    <>
      <div className='overflow-x-hidden text-neutral-300 anitaliased selection:bg-lime-200 selection:text-zinc-900'>
        {/* <Toaster /> */}
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        </div>
        
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/>
          <About/>
          <Technologies/>
          <Experience />
          <Projects/>
          <Extracurriculars />
          <Certificates />
          <Contact />
        </div>
       </div>
    </>
  )
}

export default App
