import React from "react";

const Intro = () => {
  return (
    <section className="relative overflow-hidden pt-[150px] pl-4">
      <span className="absolute -z-10 rounded-full bg-[#EAEBFD] w-[35rem] h-[35rem] -top-60 -left-60 "></span>
      <span className="text-custom-blue text-[18px] font-semibold">
        Hello! I am Zubair Azhar
      </span>
      <h1 className="font-bold text-[46px] mt-[40px] mb-[50px]">
        Microsoft Powerpoint Expert
      </h1>
      <p className="mb-[50px] text-custom-gray">
        Our team of experts possesses polished skills in PowerPoint design that
        will assist you in achieving your desired goals. Please do not hesitate
        to contact us.
      </p>
      <button className="bg-custom-blue rounded-lg px-8 py-4 text-[14px] font-semibold text-white cursor-pointer ">
        DOWNLOAD CV
      </button>
    </section>
  );
};

export default Intro;
