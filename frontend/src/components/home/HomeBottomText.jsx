import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-8 text-[4.7vw] font-[font2] uppercase mt-auto mb-3 '>
      <Link to='/Works' className='hover:text-amber-300 hover:border-amber-200 transition-all border-4 leading-5 rounded-full overflow-hidden p-3 lg:p-10  w-80 flex justify-center items-center'>WORKS</Link>
      <Link to='/Agency' className='hover:text-[#D3FD50] hover:border-[#D3FD50] transition-all border-4 leading-5 rounded-full overflow-hidden p-3 lg:p-10 w-80 flex justify-center items-center'>AGENCY</Link>
    </div>
  )
}

export default HomeBottomText
