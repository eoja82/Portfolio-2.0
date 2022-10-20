import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import gsap from "gsap"
import Container from "react-bootstrap/Container"
import * as styles from "./styles/techIcons.module.css"


const TechIcons = (props) => {
  const list = useRef(null),
        qList = gsap.utils.selector(list)

  useEffect(() => {
    gsap.to(qList(".li"), {
      opacity: 1,
      y: -25,
      duraiton: .75,
      delay: .25,
      stagger: {
        each: .075,
        start: "start"
      }
    })
  })
  
  return (
    <Container>
      <ul className={styles.uList} ref={list}>
        {props.data.map( x => (
          <li className={styles.li + " li text-light"} key={x.title}>
          <img src={x.src} alt={`${x.title} icon`} className={styles.img}></img>
          {x.title}
        </li>
        ))}
      </ul>
    </Container>
  )
}

TechIcons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TechIcons