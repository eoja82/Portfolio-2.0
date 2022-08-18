import React, { forwardRef, useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { Flip, gsap, ScrollTrigger } from "gsap/all"
import { portfolio, filterList } from "./data/data"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import LargeHeading from "./lgHeading"
import SubHeading from "./subHeading"


if (typeof window !== undefined) {
  gsap.registerPlugin(Flip, ScrollTrigger)
}

const Projects = forwardRef((props, contact) => {
  const projects = useRef(null),
        project = useRef(null),
        qProjects = gsap.utils.selector(projects),
        filter = useRef(null),
        activeFilter = useRef(null),
        filters = useRef(null),
        qFilter = gsap.utils.selector(filters)

  let resizeId,
      imageColHeight,
      projectColumns,
      projectsContainerHeight,
      activeProjects = portfolio.length

  useEffect(() => {
    // add click event to filters
    qFilter(".col").forEach( filter => {
      filter.addEventListener("click", filterProjects)
    })

    window.addEventListener("resize", resizing)

    setImageColHeight()
    setProjectColumns()
    setProjectsContainerHeight()

    // make sure scrollTriggers are in correct place after images load
    ScrollTrigger.refresh(true)

    // reset projectColumns when done resizing
    function resizing() {
      clearTimeout(resizeId)
      resizeId = setTimeout(doneResizing, 500)
    }

    function doneResizing() {
      setImageColHeight()
      setProjectColumns()
      setProjectsContainerHeight()  
    }

    function setImageColHeight() {
      console.log("window inner width", window.innerWidth)
      const width = window.innerWidth
      if (width > 1399) {
        imageColHeight = 321.433
      } else if (width > 1199) {
        imageColHeight = 278.533
      } else if (width > 991) {
        imageColHeight = 235.633
      } else if (width > 767) {
        imageColHeight = 264.233
      } else if (width > 575) {
        imageColHeight = 392.933
      } else {
        imageColHeight = width / 1.398601399
      }
    }

    function setProjectColumns() {
      const width = window.innerWidth

      if (width > 991) {
        projectColumns = 3
      } else if (width > 575) {
        projectColumns = 2
      } else {
        projectColumns = 1
      }
      console.log("projectColumns", projectColumns)
    }

    function setProjectsContainerHeight() {
      projectsContainerHeight = Math.ceil(activeProjects / projectColumns) * imageColHeight
      projects.current.style.height = `${projectsContainerHeight + 72}px`
      console.log("setting project container height to " + `${projectsContainerHeight + 72}px`)
    }
  }, [])

  // animate activeFilter color and filter projects
  function filterProjects(e) {
    const filterState = Flip.getState(activeFilter.current),
          filterTarget = e.target.tagName === "P" ? e.target.parentElement : e.target,
          projectTargets = qProjects(".col"),
          projectsState = Flip.getState(projectTargets)

    let clicked
    
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
        if (!project.classList.contains("active"))
        activeProjects++
        project.style.display = "block"
        project.classList.add("active")
      } else {
        if (project.classList.contains("active"))
        activeProjects--
        project.style.display = "none"
        project.classList.remove("active")
      }
      console.log("activeProjects", activeProjects)
    })

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
    gsap.fromTo(projects.current, {
      height: `${projects.current.clientHeight}px`
    }, {
      height: `${(Math.ceil(activeProjects / projectColumns) * imageColHeight) + 72}px`,
      duration: 1.2,
      ease: "power1.inOut",
      onComplete: () => ScrollTrigger.refresh(true)
    })
  }

  return (
    <div>
      <style type="text/css">
        {`
          .linkButton {
            border-color: rgb(70, 236, 253);
            color: rgb(70, 236, 253);
          }
          .linkButton:hover {
            border-color: rgb(70, 236, 253);
            background-color: rgb(70, 236, 253);
          }
        `}
      </style>
      <Container fluid="true" id="projects" ref={contact}>
        <Container fluid="true" className={styles.projectsContainer}>
          <div className={styles.titleContainer}>
            <LargeHeading title="Portfolio" textAlign="left" />
            <SubHeading 
              text="Projects" 
              justifyContent="start" 
              flexDirection="row"
              marginRight="2rem"
              color="rgb(70, 236, 253)"
            />
          </div>
          <Container className={styles.projectsAndFilters}>
            <Row className={styles.filters} ref={filters} xs={3} sm={3} md={6} lg={6}>
              {filterList.map( (x, i) => {
                return (
                  <Col className={styles.filterContainer} role="button" key={i} ref={filter}>
                    <p className={styles.filter}>{x}</p>
                    {i === 0 ? (<div className={styles.activeFilter} ref={activeFilter}></div>) : null}
                  </Col>
                )
              })}
            </Row>
            <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={3} className={styles.projects} ref={projects}>
              {portfolio.map( (x, i) => {
                return (
                  <Col className={styles.imageCol + " active imageCol"} key={i} ref={project}>
                    <div className={styles.imageContainer}>
                      <img className={styles.projectImg} src={x.src} alt={x.alt}></img>
                      <div className={styles.overlay}>
                        <h2 className={styles.projectTitle}>{x.alt}</h2>
                        <div className={styles.projectTech}>
                          {x.skills.map( (skill, key) => {
                            return (
                              <p className={styles.skill} key={key}>{skill}</p>
                            )
                          })}
                        </div>
                        <div>
                          <Button variant="outline-*" href={x.view} target="_blank" className={styles.linkButton + " linkButton"}>VIEW</Button>
                          <Button variant="outline-*" href={x.code} target="_blank" className={styles.linkButton + " linkButton"}>CODE</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </Container>
      </Container>
    </div>
  )
})

export default Projects