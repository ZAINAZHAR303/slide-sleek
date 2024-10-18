"use client";

import { StayPrimaryLandscapeOutlined } from "@mui/icons-material";
import React, { useRef, useEffect } from "react";
import { ArrowForward } from "@mui/icons-material";
import data from "../assets/ServiceData";
import Image from "next/image";
import ServiceContact from "./ServiceContact";

const Services = () => {
  return (
    <div className="w-full bg-custom-blue relative mt-20 flex flex-col items-center pt-[70px] md:w-calc-screen-360 md:ml-[300px]">
      <span className="absolute -z-10 rounded-full bg-[#EAEBFD] w-[30rem] h-[30rem] -top-[6rem]"></span>
      <span className="text-white text-[16px] font-semibold">
        What's Going On
      </span>
      <div className="h-[1px] w-[8rem] bg-white"></div>
      <h2 className="text-white mt-[16px] mb-[24px] text-[40px] font-semibold">
        My Service Area
      </h2>
      <div className="mt-[60px] grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data && data.length ? (
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-xl my-8 lg:w-[30rem] max-w-[25rem] transition-all duration-300 hover:scale-105  ">
              <Image
                src={item.image}
                alt="img"
                className="w-[100px] cover my-8"
              />
              <h6 className="mb-[24px] text-[24px] font-bold">{item.title}</h6>
              <p className="mb-[32px] text-custom-gray text-[16px]">
                {item.desc}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className="flex items-center cursor-pointer text-[16px] font-semibold transition-all duration-400 ease-out hover:text-custom-blue">
                Get Started
                <ArrowForward className="ml-2 text-[16px] font-bold" />
              </a>
            </div>
          ))
        ) : (
          <p>no data available</p>
        )}
        <ServiceContact />
      </div>
    </div>
  );
};

export default Services;
