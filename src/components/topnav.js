import React, { forwardRef, useState } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import * as styles from "./styles/topnav.module.css"


const Topnav = forwardRef((props, topnav) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  function offcanvasClose() { setShowOffcanvas(false) }
        
  function offcanvasShow() { setShowOffcanvas(true) }

  return (
    <div>
      <style type="text/css">
        {`
          .fa-bars {
            font-size: 1.5rem;
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
          <i className={styles.menu + " fa fa-bars"} onClick={offcanvasShow} role="button" aria-label="menu button"></i>
          <Link to="#">Er<span>i</span>k Oja</Link>
        </Container>
      </Navbar>
      <Offcanvas show={showOffcanvas} onHide={offcanvasClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body>
          <Nav className={styles.menuLinks + " justify-content-center"}>
            <Nav.Item>
              <Nav.Link href="#projects" className="menuLink" id="menuLink1" onClick={offcanvasClose}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#development" className="menuLink" id="menuLink2" onClick={offcanvasClose}>Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="menuLink" id="menuLink3" onClick={offcanvasClose}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
})

export default Topnav