import React, { useEffect, useRef } from "react"
import * as styles from "./styles/development.module.css"
import { gsap, ScrollTrigger } from "gsap/all"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import Container from "react-bootstrap/Container"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Development = () => {
  return (
    <div>
      <Container fluid="true">
        <div className={styles.titleContainer}>
          <LargeHeading title="Development" textAlign="right" />
          <SubHeading 
            text="Front End" 
            justifyContent="end" 
            flexDirection="row-reverse"
            marginLeft="2rem" 
          />
        </div>
      </Container>
    </div>
  )
}

export default Development