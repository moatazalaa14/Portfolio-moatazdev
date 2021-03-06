import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import {useTheme} from "next-themes"
function Sidebar() {
	const {theme,setTheme} =useTheme()
	const HandlingTheme=()=>{
		theme==="light"?setTheme("dark"):setTheme("light")
	}
	return (
		<div>
			<img
				src="https://media-exp1.licdn.com/dms/image/C4E03AQGqyrXKqL0sHw/profile-displayphoto-shrink_800_800/0/1586914805105?e=1619654400&v=beta&t=GO4sCKSZdurWznfT0EiL-IzvS6N1QWHOab_RIvtVOoc"
				alt="user avater"
                className="w-32 h-32 mx-auto rounded-full"
			/>
			<h1 className="my-4 text-3xl font-medium tracking-wider font-kau">
				<span className="text-green">Mu'taz </span>
				Alaa
			</h1>
			<p className="py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 px2">Front-end Developer</p>
			<a href="/images/Moataz Alaa.pdf" className="flex items-center justify-center py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 px2" download="Moataz_alaa">
				
				<GiTie className="w-6 h-6" /> Download Resume
			</a>
			<div className="flex items-center justify-around w-9/12 mx-auto my-5 text-green-500 md-full">
				<a href="https://www.facebook.com/moataz.ala.54/" target="_blank">
					<AiFillFacebook className="w-8 h-8 cursor-pointer" color="#ff6363"/>
				</a>
				<a href="https://github.com/moatazalaa14" target="_blank">
					<AiFillGithub className="w-8 h-8 cursor-pointer" color="#ff6363"/>
				</a>
				<a href="https://www.linkedin.com/in/mu-taz-alaa-4722a7183/" target="_blank">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer" color="#ff6363"/>
				</a>
			</div>
			<div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
				<p className="flex items-center justify-center">
					<span className="mr-2">
						<GoLocation />
					</span>Egypt,Cairo
				</p>
				<a href="email:mutazalaasalah@gmail.com" className="inline-block my-2">mutazalaasalah@gmail.com</a><br/>
				<a href="tel:01128961278" className="inline-block my-2">01128961278</a>
			</div>
			<div>
				<button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none" 
                onClick={()=>window.open('emailto:mutazalaasalah@gmail.com')}
                >Email Me</button>
				<button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none" onClick={HandlingTheme}>{/*theme==="light"?"Dark":"Light"*/}Theme Ui</button>
			</div>
		</div>
	);
}

export default Sidebar;
