import './App.css'
import Main from './components/Main'
import Sidenav from './components/SideNav'
import Projects from './components/Projects'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Skills from './components/Skills'  


function App() {
  

  return (
    <div>
      <Sidenav/>
      <Main/>
      <Work/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default App
