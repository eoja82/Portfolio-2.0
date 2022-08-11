import React, { useLayoutEffect, useRef, useState } from "react"
import * as styles from "./styles/intro.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Link, withPrefix } from "gatsby"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Intro = () => {
  const heroBG = useRef(null),
        heroTitle = useRef(null),
        heroSubTitle = useRef(null),
        angle = useRef(null),
        topBorder = useRef(null),
        bottomBorder = useRef(null),
        nav = useRef(null),
        menu = useRef(null),
        [showOffcanvas, setShowOffcanvas] = useState(false)
        
  function offcanvasClose() { setShowOffcanvas(false) }
        
  function offcanvasShow() {
    setShowOffcanvas(true)
    /* menu.current.blur() */
  } 
        
  
  // on scroll animations
  useLayoutEffect(() => {
    gsap.to(heroBG.current, {
      backgroundPosition: `100% ${window.innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: .1
      }
    })
    gsap.to(angle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  })

  // initial animations in
  useLayoutEffect(() => {
    gsap.from(topBorder.current, {
      width: 0,
      x: 278,
      duration: .6,
      delay: .75
    })
    gsap.from(bottomBorder.current, {
      width: 0,
      duration: .6,
      delay: .75
    })
    gsap.from(heroTitle.current, {
      opacity: 0,
      duration: 1.25, 
      delay: 1
    })
    gsap.from(heroSubTitle.current, {
      opacity: 0,
      duration: 1.25, 
      delay: 2
    })
    gsap.from(nav.current, {
      opacity: 0,
      delay: 3.25,
      duration: 1
    })
    gsap.from(angle.current, {
      opacity: 0,
      delay: 3.25,
      ease: "bounce.out",
      duration: 1.5,
      y: -100
    })
  }, [])

  return (
    <div>
      <style>
        {`
          .nav-link {
            color: white;
          }
          .nav-link:focus, .nav-link:hover {
            color: white;
            background-color: rgb(255, 255, 255, .2);
          }
        `}
      </style>
      <Container fluid="true" className={styles.heroContainer}>
        <Navbar className={styles.topNav} fixed="top" >
          <Container fluid="true">
            <i className={styles.menu + " fa fa-bars"} onClick={offcanvasShow} role="button"></i>
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
        <div className={styles.heroBG} ref={heroBG} style={{backgroundImage: `url(${withPrefix("/img/heroSky.webp")})`}}></div>
        <div className={styles.titleContainer}>
          <div className={styles.topBorder} ref={topBorder}></div>
          <div className={styles.title}>
            <h1 className={styles.heroTitle} ref={heroTitle}>Erik Oja</h1>
            <h2 className={styles.heroSubTitle} ref={heroSubTitle}>Software Developer</h2>
          </div>
          <div className={styles.bottomBorder} ref={bottomBorder}></div>
        </div>
        <Nav ref={nav} className={styles.navLinks + " justify-content-center"}>
          <Nav.Item>
            <Nav.Link href="#projects" className={styles.navLink1}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#development" className={styles.navLink2}>Tech Stack</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className={styles.navLink3}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <i className={styles.angle + " fa fa-angle-down"} ref={angle} style={{fontSize: "2rem"}}></i>
      </Container>
    </div>
  )
}

export default Intro