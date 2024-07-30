
import img1 from'../../assets/poert1.png'
import img2 from'../../assets/port2.png'
import img3 from'../../assets/port3.png'
import React, { useState } from 'react';

const Popup = ({ img, handleClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        {        <img src={img} /> }
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  function handleClick(event) {
    console.log(event.target.id); // logs the button element that was clicked
  }




  return (
    <div className="App">
   
     <div className='portfolio pt-20'>
        <div className='container mx-auto text-center'>
           <div>
         <h1 className='c-blue text-4xl font-bold'>PORTFOLIO CPMPONRNT</h1>
           <div className='b-blue w-28 h-1 rounded-sm inline-block'></div>
          <i class="fa-solid fa-star c-blue px-1"></i>
          <div className='b-blue w-28 h-1 rounded-sm inline-block'></div>
           </div>
          <div className='flex flex-wrap'>
            <div className='img1 md:w-1/3 p-10'>
            <div className='relative player'>
              <img src={img1}   className='w-full rounded-md'/>
              <div onClick={handleClick}  id='img1' className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
               </div>
              </div>
            </div>   
             <div className='img2 md:w-1/3 p-10'>
             <div className='relative player'>
              <img src={img2} className='w-full rounded-md'/>
              <div onClick={()=>togglePopup('img2')}  className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
               </div>
             </div>
           </div>   
             <div className='img3 md:w-1/3 p-10'>
             <div className='relative player'>
              <img src={img3} className='w-full rounded-md'/>
             <div onClick={()=>togglePopup(' ')} className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
              </div>
             </div>
            </div>   
            <div className='img1 md:w-1/3 p-10'>
             <div className='relative player'>
              <img src={img1} className='w-full rounded-md'/>
              <div onClick={()=>togglePopup('img1')} className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
               </div>
              </div>
            </div>   
             <div className='img2 md:w-1/3 p-10'>
             <div className='relative player'>
              <img src={img2} className='w-full rounded-md'/>
              <div onClick={()=>togglePopup('img2')} className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
              <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
              </div>
              </div>
            </div>   
            <div className='img3 md:w-1/3 p-10'>
             <div className='relative player'>
                       <img src={img3} className='w-full rounded-md'/>
             <div onClick={()=>togglePopup('img3')} className="layer absolute top-0 bottom-0 right-0 left-0 bg-blue-500 rounded-md  opacity-60 flex justify-center items-center">
             <i class="fa-solid fa-plus text-white text-7xl opacity-100"></i>
               </div>
             </div>
            </div>   
          </div>
         </div>
       </div>
    
      {isOpen && <Popup
         img={img2}
        handleClose={togglePopup}
      />}
    </div>
  );
};

export default App;