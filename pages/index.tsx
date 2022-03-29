import { GetServerSideProps } from "next"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data";
import Head from 'next/head'
import {motion} from "framer-motion"
const index = ({endPoint}) => {

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>About</title>
      </Head>
      <p className="p-4 font-medium">
      I'm student at Specific Education, I am working as Learning design Specialist at Variiance. interested in Software Development ,<span className="text-green">Instructional design</span>.
I always seek to upgrade my skills and catch up with the accelerating rate of Education and Software Development.       </p>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-400" >
        <h2 className="mb-4 text-xl font-bold tracking-wide">My Skills</h2>
        <div className="grid items-center gap-6 lg:grid-cols-3  px-5 py-2" >
          {
            services.map((service,index)=>{
              // let bar:any=document.getElementsByClassName('kk').offsetWidth
              // console.log(bar)
              const variants={
                initial:{
                  width:"0%"
                },
                animate:{
                  width:`${service.skillLevel}%` ,
                  transition:{
                    duration:0.7
                  }
                }
              }
              return(
                <div>
                {/* <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1" key={index}> */}
                {/* <ServiceCard service={service} /> */}
                <p>{service.title}</p>
                
                <div className="kk w-full bg-gray-200 h-6 mb-6 rounded-full">
                  <motion.div   className="text-white rounded-full bg-gradient-to-r from-green to-blue-400-600 h-6 focus:outline-none pl-4 pb-4" style={{width: `${service.skillLevel}%`}} variants={variants} initial="initial" animate="animate" >{service.skillLevel}%</motion.div>
                </div>
                {/* </div> */}
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}


export default index


export const getServerSideProps=async (context:GetServerSideProps)=>{
  // console.log(process.env.VERCEL_URL)
  // const res =await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data=await res.json()
  return{
    props:{
      endPoint:process.env.VERCEL_URL
  }
}}