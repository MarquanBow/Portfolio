import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaFacebookF, FaLinkedIn, FaInstagram } from "react-icons/fa";

const main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1"
        alt=''
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div>
          <h1> Hello, I'm Marquan Bowman</h1>
          <h2>
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast",
                2000,
                "Poet",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebookF className='cursor-pointer' size={20} />
            <FaInstagram  className='cursor-pointer' size={20}/>
            <FaLinkedIn className='cursor-pointer' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
