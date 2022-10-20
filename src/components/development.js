import React, { useEffect } from "react"
import gsap from "gsap"
import * as styles from "./styles/development.module.css"
import Footer from "./footer"
import TabHeading from "./tabHeading"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
import Container from "react-bootstrap/Container"

const Development = () => {
  
  useEffect(() => {
    console.log(gsap.utils.toArray(".header"))
    gsap.to(gsap.utils.toArray(".header"), {
      opacity: 1,
      y: -25,
      duraiton: 1,
      delay: .35
    })
  })

  return (
    <Container fluid="true" id="development" className={styles.developmentContainer}>
      <TabHeading text="Development Tools" />
      <Container className={styles.development}>
        <h2 className={styles.header + " header"}>Front End</h2>
        <TechIcons data={frontEnd} />
        <h2 className={styles.header + " header"}>Back End</h2>
        <TechIcons data={backEnd} />
        <h2 className={styles.header + " header"}>Database</h2>
        <TechIcons data={database} />
        <h2 className={styles.header + " header"}>Testing</h2>
        <TechIcons data={testing} />
        <h2 className={styles.header + " header"}>Version Control</h2>
        <TechIcons data={versionControl} />
      </Container>
      <Footer />
    </Container>
  )
}

export default Development