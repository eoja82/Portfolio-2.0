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
        introSection = useRef(null),
        projectSection = useRef(null),
        developmentSection = useRef(null),
        contactSection = useRef(null)
  
  useEffect(() => {
    const nav = topnav.current,
          container = nav.firstElementChild,
          menu = container.firstElementChild,
          home = container.lastElementChild,
          accent = home.firstElementChild,
          frontEnd = developmentSection.current.childNodes[0],
          backEnd = developmentSection.current.childNodes[1],
          database = developmentSection.current.childNodes[2],
          testing = developmentSection.current.childNodes[3],
          versionControl = developmentSection.current.childNodes[4]
    
    // make sure scrollTriggers are in correct place after images load
    ScrollTrigger.refresh(true)

    // create ScrolTriggers for nav animation
    ScrollTrigger.create({
      trigger: introSection.current,
      start: "top top",
      onEnter: () => {
        darkNav()
        accentColor("red")
        //console.log("intro")
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
      trigger: projectSection.current,
      start: "top-=30px top",
      onEnter: () => {
        lightNav()
        accentColor("rgb(70, 236, 253)")
        //console.log("projects")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("rgb(70, 236, 253)")
      }
    })

    ScrollTrigger.create({
      trigger: frontEnd,
      start: "top-=30px top",
      markers: true,
      onEnter: () => {
        lightNav()
        accentColor("#ff5722")
        //console.log("frontEnd")
      },
      //onLeave: () => console.log("leaving frontEnd"),
      onEnterBack: () => {
        lightNav()
        accentColor("#ff5722")
      }
    })

    ScrollTrigger.create({
      trigger: backEnd,
      start: "top top",
      markers: true,
      onEnter: () => {
        lightNav()
        accentColor("#549e44")
        //console.log("backEnd")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("#549e44")
      }
    })

    ScrollTrigger.create({
      trigger: database,
      start: "top top",
      markers: true,
      onEnter: () => {
        lightNav()
        accentColor("#ffd54f")
        //console.log("database")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("#ffd54f")
      }
    })

    ScrollTrigger.create({
      trigger: testing,
      start: "top top",
      markers: true,
      onEnter: () => {
        lightNav()
        accentColor("#8d6748")
        //console.log("testing")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("#8d6748")
      }
    })

    ScrollTrigger.create({
      trigger: versionControl,
      start: "top top",
      markers: true,
      onEnter: () => {
        lightNav()
        accentColor("#de4c36")
        //console.log("versionControl")
      },
      onEnterBack: () => {
        lightNav()
        accentColor("#de4c36")
      }
    })

    ScrollTrigger.create({
      trigger: contactSection.current,
      start: "top-=30px top",
      onEnter: () => {
        darkNav()
        accentColor("red")
        //console.log("contact")
      },
      onLeaveBack: () => {
        lightNav()
        accentColor("#de4c36")
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
      gsap.to(nav, {
        backgroundColor: "rgb(25, 25, 25)"
      })
      gsap.to([menu, home], {
        color: "white"
      })
    }

    function lightNav() {
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
      <Intro ref={introSection} />
      <Projects ref={projectSection} />
      <Development ref={developmentSection} />
      <Contact ref={contactSection} />
    </Layout>
  )
}