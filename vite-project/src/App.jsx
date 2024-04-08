import React from "react"
import SideNav from "./components/SideNav"
import Main from "./components/Main"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {


  return (
    <div>
    <SideNav />
    <Main />
    <About/>
    <Work/>
    <Projects/>
    <Contact/>
    </div>

  )
}

export default App
