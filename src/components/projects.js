import React, { useEffect, useLayoutEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { withPrefix } from "gatsby"
import { Flip, gsap, ScrollTrigger } from "gsap/all"
import { portfolio, filters } from "./data/data"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


if (typeof window !== undefined) {
  gsap.registerPlugin(Flip, ScrollTrigger)
}

const Projects = () => {
  const container = useRef(null),
        title = useRef(null),
        projects = useRef(null),
        titleScroller = useRef(null),
        card = useRef(null),
        qCard = gsap.utils.selector(projects),
        filter = useRef(null),
        activeFilter = useRef(null),
        filters = useRef(null),
        qFilter = gsap.utils.selector(filters)

  useEffect(() => {

    // animate title on scroll
    gsap.from(titleScroller.current, {
      y: 50,
      opacity: 0,
      duration: .6,
      scrollTrigger: {
        /* markers: true, */
        trigger: title.current,
        start: "top bottom-=100px",
        toggleActions: "play pause resume reverse"
      }
    })
    
    // animate projects on scroll
    qCard(".card").map( card => {
      return gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: .6,
        scrollTrigger: {
          /* markers: true, */
          trigger: card,
          start: "top bottom-=100px",
          toggleActions: "play pause resume reverse"
        }
      })
    })

    // add click event to filters
    qFilter(".col").forEach( filter => {
      filter.addEventListener("click", filterProjects)
    })
    
  })

  function filterProjects(e) {
    const state = Flip.getState(activeFilter.current),
          target = e.target.tagName === "P" ? e.target.parentElement : e.target
      
    target.appendChild(activeFilter.current)

    Flip.from(state, {
      duration: .5,
      ease: "power1.inOut",
      scale: true
    })
    
  }

  return (
    <div>
      <Container fluid="true" className={styles.container} ref={container}style={{backgroundImage: `url(${withPrefix("/img/codeLeft.jpeg")})`}}>
        <Container fliud="true" className={styles.projectsContainer}>
          <div className={styles.titleContainer}>
            <div ref={titleScroller}>
              <h3 className={styles.title} ref={title}>PROJECTS</h3>
              <div className={styles.underline}></div>
            </div>
          </div>
          <Container>
            <Row className={styles.filters} ref={filters} xs={3} s={3} md={6} lg={6}>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>All</p>
                <div className={styles.activeFilter} ref={activeFilter}></div>
              </Col>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>React</p>
              </Col>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>Javascript</p>
              </Col>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>Node.js</p>
              </Col>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>Python</p>
              </Col>
              <Col className={styles.filterContainer} role="button" ref={filter}>
                <p className={styles.filter}>D3.js</p>
              </Col>
            </Row>
            <Row xs={1} s={1} md={2} lg={2} xl={3} className={styles.projects} ref={projects}>
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
        </Container>
      </Container>
    </div>
  )
}

export default Projects