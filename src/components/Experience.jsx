import React from 'react'
import Feature from './Feature'

const Experience = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">

        {/* tilted icon */}
        <img className='w-[5rem]' src={require("../images/tild.png")} alt="" />

        {/* heading */}
        <div className="heading mt-7 flex flex-col items-center text-[2rem]">
            <span>Change your vision with daily streaming of your favorite playlist</span>
            <span>
                <strong> Experience the optimality</strong>
            </span>
        </div>

        {/* features */}
        <div className="features flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature icon='Group 2' title='For Live Music' desc='Experience the Best with the live music. ' />
            <Feature icon='music icon' title='For Daily Music' desc='Find your personal favorite. ' />
            <Feature icon='Group 4' title='For Artists' desc='Explore more artists & experience them all. ' />
        </div>
    </div>
  )
}

export default Experience