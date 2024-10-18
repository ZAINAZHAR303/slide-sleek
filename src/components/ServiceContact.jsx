import React from 'react'
import Phone from "../assets/phone-call.png"
import Image from "next/image"
const ServiceContact = () => {
  return (
    <div className="bg-[rgba(80,68,235,0.55)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[11px] rounded-[20px] m-4 mb-8 border border-[rgba(255,255,255,0.18)] p-12  flex flex-col gap-[4px] items-start transition-all scale-105 duration-300 hover:scale-100 ">
      <Image src={Phone} alt="img" className='h-[90px] w-[90px] mb-4 ' />
      <h5 className='mb-[8px] text-[30px] font-semibold text-white'>+(92) 302 7094479</h5>
      <p className='uppercase text-[14px]  text-white'>Call Me Directly Anytime</p>

    </div>
  )
}

export default ServiceContact
