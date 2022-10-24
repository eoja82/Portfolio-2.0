import React from "react"
import SSRProvider from "react-bootstrap/SSRProvider"
import Layout from "../components/layout"
import TabContent from "../components/tabContent"


const Home = () => {
  return (
    <SSRProvider>
      <Layout>
        <TabContent />
      </Layout>
    </SSRProvider>
  )
}

export default Home