import React, { useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { portfolio, filters } from "./data/data"
console.log(filters)
if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
  const titleContainer = useRef(null)

  useEffect(() => {
    gsap.from(titleContainer.current, {
      opacity: 0,
      y: 150,
      duration: .5,
      scrollTrigger: {
        markers: true,
        trigger: titleContainer.current,
        toggleActions: "play pause resume reverse"
      }
    })
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.transitionContainer}></div>
        <div className={styles.projectsContainer}>
        <div className={styles.titleContainer} ref={titleContainer}>
          <div>
            <h3 className={styles.title}>PROJECTS</h3>
            <div className={styles.underline}></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects