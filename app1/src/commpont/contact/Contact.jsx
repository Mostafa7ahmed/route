import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='contact text-center bg-white pt-40 pb-5'>
      <div className='container mx-auto flex justify-center '>
        <div>
      <h1 className='c-blue text-3xl font-bold'>CONATCT SECTION</h1>
      <div className='b-blue w-28 h-1 rounded-sm inline-block'></div>
        <i class="fa-solid fa-star c-blue px-1"></i>
        <div className='b-blue w-28 h-1 rounded-sm inline-block'></div>
        </div>
        </div>
        <div className=' flex flex-col justify-center items-center pt-6 space-y-9'>
          <div className='w-1/2 text-left'>
          {/* <label htmlFor='name' className=' lname'>username</label> */}
          <input type='text' placeholder='username' id='name' className=' w-full block  ' />
          </div>
          <input type='number' placeholder='userage' className=' w-1/2 ' />
          <input type='email' placeholder='useremail' className=' w-1/2' />
          <input type='password' placeholder='userpassword' className=' w-1/2' />
        </div>
        <div className='flex container mx-auto w-1/2 mt-2'>
          <button className=''>send message</button>
          </div>


    </div>
    
    </>
  )
}
