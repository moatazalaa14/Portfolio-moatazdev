import {useState} from "react"
import ProjectCard from "../components/projectCard";
import { projectsInfo } from '../data';

function projects() {

    
    return (
        <div className="px-5 py-2 overflow-scroll scrollbar" style={{height:"70vh"}}>
            <div className="p-4 " >
                <div>
                    <button className="pr-2 focus:outline-none hover:text-green">All</button>
                    <button className="pr-2 focus:outline-none hover:text-green">React</button>
                    <button className="pr-2 focus:outline-none hover:text-green">TailwindCss</button>
                    <button className="pr-2 focus:outline-none hover:text-green">Bootstrap</button>
                    <button className="pr-2 focus:outline-none hover:text-green">Typescript</button>
                </div>
            </div>
        <div className="relative grid grid-cols-12 gap-4 my-3">
            {
                projectsInfo.map((project,index)=>{
                    return(
                        <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
                            <ProjectCard project={project} key={index}/>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default projects
