import React from "react"
import Container from "react-bootstrap/Container"
import TabHeading from "./tabHeading"
import * as styles from "./styles/about.module.css"


const About = () => {
  return (
    <Container fluid="true" className={styles.aboutContainer}>
      <TabHeading text="About" />
      <Container className={styles.about}>

      </Container>
  </Container>
  )
}

export default About