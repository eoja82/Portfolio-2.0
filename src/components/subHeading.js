import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "gsap/all"
import PropTypes from "prop-types"
import * as styles from "./styles/subHeading.module.css"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

const SubHeading = (props) => {
  const title = useRef(null),
        titleScroller = useRef(null)

  useEffect(() => {
    gsap.to(titleScroller.current, {
      y: "-100px",
      opacity: 1,
      scrollTrigger: {
        trigger: titleScroller.current,
        start: "top bottom",
        scrub: true,
        markers: true
      }
    })
  })

  return (
    <div 
      ref={titleScroller} 
      className={styles.titleScroller} 
      style={{
        justifyContent: props.justifyContent, 
        flexDirection: props.flexDirection
      }}>
      <div 
        className={styles.line} 
        style={{
          marginLeft: props.marginLeft, 
          marginRight: props.marginRight
        }}></div>
      <h3 className={styles.title} ref={title}>{props.text}</h3>
    </div>
  )
}

SubHeading.propTypes = {
  text: PropTypes.string.isRequired,
  justifyContent: PropTypes.oneOf(["start", "end"]).isRequired,
  flexDirection: PropTypes.oneOf(["row", "row-reverse"]).isRequired,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string
}

export default SubHeading