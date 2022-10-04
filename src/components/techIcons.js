import React from "react"
import PropTypes from "prop-types"
import Container from "react-bootstrap/Container"
import * as styles from "./styles/techIcons.module.css"


const TechIcons = (props) => {
  return (
    <Container>
      <ul className={styles.uList}>
        {props.data.map( x => (
          <li className={styles.li + " text-light"} key={x.title}>
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