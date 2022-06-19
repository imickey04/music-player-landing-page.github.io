import React from 'react'
import CenterMenu from './CenterMenu'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem] hover:cursor-pointer";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu />

        {/* social icons */}
        <div className='flex w-[100%] justify-center mt-14'>
            <div className={SocialStyle}>
                <FacebookIcon />
            </div>
            <div className={SocialStyle}>
                <TwitterIcon />
            </div>
            <div className={SocialStyle}>
                <YouTubeIcon />
            </div>
            <div className={SocialStyle}>
                <LinkedInIcon />
            </div>
        </div>

        {/* details */}
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
            Copyright &copy; Mayank Chanabhatti | 2022 | All Rights Reserved
        </span>
    </div>
  )
}

export default Footer