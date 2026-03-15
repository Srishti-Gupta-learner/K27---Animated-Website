// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { useRef } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Agent from './pages/Agent'
import Project from './pages/Project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

function App() {

  const stairRef = useRef(null)
  useGSAP(function(){

    const tl = gsap.timeline()

    tl.to(stairRef.current,{
      display:'block',
    })
    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.25
      }
    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.25
      }
    })
    tl.to(stairRef.current,{
      display:'none',
    })
     tl.to('.stair',{
      y:'0%',
    })
  })
  return (
    <div className="text-white">

      <div ref={stairRef} className="h-screen w-full  fixed z-20 top-0">
        <div className="h-full w-full flex fixed ">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
      </div>

       <Routes >
           <Route path="/" element={<Home/>} />
           <Route path='/agent' element={<Agent/>} />
           <Route path='/project' element={<Project/>} />
       </Routes>
    </div>
  )
}

export default App
