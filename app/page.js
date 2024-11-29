// import Image from "next/image";

import Contact from './components/template/Contact'
// import Experience from './Components/template/Experience'
import Footer from './components/template/Footer'
// import Formation from './Components/template/Formation'
import Hero from './components/template/Hero'
import Navbar from './components/template/Navbar'

import portfolioConfig from './data/portfolioConfig.json';
import Skills from './components/template/Skills'
import Projects from './components/template/Projects'
import Experience from './components/template/Experience'
import Formation from './components/template/Formation';

export default function Home() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-red-500 selection:text-neutral-300'>
      <div className='fixed top-0 -z-20 h-full w-full'>
        <div className='absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
        </div>
      </div>
      <div className='container mx-auto px-8'>
        <Navbar logo={portfolioConfig.logo} linkedin={portfolioConfig.linkedin} facebook={portfolioConfig.facebook} instagram={portfolioConfig.instagram}/>
        <Hero data={{ displayName : portfolioConfig.displayname, position : portfolioConfig.position, about:portfolioConfig.HERO_CONTENT, image:portfolioConfig.IMAGE }} />
        <Experience exp={portfolioConfig.EXPERIENCES.EXPERIENCES} displaySection={portfolioConfig.EXPERIENCES.display} />
        <Formation formation={portfolioConfig.FORMATION.FORMATION} displaySection={portfolioConfig.FORMATION.display}/>
        <Skills skills={portfolioConfig.SKILLS.SKILLS} displaySection={portfolioConfig.SKILLS.display}/>
        <Projects projects={portfolioConfig.PROJECTS.PROJECTS} displaySection={portfolioConfig.PROJECTS.display}/>
        <Contact contact={portfolioConfig.CONTACT} displaySection={portfolioConfig.EXPERIENCES.display}/>
      </div>
      <Footer />
      {/* Button to toggle the form */}
      {/* <button
            onClick={handleToggleForm}
            className='fixed bottom-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg'
        >
            Customize Template
        </button> */}
      {/* Draggable form */}

    </div>
  )
}
