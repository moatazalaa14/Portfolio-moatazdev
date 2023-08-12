
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_8() {
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
        
          <h1 className="text-2xl font-bold text-center" >Part 3: 🚀 Integrating AI to Transform Content into Concise Slides! 😀</h1>
          <YouTube videoId="HU3ysk9EOqI"  opts={opts}/>
          <h2 className="text-xl font-bold"> Imagine the myriad advantages offered by this tool:</h2>
         <p>
        
<ul className="ml-8">
<li className="mt-4">1. Following a discussion with the Subject Matter Expert (SME), instead of the conventional approach of reviewing and then creating slides from the content, you can now simply review the content and ensure the bullet points are refined.</li>

<li className="mt-4">2. The process of manually segmenting content into slides, which often consumed a significant amount of the trainer's time, can now be streamlined by directly inputting the entire content into the tool, which will then intelligently suggest suitable slide divisions.</li>

<p className="mt-4">We are eager to hear your perspective. Do you perceive this tool as an indispensable asset? 🤔 If so, how do you envision integrating it into your educational or training methodologies? On the other hand, if you have reservations, let's also explore possible side effects and strategies to mitigate them.</p>
        
        </ul>
         </p>
         <p><strong>Tools: Articulate Storyline 360, JavaScript, ChatGPT API</strong></p>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_8
 