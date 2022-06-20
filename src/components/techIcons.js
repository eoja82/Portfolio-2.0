import React from "react"
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import * as styles from "./styles/techIcons.module.css"


const TechIcons = (props) => {
  return (
    <Container className={styles.container}>
      <Row>
        {props.data.map( x => (
          <Col key={x.title}>
            <Card className={styles.card}>
              <Card.Img variant="top" src={x.icon} className={styles.icon}></Card.Img>
              <Card.Body className="text-muted text-center">{x.title}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

TechIcons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TechIcons