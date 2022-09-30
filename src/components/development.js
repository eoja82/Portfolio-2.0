import React from "react"
import * as styles from "./styles/development.module.css"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
import Container from "react-bootstrap/Container"

const Development = () => {
  return (
    <div>
      <Container id="development" className={styles.developmentContainer}>
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
    </div>
  )
}

export default Development