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
import SideBarLarge from "@/components/SideBarLarge";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SideBarLarge />
      <NavBar />
      <div className="xl:flex -z-30 ">
      <Intro />
      <MainImg />
      </div>
      <Services />
      <Founder />
      <Projects />
      <CustomerFeedBack />
     
    </div>
  );
}
