import React, { useEffect, useLayoutEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { withPrefix } from "gatsby"
import { gsap, ScrollTrigger } from "gsap/all"
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
  const container = useRef(null),
        titleContainer = useRef(null),
        title = useRef(null),
        projects = useRef(null),
        titleScroller = useRef(null),
        card = useRef(null),
        q = gsap.utils.selector(projects)

  useEffect(() => {

    gsap.from(titleScroller.current, {
      y: 50,
      opacity: 0,
      duration: .6,
      scrollTrigger: {
        markers: true,
        trigger: title.current,
        start: "top bottom-=100px",
        toggleActions: "play pause resume reverse"
      }
    })
    
    q(".card").map( card => {
      return gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: .6,
        scrollTrigger: {
          markers: true,
          trigger: card,
          start: "top bottom-=100px",
          toggleActions: "play pause resume reverse"
        }
      })
    })
    
    /* gsap.set(q(".card"), {opacity: 1, y: 0}) */
    /* ******** LOOK HERE !!!!!!!!!!! */
    /* react scopped selector https://codepen.io/GreenSock/pen/rNyZygQ?editors=0110
    https://codepen.io/GreenSock/pen/BaWOZpM?editors=0110
    https://greensock.com/docs/v3/GSAP/UtilityMethods/selector() */
    
  })

  return (
    <div>
      <div className={styles.container} ref={container}style={{backgroundImage: `url(${withPrefix("/img/codeLeft.jpeg")})`}}>
        <div className={styles.transitionContainer}></div>
        <div className={styles.projectsContainer}>
          <div className={styles.titleContainer} ref={titleContainer}>
            <div ref={titleScroller}>
              <h3 className={styles.title} ref={title}>PROJECTS</h3>
              <div className={styles.underline}></div>
            </div>
          </div>
          <Container>
            <Row xs={1} s={1} md={2} lg={2} xl={3} ref={projects}>
              {portfolio.map( (x, i) => {
                return (
                  <Col className={styles.flipCard} style={{padding: "8px"}} key={i}>
                    <Card className={styles.cardInner + " bg-dark"} style={{border: "none"}} ref={card}>
                      <div className={styles.cardFront}>
                        <Card.Img src={withPrefix(x.src)} alt={x.alt} />
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