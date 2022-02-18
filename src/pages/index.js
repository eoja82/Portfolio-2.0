import React from "react"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"

export default function Home() {
  
  
  return (
    <Layout>
      <Intro />
      <Projects />
      <div style={{height: "100vh", backgroundColor: "gray"}}>Temporary</div>

    </Layout>
  )
}
