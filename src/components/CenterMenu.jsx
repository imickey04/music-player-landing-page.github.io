import React from 'react'

const CenterMenu = () => {

    const listStyle = "mr-[3rem] border-b border-indigo-600 hover:cursor-pointer hover:opacity-[50%]";

  return (
    <div className="menu flex">
        <ul className="flex w-[100%] justify-between">
            <li className={listStyle}>Home</li>
            <li className={listStyle}>About</li>
            <li className={listStyle}>Performer</li>
            <li className={listStyle}>Event Schedule</li>
        </ul>
    </div>
  )
}

export default CenterMenu