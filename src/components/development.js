import React from "react"
import * as styles from "./styles/development.module.css"
import TabHeading from "./tabHeading"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
import Container from "react-bootstrap/Container"

const Development = () => {
  return (
    <Container fluid="true" className={styles.developmentContainer}>
      <TabHeading text="Development Tools" />
      <Container id="development" className={styles.development}>
        <h1 className={styles.header}>Front End</h1>
        <TechIcons data={frontEnd} />
        <h1 className={styles.header}>Back End</h1>
        <TechIcons data={backEnd} />
        <h1 className={styles.header}>Database</h1>
        <TechIcons data={database} />
        <h1 className={styles.header}>Testing</h1>
        <TechIcons data={testing} />
        <h1 className={styles.header}>Version Control</h1>
        <TechIcons data={versionControl} />
      </Container>
    </Container>
  )
}

export default Development