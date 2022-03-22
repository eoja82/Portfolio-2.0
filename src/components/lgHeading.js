import React from "react"
import * as styles from "./styles/lgHeading.module.css"


const LargeHeading = (props) => {
  console.log(props)
  return (
    <div>
      <h2 className={styles.header}>{props.title}</h2>
    </div>
  )
}

export default LargeHeading