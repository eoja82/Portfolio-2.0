import React from "react"
import Container from "react-bootstrap/Container"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Contact from "./contact"
import Development from "./development"
import Projects from "./projects"
import * as styles from "./styles/tabs.module.css"

const TabContent = () => {
  return (
    <Container fluid="true">
      <Container>
        <Tabs
          defaultActiveKey="projects"
          id="tabs"
          className="sticky-top"
          justify
        >
          <Tab eventKey="projects" title="Projects">
            <Projects />
          </Tab>
          <Tab eventKey="deveopment" title="Development">
            <Development />
          </Tab>
          <Tab eventKey="about" title="About">
            <div className="bg-light" style={{height: "400px"}}>
              About
            </div>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Contact />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  )
}

export default TabContent