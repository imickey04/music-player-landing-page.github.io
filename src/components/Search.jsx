import { React, useState } from 'react'
import MusicPlayer from './MusicPlayer'
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';

const Search = () => {

    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
        left: "-44rem",
        },
        false: {
        left: "-50rem",
        },
    };
    const reding = {
        true: {
        left: "18rem",
        },
        false: {
        left: "16rem",
        },
    };
    const music = {
        true: {
        left: "2rem",
        },
        false: {
        left: "6rem",
        },
    };

  return (
    <div className='search overflow-hidden relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]'>

        {/* left side */}
        <div className="left flex-1 h-[100%]">
            <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{
                duration: 1,
                type: "ease-out",
            }}
            className='absolute top-[22rem] left-[-47rem]'
            src={require("../images/backgraphics.png")}
            alt="" />

            <motion.img
            className="w-[16rem] top-[26rem] absolute"
            src={require("../images/d1.png")}
            alt="" />{ " " }

            <motion.img
            className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
            src={require("../images/d2.png")}
            alt="" />{ " " }

            <motion.img
            variants={reding}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1.2,
              type: "ease-out",
            }}
            className='w-[9rem] top-[33rem] left-[17rem] absolute'
            src={require("../images/d3.png")}
            alt="" />

            <motion.img
            variants={music}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            className="w-[13rem] top-[50.9rem] left-[7.8rem] absolute"
            src={require("../images/d4.png")}
            alt="" />

        </div>

        {/* right side */}
        <div className="right relative flex items-end flex-col justify-center flex-1 h-[100%] pt-[9rem]">

            {/* search */}
            <div className="searchBar flex justify-start w-[100%]">
                <input className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]" type="text" placeholder='Enter the keyword for URL' />

                {/* Search Icon */}
                <div className="searchIcon hover:cursor-pointer flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                    <img className='w-[1rem]' src={require("../images/search.png")} alt="" />
                </div>
            </div>

             {/* tilted icon */}
             <div className="tild flex justify-start mt-7 items-center w-[100%]">
                <img className="w-[5rem]" src={require("../images/tild.png")} alt="" />
             </div>

             {/* paragraph */}
            <div className="detail flex flex-col mt-5 text-4xl">
                <span>Search Music by</span>
                <span>
                    <strong>Name or Direct URL</strong>
                </span>
                <span className="text-sm mt-3 text-[#4D586A]">
                    Feel amaze with cutting edge features, <br /> also gain some new experience with Equalizer <br /> Just amaze yourself & go for it.
                </span>
            </div>

            {/* Music Player */}
            <VisibilitySensor
            onChange={(isVisible) => setElementIsVisible(isVisible)}
            >
                <MusicPlayer />
            </VisibilitySensor>
        </div>
    </div>
  )
}

export default Search