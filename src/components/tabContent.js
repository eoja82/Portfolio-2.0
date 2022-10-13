import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Offcanvas from "react-bootstrap/Offcanvas"
import Tab from "react-bootstrap/Tab"
import About from "./about"
import Contact from "./contact"
import Development from "./development"
import Intro from "./intro"
import Projects from "./projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./styles/tabContent.module.css"


const TabContent = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container fluid="true" className={styles.navContainer}>
      <style>
          {`
            .nav-link {
              padding: .5rem 1rem 0;
            }
            @media only screen and (max-width: 576px) {
              .nav-link {
                padding: 0 1rem;
              }
            }
            .nav-item {
              display: flex;
              justify-content: center;
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
            }
            .nav-tabs .nav-link:focus, 
            .nav-tabs .nav-link:hover {
              color: rgb(22, 190, 255);
            }
            .nav-tabs .nav-link.active {
              background-color: rgb(1, 1, 1);
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
          {/* wide screen tabs */}
          <Nav variant="tabs" className="d-none d-sm-flex">
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
          {/* small screen tabs */}
          <div className={styles.offCanvas + " d-sm-none"}>
            <Button variant="dark" onClick={handleShow} style={{backgroundColor: "rgb(1, 1, 1)", borderColor: "rgb(1, 1, 1)", fontSize: "1.5rem", padding: "0 .75rem"}}><FontAwesomeIcon icon={faBars} /></Button>
            <Offcanvas show={show} onHide={handleClose} responsive="sm" placement="top" className={styles.offCanvas}>
              <Offcanvas.Header className={styles.offCanvasHeader}>
                <Button variant="dark" onClick={handleClose} style={{backgroundColor: "rgb(1, 1, 1)", borderColor: "rgb(1, 1, 1)", fontSize: "1.5rem", padding: "0 .75rem"}} aria-label="Close"><FontAwesomeIcon icon={faXmark} /></Button>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.offCanvasBody}>
                <Nav variant="tabs" className={styles.offCanvasTabs}>
                  <Nav.Item className={styles.offcanvasNavItem}>
                    <Nav.Link eventKey="projects" onClick={handleClose} className="mb-2">Projects</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.offcanvasNavItem}>
                    <Nav.Link eventKey="development" onClick={handleClose} className="mb-2">Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.offcanvasNavItem}>
                    <Nav.Link eventKey="about" onClick={handleClose} className="mb-2">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.offcanvasNavItem}>
                    <Nav.Link eventKey="contact" onClick={handleClose} className="mb-2">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
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