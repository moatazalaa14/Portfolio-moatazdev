import { FunctionComponent } from 'react';
import { Iservice } from '../type';

const ServiceCard:FunctionComponent<{service:Iservice}>=({service:{title,skillLevel}})=> {
    return (
        <div className="flex items-center p-2 space-x-4">
           
            <div>
                <h3 className="font-bold">{title}</h3>
                <p>{skillLevel}</p>
            </div>
        </div>
    )
}

export default ServiceCard
