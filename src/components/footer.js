import React from "react"
import Container from "react-bootstrap/Container"
import * as styles from "../components/styles/footer.module.css"

const Footer = () => {
  return (
    <Container fluid="true" as="footer" className={styles.footerContainer }>
      <p className="text-center fw-light text-light">&copy; 2022 Erik Oja.  All rights reserved.</p>
    </Container>
  )
}

export default Footer