import React from 'react'
import Navbar from '../components/Navigation/Navbar'

const Blogs = () => {
  return (
    <div className='font-[font1]'>
      {/* Navbar */}
      <div className='mx-4 absolute top-0 left-0 right-0'>
        <Navbar />
      </div>

      {/* Main Container */}
      <div className='mt-40 relative '>
        {/* Heading */}
        <div className='w-60 flex justify-end'>
          <h1 className='text-xl font-bold text-gray-800 mt-[30px]'>
            • &nbsp; Blog
          </h1>
        </div>

        {/* Full Width Line */}
        <div className='w-[97%] mx-auto mt-[35vh] h-[2px] bg-black rounded mb-10'></div>

        {/* Images-main */}
      <div className="flex flex-col md:flex-row gap-6 w-[97%] mx-auto mb-[59px]">
  {/* Image-1 */}
  <div className="flex-1 font-[font2]">
    <img
      className="w-full object-cover h-120 rounded-[5vw]"
      src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
      alt="Blog 1"
    />
    <h2 className="mt-3 text-4xl font-semibold text-gray-800">
     Conseil & relation client: un duo qui ne se briefe pas, qui se construit
    </h2>
  </div>

  {/* Image-2 */}
  <div className="flex-1">
    <img
      className="w-full h-120 object-cover rounded-[5vw]"
      src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png"
      alt="Blog 2"
    />
    <h2 className="mt-3 font-semibold text-gray-800 text-4xl">
      Conseil & relation client: un duo qui ne se briefe pas, qui se construit
    </h2>
  </div>
</div>

      </div>
    </div>
  )
}

export default Blogs
