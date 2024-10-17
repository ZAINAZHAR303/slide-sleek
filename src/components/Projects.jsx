
import Image from "next/image"
import projects from "../assets/ProjectsData";
const Projects = () => {
  return (
   <section className="bg-gray-100 ">
    <h3 className='text-black text-[40px] my-[24px] text-center font-bold '>Our Recent Projects</h3>
    {
        projects.map((item) => (
            <div className="flex flex-col gap-12 p-10 m-4 bg-white rounded-xl ">
                <Image src={item.picture} className="rounded-xl shadow-xl "  />
                <h1 className="text-[24px] text-black  ">{item.title}</h1>
            </div>
        ))
    }
   </section>
  )
}

export default Projects
