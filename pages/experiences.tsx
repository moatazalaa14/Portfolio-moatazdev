import { experiences } from '../data';
import { motion } from 'framer-motion';
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
function Experiences() {
    
    return (

        <div className="grid grid-cols-1 gap-6 p-4  h-screen overflow-scroll">
            <NextSeo
      title="Moataz Alaa | Instructional Design and E-learning Development Experience"
      description=" This page showcases Moataz's experience as an instructional designer and e-learning developer. With a background in creating effective and engaging learning experiences, Moataz has worked for various organizations, including Almentor.net, Cloud Security Alliance, and Variiance. This page provides details on Moataz's responsibilities and achievements in each role, including creating learning paths, developing interactive educational content, and evaluating the process to ensure timely completion of courses. Explore this page to learn more about Moataz's skills and expertise in instructional design and e-learning development. Contact Moataz for inquiries or collaborations on your next learning project."
    />
            <Head>
                <title>Resume</title>
            </Head>
   

  <VerticalTimeline layout={"1-column-left"} >
            {
                experiences.map(experience=>{
                    
                    return(   
                        
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f5f5f5', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FF6363' }}
                        date={experience.date}
                        dateClassName={"dddd"}
                        
                      

                        iconStyle={{ background: '#FF6363', color: '#fff' }}
                        icon={<img src={experience.src} alt="Variiance logo"  />}
                      >
                        <h3 className="pl-2 font-bold border-l-4	border-green">{experience.title} at {experience.organization}</h3>
                            {/* <span className="p-4 font-bold">{experience.organization}</span><br /> */}
                            <ul className="pb-4 pl-8 pt-4 pr-4 list-disc">
                                {
                                    experience.responsiblities.map(respon =>{
                                        return <li key={respon}>{respon}</li>
                                    })
                                }
                            </ul>
                      </VerticalTimelineElement>
                        )
                        }
                )
            }
    </VerticalTimeline>
        </div>
    )
}

export default Experiences
