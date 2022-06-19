import React from 'react'
import CenterMenu from "./CenterMenu";
import Logo from "../images/MusicLogo.png";

const Header = () => {

    const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]"

  return (
    <div className='header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]'>

        {/* logo */}
        <img src={Logo} alt="Logo" className='hover:cursor-pointer' />

        {/* side menu */}
        <CenterMenu />

        {/* buttons */}
        <div className="buttons">
            <button className={buttonStyle + ` mr-[35px] hover:bg-[#232A4E] `}>Sign Up</button>
            <button className={buttonStyle + ` hover:bg-[#232A4E] `}>Log In</button>
        </div>
    </div>
  )
}

export default Header;