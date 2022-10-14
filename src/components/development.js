import React from "react"
import * as styles from "./styles/development.module.css"
import Footer from "./footer"
import TabHeading from "./tabHeading"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
import Container from "react-bootstrap/Container"

const Development = () => {
  return (
    <Container fluid="true" id="development" className={styles.developmentContainer}>
      <TabHeading text="Development Tools" />
      <Container className={styles.development}>
        <h2 className={styles.header}>Front End</h2>
        <TechIcons data={frontEnd} />
        <h2 className={styles.header}>Back End</h2>
        <TechIcons data={backEnd} />
        <h2 className={styles.header}>Database</h2>
        <TechIcons data={database} />
        <h2 className={styles.header}>Testing</h2>
        <TechIcons data={testing} />
        <h2 className={styles.header}>Version Control</h2>
        <TechIcons data={versionControl} />
      </Container>
      <Footer />
    </Container>
  )
}

export default Development