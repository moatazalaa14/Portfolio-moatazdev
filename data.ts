import {RiComputerFill} from "react-icons/ri"
import { Iservice, Iexperience, Iprojects,Iarticles } from './type';


export const blogs:Iarticles[]=[
    {
        title:"Add Darkmode and Lightmode in your course [Articulate Storyline 360]",
        img:"https://media-exp1.licdn.com/dms/image/C4D12AQGagBQOW1gbHw/article-cover_image-shrink_720_1280/0/1627212774595?e=1646870400&v=beta&t=OtjYbDD5gZxssjbiI3JEnbNwd7cTAyjBgl3GrxJ27Xs",
        url:"/article-1"
    },
    {
    title:"How to design an Accessible Course ? ",
    img:"https://www.datocms-assets.com/7574/1538495467-illulead.svg",
    url:"/article-2"
    }
]

export const services:Iservice[]=[
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
        skillLevel:50
    },
    {
        title:"Adobe Illustrator",
        skillLevel:50
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