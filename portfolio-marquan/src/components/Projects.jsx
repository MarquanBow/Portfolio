import React from 'react'
import ProjectItem from './ProjectItem'
import bouncingball from '../assets/bouncingball.jpg'
import imagegallery from '../assets/imagegallery.jpg'
import sillystory from '../assets/sillystory.jpg'
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        hdrgjsdvbszl;vsd
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={bouncingball} title='Bouncing Ball' />
        <ProjectItem img={imagegallery} title='Image Gallery' />
        <ProjectItem img={sillystory} title='Silly Story' />
      </div>
    </div>
  )
}

export default Projects