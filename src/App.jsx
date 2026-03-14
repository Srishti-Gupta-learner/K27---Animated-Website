// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agent from './pages/Agent'
import Project from './pages/Project'

function App() {
  return (
    <div className="text-white">
       <Routes >
           <Route path="/" element={<Home/>} />
           <Route path='/agent' element={<Agent/>} />
           <Route path='/project' element={<Project/>} />
       </Routes>
    </div>
  )
}

export default App
