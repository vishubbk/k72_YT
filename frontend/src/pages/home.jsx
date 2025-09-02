import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText.jsx'
import HomeBottomText from '../components/home/HomeBottomText.jsx'
import HomeCenterText from '../components/home/HomeCenterText.jsx'
import Navbar from '../components/Navigation/Navbar.jsx'

const Home = () => {
  return (
    <div>
      <div className='absolute top-0'>

      <Navbar />
      </div>
      <div className="text-xl text-white ">
        {/* Background Video */}
        <div className="h-full w-screen bg-gray-600 fixed top-0">
          <Video />
        </div>

        {/* Content */}
        <div className="h-screen w-screen relative flex flex-col p-1 mt-20">
          <HomeHeroText />

          {/* Center Text */}
          <div
            className="
              font-bold lg:-mt-20 text-[1rem] leading-7 
              w-[90%] ml-auto 
              sm:w-[70%] 
              md:w-[50%] 
              lg:w-[30%] 
              xl:w-[20%] 
              
            "
          >
            <HomeCenterText />
          </div>

          <HomeBottomText />
        </div>
      </div>
    </div>
  )
}

export default Home
