import { IconType } from "react-icons/lib";

export interface Iservice{
    title:string,
    skillLevel:Number
}

export interface Iexperience{
    title:string,
    organization:string,
    responsiblities:Array<string>
}

export interface Iprojects{
        title:string,
        desc:string,
        live:string,
        github:string,
        img:string,
        category:Category[]
    
}

export interface Iarticles{
    title:string,
    img:string,
    url:string
}

export interface Icourses{
    playlistTitle:string,
    playlistCover:string,
    playlistUrl:string,
    courses:Courses[]
}
export type Category= "React" | "Tailwind" | "Typescript" | "Bootstrap" |"Next.js" | "Storybook" | "Css Module" | "Storyline"|"Video-based"|"create Simulation"|"Glossary"|"Storyboard"|"Review script"|"Working with SME"|"Upload on Platform"|"Captivate"|"Interactive-course"|"Illustrator"|"E-learning"



export type Courses= {id:Number,videoName:string,videoURL:string,courseCover:string}

