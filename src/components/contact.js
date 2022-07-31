import React, { useEffect, useLayoutEffect, useRef } from "react"
import { withPrefix } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"
import * as styles from "./styles/contact.module.css"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Contact = () => {
  const bgImage = useRef(null)

  useLayoutEffect(() => {
    bgImage.current.style.objectPosition = `50% ${-window.innerHeight / 2}px`
  })

  useEffect(() => {
    gsap.to(bgImage.current, {
      objectPosition: `50% ${window.innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: bgImage.current,
        scrub: true,
      }
    })
  })

  return (
    <Container fluid="true" id="contact" className={styles.componentContainer}>
      <style>
        {`
          .form-control,
          .form-control:focus {
            background-color: transparent;
            color: white;
          }
          .form-control:focus {
            background-color: rgb(40, 40, 40, .1);
            border-color: rgb(70, 236, 253);
            box-shadow: 0 0 0 rgb(70, 236, 253, .25)
          }
        `}
      </style>
      <img className={styles.bgImage} ref={bgImage} src="/img/heroSky.webp" alt="Sky Background"></img>
      <Container className={styles.contactContainer}>
        <h1 className={styles.header}>Contact</h1>
        <Form className={styles.form}>
          <FloatingLabel controlId="floatingEmail" label="Email Address" className={styles.floatingLabel  +" mb-3"}>
            <Form.Control type="email" placeholder="name@example.com" required="true" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSubject" label="Subject" className={styles.floatingLabel + " mb-3"}>
            <Form.Control type="text" placeholder="Subject" required="true" />
          </FloatingLabel>
          <FloatingLabel conrtrolId="floatingMessage" label="Message" className={styles.floatingLabel  +" mb-3"}>
            <Form.Control as="textarea" placeholder="Message" style={{height: "100px"}} required="true" />
          </FloatingLabel>
          <Button variant="outline-light">Send Message</Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Contact