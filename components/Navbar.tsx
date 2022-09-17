import { useState, useEffect, FunctionComponent } from 'react';
import Link from "next/link"
import {useRouter} from "next/router"


const NavItem: FunctionComponent<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
 }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <li onClick={()=>setActiveItem(name)}>
            <Link href={route}>
                <a className="hover:text-green sm:text-lg">
                    {name}
                </a>
            </Link>
        </li>
    ) : null
 }




function Navbar() {
    const [activeItem, setActiveItem] = useState("")
    const {pathname} =useRouter()
    useEffect(() => {
        pathname==="/"?setActiveItem("About"):pathname==="/projects"?setActiveItem("Projects"):pathname==="/resume" ?setActiveItem("Resume"):pathname==="/courses"||"/courses-1" ?setActiveItem("Courses"):setActiveItem("Articles")
        
    }, [])
    return (
        <nav>
            <ul className="flex items-center justify-between px-5 py-3 my-3">
                <div className="font-bold border-b-4 text-green border-green md:text-2xl sm:text-xs">
                    <li><Link href={pathname}><a>{activeItem}|</a></Link></li>
                </div>
                <div className="flex space-x-4 md:text-lg sm:pl-px  text-xs">
                    <NavItem name="About" route="/" activeItem={activeItem} setActiveItem={setActiveItem} />
                    <NavItem name="Projects" route="/projects" activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <NavItem name="Resume" route="/resume" activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <NavItem name="Articles" route="/articles" activeItem={activeItem} setActiveItem={setActiveItem}/>
                    <NavItem name="Courses" route="/courses" activeItem={activeItem} setActiveItem={setActiveItem}/>

                </div>

            </ul>
        </nav>
    )
}

export default Navbar
