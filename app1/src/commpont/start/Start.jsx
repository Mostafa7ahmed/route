import React from 'react'
import startimge from'../../assets/avataaars.svg'

export default function Start() {
  return (
    <>
      <div className=' start pt-20'>
      <div className='container mx-auto text-center flex justify-center'>
        <div>
        <img src={startimge} className='w-full'/>
        <h2 className='text-white text-4xl font-bold'>START FRAMWORK</h2>
        <div className='bg-white w-32 h-2 rounded-sm inline-block'></div>
        <i class="fa-solid fa-star text-white px-1"></i>
        <div className='bg-white w-32 h-2 rounded-sm inline-block'></div>
        <p className='text-white block pb-5'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      </div>
    
    
    </>
  )
}
