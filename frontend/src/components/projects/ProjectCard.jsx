import React from 'react'

const ProjectCard = ({ image }) => {
  return (
    <>
      <img className='w-full h-full object-cover' src={image} alt="Project" />
      
      <div className='absolute flex opacity-0 group-hover:opacity-100 transition-all justify-center items-center top-0 left-0 bg-black/30 w-full h-full'>
        <h2 className='uppercase text-2xl md:text-4xl font-[font1] border-4 px-6 py-3 text-white border-white rounded-full'>
          View project
        </h2>
      </div>
    
    </>
   
  )
}

export default ProjectCard
