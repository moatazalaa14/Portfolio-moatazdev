
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_2() {
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
      title="Write a Title and description for the page above to improve SEO"
      description={`      description=" This page showcases Moataz's experience as an instructional designer and e-learning developer. With a background in creating effective and engaging learning experiences, Moataz has worked for various organizations, including Almentor.net, Cloud Security Alliance, and Variiance. This page provides details on Moataz's responsibilities and achievements in each role, including creating learning paths, developing interactive educational content, and evaluating the process to ensure timely completion of courses. Explore this page to learn more about Moataz's skills and expertise in instructional design and e-learning development. Contact Moataz for inquiries or collaborations on your next learning project."      `}

    />
           <Head>
               <title>Color Blind Accessiblity Feature</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >Color Blind Accessiblity Feature</h1>
          <YouTube videoId="mZkNY38BGtU"  opts={opts}/>
          <h2 className="text-xl font-bold">What is Problem?</h2>
          <p>
          However, despite the fact that creating an accessible course will increase the reach and number of people who can potentially access it, companies often overlook the importance of accessibility. This raises the question of why companies ignore this key aspect in eLearning.
          </p>
          <p>
          To understand this better, let us take the example of “color blind accessibility.” This feature requires adding three options for color blind disabilities, such as color blind, green weakness, and red weakness. Each mode requires changing the background, text, and icon colors, which can result in a significant increase in the number of slides. For instance, a 100-slide course with this feature added would become a 400-slide course.
          </p>
          <p>
          The increased workload and complexity in adding accessibility features can be overwhelming for companies, as it can lead to larger file sizes and make editing more difficult. It can also be time-consuming, which is why companies may overlook accessibility in eLearning.
          </p>
          <h2 className="text-xl font-bold">What is Solution?</h2>
          Through using JS code,can we make it easy to adding this feature to all Authoring tools.
          <h2 className="text-xl font-bold">Tools</h2>
          <ol className="ml-12">
            <li>1. Articulate Storyline 360</li>
            <li>2. Javascript</li>
          </ol>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_2
 