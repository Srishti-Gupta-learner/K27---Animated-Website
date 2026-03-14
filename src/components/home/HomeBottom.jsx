import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6vw] border-5 pt-5 px-8 pb-0 leading-[6vw] border-white uppercase rounded-full'>Project</Link>
      <Link className='text-[6vw] border-5 pt-5 px-8 pb-0 leading-[6vw] border-white uppercase rounded-full'>Agents</Link>
    </div>
  )
}

export default HomeBottom
