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
      <Row className={styles.row + " g-4"}>
        {props.data.map( x => (
          <Col xs={4} sm={3} md={3} lg={2} xl={2} xxl={2} key={x.title}>
            <Card style={{
              borderBottom: `5px solid ${x.borderColor}`,
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              borderRadius: "0",
              boxShadow: "-2px 8px 19.95px 1.05px rgba(156, 156, 156, 0.24)",
              wordWrap: "normal"}}>
              <Card.Body className={styles.iconWrapper}>
                <Card.Img className={styles.icon} src={x.src} alt={x.title} style={{width: "auto"}} />
              </Card.Body>
              <Card.Body>
                <Card.Text className="text-muted text-center">{x.title}</Card.Text>
              </Card.Body>
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