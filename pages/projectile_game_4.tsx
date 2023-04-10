
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
               <title>Projectile-Game Using Javascript - Game based Learning</title>
           </Head>
          <h1 className="text-2xl font-bold text-center" >Projectile-Game Using Javascript - Game based Learning</h1>
          <YouTube videoId="W3LRYau8qoM"  opts={opts}/>
          <h2 className="text-xl font-bold">What is Objective?</h2>
          <p>
          The objective of this project is to create a Projectile Game that allows users to apply their knowledge of simple physics to accurately calculate and hit an enemy with a projectile under the effect of gravity. The user should be able to add the initial velocity and angle at which the gun fires, display the gun with the angle degree, display the enemy, and determine the point of the enemy. The user should also be able to fire the projectile, display the time, horizontal distance, and elevation, and show the moving projectile on the canvas. Additionally, the game should provide feedback to the user on whether they successfully hit the enemy and allow them to reset all data to play again. The game should be intuitive, engaging, and user-friendly, catering to users with a basic understanding of projectile motion under the effect of gravity.          </p>
          
          <h2 className="text-xl font-bold">Functionality</h2>
          <ol className="ml-12">
            <li>1. Add initial Velocity</li>
            <li>2. Add the angle degree which the gun fire from it</li>
            <li>3. Display the gun with the angle degree</li>
            <li>4. Display the enemy and determine the place of point of enemy</li>
            <li>5. Fire the Projectile to try to hit the enemy</li>
            <li>6. Display the time , horizontal distance and elevation</li>
            <li>7. Display moving for Projectile into canvas</li>
            <li>8. Display feedback for user if he hit the enemy successfully</li>
            <li>9. Reset all data to play again</li>
          </ol>
          <h2 className="text-xl font-bold">Tools</h2>
          <ol className="ml-12">
            <li>1. Javascript</li>
          </ol>
          <Link href={'/projects'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default Project_3
 