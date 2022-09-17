import React, { forwardRef } from "react"
import * as styles from "./styles/development.module.css"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import TechIcons from "./techIcons"
import { backEnd, database, frontEnd, testing, versionControl } from "./data/data.js"
import Container from "react-bootstrap/Container"

const Development = forwardRef((props, developmentSection) => {
  return (
    <div>
      <Container id="development" ref={developmentSection} className={styles.developmentContainer} fluid="true">
        <LargeHeading title="Development" textAlign="right" />
        <div id="frontEnd">
          <div className={styles.titleContainer}>
            <SubHeading 
              text="Front End" 
              justifyContent="end" 
              flexDirection="row-reverse"
              marginLeft="2rem"
              color="#ff5722"
            />
          </div>
          <TechIcons data={frontEnd} />
        </div>
        <div id="backEnd">
          <div className={styles.titleContainer}>
            <SubHeading 
              text="Back End"
              justifyContent="start"
              flexDirection="row"
              marginRight="2rem"
              color="#549e44"
            />
          </div>
          <TechIcons data={backEnd} />
        </div>
        <div id="database">
          <div className={styles.titleContainer}>
            <SubHeading 
              text="Database"
              justifyContent="end"
              flexDirection="row-reverse"
              marginLeft="2rem"
              color="#ffd54f"
            />
          </div>
          <TechIcons data={database} />
        </div>
        <div id="testing">
          <div className={styles.titleContainer}>
            <SubHeading 
              text="Testing"
              justifyContent="start"
              flexDirection="row"
              marginRight="2rem"
              color="#8d6748"
            />
          </div>
          <TechIcons data={testing} />
        </div>
        <div id="versionControl">
          <div className={styles.titleContainer}>
            <SubHeading 
              text="Version Control"
              justifyContent="end"
              flexDirection="row-reverse"
              marginLeft="2rem"
              color="#de4c36"
            />
          </div>
          <TechIcons data={versionControl} />
        </div>
      </Container>
    </div>
  )
})

export default Development