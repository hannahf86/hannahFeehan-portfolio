'use client'


// COMPONENTS & SCENES
import Nav from './Components/Nav/page'
import Landing from './Scenes/Landing/page'
import Projects from './Scenes/Projects/page'
import Skills from './Scenes/Skills/page'
import Contact from './Scenes/Contact/page'


export default function Home() {

  // if (typeof window !== "undefined") {
  //   // browser code
  // }

  // const [width, setWidth] = useState(window.innerWidth)
  // const breakpoint = 1024;

  // useEffect(() => {
  //   window.addEventListener('resize', () => setWidth(window.innerWidth));
  // }, []);


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
