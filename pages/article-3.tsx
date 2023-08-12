
import Link from "next/link"
import Head from 'next/head'
import { NextSeo } from 'next-seo';
import React, { useState, useEffect } from 'react';


function singleArticle() {
    const [likeCount, setLikeCount] = useState<number>(0);
    const [dislikeCount, setDislikeCount] = useState<number>(0);
    const [hasVoted, setHasVoted] = useState<boolean>(false);
    const [userChoice, setUserChoice] = useState<string>('');

    useEffect(() => {
        // Load like and dislike counts, user's vote status, and user's choice from local storage
        const storedLikeCount = localStorage.getItem('likeCount');
        const storedDislikeCount = localStorage.getItem('dislikeCount');
        const storedHasVoted = localStorage.getItem('hasVoted');
        const storedUserChoice = localStorage.getItem('userChoice');

        if (storedLikeCount && storedDislikeCount && storedHasVoted && storedUserChoice) {
            setLikeCount(Number(storedLikeCount));
            setDislikeCount(Number(storedDislikeCount));
            setHasVoted(storedHasVoted === 'true');
            setUserChoice(storedUserChoice);
        }
    }, []);

    const handleLike = (): void => {
        if (!hasVoted) {
            setLikeCount(prevCount => prevCount + 1);
            setHasVoted(true);
            setUserChoice('Liked');
            localStorage.setItem('hasVoted', 'true');
            localStorage.setItem('userChoice', 'Liked');
        }
    };

    const handleDislike = (): void => {
        if (!hasVoted) {
            setDislikeCount(prevCount => prevCount + 1);
            setHasVoted(true);
            setUserChoice('Disliked');
            localStorage.setItem('hasVoted', 'true');
            localStorage.setItem('userChoice', 'Disliked');
        }
    };

    useEffect(() => {
        // Update the API with the new like and dislike counts
        fetch('https://64d809e75f9bf5b879ce1d4e.mockapi.io/likeCount/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likeCount,
                disLikeCount: dislikeCount,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update like and dislike counts');
                }
            })
            .catch(error => {
                console.error('Error updating like and dislike counts:', error);
            });

        // Save the like and dislike counts, user's vote status, and user's choice to local storage
        localStorage.setItem('likeCount', String(likeCount));
        localStorage.setItem('dislikeCount', String(dislikeCount));
        localStorage.setItem('userChoice', userChoice);
    }, [likeCount, dislikeCount, userChoice]);

    return (
        
        <div className="grid grid-cols-1 gap-6 p-4 overflow-scroll h-screen">
            <NextSeo
                title="Enhancing Your Portfolio with Interactive Work Samples"
                description="Learn how to incorporate interactive content into your portfolio as an instructional designer or eLearning developer. Utilize Node.js, NPM, Vercel, and Google Drive to seamlessly host and embed your creations."
                openGraph={{
                    images: [
                        {
                            url: 'https://res.cloudinary.com/djnchdgnz/image/upload/v1691867747/dm8zdcogh2k4cacpzcly.png', // Replace with the actual image URL
                            width: 1200,
                            height: 630,
                            alt: 'Enhancing Your Portfolio with Interactive Work Samples',
                        },
                    ],
                }}
            />
            <h1 className="text-2xl"><strong>Enhancing Your Portfolio with Interactive Work Samples</strong></h1>
            <iframe src="https://publish-for-6ud59efzc-moatazalaa14.vercel.app/" height="500px" width="100%" title="Iframe Example">
            </iframe>
            <p>
            As instructional designers or eLearning developers, we constantly strive to build our portfolios to showcase our projects. One of the key projects we have is the creation of 'Interactive Content,' which is developed using various authoring tools.
            </p>
            <p>
            However, a persistent challenge we face is, 'How can we effectively incorporate this interactive content into our portfolio?' In this article, we will discuss a method to host our interactive content as an integral component of our portfolio.
            </p>
            <p>
            Firstly, throughout the article, there are several unfamiliar words, but don't worry – we will simplify each concept. We will be covering the following topics:
            </p>
            <ol className="ml-8">
                <li>1. Downloading Node.js and NPM</li>
                <li>2. Installing Vercel from Node.js</li>
                <li>3. Publishing any component from Storyline 360</li>
                <li>4. Deploying the component to Vercel</li>
                <li>5. Embedding the component into Google Drive</li>
            </ol>
            <p>Before we delve into the details, what exactly are Node.js and NPM?</p>
            <h3 className="text-xl text-bold">Node.js and NPM:</h3>
            <p>Think of Node.js like a special toolbox for your computer. It helps your computer understand and do things that make websites and apps work well. NPM is like a store where you can get extra tools to put inside that toolbox. These tools (or packages) help you build your websites and apps faster and easier.</p>
            <h2 className="text-xl"><strong>1. Downloading Node.js</strong></h2>
            <ul className="ml-8">
                <li >- Visit the Node.js Website: Go to the official Node.js website at <a className="underline" href="https://nodejs.org/"><strong>https://nodejs.org/</strong></a>. This is where you'll find the latest version of Node.js.</li>
                <li className="mt-4">-Download Node.js: On the website's homepage, you'll see a big green button that says "LTS" or "Current." The "LTS" version is the Long-Term Support version, which is more stable and recommended for most users. Click the button to download the installer for your Windows system</li>

            </ul>
            <p>After downloading Node.js, to ensure everything is functioning correctly, open the command prompt (CMD).</p>
            <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691875686/pg5fjkkbumqxj64gbexh.png" alt="Open CMD" />
            <p>And Write this command : <span className="bg-yellow-900>">node -v</span> then <span className="bg-yellow-900>">npm -v</span></p>
            <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691876794/lhihlv28ogqfskt8a950.png" alt="Node,NPM versions" />
            <h2 className="text-xl"><strong>2. Installing Vercel</strong></h2>
            <p>
            But first what are Hosting and Vercel?


<h3 className="text-xl text-bold mt-4">Hosting Your Website:</h3>
When you create a website or app, it's like making a cool project. But to show it to others on the internet, you need a place to put it. Hosting is like renting a space on the internet where your project can live.

<h3 className="text-xl text-bold mt-4">What is Vercel?</h3>

Imagine you have a magical cloud that can hold your website and show it to everyone in the world. That's what Vercel is! It's like a special place on the internet where you can put your website so that anyone with a computer or a phone can visit and see what you've made.
Vercel makes it super easy to share your website with friends, family, and even people you've never met. It's like sending out invitations to a big online party, and everyone can join and enjoy what you've created.
<br />
<h3 className="text-xl text-bold mt-4">In Vercel, we will follow two steps:</h3>
First, we need to create an account by visiting the following link: <a href="https://vercel.com/">https://vercel.com/</a>
Second, we will download it using the Command Prompt (CMD) again, this time using a simple command: <span className="bg-yellow-900">npm i -g vercel</span>.

            </p>

            <h2 className="text-xl"><strong>3. Publishing any component from Storyline 360</strong></h2>
            <p className="mt-4">
            Like any other component we publish, the difference is that instead of publishing it as SCORM, we publish it for the web.  </p>

            <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691877272/tuzglj7m9tok9p6s1cve.png" alt="Node,NPM versions" />
            <ul className="ml-8">
                <li>Click the 'Publish' button.</li>
                <li>You need to open the output folder.</li>
            </ul>
            <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691877436/yqmrssaznaat0ldogoqe.png" alt="Publish Successful" />

            <p>You should change <strong>“story.html”</strong> to <strong>“index.html”</strong> </p>
            <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691877561/txavgkejltabhyi7t1h5.png" alt="Output path" />
            <h2 className="text-xl"><strong>4. Deploying the component to Vercel</strong></h2>
        <p>We need to open CMD in our project path through:-</p>
        <ul>
            <li className="ml-4">1. To open CMD in our project path, follow these steps:</li>
            <li className="ml-8">- Open the Command Prompt (CMD).</li>
            <li className="ml-8">- Copy the entire project path as :<span className="bg-yellow-900"> C:\Users\Smart Computer\Documents\My Articulate Projects\Test - Storyline output.</span></li>
        </ul>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691877865/bplph2azkai7rah38pny.png" alt="Output path" />
        <p>Write the following command : <span className="bg-yellow-900">cd path</span></p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878002/zpuarsffqzhyp16yck3d.png" alt="CMD path" />
        <p>Login to vercel cli through the following command: <span className="bg-yellow-900">vercel login</span></p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878002/zpuarsffqzhyp16yck3d.png" alt="Vercel login" />
        <p>Select the method through which you logged in, and enter your email and password for authentication.</p>
        <p>"Deploy to Vercel using the following command: <span className="bg-yellow-900">vercel deploy</span>.</p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878315/fbwb0dflhnw218vmofmn.png" alt="Vercel deploy" />
        <p>You will encounter several questions regarding:</p>
        <ul className="ml-8">
            <li>The project path – if it is correct, press enter.</li>
            <li>The project path – if it is correct, press enter.</li>
            <li>It will attempt to establish a link if you have other projects. If not, type 'n'; if you wish to link, type 'y'.</li>
            <li>Subsequently, the project deployment will commence.</li>
        </ul>
        <p><strong>Hint: To proceed with default options, simply press enter."</strong></p>
        <p>Next, open Vercel to verify that the deployment has been completed:</p>  

        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878557/qgjbl9yr2pegnkfb6r3f.png" alt="Vercel production" />
        <p>Open the card then open the production link</p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878643/gydztdkgaca1yhlza638.png" alt="Production deployment" />
        <p>You've officially unleashed your creation into the internet</p>

        <h2 className="text-xl"><strong>5. Embedding the component into Google Drive</strong></h2>
        <p>It is a very simple step; just copy the link above and insert the embed.</p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878831/easzsa3jekxyfqpgypl8.png" alt="google sites" />
        <p>Then add the link above :</p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691878918/e1uxzy3y5ldcl2wy3yel.png" alt="google sites" />

        <p>Finally we add guys! :D :D </p>
        <img src="https://res.cloudinary.com/djnchdgnz/image/upload/v1691879114/llgy9dahrtki6gvldolj.png" alt="google sites" />

        <h2 className="text-xl"><strong>conclusion</strong></h2>

        <p>In conclusion, this article i tried to provided a clear and concise method for incorporating interactive content into our portfolios as instructional designers or eLearning developers. By leveraging tools like Node.js, NPM, Vercel, and Google Drive, we've gained the ability to seamlessly host, share, and embed our creations. This newfound skill empowers us to present our work more effectively and engage audiences in the dynamic realm of eLearning.</p>


       
        <div className="flex justify-center mt-4 items-center">
                 
                <button onClick={handleLike} disabled={hasVoted} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
                    Like
                </button>
                {userChoice === 'Liked' && <span className="text-green-500 mr-2 ">(You Liked)</span>}
          
              
                <button onClick={handleDislike} disabled={hasVoted} className="bg-red-500 text-white px-4 py-2 rounded">
                    Dislike
                </button>
                {userChoice === 'Disliked' && <span className="text-red-500 mr-2 ml-2">(You Disliked)</span>}
              </div>


              <Link href={'/articles'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>

         </div>
    )
}

export default singleArticle
 