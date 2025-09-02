import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div>


    <div className="font-[font2] pt-5 text-center">
      {/* First Line */}
      <div className="text-[8vw] uppercase leading-[6vw] m-2 flex items-center justify-center ">
        The spark for
      </div>

      {/* Second Line with Video */}
      <div className="text-[8vw] uppercase leading-[6vw] m-2 flex items-center justify-center gap-4">
        <span>ALL</span>
        <span className="w-[18vw] h-[10vw] overflow-hidden rounded-full object-contain flex items-center justify-center">
          <Video />
        </span>
        <span>THINGS</span>
      </div>

      {/* Third Line */}
      <div className="text-[8vw] uppercase leading-[6vw] m-3 flex items-center justify-center">
        creative
      </div>
    </div>
     </div>
  )
}

export default HomeHeroText
