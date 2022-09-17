import { GetServerSideProps } from "next"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link"
import Head from 'next/head'
import {useState} from "react"

function singleCourse({youtubeData}) {
    const [videoId,setVideoID]=useState("hjEhl8Ec7sU")

    console.log(youtubeData.items)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
      const setId=(id)=>{
        setVideoID(id)
      }
    return (
        
        <div className="grid grid-cols-1 gap-6 p-4 overflow-scroll h-screen">
           <Head>
               <title>Courses - Storyline challenge</title>
           </Head>
            <div>
                <div className="px-5 py-2">
                    <ul>
                    <Carousel responsive={responsive}   centerMode={false} infinite={true} arrows={true}  >
                    {
                        youtubeData.items.map((item,index)=>{
                            return(
                                <li onClick={()=>setId(item.snippet.resourceId.videoId)} className="pt-4 focus:outline-none hover:text-green cursor-pointer active:bg-blue-600 bg-gray-200  dark:bg-dark-200 mb-2 m-4 rounded-xl shadow-3xl  w-3/4	text-center h-16" key={index}>{index} : {item.snippet.title}</li>
                            )
                        })
                    }
                    </Carousel>
                    
                    </ul>
                    
                </div>
                <div className="h-3/4">
                <iframe className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}>
                </iframe>
                </div>
                <Link href={'/courses'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
            </div>
         </div>
    )
}
export const getServerSideProps=async (context:GetServerSideProps)=>{
   
   
      const youtubeRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLtFfoAuUbjEFRAgYtZgVWFYufYP1w3hNe&key=AIzaSyA_DxDLmnOnTA3hCXQExyMh4mx71Q4dDJo`)
      const youtubeData = await youtubeRes.json();
  
    return{
      props:{
        youtubeData,
    }}
  }
export default singleCourse
 