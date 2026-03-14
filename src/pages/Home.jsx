import React from 'react'
import Video from '../components/home/Video'
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen  absolute inset-0 z-0 bg-red-700'>
      <Video />
     </div>
     <div className="h-screen w-screen relative pb-5 flex flex-col overflow-hidden  justify-between">
      <HomeTop />
      <HomeBottom/>
     </div>
    </div>
  )
}

export default Home
