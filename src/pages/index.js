import React from "react"
import Contact from "../components/contact"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Development from "../components/development"

export default function Home() {
  
  
  return (
    <Layout>
      <Intro />
      <Projects />
      <Development />
      <Contact />
      {/* About section, color icons for front end
          back end, database, mobile?, testing and other */}
    </Layout>
  )
}
