"use client";

import customer from "../assets/CustomerFeedback"; // Correct import path
import { StarRounded } from "@mui/icons-material";
import Slider from "react-slick";
import "../app/globals.css";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerFeedBack = () => {
  // Slider settings with responsive design
  const settings = {
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
    arrows: false,
    // dots: true,
  
    
    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1200, // For large screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 728, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-custom-blue flex  flex-col p-8 slider-container md:w-calc-screen-360 ml-[300px]">
      <h3 className="text-[36px] mt-[24px] text-white text-center font-bold">
        Customer Feedbacks
      </h3>
      
      <Slider {...settings}>
        {customer.map((item) => (
          <div
            key={item.id}
            className="bg-white w-[20rem] rounded-2xl flex flex-col items-start my-4 p-8 h-[20rem]   "
          >
            <p className="text-custom-gray text-[16px] italic">
              "{item.comment}"
            </p>
            <div className="flex gap-4 items-center mt-4 ">
              <span
                className="h-[3rem] w-[3rem] flex items-center justify-center text-white font-semibold text-[16px] rounded-full"
                style={{ backgroundColor: item.color }}
              >
                {item.img}
              </span>
              <section>
                <h6 className="text-black mt-[4px] text-[18px] font-semibold">
                  {item.name}
                </h6>
                <p className="text-custom-gray text-[16px]">{item.country}</p>
              </section>
            </div>
            <div className="bg-gray-100 rounded-2xl w-max mt-4 px-4 py-0">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <StarRounded
                    key={index}
                    className="text-[24px] text-yellow-400 my-4"
                  />
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerFeedBack;
