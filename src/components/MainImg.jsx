import Image from "next/image";
import hero from "../assets/hero-1.png"
const MainImg = () => {
  return (
    <div className="p-4 pt-10">
      <Image src={hero} alt="hero"   />
    </div>
  )
}

export default MainImg
