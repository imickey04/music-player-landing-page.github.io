import { React, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Feature = ({ icon, title, desc }) => {

  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (

    <VisibilitySensor onChange={(isVisible) => setElementIsVisible(isVisible)}
    // minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">

          {/* icon */}
          <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }} animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4">
              <img src={require(`../images/${icon}.png`)} alt=""  className="w-[3rem]" />
          </motion.div>

          <span className="mt-5">{title} </span>

          <span className="text-[#707070] mt-4">{desc} </span>

          <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer"> Learn more</span>
      </div>
    </VisibilitySensor>
  )
}

export default Feature