import React from "react"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"
import * as styles from "../components/styles/footer.module.css"

const Footer = (props) => {
  return (
    <Container fluid="true" as="footer" className={styles.footerContainer} style={props.style}>
      <p className="text-center fw-light text-light">&copy; 2022 Erik Oja.  All rights reserved.</p>
    </Container>
  )
}

Footer.prototypes = {
  style: PropTypes.object
}

export default Footer