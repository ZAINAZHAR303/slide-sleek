
import Image from "next/image";
import Found from "../assets/founder.jpg";
import feature from "../assets/FounderFeatures";
const Founder = () => {
  return (
    <section className="bg-white p-4 w-full mt-[48px] flex flex-col gap-[10px] ">
      <Image src={Found} alt="founder" className="rounded-[25px] mb-10" />
      <h3 className="text-[40px] mb-[24px] text-black">Founder & CEO</h3>
      <span className="text-[16px] text-custom-blue ">Zubair Azhar</span>
      <p className="text-custom-gray mt-[40px] mb-[24px] text-[16px]  ">
        Continually utilize 24/365 bandwidth before real-time interfaces grow
        team core competencies with pandemic commerce. Objectively initiate
        pandemic users with deliver bricks clicks meta services for bricks and
        clicks innovation streamline front end aradigms expedite granular human
        capital rather than intuitive testing procedures
      </p>

      {
        feature && feature.length ? feature.map(()=>(

        )): 
          
      }
    </section>
  );
};

export default Founder;
