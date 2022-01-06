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
export type Category= "React" | "Tailwind" | "Typescript" | "Bootstrap" |"Next.js" | "Storybook" | "Css Module" | "Storyline"