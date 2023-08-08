import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar"
import Main from "../components/Main/Main"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Projects from "../components/Projects/Projects"
import Contact from "../components/Contact/Contact"

const Home: NextPage = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
