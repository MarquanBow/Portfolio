import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year:'2021',
    title:'Consultant at CapTech Ventures',
    duration:'Current',
    details:'Using various technical and soft skills I assist businesses in solving their technical problems. I have worked to revamp the seekidsdream website. I also worked with a financial institution to add a new feature to their website. Currently I am working with two non profit organizations, VA Pride and Diversity Richmond, to revamp their website as they merge into one organization.'
  }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem 
        key={idx} 
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details} 
        />
      ))}
    </div>
  )
}

export default Work