import {useState} from "react"
import ProjectCard from "../components/projectCard";
import { projectsInfo } from '../data';
function projects() {
    const [projectTech,setProjectTech]=useState(projectsInfo)
    const HandlingProjects=(tech:String)=>{
        const proj=[]
		projectsInfo.map(project=>{
            project.category.map(technology=>{
                tech ===technology ?proj.push(project):null
            })
        })
        tech ==="All"?setProjectTech(projectsInfo):setProjectTech(proj)
        
	}
    
    return (
        <div className="px-5 py-2 " >
            <div className="p-4 " >
                <div>
                    <button className="pr-2 focus:outline-none hover:text-green" onClick={()=>HandlingProjects("All")}>All</button>
                    <button className="pr-2 focus:outline-none hover:text-green" onClick={()=>HandlingProjects("React")}>React</button>
                    <button className="pr-2 focus:outline-none hover:text-green" onClick={()=>HandlingProjects("Tailwind")}>Tailwind</button>
                    <button className="pr-2 focus:outline-none hover:text-green" onClick={()=>HandlingProjects("Bootstrap")}>Bootstrap</button>
                    <button className="pr-2 focus:outline-none hover:text-green" onClick={()=>HandlingProjects("Typescript")}>Typescript</button>
                </div>
            </div>
        <div className="relative grid grid-cols-12 gap-4 my-3" >
            {
                projectTech.map(project =>{
                    return(
                        <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4" key={project.title}>
                            <ProjectCard project={project} />
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default projects
