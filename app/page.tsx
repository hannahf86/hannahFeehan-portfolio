'use client'

import { useEffect, useState } from 'react'

// COMPONENTS & SCENES
import Landing from './Scenes/Landing/page'
import MobileNav from './Components/MobileNav/page'
import DesktopNav from './Components/DesktopNav/page'
import Projects from './Scenes/Projects/page'
import Skills from './Scenes/Skills/page'
import Contact from './Scenes/Contact/page'

export default function Home() {

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <>
      {width <= breakpoint ?
        <MobileNav /> : <DesktopNav />
      }

      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
