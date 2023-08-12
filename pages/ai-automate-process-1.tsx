
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_6() {
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
        
          <h1 className="text-2xl font-bold text-center" >Part.1: 🚀 Integrate AI to evaluate learning objectives! 😀</h1>
          <YouTube videoId="c-vgr1yB2CY"  opts={opts}/>
          <h2 className="text-xl font-bold">What is Problem?</h2>
         <p>
         Introducing our new project: The Learning Objectives Generator Tool! 📚🔍 Powered by Articulate Storyline 360, the ChatGPT API, and JavaScript, this innovative tool is set to revolutionize the way you create and assess your learning objectives. 😀
<br />
<p className="mt-4">
Note: AI Evaluation may not always be 100% accurate, but I believe it can significantly simplify the process of assessing the results. As Instructional designers, we can then evaluate the results from our side. 😀
</p>
<br />
To whom this too will be helpful?
<ul className="ml-8 mt-8" >
<li>1. Instructional Designers: It can save time and effort by generating objectives based on input criteria and assessing the quality of objectives generated.</li>

<li>2. Educators and Trainers: Educators and trainers can use this tool to quickly generate learning objectives that align with their teaching content. It can help ensure that the objectives are clear, measurable, and well-defined.</li>
         
         </ul>
         </p>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_6
 