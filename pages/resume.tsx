import { experiences } from '../data';
import { motion } from 'framer-motion';

function resume() {
    return (
        <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2">
            {
                experiences.map(experience=>{
                    
                    return(   
                        <motion.div className="bg-gray-200 rounded-lg dark:bg-dark-200 " key={experience.title}>
                            <h3 className="p-4 font-bold">{experience.title}</h3>
                            <span className="p-4 font-bold">{experience.organization}</span><br />
                            <ul className="pb-4 pl-6 pr-4 list-disc">
                                {
                                    experience.responsiblities.map(respon =>{
                                        return <li key={respon}>{respon}</li>
                                    })
                                }
                            </ul>
                        </motion.div>
                        )
                        }
                )
            }
        </div>
    )
}

export default resume
