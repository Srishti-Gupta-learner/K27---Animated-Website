
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agent from './pages/Agent'
import Project from './pages/Project'
import Navbar from "./components/nav/Navbar"
import FullScreenNav from "./components/nav/FullScreenNav"



function App() {

 
  return (
    <div className="text-white">

      {/* <Navbar/>
      <FullScreenNav/> */}
       <Routes >
           <Route path="/" element={<Home/>} />
           <Route path='/agent' element={<Agent/>} />
           <Route path='/project' element={<Project/>} />
       </Routes>
    </div>
  )
}

export default App
