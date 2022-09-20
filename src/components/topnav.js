import React, { forwardRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import { gsap, ScrollToPlugin } from "gsap/all"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import * as styles from "./styles/topnav.module.css"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollToPlugin)
}

const Topnav = forwardRef((props, topnav) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  function scrollToSection(e) {
    e.preventDefault()
    const hash = e.target.getAttribute("href")
    offcanvasClose()
    gsap.to(window, {
      scrollTo: hash,
      duration: .8,
      onComplete: setHash
    })

    // Add hash (#) to URL when done scrolling (default click behavior)
    function setHash() {
      window.location.hash = hash;
    }
  }

  function offcanvasShow(e) { 
    e.preventDefault()
    setShowOffcanvas(true)
  }

  function offcanvasClose() {
    setShowOffcanvas(false)
  }

  return (
    <div>
      <style type="text/css">
        {`
          .fa-bars {
            font-size: 1.5rem;
            color: white;
          }
          .home {
            font-size: 1.4rem;
            font-weight: 300;
            letter-spacing: 3px;
            color: white;
            text-decoration: none;
          }
          .menuLink {
            font-size: 2rem;
            font-weight: 600;
            color: rgb(34, 31, 31);
          }
          #menuLink1:hover, #menuLink1:focus {
            color: #744c9e;
          }
          #menuLink2:hover, #menuLink2:focus {
            color: #549e44;
          }
          #menuLink3:hover, #menuLink3:focus {
            color: red;
          }          
        `}
      </style>
      <Navbar ref={topnav} className={styles.topNav} fixed="top" >
        <Container fluid="true">
          <Nav>
            <Nav.Item className={styles.menuContainer}>
              <Nav.Link className={styles.menu} onClick={offcanvasShow}><i className="fa fa-bars"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#intro" style={{color: "white"}} className="home" onClick={scrollToSection}>Er<span>i</span>k Oja</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={offcanvasClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className={styles.menuLinks + " justify-content-center offcanvasMenu"}>
            <Nav.Item>
              <Nav.Link href="#projects" className="menuLink" id="menuLink1" onClick={scrollToSection}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#development" className="menuLink" id="menuLink2" onClick={scrollToSection}>Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="menuLink" id="menuLink3" onClick={scrollToSection}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
})

export default Topnav