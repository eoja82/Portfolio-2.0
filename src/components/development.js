import React, { useEffect, useRef } from "react"
import * as styles from "./styles/development.module.css"
import { gsap, ScrollTrigger } from "gsap/all"
import LargeHeading from "./lgHeading"
import Container from "react-bootstrap/Container"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Development = () => {
  const titleContainer= useRef(null),
        titleScroller = useRef(null),
        title = useRef(null)

  useEffect(() => {
    
    gsap.to(titleScroller.current, {
      y: "-100px",
      opacity: 1,
      scrollTrigger: {
        trigger: titleScroller.current,
        start: "top bottom",
        scrub: true,
        markers: true
      }
    })
  })

  return (
    <div>
      <Container fluid="true">
        <div className={styles.titleContainer} ref={titleContainer}>
          <LargeHeading title="Development" textAlign="right" />
          <div ref={titleScroller} className={styles.titleScroller}>
            <h3 className={styles.title} ref={title}>Front-End</h3>
            <div className={styles.lineAfter}></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Development