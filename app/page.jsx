// COMPONENTS & SCENES
import Nav from './Components/Nav/page'
import Contact from './Scenes/Contact/page'
import Landing from './Scenes/Landing/page'
import Projects from './Scenes/Projects/page'
import Skills from './Scenes/Skills/page'



export default function Home() {

  return (
    <>
      <Nav />
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
