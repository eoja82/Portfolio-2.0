import React from "react"
import { Helmet } from "react-helmet"
import Container from "react-bootstrap/Container"
// this imports color varaibles
import * as styles from "./styles/layout.module.css"


const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:image" content="https://www.erikoja.com/img/projects/portfolio2.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="268"></meta>
        <title>Erik Oja - Web Developer Portfolio</title>
        <meta name="description" content="I'm a full stack developer that loves to learn.  With experience in a variety of languages, technologies, and databases my mission is to build intuitive and responsive web applications.  View some of my projects." />
        <meta name="keywords" content="Erik Oja, web, developer, software, JavaScript, React, Gatsby, HTML, CSS, Python, Django, Bootsrtap, hire, Minnesota, work" />
        <link rel="icon" type="image/png" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Helmet>

      <Container fluid="true">
        {children}
      </Container>
      
    </div>
  )
}

export default Layout