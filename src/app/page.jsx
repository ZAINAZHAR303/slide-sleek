import CustomerFeedBack from "@/components/CustomerFeedBack";
import Founder from "@/components/Founder";
import Intro from "@/components/Intro";
import MainImg from "@/components/MainImg";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SideBar from "@/components/SideBar";
import '../app/globals.css';
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <SideBar /> */}
      <NavBar />
      <Intro />
      <MainImg />
      <Services />
      <Founder />
      <Projects />
      <CustomerFeedBack />
     
    </div>
  );
}
