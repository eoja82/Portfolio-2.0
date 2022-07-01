import React from "react"
import Container from "react-bootstrap/Container"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import * as styles from "./styles/contact.module.css"


const Contact = () => {
  return (
    <Container fluid className={styles.componentContainer}>
      <LargeHeading title="Contact" textAlign="left" />
      <SubHeading 
        text="Get In Touch"
        justifyContent="start"
        flexDirection="row"
        marginLeft="2rem"
      />
    </Container>
  )
}

export default Contact