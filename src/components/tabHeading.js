import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import * as styles from "./styles/tabHeading.module.css"


const TabHeading = (props) => {
  return (
    <Container className={styles.container} fluid="true">
      <Container className={styles.imgContainer}>
        <Image src="./img/laptop.jpg" alt="picture of a laptop" className={styles.img}  roundedCircle></Image>
      </Container>
      <Container className={styles.textContainer}>
        <h1 className={styles.header}>{props.text}</h1>
      </Container>
  </Container>
  )
}

TabHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default TabHeading