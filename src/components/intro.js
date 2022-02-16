import React, { useEffect, useRef } from "react"
import * as styles from "./styles/intro.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Intro = () => {
  const heroBG = useRef(null)
  
  useEffect(() => {
    gsap.to(heroBG.current, {
      backgroundPosition: `100% ${window.innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: heroBG.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  })

  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroBG} ref={heroBG}></div>
        <h1 className={styles.heroTitle}>Title</h1>
      </div>
    </div>
  )
}

export default Intro