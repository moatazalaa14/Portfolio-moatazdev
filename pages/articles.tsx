import Link from "next/link"
import { blogs } from '../data';
import Head from 'next/head'


function articles() {
    return(

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-items-center  ">
        <Head>
            <title>Articles</title>
        </Head>
  { blogs.map(blog=>{
    
       return (
           <div className="bg-gray-200 mb-2   grid grid-cols-1 rounded-xl shadow-3xl justify-items-center  dark:bg-dark-200 w-80 h-1/2">
               
                   <div >
                       <img className="h-64" src={blog.img} alt="" />
                   </div>
                   <div>
                   <Link href={blog.url}>
                       <h1 className="cursor-pointer text-center font-bold">{blog.title}</h1>
                   </Link>
                   </div>
           </div>
       )
   })}
   </div>
    )
}

export default articles
 