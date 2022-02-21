import React, { useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { portfolio, filters } from "./data/data"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const Projects = () => {
  const titleContainer = useRef(null)

  useEffect(() => {
    gsap.from(titleContainer.current, {
      opacity: 0,
      y: 250,
      duration: .5,
      scrollTrigger: {
        markers: true,
        trigger: titleContainer.current,
        toggleActions: "play pause resume reverse"
      }
    })
  }, [])

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.transitionContainer}></div>
        <div className={styles.projectsContainer}>
          <div className={styles.titleContainer} ref={titleContainer}>
            <div>
              <h3 className={styles.title}>PROJECTS</h3>
              <div className={styles.underline}></div>
            </div>
          </div>
          <Container>
            <Row xs={1} s={1} md={2} lg={2} xl={3}>
              {portfolio.map( (x, i) => {
                return (
                  <Col className={styles.flipCard} style={{padding: "8px"}} key={i}>
                    <Card className={styles.cardInner + " bg-dark"} style={{border: "none"}}>
                      <div className={styles.cardFront}>
                        <Card.Img src={x.src} alt={x.alt} />
                      </div>
                      <div className={styles.cardBack}>
                        <Card.Body>
                          <Card.Title>{x.alt}</Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Projects