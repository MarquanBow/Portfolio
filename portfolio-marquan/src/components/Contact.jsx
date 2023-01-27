import React from 'react'
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form action="https://getform.io/f/31fa08da-8cd6-4221-a9c6-845583e26cd1" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
          </div>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' />
          </div>
          <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
            Submit Message
          </button>
      </form>
      <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/QuanCodes">
              <FaTwitter className='cursor-pointer' size={20} />
            </a>
            <a href="https://instagram.com/quansinnerthoughts?igshid=MWI4MTIyMDE=">
              <FaInstagram  className='cursor-pointer' size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/marquan-b-31ba74117/">
              <FaLinkedinIn className='cursor-pointer' size={20} />
            </a>
          
          </div>
    </div>
  )
}

export default Contact