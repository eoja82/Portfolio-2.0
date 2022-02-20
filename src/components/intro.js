import React, { useLayoutEffect, useRef } from "react"
import * as styles from "./styles/intro.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Intro = () => {
  const heroBG = useRef(null),
        heroTitle = useRef(null),
        heroSubTitle = useRef(null),
        angle = useRef(null)
  
  // on scroll animations
  useLayoutEffect(() => {
    const offset = window.innerWidth / 2
    gsap.to(heroBG.current, {
      backgroundPosition: `100% ${window.innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        markers: true,
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: .1
      }
    })
    gsap.to(heroTitle.current, {
      opacity: 0, 
      x: offset, 
      rotate: 90,
      scrollTrigger: {
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
    gsap.to(heroSubTitle.current, {
      opacity: 0, 
      x: `-${offset}`, 
      rotate: 90,
      scrollTrigger: {
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: true
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
    const offset = window.innerWidth / 2
    gsap.from(heroTitle.current, {
      opacity: 0, 
      x: `-${offset}`, 
      rotate: -90, 
      duration: 1.25, 
      delay: .75
    })
    gsap.from(heroSubTitle.current, {
      opacity: 0, 
      x: offset, 
      rotate: -90, 
      duration: 1.25, 
      delay: 2
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
      <div className={styles.heroContainer}>
        <div className={styles.heroBG} ref={heroBG}></div>
        <div className={styles.titleContainer}>
          <h1 className={styles.heroTitle} ref={heroTitle}>Hello, my name is <span>Erik Oja</span>.</h1>
          <h2 className={styles.heroSubTitle} ref={heroSubTitle}>I'm a full stack web developer.</h2>
        </div>
        <i className={styles.angle + " fa fa-angle-down"} ref={angle} style={{fontSize: "2rem"}}></i>
      </div>
    </div>
  )
}

export default Intro