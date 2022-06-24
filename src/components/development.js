import React, { useEffect, useRef } from "react"
import * as styles from "./styles/development.module.css"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import TechIcons from "./techIcons"
import { frontEnd } from "./data/data.js"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

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
      </Container>
    </div>
  )
}

export default Development