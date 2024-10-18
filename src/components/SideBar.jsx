'use client';


import React, { useRef } from "react";
import Image from "next/image";
import Logo from "../assets/LOGO.svg";
const SideBar = ({close}) => {
    const modelRef = useRef();
    const closeModel = (e) =>{
        if(modelRef.current === e.target){
            close();
        }
    }
  return (
    <div ref={modelRef} onClick={closeModel} className=" z-10 fixed overflow-y-scroll scrollbar-none h-[100%] w-full inset-0  " >
      <aside className="p-[40px] w-[300px] h-full bg-[#1f1f1f] top-0 fixed overflow-y-scroll scrollbar-none  ">
        <Image src={Logo} alt="logo" />

        <ul className="mt-10 border-custom-gray rounded-xl border-[1px] ">
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray rounded-t-xl">
            <a href="" className="text-white ">
              Home
            </a>
          </li>
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray">
            <a href="" className="text-white ">
              ABOUT
            </a>
          </li>
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray">
            <a href="" className="text-white ">
              PROJECTS
            </a>
          </li>
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray">
            <a href="" className="text-white ">
              OUR SERVICES
            </a>
          </li>
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray">
            <a href="" className="text-white ">
              TEAM
            </a>
          </li>
          <li className="px-[24px] py-[25px] border-b-[1px] hover:bg-custom-blue border-custom-gray">
            <a href="" className="text-white ">
              FAQ
            </a>
          </li>
          <li className="px-[24px] py-[25px] hover:bg-custom-blue rounded-b-xl ">
            <a href="" className="text-white ">
              CONTACT
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
