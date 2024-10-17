
'use client';

import React, { useState } from 'react'
// import Logo from "../assets/logo-1.svg"
import Logo from "../assets/LOGO.svg"
import {ViewWeek} from "@mui/icons-material"
import Image from "next/image";
import SideBar from "./SideBar"
const NavBar = () => {
  const [sidebar,setSidebar] = useState(false)
  return (
    <nav className="flex justify-between w-full items-center p-4">
        <Image src={Logo} alt="logo" width={157} height={46} priority className='h-[70px] w-[70px] ' />

        <button onClick={()=>sidebar === true ?setSidebar(false): setSidebar(true)} className="w-[5rem] h-[3rem] bg-black rounded-md " >
          <ViewWeek className="text-white " />
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
