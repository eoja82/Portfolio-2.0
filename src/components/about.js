import React, { useEffect } from "react"
import gsap from "gsap"
import Container from "react-bootstrap/Container"
import Footer from "./footer"
import TabHeading from "./tabHeading"
import * as styles from "./styles/about.module.css"


const About = () => {

  useEffect(() => {
    gsap.to(gsap.utils.toArray(".paragraph"), {
      opacity: 1,
      y: -25,
      duration: .75,
      delay: .25,
      stagger: {
        each: .1,
        from: "start"
      }
    })
  })

  return (
    <Container fluid="true" className={styles.aboutContainer} id="about">
      <style>
        {`
          .paragraph {
            opacity: 0;
          }
        `}
      </style>
      <TabHeading text="About" />
      <Container>
        <div className={styles.about}>
          <p className="paragraph">
            I love to code, solve problems, and "make things work."
          </p>
          <p className="paragraph">
            For the past few years I have been developing web applications using HTML, CSS, JavaScript and modern frameworks and technologies like React, Gatsby and Bootstrap among others. For applications requiring a back end solution I have been utilizing Node / Express or Python / Django.
          </p>
          <p className="paragraph">
            I enjoy learning new languages and technologies and I'm always looking to learn something new to level up my skills or provide a better user experience for applications.
          </p>
        </div>
      </Container>
      <Footer />
    </Container>
  )
}

export default About