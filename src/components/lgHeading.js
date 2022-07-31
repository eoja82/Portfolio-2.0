import React from "react"
import PropTypes from "prop-types"
import * as styles from "./styles/lgHeading.module.css"


const LargeHeading = (props) => {
  return (
    <div>
      <h2 className={styles.header} style={{textAlign: props.textAlign}}>{props.title}</h2>
    </div>
  )
}

LargeHeading.prototypes = {
  textAlign: PropTypes.oneOf(["left", "right"]).isRequired,
  title: PropTypes.string.isRequired
}

export default LargeHeading