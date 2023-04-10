
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';

function Project_3() {
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
           <Head>
               <title>ChatBot using Watson course</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >ChatBot using Watson course</h1>
          <YouTube videoId="667Ik7H86GM"  opts={opts}/>
          <h2 className="text-xl font-bold">Tools</h2>
          <ol className="ml-12">
            <li>1. Articulate Storyline 360</li>
            <li>2. Adobe Captivate</li>
            <li>3. Javascript</li>
            <li>4. IBM Watson Assistant</li>
            <li>5. QR-Generator</li>
          </ol>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_3
 