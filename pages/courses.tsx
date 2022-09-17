
import Link from "next/link"
import Head from 'next/head'
import { playlists } from '../data';

function coursesPage() {
   
    return (
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center overflow-scroll h-screen">
           <Head>
               <title>Courses</title>
           </Head>
       
           { playlists.map(playlist=>{
    
    return (
        <div className="bg-gray-200 mb-2   grid grid-cols-1 rounded-xl shadow-3xl justify-items-center  dark:bg-dark-200 w-80 h-1/2">
            
                <div >
                    <img className="h-64" src={playlist.playlistCover} alt="" />
                </div>
                <div>
                <Link href={playlist.playlistUrl}>
                    <h1 className="cursor-pointer text-center font-bold">{playlist.playlistTitle}</h1>
                </Link>
                </div>
        </div>
    )
           
})}
</div>
    
    )
}

export default coursesPage
 