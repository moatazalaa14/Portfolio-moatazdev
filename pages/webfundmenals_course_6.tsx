
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
title="Web Fundamentals Video-based Course Sample for Moataz Alaa - Instructional Designer"
      description="This page features a sample of a video-based course on Web Fundamentals, created by Moataz Alaa, an experienced instructional designer. The course covers essential concepts such as HTML, CSS, and JavaScript, as well as more advanced topics like web design principles and web development frameworks. The page provides an overview of the tasks involved in creating the course, from determining the initial learning objectives to uploading the course onto the LMS. Moataz works closely with subject matter experts (SMEs) to determine the final course outlines and ensures that the course content meets the highest standards. The media team creates the video content based on the clear storyboard provided by Moataz, and the videos are reviewed after production to ensure their quality. Assessments are created to ensure that the learning objectives are met, and the course is uploaded onto the LMS. This page is an excellent opportunity to preview Moataz's instructional design work and gain insight into his expertise in web development education. Whether you're a beginner or an advanced user, this course sample is a valuable resource that can help you enhance your knowledge and skills in web development."
    />
           <Head>
               <title>Web Fundmentals Video-based Course</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >Web Fundmentals Video-based Course - Demo</h1>
          <YouTube videoId="JEk9Cf93okM"  opts={opts}/>
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
 