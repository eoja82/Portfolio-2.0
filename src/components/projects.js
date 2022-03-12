import React, { useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { withPrefix } from "gatsby"
import { Flip, gsap } from "gsap/all"
import { portfolio, filterList } from "./data/data"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"


if (typeof window !== undefined) {
  gsap.registerPlugin(Flip)
}

const Projects = () => {
  const container = useRef(null),
        title = useRef(null),
        projects = useRef(null),
        project = useRef(null),
        titleScroller = useRef(null),
        qProjects = gsap.utils.selector(projects),
        filter = useRef(null),
        activeFilter = useRef(null),
        filters = useRef(null),
        qFilter = gsap.utils.selector(filters)

  let resizeId,
      projectColumns,
      projectsContainerHeight

  useEffect(() => {

    // add click event to filters
    qFilter(".col").forEach( filter => {
      filter.addEventListener("click", filterProjects)
    })

    setProjectColumns()
    
    window.addEventListener("resize", resizing)
    //window.addEventListener("resize", () => console.log(window.innerWidth))

  })

  // animate activeFilter color and filter projects
  function filterProjects(e) {
    const filterState = Flip.getState(activeFilter.current),
          filterTarget = e.target.tagName === "P" ? e.target.parentElement : e.target,
          projectTargets = qProjects(".col"),
          projectsState = Flip.getState(projectTargets),
          containerState = Flip.getState(projects.current)

    let clicked,
      activeProjects = 0
    
    // return if user clicks activeFilter else assign clicked
    if (filterTarget === activeFilter.current) {
      return
    } else {
      clicked = filterTarget.firstElementChild.innerText
    }
    
    // animate .activeFilter background
    filterTarget.appendChild(activeFilter.current)

    Flip.from(filterState, {
      duration: .5,
      ease: "power1.inOut",
      scale: true
    })

    // filter / animate projects in and out
    projectTargets.forEach( (project, i) => {
      if (portfolio[i].skills.includes(clicked) || clicked === "All") {
        project.style.display = "block"
        project.classList.add("active")
        activeProjects++
      } else {
        project.style.display = "none"
        project.classList.remove("active")
        activeProjects--
      }
    })
    //console.log("activeProjects", activeProjects)

    Flip.from(projectsState, {
      duration: 1,
      scale: true,
      ease: "power1.inOut",
      stagger: .08,
      absolute: true,
      nested: true,
      absoluteOnLeave: true,
      onEnter: el => gsap.fromTo(el, {
        opacity: 0,
        scale: 0
      }, {
        opacity: 1,
        scale: 1,
        duration: 1
      }),
      onLeave: el => gsap.to(el, {
        opacity: 0,
        scale: 0,
        duration: 1
      })
    })

    // animate projects container height

    
  }

  // reset projectColumns when done resizing
  function resizing() {
    clearTimeout(resizeId)
    resizeId = setTimeout(doneResizing, 500)
  }

  function doneResizing() {
    setProjectColumns()
  }

  function setProjectColumns() {
    const width = window.innerWidth

    if (width > 1199) {
      projectColumns = 3
    } else if (width > 767) {
      projectColumns = 2
    } else {
      projectColumns = 1
    }
    console.log("projectColumns", projectColumns)
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
              {filterList.map( (x, i) => {
                return (
                  <Col className={styles.filterContainer} role="button" key={i} ref={filter}>
                    <p className={styles.filter}>{x}</p>
                    {i === 0 ? (<div className={styles.activeFilter} ref={activeFilter}></div>) : null}
                  </Col>
                )
              })}
            </Row>
            <Row xs={1} s={1} md={2} lg={2} xl={3} className={styles.projects} ref={projects}>
              {portfolio.map( (x, i) => {
                return (
                  <Col className={styles.imageCol + " active"} key={i} ref={project}>
                    <Image fluid src={x.src} alt={x.alt} className={styles.image} />
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