import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { gsap } from "gsap"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import * as styles from "./styles/tabHeading.module.css"


const TabHeading = (props) => {
  const imgRef = useRef(null),
        headerRef = useRef(null),
        underlineRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1,
      delay: .25,
      duration: .75,
      y: 0
    })
    gsap.to(underlineRef.current, {
      opacity: 1,
      delay: .5,
      duration: .75,
      y: 0
    })
  }, [])

  return (
    <Container className={styles.container} fluid="true">
      <Container fluid="true" className={styles.imgContainer}>
        <Image src="./img/laptop.jpg" alt="picture of a laptop" className={styles.img} ref={imgRef}  roundedCircle></Image>
      </Container>
      <Container fluid="true" className={styles.textContainer}>
        <h1 className={styles.header} ref={headerRef}>{props.text}</h1>
        <div className={styles.underline} ref={underlineRef}></div>
      </Container>
  </Container>
  )
}

TabHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default TabHeading