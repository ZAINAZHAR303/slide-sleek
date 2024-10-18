
'use client';

import React, { useState } from 'react'
// import Logo from "../assets/logo-1.svg"
import Logo from "../assets/LOGO.svg"
import {ViewWeek} from "@mui/icons-material"
import Image from "next/image";
import SideBar from "./SideBar";
import justified from "../assets/justified.png"


const NavBar = () => {
  const [sidebar,setSidebar] = useState(false)
  return (
    <nav className="flex justify-between w-full items-center p-4 md:hidden ">
        <Image src={Logo} alt="logo"  priority className='h-[70px] w-[70px] ' />

        <button onClick={()=>sidebar === true ?setSidebar(false): setSidebar(true)} className="w-[5rem] h-[3rem] bg-black rounded-md flex items-center justify-center" >
          <Image src={justified} alt='img'   className='h-[30px] w-[30px] ' />
        </button>
        {
          sidebar && (
            <SideBar close={()=>setSidebar(false)}  />
            
          )
        }
      </nav>
  )
}

export default NavBar
