import { FunctionComponent } from 'react';
import { Iservice } from '../type';
import {RiComputerFill} from "react-icons/ri"

const ServiceCard:FunctionComponent<{service:Iservice}>=({service:{title,about}})=> {
    return (
        <div className="flex items-center p-2 space-x-4">
            <RiComputerFill className="w-16 h-16" color="#ff6363"/>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default ServiceCard
