import Link from "next/link"
import { blogs } from '../data';
import Head from 'next/head'


function articles() {
    return(

    <div className="flex justify-center lg:justify-start">
        <Head>
            <title>Articles</title>
        </Head>
  { blogs.map(blog=>{
    
       return (
           <div className="bg-gray-200 mb-2  grid grid-cols-1 rounded-xl shadow-3xl justify-items-center  dark:bg-dark-200 w-96 h-1/2 lg:ml-8">
               
                   <div >
                       <img className="w-64" src={blog.img} alt="" />
                   </div>
                   <div>
                   <Link href={'/article-1'}>
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
 