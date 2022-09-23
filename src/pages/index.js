import React from "react"
import Intro from "../components/intro"
import Footer from "../components/footer"
import Layout from "../components/layout"
import TabContent from "../components/tabs"


const Home = () => {
  return (
    <Layout>
      <Intro />
      <TabContent />
      <Footer />
    </Layout>
  )
}

export default Home