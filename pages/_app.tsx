import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { NextSeo } from 'next-seo';

import {ThemeProvider} from "next-themes"
function MyApp({ Component, pageProps }) {
  
  return <ThemeProvider attribute="class"><div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
     <NextSeo
      title="Moataz Alaa  | Instructional Designe Portfolio"
      description="Welcome to the instructional design portfolio of Moataz Alaa, a professional with extensive experience in designing and developing effective learning experiences. This website showcases a collection of projects that demonstrate Moataz's ability to create engaging, interactive, and impactful instructional materials, such as e-learning courses, training programs, and educational resources. Explore the portfolio to learn more about Moataz's instructional design skills and expertise. Contact Moataz for inquiries or collaborations on your next learning project."
      openGraph={{
        type: 'website',
        images: [
          {
            url: 'https://res.cloudinary.com/djnchdgnz/image/upload/v1648579130/1636801570128-removebg-preview-removebg-preview_rxwncq.png',
            width: 800,
            height: 600,
            alt: 'Moataz-alaa',
          },
          
        ],
      }}
    />
      <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-300 lg:col-span-3 rounded-2xl">
        <Sidebar/>
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-300 lg:col-span-9 rounded-2xl">
        <Navbar />
        <Component {...pageProps} />
      </div>
  </div>
  </ThemeProvider>
  
}

export default MyApp
