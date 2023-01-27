import React from 'react'
import EducationItem from './EducationItem'

const data = [
    {
        yearE:'2017',
        school:'George Washington Carver High School of Engineering and Science',
        degree:'High School Diploma'
    },
    {
        yearE:'2021',
        school:'Virginia State University',
        degree:'B.S. Computer Science'
    },
    {
        yearE:'Current',
        school:'University of Denver',
        degree:'M.S. Information and Communications Technology, Concentration in Web Design and Development'
    }
]
const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Education</h1>
      {data.map((item, idx) => (
        <EducationItem 
        key={idx} 
        yearE={item.yearE} 
        school={item.school} 
        degree={item.degree} 
        />
      ))}
    </div>
  )
}

export default Education