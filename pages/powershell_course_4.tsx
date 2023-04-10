
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_4() {
    const opts = {
        height: '300px',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return (
        
        <div className="grid grid-cols-1 gap-6 p-4 overflow-scroll h-screen">
           <NextSeo
title="PowerShell Video-based Course Project - Demo"
      description="This page showcases a video-based course project on PowerShell, created by an Moataz Alaa instructional designer. The demo provides an overview of the course content, which covers a comprehensive range of topics, starting from the basics and progressing to more advanced concepts. The page outlines the tasks involved in creating the course, from researching the topic to uploading it on the LMS. The instructional designer works closely with subject matter experts (SMEs) to determine the final course outlines, and the script is reviewed to ensure quality content. The media team then creates the video content, and the designer provides a clear storyboard for them. The course is designed to meet specific learning objectives, and assessments are created to ensure that the objectives are met. This page is an excellent opportunity to preview the course project and gain insight into the instructional design process. If you're interested in learning PowerShell, this course project is a valuable resource that can help you enhance your knowledge and skills."
    />
           <Head>
               <title>PowerShell Video-based Course</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >PowerShell Video-based Course - Demo</h1>
          <YouTube videoId="ui1XlRxYR8E"  opts={opts}/>
          <h2 className="text-xl font-bold">My Tasks</h2>
          <ol>
            <li>1. Search about the Topic and determine the initial Learning objectives and outlines.</li>
            <li>2. Kick-off meeting with SME to determine the final Outlines.</li>
            <li>3. Reviewing script.</li>
            <li>4. Writing clear storboard for Media Team.</li>
            <li>5. Review videos after production.</li>
            <li>6. Creating Assessment and make sure it met with Learning objectives.</li>
            <li>7. Upload on the course on LMS.</li>
          </ol>
         
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_4
 