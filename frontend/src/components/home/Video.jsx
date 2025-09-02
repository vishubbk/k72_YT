import React from 'react'

const Video = () => {
  return (
    <div>
      <div>
        <video className='h-[100vh] w-full object-cover' autoPlay loop muted src="../../../public/video.mp4"></video>
      </div>
    
    </div>
  )
}

export default Video
