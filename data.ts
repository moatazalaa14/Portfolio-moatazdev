import {RiComputerFill} from "react-icons/ri"
import { Iservice, Iexperience, Iprojects,Iarticles } from './type';


export const blogs:Iarticles[]=[
    {
        title:"Add Darkmode and Lightmode in your course [Articulate Storyline 360]",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648580041/Dark_mode-amico_2_yjsnkc.png",
        url:"/article-1"
    },
    {
    title:"How to design an Accessible Course ? ",
    img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648580326/Day_of_people_with_disability-amico_1_fxv5hh.png",
    url:"/article-2"
    }
]

export const services:Iservice[]=[
    {
        title:"Articulate Storyline",
        skillLevel:90
    },
    {
        title:"Adobe Captivate",
        skillLevel:60
    },
    {
        title:"Storyboarding",
        skillLevel:70
    },
    {
        title:"Adobe Illustrator",
        skillLevel:50
    },
    {
        title:"Javascript",
        skillLevel:75
        
    },
    {
        title:"HTML",
        skillLevel:90
        
    },
    {
        title:"CSS",
        skillLevel:80
        
    },
    {
        title:"Bootstrap",
        skillLevel:50
        
    },
    {
        title:"Tailwind",
        skillLevel:70
       
    },
    {
        title:"React",
        skillLevel:80
      
    },
    {
        title:"Storybook",
        skillLevel:70
    },
    {
        title:"Jquery",
        skillLevel:40
    },
    {
        title:"Redux",
        skillLevel:30
    },
    {
        title:"Nextjs",
        skillLevel:50
    },
    {
        title:"Typescript",
        skillLevel:40
    },
   
]


export const experiences:Iexperience[]=[
    {
        title:"Learning design Specialist",
        organization:"Variiance",
        responsiblities:["Set learning Objectives for the course" , "Review the script With SME and make sure the script met the learning objectives","Create Interactive as Simulation and games to improve the learning process","Courses Samples : SQL,Cloud computing , Database , Powershell and Web fundamentals"],
    },
    {
        title:"Front-end developer",
        organization:"M3ntorship",
        responsiblities:["Worked with team in one project called pickly that is a platform where we can help each other making the right decisions. Built with React Hooks , Tailwind and storybook for front-end"],
    },
    {
        title:"Head of web committee",
        organization:"IEEE Alazhr'20",
        responsiblities:["Lead A Team of Developers and Train Them","Review Tasks and Give Feedback","Training Them on Teaching and Supporting in Workshops and Events"],
    },
    {
        title:"Front-end developer",
        organization:"IEEE Alazhr'19",
        responsiblities:["Worked with them to make IEEE Al-Azhar official website, built with React and bootstrap for front-end, taking into account the accessibility, semantics, SEO and performance."],
    },
    {
        title:"Front-end developer",
        organization:"Energia Powered'19",
        responsiblities:["Trained with team to learn web technologies to be qualified for working in official website for team by using react"],

    },
  
    
    

]


export const projectsInfo:Iprojects[]=[
    {
        title:"SQL-Course",
        desc:" “SQL” course is designed to help you managing data held in a relational database management system, or for stream processing in a relational data stream management system. You will also learn with a hands-on experience, the basic operations and commands that will help organize your data in the most efficient way.        ",
        live:"https://vol.variiance.com/course/SQL-04363",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648553479/Server-bro_icvd4q.png",
                category:["E-learning","Video-based","Storyboard","Review script","Captivate","create Simulation","Illustrator","Glossary","Upload on Platform"]
    },
    {
        title:"Powershell-Course",
        desc:"This course provides students with the fundamental knowledge and skills to use PowerShell for administering and automating administration of Windows servers and more other products, even in the cloud.",
        live:"https://vol.variiance.com/course/Powershell%20Part.1-05498",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648575203/Binary_code-rafiki_gdnfvi.png",
                category:["E-learning","Video-based","Storyboard","Review script","Upload on Platform"]
    },
    {
        title:"Interactive Problem Sloving course",
        desc:"The course will provide the learner with the main concepts in problem-solving and help him to apply the concepts to solve real-problem.",
        live:"https://360.articulate.com/review/content/1cf8dcb9-e5a3-4461-864f-948e13e9c067/review",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648581956/Problem_solving-amico_1_cjl0hw.png",
                category:["E-learning","Interactive-course","Storyboard","Storyline","Illustrator"]
    },
    {
        title:"Darkmode and Lightmode in your course",
        desc:"The applications as Facebook, Youtube, ...etc when you update any one of them you will find a dark mode feature because the large application try to make the user experiences more easily so they add this feature because of the huge demand for it from users. ",
        live:"https://360.articulate.com/review/content/1cf8dcb9-e5a3-4461-864f-948e13e9c0",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648577589/Dark_mode-amico_gqbp7p.png",
                category:["E-learning","Interactive-course","Storyline","Illustrator"]
    },
    {
        title:"Cloud Computing-Course",
        desc:" The “Introduction to cloud computing” course is designed to help you to know the core concepts of cloud computing.",
        live:"https://vol.variiance.com/course/Introduction%20to%20Cloud%20Computing-04362",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648553738/Cloud_hosting-amico_dby5n6.png",
                category:["E-learning","Video-based","Storyboard","Review script","Upload on Platform"]
    },
    {
        title:"Database-Course",
        desc:"“Introduction to database management system” course is designed to help you to know the core concepts of Database.",
        live:"https://vol.variiance.com/course/Introduction%20to%20database%20management%20system%20-04500",
        github:"",
        img:"https://res.cloudinary.com/djnchdgnz/image/upload/v1648553966/Server_status-bro_nkyidi.png",
                category:["E-learning","Video-based","Storyboard","Review script","Upload on Platform"]
    },
    
    {
        title:"Pickly",
        desc:"pickly.io is a platform where we can help each other making the right decisions.",
        live:"https://pickly-frontend-dev.m3ntorship.net/",
        github:"https://github.com/m3ntorship/pickly-frontend-v1",
        img:"/images/0804-06.jpg",
                category:["React","Tailwind","Storybook"]
    },
    {
        title:"IEEE Al-Azhr",
        desc:"IEEE Al-Azhar is a website that show blogs , services , events and informations about the team",
        live:"https://www.ieee-azhar.com/",
        github:"https://github.com/IEEE-AlAzhar/Official-Website",
        img:"/images/0804-06.jpg",
                category:["React" , "Bootstrap" , "Css Module"]
    },
    {
        title:"Reuseable Atoms",
        desc:"is a repo i created it by using react , tailwind and story book, it consists of reusabe atoms as input , button , checkboxs ,readiobox and progress and collect with them to make molecules.",
        live:"",
        github:"https://github.com/moatazalaa14/React-tailwind-storybook",
        img:"/images/0804-06.jpg",
        category:["React" , "Storybook" , "Tailwind"]
    },
    {
        title:"Mobify-Ecommerce",
        desc:"Mobify-Ecommerce is a website take a fake data from Json file and show the products on screen and allow for user add moble in cart or more and calculate the final reset.",
        live:"",
        github:"https://github.com/moatazalaa14/E-commerce-Front-end",
        img:"/images/0804-06.jpg",
        category:["React","Css Module"]
    },
    {
        title:"My Portfolio",
        desc:"Portoflio is my website that show my information Skills,my experiences and personal data.it is created by usin Nextjs , Tailwind and Typescript",
        live:"https://www.ieee-azhar.com/",
        github:"https://github.com/moatazalaa14/Portfolio_",
        img:"/images/0804-06.jpg",
                category:["Next.js","Typescript" ,"Tailwind"]
    },
]