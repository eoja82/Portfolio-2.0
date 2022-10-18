import React, { useLayoutEffect, useRef } from "react"
import Footer from "./footer"
import * as styles from "./styles/intro.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { withPrefix } from "gatsby"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Intro = () => {
  const introSection = useRef(null),
        heroTitle = useRef(null),
        heroSubTitle = useRef(null)

  // initial animations in
  useLayoutEffect(() => {
    gsap.to(heroTitle.current, {
      opacity: 1,
      y: -50,
      duration: .75,
      delay: 1
    })
    gsap.to(heroSubTitle.current, {
      opacity: 1,
      y: -50,
      duration: .75, 
      delay: 1.25
    })
  }, [])

  return (
    <Container ref={introSection} id="intro" fluid="true" className={styles.heroContainer}>
      <Image className={styles.backgroundImg} src={withPrefix("/img/laptopLight.jpg")} alt="laptop background image"></Image>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1 className={styles.heroTitle} ref={heroTitle}>Erik Oja</h1>
          <h2 className={styles.heroSubTitle} ref={heroSubTitle}>Software Developer</h2>
        </div>
      </div>
      <Footer style={{position: "absolute"}} />
    </Container>
  )
}

export default Intro