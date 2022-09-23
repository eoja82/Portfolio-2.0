import React, { useLayoutEffect, useRef } from "react"
import * as styles from "./styles/intro.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Intro = () => {
  const introSection = useRef(null),
        heroTitle = useRef(null),
        heroSubTitle = useRef(null),
        angle = useRef(null),
        topBorder = useRef(null),
        bottomBorder = useRef(null),
        nav = useRef(null)
  
  // on scroll animations
  useLayoutEffect(() => {
    gsap.to(angle.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: introSection.current,
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
          .navLink {
            color: white;
          }
          .navLink:hover,
          .navLink:focus {
            color: #221f1f;
            background-color: white;
          }
        `}
      </style>
      <Container ref={introSection} id="intro" fluid="true" className={styles.heroContainer}>
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
            <Nav.Link href="#projects" className={styles.navLink1 + " navLink"}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#development" className={styles.navLink2 + " navLink"}>Development</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" className={styles.navLink3 + " navLink"}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <i className={styles.angle + " fa fa-angle-down"} ref={angle} style={{fontSize: "2rem"}}></i>
      </Container>
    </div>
  )
}

export default Intro