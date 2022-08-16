import React from "react"
import Contact from "../components/contact"
import Development from "../components/development"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Topnav from "../components/topnav"


export default function Home() {  
  return (
    <Layout>
      <Topnav />
      <Intro />
      <Projects />
      <Development />
      <Contact />
    </Layout>
  )
}