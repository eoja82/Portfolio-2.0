import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import Contact from "../components/contact"
import Development from "../components/development"
import Intro from "../components/intro"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Topnav from "../components/topnav"


if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {  
  const topnav = useRef(null),
        intro = useRef(null),
        projects = useRef(null),
        development = useRef(null),
        contact = useRef(null)

  useEffect(() => {
    const nav = topnav.current,
          container = nav.firstElementChild,
          menu = container.firstElementChild,
          home = container.lastElementChild,
          accent = home.firstElementChild

    console.log(accent)

    ScrollTrigger.create({
      trigger: intro.current,
      start: "top top",
      onEnter: () => {
        darkNav()
        accentColor("red")
      },
      onEnterBack: () => {
        darkNav()
        accentColor("red")
      },
      onLeaveBack: () => {
        transparentNav()
        accentColor("white")
      }
    })

    ScrollTrigger.create({
      trigger: projects.current,
      start: "top top",
      onEnter: () => {
        lightNav()
        accentColor("rgb(70, 236, 253)")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("rgb(70, 236, 253)")
      }
    })

    ScrollTrigger.create({
      trigger: contact.current,
      start: "top-=5px top",
      onEnter: () => {
        darkNav()
        accentColor("red")
      },
      onLeaveBack: () => {
        lightNav()
        accentColor("rgb(70, 236, 253)")
      }
    })

    function transparentNav() {
      gsap.to(nav, {
        backgroundColor: "rgb(25, 25, 25, .01)"
      })
      gsap.to([menu, home], {
        color: "white"
      })
    }

    function darkNav() {
      console.log("dark nav")
      gsap.to(nav, {
        backgroundColor: "rgb(25, 25, 25)"
      })
      gsap.to([menu, home], {
        color: "white"
      })
    }

    function lightNav() {
      console.log("light nav")
      gsap.to(nav, {
        backgroundColor: "white"
      })
      gsap.to([menu, home], {
        color: "rgb(25, 25, 25)"
      })
    }

    function accentColor(color) {
      gsap.to(accent, {
        color: color
      })
    }

  })

  return (
    <Layout>
      <Topnav ref={topnav} />
      <Intro ref={intro} />
      <Projects ref={projects} />
      <Development ref={development} />
      <Contact ref={contact} />
    </Layout>
  )
}