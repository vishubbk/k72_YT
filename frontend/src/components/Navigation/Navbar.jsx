import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavContext from '../../context/NavContext';
import { useContext } from 'react';


const Navbar = () => {
  const navGreenRef = useRef(null);
  const {fullScreenNav,setFullScreenNav} = useContext(NavContext)

  return (
    <div className='fixed z-5 flex justify-between w-screen'>
      <Link to={'/'}>
        <div className='left mt-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="107" height="47" viewBox="0 0 103 44">
          <path d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>
      </div>
        </Link>
      

      <button
  onClick={() => {
    setFullScreenNav(true);
    console.log(fullScreenNav);
     
  }}
>

        <div
          className="right bg-black relative group  cursor-pointer
  w-[50vw] h-[7vh]   /* default = mobile ke liye bada */
  sm:w-[40vw] sm:h-[7vh] 
  md:w-[30vw] md:h-[7vh]  
  lg:w-[15vw] lg:h-[7vh]  /* laptop/desktop ke liye chhota */"
          onMouseEnter={() => { navGreenRef.current.style.height = '100%'; }}
          onMouseLeave={() => { navGreenRef.current.style.height = '0%'; }}
        >

          
          {/* White Lines (Default State) */}
          <div className="line">
            <span className="absolute left-[7vw] top-1/2 w-[4vw] h-[2px] bg-white origin-center transition-colors duration-300 group-hover:bg-[#c3fd50]"></span>
            <span className="absolute left-[9vw] top-2/3 w-[2vw] h-[2px] bg-white origin-center transition-colors duration-300 group-hover:bg-[#c3fd50]"></span>
          </div>

          {/* Green Overlay */}
          <div
            ref={navGreenRef}
            className="bg-[#D3FD50] absolute top-0 lg:w-[15vw] lg:h-[7vh] md:w-[30vw] md:h-[7vh]    w-[50vw] h-[7vh] sm:w-[40vw] sm:h-[7vh] transition-all duration-300 overflow-hidden"
          >
            <div className="line">
              <span className="absolute left-[7vw] top-1/2 w-[4vw] h-[2px] bg-black origin-center transition-colors duration-300"></span>
              <span className="absolute left-[9vw] top-2/3 w-[2vw] h-[2px] bg-black origin-center transition-colors duration-300"></span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
