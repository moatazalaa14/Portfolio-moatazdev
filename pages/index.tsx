import dynamic from 'next/dynamic';

import { GetServerSideProps } from "next"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data";
import Head from 'next/head'
import {motion} from "framer-motion"
import axios from "axios"
const index = (props) => {

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>About</title>
      </Head>
      <p className="p-4 font-medium">
      I am working as an <span className='text-red-600 font-bold'>Instructional Designer</span> at Almentor.net. interested in Instructional design and software development fields.
I always seek to upgrade my skills and catch up with the accelerating rate of Education and Software Development.
I believe in long-life learning and sharing knowledge. so every time I learn something new or overcome a challenge
using Adobe captivate or storyline, I record videos to share what I have learned. here is <a href="https://www.youtube.com/channel/UCNMt4n7DoBJboTn4OGwDJuQ">my YouTube channel link</a>

<br />
And I volunteered with my friends to create <span className='text-blue-900 font-bold'>"L&D z Gen"</span> which was created to learn, share experiences, develop and support each other. and facilitate knowledge for all those interested in the field by summarizing books, sharing knowledge, and asking and consulting experts.      </p>
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
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';


export const getServerSideProps=async (context:GetServerSideProps)=>{
  console.log(process.env.VERCEL_URL)
  const res =process.env.VERCEL_URL
    // const data=await JSON.parse(JSON.stringify(process.env.VERCEL_URL))
    const youtubeRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLtFfoAuUbjEFRAgYtZgVWFYufYP1w3hNe&key=AIzaSyA_DxDLmnOnTA3hCXQExyMh4mx71Q4dDJo`)
    const youtubeData = await youtubeRes.json();

  return{
    props:{
      // endPoint:data,
      youtubeData:youtubeData
  }}
}