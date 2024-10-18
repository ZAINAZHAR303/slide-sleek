import Image from "next/image";
import Found from "../assets/Founder.jpg";
import feature from "../assets/FounderFeatures";
const Founder = () => {
  return (
    <section className="bg-gray-100  p-4 w-full mt-[48px] flex flex-col gap-[10px] md:w-calc-screen-360 md:ml-[300px] lg:flex-row lg:items-center">
      <Image src={Found} alt="founder" className="rounded-[25px] mb-10 lg:w-[300px] lg:h-[400px]" />
      <div>
        <h3 className="text-[40px] mb-[24px] text-black font-bold">Founder & CEO</h3>
        <span className="text-[16px] text-custom-blue ">Zubair Azhar</span>
        <p className="text-custom-gray mt-[40px] mb-[24px] text-[16px]  ">
          Continually utilize 24/365 bandwidth before real-time interfaces grow
          team core competencies with pandemic commerce. Objectively initiate
          pandemic users with deliver bricks clicks meta services for bricks and
          clicks innovation streamline front end aradigms expedite granular
          human capital rather than intuitive testing procedures
        </p>
        <div className="shadow-2xl flex flex-col rounded-2xl gap-10 p-10 bg-white mb-10">
          {feature && feature.length
            ? feature.map((item) => (
                <div className="flex gap-4 ">
                  <span className=" flex items-center justify-center p-4 h-[4rem] w-[4rem] bg-white-300 rounded-full shadow-md shadow-gray-300 inset ">
                    {item.icons}
                  </span>
                  <div>
                    <span className="text-custom-gray ">{item.title}</span>
                    <h6 className="text-black mt-[4px] text-[14px] font-semibold ">
                      {item.desc}
                    </h6>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Founder;
