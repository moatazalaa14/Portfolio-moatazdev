import { GetServerSideProps } from "next"
import ServiceCard from "../components/ServiceCard"

const index = ({services}) => {
  return (
    <div className="flex flex-col flex-grow">
      <p className="p-4 font-medium">
      Junior Front-end developer, interested in Reactjs. I always seek to upgrade my skills and catch up with the accelerating rate of technology development.
      </p>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-400" >
        <h2 className="mb-4 text-xl font-bold tracking-wide">What I Offer</h2>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          {
            services.map((service,index)=>{
           
              return(
                <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1" key={index}>
                <ServiceCard service={service} />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}


export default index


export const getServerSideProps=async (context:GetServerSideProps)=>{
  const res =await fetch("http://localhost:3000/api/services")
  const data=await res.json()
  return{
    props:{
      services:data.services
  }
}}