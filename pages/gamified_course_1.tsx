
import Link from "next/link"
import Head from 'next/head'
import YouTube from 'react-youtube';
import { NextSeo } from 'next-seo';

function Project_1() {
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
title="Gamified Interactive Course for Learning Java Programming | Octalysis Framework"
      description="Discover how the Octalysis framework was used to create a gamified interactive course for learning problem-solving skills using Java programming language. This page showcases the tools used, challenges faced, and solutions implemented to ensure learners apply Java concepts to solve problems. Check out this page to learn more about gamification elements, including badges, points, and feedback, as well as how Articulate Storyline 360, Javascript, and Adobe Illustrator were used to develop the course. Click here to go back to the projects page."
    />
           <Head>
               <title>Part of My Gamified Course</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >Part of My Gamified Course</h1>
          <YouTube videoId="Tnta2lkqgAk"  opts={opts}/>
          <h2 className="text-xl font-bold">What is Problem?</h2>
          <p >
          For a while now, I have been working on a gamified interactive course that focuses on teaching problem-solving skills using the Java programming language. I faced two main challenges while creating the course:
          <ol className="ml-12">
            <li>1. How to use the appropriate gamification elements and understand why they are effective.</li>
            <li>2. How to ensure that learners are able to apply the Java concepts they are learning to solve problems.</li>
            </ol>
          </p>
          <h2 className="text-xl font-bold">What is Solution?</h2>
          <p>
          To address these challenges, I used the Octalysis framework and incorporated six core drives:
          <ol className="ml-12">

         
<li>1. <b>Development and Accomplishment:</b> To provide a sense of progress and achievement, I incorporated badges, coins, and points for completing certain tasks or solving problems.</li>
<li>2. <b>Social Influence and Relatedness:</b> To foster a sense of community and connection among learners, I allowed them to share badges and points on social media.</li>
<li>3. <b>Scarcity and Impatience:</b> To create a sense of urgency and motivate learners to complete tasks, I used a countdown timer.</li>
<li>4. <b>Empowerment of Creativity and Feedback:</b> To encourage learners to think creatively and receive feedback on their problem-solving skills, I provided feedback after each problem was solved.</li>
<li>5. <b>Unpredictability and Curiosity:</b> To keep learners engaged and motivated, I created a store with different, random gifts.</li>
<li>6. <b>Loss and Avoidance:</b> To motivate learners to avoid losing progress, I used a system of coins that could be lost by not solving a problem correctly.</li>
</ol>
To tackle the second challenge, I found a way to integrate Articulate Storyline with the editor, checked the results, and then printed it.
          </p>
          <h2 className="text-xl font-bold">Tools</h2>
          <ol className="ml-12">
            <li>1. Articulate Storyline 360</li>
            <li>2. Javascript</li>
            <li>3. Adobe Illustrator</li>
          </ol>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_1
 