import React, { useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { Flip, gsap } from "gsap/all"
import { portfolio, filterList } from "./data/data"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"


if (typeof window !== undefined) {
  gsap.registerPlugin(Flip)
}

const Projects = () => {
  const projectSection = useRef(null),
        projects = useRef(null),
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
    }

    function setProjectsContainerHeight() {
      projectsContainerHeight = Math.ceil(activeProjects / projectColumns) * imageColHeight
      projects.current.style.height = `${projectsContainerHeight + 72}px`
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
      ease: "power1.inOut"
    })
  }

  return (
    <div>
      {<style type="text/css">
        {`
          /* .linkButton {
            border-color: rgb(70, 236, 253);
            color: rgb(70, 236, 253);
          } */
          .linkButton:hover {
            color: rgb(255, 227, 0);
            border-color: rgb(255, 227, 0);
            background-color: transparent;
          }
        `}
      </style>}
      <Container fluid="true" id="projects" className={styles.projectsContainer} ref={projectSection}>
        <Container fluid="true">
          <Container>
            <Row className={styles.filters} ref={filters} xs={3} sm={3} md={6} lg={6}>
              {filterList.map( (x, i) => {
                return (
                  <Col className={styles.filterContainer} role="button" key={i} ref={filter}>
                    <p className={styles.filter + " text-light"}>{x}</p>
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
                              <p className={styles.skill + " text-light"} key={key}>{skill}</p>
                            )
                          })}
                        </div>
                        <div>
                          <Button variant="outline-light" href={x.view} target="_blank" className={styles.linkButton + " linkButton"}>VIEW</Button>
                          <Button variant="outline-light" href={x.code} target="_blank" className={styles.linkButton + " linkButton"}>CODE</Button>
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
}

export default Projects