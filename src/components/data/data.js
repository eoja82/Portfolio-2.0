const portfolio = [
  {
    src: "./img/projects/mineSweeper.png", 
    alt: "Minesweeper", 
    view: "https://game-minesweeper.glitch.me/",
    code: "https://github.com/eoja82/Mine-Sweeper",
    about: "A full stack app built with Node.js, Express, Mongoose, and MongoDB to store users' scores, and JavaScript for the game logic.",
    skills: ["JavaScript", "Node.js", "Express", "Mongoose", "MongoDB"]
  },
  {
    src: "./img/projects/lakesideDemo.png",
    alt: "Lumber Yard",
    view: "https://eoja82.github.io/lakeside-demo/",
    code: "https://github.com/eoja82/lakeside-demo",
    about: "A demonstration Gatsby/React website.  By simply adding images and updating a JSON file, (1) a new product page will be created, (2) a link to the product page will be added to the navigation, (3) a link in the products pages sidebar navigation will be added, and (4) a card like link to the product page will be added to the home page.",
    skills: ["React", "Gatsby", "GraphQL", "HTML", "CSS"]
  },
  {
    src: "./img/projects/issueTracker.png", 
    alt: "Issue Tracker", 
    view: "https://multi-project-issue-tracker.glitch.me/",
    code: "https://github.com/eoja82/multi-project-issue-tracker",
    about: "Tracks issues for multiple projects.  Issues can be sorted by date and filtered by project, the user that created the issue, the user the issue is asigned to, and whether the issue is open or closed.",
    skills: ["JavaScript", "Node.js", "Express", "Mongoose", "MongoDB", "Mocha/Chai"]
  },
  {
    src: "./img/projects/tetris.png",
    alt: "Tetris",
    view: "https://game-tetris.glitch.me/",
    code: "https://github.com/eoja82/tetris",
    about: "The classic Tetris game built with JavaScript.",
    skills: ["JavaScript", "Python", "Django", "SQLite", "HTML", "CSS"]
  },
  {
    src: "./img/projects/forSale.png",
    alt: "For Sale Template",
    view: "https://eoja82.github.io/For-Sale/",
    code: "https://github.com/eoja82/For-Sale",
    about: "A template website you can use to list your personal items for sale.",
    skills: ["React", "Gatsby", "GraphQL", "HTML", "CSS"]
  },
  {
    src: "./img/projects/portfolio.png",
    alt: "My Portfolio",
    view: "https://www.erikoja.com/",
    code: "https://github.com/eoja82/Portfolio",
    about: "My protfolio website you are viewing.",
    skills: ["JavaScript", "HTML", "CSS", "Animate.css"]
  },
  {
    src: "./img/projects/stockPriceChecker.png", 
    alt: "Stock Price Checker", 
    view: "https://fccstockpricecheck.glitch.me/",
    code: "https://github.com/eoja82/Stock-Price-Checker",
    about: "A full stack app built with JavaScript, Node.js, Mongoose, Express and MongoDB that gets current stock prices from an API.  The app also includes Chai assertion testing and Helmet information security.",
    skills: ["Node.js", "Express", "Mongoose", "MongoDB", "Mocha/Chai", "JavaScript"]
  },
  {
    src: "./img/projects/D3.png", 
    alt: "Data Visualization", 
    view: "https://eoja82.github.io/fcc-Data-Visualization-Projects/",
    code: "https://github.com/eoja82/fcc-Data-Visualization-Projects",
    about: 'Five D3.js data visualization projects.',
    skills: ["D3.js", "JavaScript", "W3.CSS", "HTML", "CSS"]
  },
  {
    src: "./img/projects/pomodoroClock.png", 
    alt: "Pomodoro Clock", 
    view: "https://eoja82.github.io/Pomodoro-Clock",
    code: "https://github.com/eoja82/Pomodoro-Clock",
    about: "Built with React",
    skills: ["React", "HTML", "CSS"]
  },
  {
    src: "./img/projects/calculator.png", 
    alt: "Calculator", 
    view: "https://eoja82.github.io/Calculator",
    code: "https://github.com/eoja82/Calculator",
    about: "Built with React, Bootstrap, HTML, and CSS",
    skills: ["React", "Bootstrap", "HTML", "CSS"]
  },
]

const filterList = [
  "All", "React", "JavaScript",  "Node.js", "Python", "D3.js", 
]

const frontEnd = [
  {title: "HTML", src: "./icons/html.png", borderColor: "#ff5722"},
  {title: "CSS", src: "./icons/css.png", borderColor: "#2196f3"},
  {title: "JavaScript", src: "./icons/javascript.png", borderColor: "#ffdf00"},
  {title: "React", src: "./icons/react.png", borderColor: "#00d8ff"},
  {title: "Gatsby", src: "./icons/gatsby.png", borderColor: "#744c9e"},
  {title: "Bootstrap", src: "./icons/bootstrap2.png", borderColor: "#553b7d"},
  {title: "GSAP", src: "./icons/gsap.jpg", borderColor: "#93d300"},
  {title: "D3.js", src: "./icons/d3.png", borderColor: "#f89c41"},
  {title: "W3.CSS", src: "./icons/w3css.webp", borderColor: "#08a261"}
]

const backEnd = [
  {title: "Node.js", src: "./icons/nodejs.png", borderColor: "#549e44"},
  {title: "Express", src: "./icons/express.png", borderColor: "#000000"},
  {title: "Mongoose", src: "./icons/mongoose.png", borderColor: "#880000"},
  {title: "Python", src: "./icons/python.png", borderColor: "#35709f"},
  {title: "Django", src: "./icons/django.png", borderColor: "#000000"}
]

const database = [
  {title: "MongoDB", src: "./icons/mongodb.svg", borderColor: "#267000"},
  {title: "SQL", src: "./icons/sql.png", borderColor: "#ffd54f"},
  {title: "SQLite", src: "./icons/sqlite.png", borderColor: "#7fc9ef"}
]

const testing = [
  {title: "Mocha", src: "./icons/mocha.png", borderColor: "#8d6748"},
  {title: "Chai", src: "./icons/chai.png", borderColor: "#a1070c"}
]

const versionControl = [
  {title: "Git", src: "./icons/git.png", borderColor: "#de4c36"},
  {title: "GitHub", src: "./icons/github.png", borderColor: "#000000"}
]

export { 
  backEnd, 
  database, 
  filterList, 
  frontEnd, 
  portfolio,
  testing,
  versionControl
}