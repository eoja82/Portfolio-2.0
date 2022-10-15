import React, { forwardRef, useRef, useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Footer from "./footer"
import TabHeading from "./tabHeading"
import * as styles from "./styles/contact.module.css"


const Contact = forwardRef((props, contactSection) => {
  const contactForm = useRef(null),
        sending = useRef(null),
        emailErrorButton = useRef(null),
        [email, setEmail] = useState(""),
        [name, setName] = useState(""),
        [subject, setSubject] = useState(""),
        [message, setMessage] = useState(""),
        [show, setShow] = useState(false),
        mailToLink = `mailto:erik-oja@outlook.com?subject=${subject}&body=${message}`

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

  function handleModalClose() {
    setShow(false)
  }

  function handleModalOpen() {
    setShow(true)
  }
 
  function handleSubmit(e) {
    e.preventDefault()
    sending.current.style.display = "flex"

    fetch(`${process.env.API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: email, name: name, subject: subject, message: message})
    })
    .then((res) => res.json())
    .then((res) => {
      sending.current.style.display = "none"
      sending.current.style.opacity = "0"
      alert(res.message)
      if (res.success) contactForm.current.reset()
    })
    .catch((err) => {
      console.log(err)
      sending.current.style.display = "none"
      sending.current.style.opacity = "0"
      emailErrorButton.current.click()
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
            border-color: rgb(22, 190, 255);
            box-shadow: 0 0 0 .25rem rgb(22, 190, 255), 0.25);
          }
          .btn.submit:hover {
            border-color: rgb(22, 190, 255);
            background-color: rgb(22, 190, 255);
            /* background-color: rgb(24, 24, 24); */
          }
        `}
      </style>
      <Container fluid="true" className={styles.contactContainer}>
        <TabHeading text="Say Hi!" />
        <Container className={styles.contact}>
          <Container fluid="true" className={styles.social}>
          </Container>
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
            <Container fluid="true" className="d-flex justify-content-between">
              <Button variant="outline-light" type="submit" className="submit">Send Message</Button>
              <div className={styles.socialLinks}>
                <a className={styles.linkedin} href="https://www.linkedin.com/in/erikoja/" target="_blank" rel="noopener noreferrer" aria-label="link to linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className={styles.github} href="https://github.com/eoja82" target="_blank" rel="noopener noreferrer" aria-label="link to github"><FontAwesomeIcon icon={faGithub} /></a>
                <a className={styles.stackOverflow} href="https://stackoverflow.com/users/11444813/eoja?tab=profile" target="_blank" rel="noopener noreferrer" aria-label="link to stack overflow"><FontAwesomeIcon icon={faStackOverflow} /></a>
              </div>
            </Container>
          </Form>
        </Container>
        <Footer />
      </Container>
      {/* sending email display */}
      <Container fluid="true" className={styles.sending} ref={sending}>
        <p className="text-light fs-2"><FontAwesomeIcon icon={faSpinner} className="fa-spin" /> Sending message...</p>
      </Container>
      {/* error sending email modal */}
      <Button variant="outline-light" onClick={handleModalOpen} ref={emailErrorButton} className="d-none"></Button>
      <Modal show={show} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sorry, something went wrong...</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            Please click <a href={mailToLink}>here</a> to send your mesage.
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
})

export default Contact