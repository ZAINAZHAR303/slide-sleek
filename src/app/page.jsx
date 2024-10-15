import Intro from "@/components/Intro";
import MainImg from "@/components/MainImg";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import SideBar from "@/components/SideBar";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col " >
      {/* <SideBar /> */}
      <NavBar />
      <Intro />
      <MainImg />
      <Services />
      
    </div>
  );
}
