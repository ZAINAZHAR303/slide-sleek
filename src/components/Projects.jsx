
import Image from "next/image"
import projects from "../assets/ProjectsData";
const Projects = () => {
  return (
   <section className="bg-gray-100 md:w-calc-screen-360 ml-[300px]  ">
    <h3 className='text-black text-[40px] my-[24px] text-center font-bold '>Our Recent Projects</h3>
    <div className="grid grid-cols-1  lg:grid-cols-2">
    {
        projects.map((item) => (
            <div key={item.id} className="flex flex-col gap-12 p-10 m-4 bg-white rounded-xl scale-100 transition-all duration-300 hover:scale-95 ">
                <Image src={item.picture} className="rounded-xl shadow-xl "  />
                <h1 className="text-[24px] text-black  ">{item.title}</h1>
            </div>
        ))
    }
    </div>
   </section>
  )
}

export default Projects
