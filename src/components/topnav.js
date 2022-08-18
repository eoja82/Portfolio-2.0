import React, { forwardRef, useState } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
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
          /* 
          *********** move this to intro ***********
          .nav-link {
            color: white;
          }
          .nav-link:focus, .nav-link:hover {
            color: white;
            background-color: rgb(255, 255, 255, .2);
          } */
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
          <ul className={styles.menuList}>
            <li className="mb-3">
              <Link to="#projects" onClick={offcanvasClose}>Projects</Link>
            </li>
            <li className="mb-3">
              <Link to="#development" onClick={offcanvasClose}>Development</Link>
            </li>
            <li className="mb-3">
              <Link to="#contact" onClick={offcanvasClose}>Contact</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
})

export default Topnav