import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Tab from "react-bootstrap/Tab"
import About from "./about"
import Contact from "./contact"
import Development from "./development"
import Intro from "./intro"
import Projects from "./projects"
import * as styles from "./styles/tabContent.module.css"


const TabContent = () => {
  return (
    <Container fluid="true" className={styles.navContainer}>
      <style>
          {`
            .nav-item {
              padding-bottom: 0;
              display: flex;
              align-items: end;
            }
            .nav-tabs {
              border: 0;
            }
            .nav-tabs .nav-link {
              background-color: rgb(1, 1, 1);
              color: rgb(248, 249, 250);
              border: 0;
              border-radius: 0;
              transition: .3s;
              padding-bottom: 0;
            }
            .nav-tabs .nav-link:focus, 
            .nav-tabs .nav-link:hover {
              color: rgb(22, 190, 255);
            }
            .nav-tabs .nav-link.active {
              background-color: rgb(1, 1, 1);
              color: rgb(22, 190, 255);
            }
            .intro .nav-link:active, 
            .intro .nav-link:focus, 
            .intro .nav-link:hover {
              color: rgb(22, 190, 255);
            }
          `}
        </style>
      <Tab.Container defaultActiveKey="intro">
        <div className={styles.navWrapper}>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="intro" className={styles.intro + " intro"} style={{color: "rgb(248, 249, 250)"}}>Er<span style={{color: "rgb(10, 162, 221)"}}>i</span>k Oja</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="projects" className={styles.link}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="development" className={styles.link}>Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="about" className={styles.link}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contact" className={styles.link}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="intro" mountOnEnter unmountOnExit>
            <Intro />
          </Tab.Pane>
          <Tab.Pane eventKey="projects" mountOnEnter unmountOnExit>
            <Projects />
          </Tab.Pane>
          <Tab.Pane eventKey="about" mountOnEnter unmountOnExit>
            <About />
          </Tab.Pane>
          <Tab.Pane eventKey="development" mountOnEnter unmountOnExit>
            <Development />
          </Tab.Pane>
          <Tab.Pane eventKey="contact" mountOnEnter unmountOnExit>
            <Contact />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  )
}

export default TabContent