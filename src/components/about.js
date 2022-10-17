import React from "react"
import Container from "react-bootstrap/Container"
import Footer from "./footer"
import TabHeading from "./tabHeading"
import * as styles from "./styles/about.module.css"


const About = () => {
  return (
    <Container fluid="true" className={styles.aboutContainer} id="about">
      <TabHeading text="About" />
      <Container>
        <div className={styles.about}>
          <p>
            I love to code, solve problems, and "make things work."
          </p>
          <p>
            For the past few years I have been developing web applications using HTML, CSS, JavaScript and modern frameworks and technologies like React, Gatsby and Bootstrap among others. For applications requiring a back end solution I have been utilizing Node / Express or Python / Django.
          </p>
          <p>
            I enjoy learning new languages and technologies and I'm always looking to learn something new to level up my skills or provide a better user experience for applications.
          </p>
        </div>
      </Container>
      <Footer />
    </Container>
  )
}

export default About