
import { React, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

import DownloadAds from './DownloadAds'

const Hero = () => {

  const [elementVisible, setElementVisible] = useState(false);

  const bgVariant = {
    true : {
      left : '7rem',
    },
    false : {
      left : '19rem',
    }
  };

  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (

    <VisibilitySensor onChange = {(isVisible) => {setElementVisible(isVisible)}} minTopValue = {300}>
      <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">

          {/* left side */}
          <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
              <span className="text-[#707070]">Music Player Landing Page: <strong>Desktop Compatible Only</strong></span>
              <span>Experience The</span>{" "}
              <span>
                  <strong>Best Quality Music </strong>
              </span>
              <span className="text-[15px] text-[#525D6E]">
                  with the amazing features & quality voices,
              <br />
                  Start your free trial now...
            </span>

            {/* Download ads */}
            <span className="text-[13px] my-[1.5rem]">App is available for both! Download now on IOS and Android</span>
            <DownloadAds />
          </div>

          {/* right side */}
          <div className="images relative w-[50%]">
              <motion.img
              transition={{ duration: 1, type: "ease-out" }}
              variants={bgVariant} animate={`${elementVisible}`}
              className='absolute top-[-8rem] left[19rem]' 
              src={require("../images/backgraphics.png")} 
              alt="" />

              <img 
              className="absolute top-[-17rem] h-[34rem] left-[13rem]" 
              src={require("../images/p 1.png")}
               alt="" />

              <motion.img
              variants={musicPlayer}
              animate={`${elementVisible}`}
              transition={{
                duration: 1,
                type: "ease-out",
              }}
              className="absolute left-[235px] top-[62px] w-[175px]"  
              src={require("../images/p 2.png")} 
              alt="" />

              <motion.img 
              variants={rect}
              animate={`${elementVisible}`}
              transition={{
                type: "ease-out",
                duration: 1,
              }}
              className="absolute w-[5rem] left-[13rem] top-[12rem]" 
              src={require("../images/p 3.png")} 
              alt="" />
              
              <motion.img
              variants={heart}
              animate={`${elementVisible}`}
              transition={{
                type: "ease-out",
                duration: 1,
              }}
              className="absolute w-[5rem] left-[12.5rem] top-[12rem]" 
              src={require("../images/p 4.png")} 
              alt="" />
          </div>
      </div>
    </VisibilitySensor>
  )
}

export default Hero