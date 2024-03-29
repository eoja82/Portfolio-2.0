import React, { useEffect, useRef } from "react"
import * as styles from "./styles/projects.module.css"
import { Flip, gsap } from "gsap/all"
import { portfolio, filterList } from "./data/data"
import Footer from "./footer"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import TabHeading from "./tabHeading"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"


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
        qFilter = gsap.utils.selector(filters),
        resizeIdRef = useRef(),
        imageColHeightRef = useRef(),
        projectColumnsRef = useRef(),
        projectsContainerHeightRef = useRef(),
        activeProjectsRef = useRef(portfolio.length)

  useEffect(() => {

    gsap.to(qFilter(".col"), {
      opacity: 1,
      y: -25,
      duration: .75,
      stagger: {
        each: .075,
        from: "start"
      }
    })
    gsap.to(qProjects(".col"), {
      opacity: 1,
      y: -25,
      duration: .75,
      stagger: {
        each: .15,
        from: "start"
      }
    })
  })

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
      clearTimeout(resizeIdRef.current)
      resizeIdRef.current = setTimeout(doneResizing, 500)
    }

    function doneResizing() {
      setImageColHeight()
      setProjectColumns()
      setProjectsContainerHeight()  
    }

    function setImageColHeight() {
      const width = window.innerWidth

      if (width > 1399) {
        imageColHeightRef.current = 321.433
      } else if (width > 1199) {
        imageColHeightRef.current = 278.533
      } else if (width > 991) {
        imageColHeightRef.current = 235.633
      } else if (width > 767) {
        imageColHeightRef.current = 264.233
      } else if (width > 575) {
        imageColHeightRef.current = 392.933
      } else {
        imageColHeightRef.current = width / 1.398601399
      }
    }

    function setProjectColumns() {
      const width = window.innerWidth

      if (width > 991) {
        projectColumnsRef.current = 3
      } else if (width > 575) {
        projectColumnsRef.current = 2
      } else {
        projectColumnsRef.current = 1
      }
    }

    function setProjectsContainerHeight() {
      projectsContainerHeightRef.current = Math.ceil(activeProjectsRef.current / projectColumnsRef.current) * imageColHeightRef.current
      projects.current.style.height = `${projectsContainerHeightRef.current + 72}px`
    }

    // cleanup
    return () => window.removeEventListener("resize", resizing)
  })

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
        activeProjectsRef.current = activeProjectsRef.current + 1
        project.style.display = "block"
        project.classList.add("active")
      } else {
        if (project.classList.contains("active"))
        activeProjectsRef.current = activeProjectsRef.current - 1
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
      height: `${(Math.ceil(activeProjectsRef.current / projectColumnsRef.current) * imageColHeightRef.current) + 72}px`,
      duration: 1.2,
      ease: "power1.inOut"
    })
  }

  return (
    <Container fluid="true" id="projects" className={styles.componentContainer}>
      <style type="text/css">
        {`
          .btn.linkButton {
            color: rgb(22, 190, 255);
          }
          .btn.linkButton:hover {
            color: rgb(22, 190, 255);
            text-decoration: underline;
          }
        `}
      </style>
      <TabHeading text="Portfolio" />
      <Container fluid="true" ref={projectSection}>
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
            <Container fluid="true" className={styles.projectsWrapper}>
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
                            <Button variant="outline-*" size="lg" href={x.view} target="_blank" className="linkButton">View<FontAwesomeIcon icon={faAngleRight} className={styles.angleRight + " ps-1"} /></Button>
                            <Button variant="outline-*" size="lg" href={x.code} target="_blank" className="linkButton">Code<FontAwesomeIcon icon={faAngleRight} className={styles.angleRight + " ps-1"} /></Button>
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
      </Container>
      <Footer />
    </Container>
  )
}

export default Projects