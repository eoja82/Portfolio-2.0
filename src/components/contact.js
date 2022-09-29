import React, { forwardRef, useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import * as styles from "./styles/contact.module.css"


const Contact = forwardRef((props, contactSection) => {
  const contactForm = useRef(null),
        [email, setEmail] = useState(""),
        [name, setName] = useState(""),
        [subject, setSubject] = useState(""),
        [message, setMessage] = useState("")

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
    <Container ref={contactSection} fluid="true" id="contact">
      <style type="text/css">
        {`
          .form-control,
          .form-control:focus {
            background-color: transparent;
            color: rgb(248, 249, 250);
          }
          .form-control:focus {
            border-color: white;
            box-shadow: 0 0 0 .25rem rgba(255, 255, 255, 0.25)
          }
        `}
      </style>
      <Container className={styles.contactContainer}>
        <h1 className={styles.header}>Say Hi!</h1>
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
          <h3 className={styles.socialHeader}>Social</h3>
          <div className={styles.socialLinks}>
            <a className={styles.linkedin} href="https://www.linkedin.com/in/erikoja/" target="_blank" rel="noopener noreferrer" aria-label="link to linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className={styles.github} href="https://github.com/eoja82" target="_blank" rel="noopener noreferrer" aria-label="link to github"><FontAwesomeIcon icon={faGithub} /></a>
            <a className={styles.stackOverflow} href="https://stackoverflow.com/users/11444813/eoja?tab=profile" target="_blank" rel="noopener noreferrer" aria-label="link to stack overflow"><FontAwesomeIcon icon={faStackOverflow} /></a>
          </div>
        </Container>
      </Container>
    </Container>
  )
})

export default Contact