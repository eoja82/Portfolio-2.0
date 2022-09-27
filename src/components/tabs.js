import React from "react"
import Container from "react-bootstrap/Container"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Contact from "./contact"
import Development from "./development"
import Projects from "./projects"

const TabContent = () => {
  return (
    <Container fluid="true">
      <Container>
        <style>
          {`
            .nav-tabs .nav-link {
              background-color: rgb(8, 8, 8, .6);
              color: white;
              text-transform: uppercase;
              border: 0;
              border-bottom: 3px solid rgb(121, 121, 121);
              border-radius: 0;
              transition: .3s;
            }
            .nav-tabs .nav-link:focus, 
            .nav-tabs .nav-link:hover {
              border-color: rgb(255, 227, 0);
            }
            .nav-tabs .nav-link.active {
              background-color: rgb(8, 8, 8, .6);
              color: rgb(255, 227, 0);
              border-color: rgb(255, 227, 0);
            }
          `}
        </style>
        <Tabs
          defaultActiveKey="projects"
          id="tabs"
          justify
        >
          <Tab eventKey="projects" title="Projects">
            <Projects />
          </Tab>
          <Tab eventKey="deveopment" title="Development">
            <Development />
          </Tab>
          <Tab eventKey="about" title="About">
            <div style={{height: "400px", backgroundColor: "rgb(8,8,8,.7)"}}>
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