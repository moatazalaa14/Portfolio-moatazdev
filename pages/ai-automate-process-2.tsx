
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_7() {
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
        
          <h1 className="text-2xl font-bold text-center" >Part.2: 🚀 Integrate AI to generate questions based on learning objectives! 😀</h1>
          <YouTube videoId="Mzb--kLVyCU"  opts={opts}/>
          <h2 className="text-xl font-bold">Imagine the benefits of this powerful tool:
<br /></h2>
         <p>
        

<ul className="mt-8 ml-8">
<li className="mt-4">1. Effortless LO and Question Generation: With AI at the helm, crafting learning objectives and their associated questions becomes a breeze. It streamlines the process and ensures alignment between objectives and assessments.</li>

<li className="mt-4">2. Diverse Question Variations: AI brings in the magic of diversity! In a short span, you'll have a plethora of question variations, but remember, it's crucial to review and fine-tune the results to ensure their quality and relevance.</li>

<li className="mt-4">3. Seamless Integration: Exporting the questions to an Excel sheet allows for convenient review and editing. You can then effortlessly input them into Articulate storyline, creating engaging and interactive learning experiences.</li>
</ul>
         </p>
         <p><strong>Tools: Articulate Storyline 360, JavaScript, ChatGPT API</strong></p>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_7
 