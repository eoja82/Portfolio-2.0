import React, { useState } from "react"
import { Link } from "gatsby"
import Contact from "../components/contact"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Development from "../components/development"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import * as styles from "./index.module.css"

export default function Home() {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  function offcanvasClose() { setShowOffcanvas(false) }
        
  function offcanvasShow() { setShowOffcanvas(true) } 

  return (
    <Layout>
      <style>
        {`
          .fa-bars {
            font-size: 1.5rem;
          }
          .nav-link {
            color: white;
          }
          .nav-link:focus, .nav-link:hover {
            color: white;
            background-color: rgb(255, 255, 255, .2);
          }
        `}
      </style>
      <Navbar className={styles.topNav} fixed="top" >
        <Container fluid="true">
          <i className={styles.menu + " fa fa-bars"} onClick={offcanvasShow} role="button" aria-label="menu button"></i>
          <Link to="#">Erik Oja</Link>
        </Container>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={offcanvasClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <ul className={styles.menuList}>
            <li className="mb-3">
              <Link to="#projects" onClick={offcanvasClose}>Projects</Link>
            </li>
            <li className="mb-3">
              <Link to="#development" onClick={offcanvasClose}>Tech Stack</Link>
            </li>
            <li className="mb-3">
              <Link to="#contact" onClick={offcanvasClose}>Contact</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <Intro />
      <Projects />
      <Development />
      <Contact />
    </Layout>
  )
}