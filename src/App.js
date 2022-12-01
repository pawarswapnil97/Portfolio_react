import React from "react"
import Header from "./component/Head/Header"
import About from "./component/About/About"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <div className="back">
      <div className="subback">
      <Header />
      <Home />
      </div>
      </div>
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
