import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react"
import { withPrefix } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import * as styles from "./styles/contact.module.css"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Contact = forwardRef((props, contact) => {
  const bgImage = useRef(null),
        contactForm = useRef(null),
        [email, setEmail] = useState(""),
        [name, setName] = useState(""),
        [subject, setSubject] = useState(""),
        [message, setMessage] = useState("")

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

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleSubject(e) {
    setSubject(e.target.value)
  }

  function handleMessage(e) {
    setMessage(e.target.value)
  }
 
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`${process.env.API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, name: name, subject: subject, message: message})
    })
    .then((res) => res.json())
    .then((res) => {
      alert(res.message)
      if (res.success) contactForm.current.reset()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Container ref={contact} fluid="true" id="contact" className={styles.componentContainer}>
      <style type="text/css">
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
      <img className={styles.bgImage} ref={bgImage} src={withPrefix("/img/heroSky.webp")} alt="Sky Background"></img>
      <Container className={styles.contactContainer}>
        <h1 className={styles.header}>Contact</h1>
        <Form className={styles.form} ref={contactForm} onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingEmail" label="Email Address" className={styles.floatingLabel  +" mb-3"}>
            <Form.Control type="email" onChange={handleEmail} placeholder="name@example.com" required={true} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingName" label="Name" className={styles.floatingLabel  +" mb-3"}>
            <Form.Control type="text" onChange={handleName} placeholder="Your Name" required={true} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingSubject" label="Subject" className={styles.floatingLabel + " mb-3"}>
            <Form.Control type="text" onChange={handleSubject} placeholder="Subject" required={true} />
          </FloatingLabel>
          <FloatingLabel conrtrolId="floatingMessage" label="Message" className={styles.floatingLabel  +" mb-3"}>
            <Form.Control as="textarea" onChange={handleMessage} placeholder="Message" style={{height: "100px"}} required={true} />
          </FloatingLabel>
          <Button variant="outline-light" type="submit">Send Message</Button>
        </Form>
        <Container fluid="true" className={styles.social}>
          <a className={styles.linkedin} href="https://www.linkedin.com/in/erikoja/" target="_blank" rel="noopener noreferrer" aria-label="link to linkedin"><i className="fa fa-linkedin"></i></a>
          <a className={styles.github} href="https://github.com/eoja82" target="_blank" rel="noopener noreferrer" aria-label="link to github"><i className="fa fa-github"></i></a>
          <a className={styles.stackOverflow} href="https://stackoverflow.com/users/11444813/eoja?tab=profile" target="_blank" rel="noopener noreferrer" aria-label="link to stack overflow"><i className="fa fa-stack-overflow"></i></a>
        </Container>
      </Container>
      <Container as="footer" className={styles.footer}>
        <p class="copywrite">&copy; 2022 Erik Oja.  All rights reserved.</p>
      </Container>
    </Container>
  )
})

export default Contact