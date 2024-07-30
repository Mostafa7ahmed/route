import React from 'react'

export default function Footer() {
  return (
    <>
     <div className='footer'>
      <div className='container mx-auto flex flex-wrap py-5'>
        <div className='text-white text-center w-full md:w-1/3  p-6'>
          <h3 className='text-2xl font-bold'>LOCATION </h3>
          <p className='py-2'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='text-white text-center w-full md:w-1/3    p-6'>
          <h3 className='text-2xl font-bold'>AROUND THE WEB </h3>
          <div className="icons p-2 space-x-1">
           <span className='rounded-3xl p-1 px-2 border-white border'><i class="fa-brands fa-facebook"></i></span>
           <span className='rounded-3xl p-1 px-2 border-white border'><i class="fa-brands fa-twitter"></i></span>
           <span className='rounded-3xl p-1 px-2 border-white border'><i class="fa-brands fa-linkedin"></i></span>
           <span className='rounded-3xl p-1 px-2 border-white border'><i class="fa-brands fa-google"></i></span>
           </div>
        </div>
        <div className='text-white text-center w-full md:w-1/3  p-6'>
          <h3 className='text-2xl font-bold'>ABOUT FREELANCER</h3>
          <p className='py-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
       
        </div>
      </div>
      <div className='endfooter text-center py-3'>
        <p className='py-3 text-white'>Copyright © Your Website 2021</p>

      </div>
     </div>

    
    
    </>
  )
}
