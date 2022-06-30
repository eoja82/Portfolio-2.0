import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import * as styles from "./styles/techIcons.module.css"


const TechIcons = (props) => {
  return (
    <Container fluid className={styles.container}>
      <Container>
      <Row className={styles.row}>
        {props.data.map( x => (
          <Col xs={6} sm={4} md={3} lg={2} xl={2} className={styles.col} key={x.title}>
            <div className={styles.wrapper} style={{borderBottom: `5px solid ${x.borderColor}`}}>
              <div className={styles.iconContainer}>
                <div className={styles.iconWrapper}>
                  <img className={styles.icon} src={x.src} alt={x.title}></img>
                </div>
              </div>
              <p className={styles.title + " text-muted text-center"}>{x.title}</p>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </Container>
  )
}

TechIcons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TechIcons