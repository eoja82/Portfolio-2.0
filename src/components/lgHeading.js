import React from "react"
import * as styles from "./styles/lgHeading.module.css"


const LargeHeading = (props) => {
  return (
    <div>
      <h2 className={styles.header} style={{textAlign: props.textAlign}}>{props.title}</h2>
    </div>
  )
}

export default LargeHeading