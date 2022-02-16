import React from "react"
import { Helmet } from "react-helmet"
//import { withPrefix } from "gatsby"


const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title></title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" type="image/png" href="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
      </Helmet>

      <div>{children}</div>
      
    </div>
  )
}

export default Layout