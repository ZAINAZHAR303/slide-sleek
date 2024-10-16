import { StayPrimaryLandscapeOutlined } from "@mui/icons-material";
import React from "react";
import {ArrowForward} from "@mui/icons-material"
import data from "../assets/ServiceData";
import Image from "next/image"
import ServiceContact from "./ServiceContact";
const Services = () => {
  console.log(data, "here is the data");
  return (
    <div className="w-full bg-custom-blue relative mt-20 flex flex-col  items-center pt-[70px] ">
      <span className="absolute -z-10 rounded-full bg-[#EAEBFD] w-[30rem] h-[30rem] -top-[6rem]  "></span>
      <span className="text-white text-[16px] font-semibold  ">
        What's Going On
      </span>
      <div className="h-[1px] w-[8rem] bg-white"></div>
      <h2 className="text-white mt-[16px] mb-[24px] text-[40px] font-semibold  ">
        My Service Area
      </h2>
      <div className="mt-[60px]">
        {data && data.length ? (
          data.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl my-8 mx-4 ">
              <Image  src={item.image} alt="img" className="w-[100px] cover my-8 " />
              <h6 className="mb-[24px] text-[24px] font-bold ">{item.title}</h6>
              <p className="mb-[32px] text-custom-gray text-[16px] ">
                {item.desc}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className=" flex items-center cursor-pointer text-[16px] font-semibold ">
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
