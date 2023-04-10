import { experiences } from '../data';
import { motion } from 'framer-motion';
import Head from 'next/head'
import { NextSeo } from 'next-seo';

function resume() {
    
    return (

        <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2 ">
            <NextSeo
      title="Moataz Alaa | Instructional Design and E-learning Development Experience"
      description=" This page showcases Moataz's experience as an instructional designer and e-learning developer. With a background in creating effective and engaging learning experiences, Moataz has worked for various organizations, including Almentor.net, Cloud Security Alliance, and Variiance. This page provides details on Moataz's responsibilities and achievements in each role, including creating learning paths, developing interactive educational content, and evaluating the process to ensure timely completion of courses. Explore this page to learn more about Moataz's skills and expertise in instructional design and e-learning development. Contact Moataz for inquiries or collaborations on your next learning project."
    />
            <Head>
                <title>Resume</title>
            </Head>
            {
                experiences.map(experience=>{
                    
                    return(   
                        <motion.div className="bg-gray-200 rounded-lg dark:bg-dark-200 " key={experience.title}>
                            <h3 className="p-4 font-bold">{experience.title}</h3>
                            <span className="p-4 font-bold">{experience.organization}</span><br />
                            <ul className="pb-4 pl-6 pr-4 list-disc">
                                {
                                    experience.responsiblities.map(respon =>{
                                        return <li key={respon}>{respon}</li>
                                    })
                                }
                            </ul>
                        </motion.div>
                        )
                        }
                )
            }
        </div>
    )
}

export default resume
