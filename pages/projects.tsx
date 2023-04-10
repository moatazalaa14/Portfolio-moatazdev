import {useState} from "react"
import ProjectCard from "../components/projectCard";
import { projectPages } from '../data';
import Head from 'next/head'
import Link from "next/link"
import YouTube from 'react-youtube';




function projects() {
    const opts = {
        height: '200',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    
    return (
        <div className="px-5 py-2 overflow-scroll grid gap-8 grid-cols-1 md:grid-cols-2" >
            <Head>
                <title>Projects</title>
            </Head>
           
         {projectPages.map(project=>{
          return(
    
        <div className="bg-gray-200 mb-2   grid grid-cols-1 rounded-xl shadow-3xl justify-items-center  dark:bg-dark-200 w-80 ">
            
                <div className="mt-2 mb-2">
                <YouTube videoId={project.demo}  opts={opts}/>
                </div>
                <div>
                    
                <Link href={project.url}>
                <h1 className="cursor-pointer hover:text-green text-center font-bold mb-2 mt-2">{project.title}</h1>
                </Link>
                </div>
        </div>)
    

            })}
        </div>
    )
}

// export const Timeline:React.FC=()=>{
//     return(
//         <VerticalTimeline>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     date="2011 - present"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

//   >
//     <h3 className="vertical-timeline-element-title">Creative Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2010 - 2011"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
//   >
//     <h3 className="vertical-timeline-element-title">Art Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2008 - 2010"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2006 - 2008"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
   
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="April 2013"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
 
//   >
//     <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//     <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//     <p>
//       Strategy, Social Media
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="November 2012"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
//   >
//     <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//     <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2002 - 2006"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
   
//   >
//     <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//     <p>
//       Creative Direction, Visual Design
//     </p>
//   </VerticalTimelineElement>
//   <VerticalTimelineElement
//     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  
//   />
// </VerticalTimeline>
//     );
// }


export default projects


