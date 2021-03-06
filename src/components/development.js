import React, { useEffect, useRef } from "react"
import * as styles from "./styles/development.module.css"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
//import Card from "react-bootstrap/Card"
//import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
//import Row from "react-bootstrap/Row"

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
        <TechIcons data={frontEnd} />
        <div className={styles.titleContainer}>
          <SubHeading 
            text="Back End"
            justifyContent="start"
            flexDirection="row"
            marginRight="2rem"
          />
        </div>
        <TechIcons data={backEnd} />
        <div className={styles.titleContainer}>
          <SubHeading 
            text="Database"
            justifyContent="end"
            flexDirection="row-reverse"
            marginLeft="2rem"
          />
        </div>
        <TechIcons data={database} />
        <div className={styles.titleContainer}>
          <SubHeading 
            text="Testing"
            justifyContent="start"
            flexDirection="row"
            marginRight="2rem"
          />
        </div>
        <TechIcons data={testing} />
        <div className={styles.titleContainer}>
          <SubHeading 
            text="Version Control"
            justifyContent="end"
            flexDirection="row-reverse"
            marginLeft="2rem"
          />
        </div>
        <TechIcons data={versionControl} />
      </Container>
    </div>
  )
}

export default Development