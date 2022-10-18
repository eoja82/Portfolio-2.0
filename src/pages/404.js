import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Nav from "react-bootstrap/Nav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./styles/404.module.css"


const NotFound = () => {

  return (
    <Layout>
      <style type="text/css">
        {`
          .nav.notFoundNav {
            background-color: rgb(1, 1, 1)
          }
        `}
      </style>
      <Nav className="notFoundNav">
        <Nav.Item>
          <Nav.Link href="/" className="text-light fs-2">Er<span className={styles.accent}>i</span>k Oja</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container fluid="true" className={styles.componentContainer}>
        <Image className={styles.backgroundImg} src={withPrefix("/img/laptopLight.jpg")} alt="laptop background image"></Image>
        <div className={styles.messageWrapper}>
          <h1 className="text-light">The page you are looking for does not exist.</h1>
          <h3>
            <a href="/" className={styles.link}><FontAwesomeIcon icon={faAnglesLeft} /> Go Back</a>
          </h3>
        </div>
      </Container>
    </Layout>
  )
}

export default NotFound