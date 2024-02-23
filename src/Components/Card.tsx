import { motion } from "framer-motion"
import { getColourForTags } from "../helper/helper"

const Card = (props: any) => {

    const getCoordinatedColor = getColourForTags();

  return (
    <>
    <div data-before={props.id || '-1'} data-col={props.status} className='m-2'></div>
    <motion.div
       layout
       layoutId={props.id}

    draggable="true"
    onDragStart={(e) => props.handleDragStart(e,{ props})}
    className='w-full hover:cursor-move active:cursor-grabbing focus:cursor-grabbing p-2 bg-white rounded-md shadow-sm flex flex-col justify-start items-start '>
        <div className={`px-[1px] bg-${getCoordinatedColor(props.team)}  font-normal text-[0.4rem] rounded-sm`}>{props.team.toUpperCase()}</div>
        <div className='text-[0.6rem] mt-1 text-gray-500'>{props.title}</div>
        <div className='flex w-full mt-3 justify-between items-center'>
            <div className='text-[0.5rem] text-gray-400'>TICKET #{props.id}</div>
            <div className='flex gap-1 items-center justify-center'>
                
                {
                    props.assignes.map((assignee: string | undefined, index: any) => (
                        <img className='w-[10px]  h-[10px] rouunded-[50%] text-[0.5rem]' src={assignee} alt={"assigne"} />
                    ))
                }
                
            </div>
       </div>{
        props.tags && <div className='flex gap-1 mt-2  items-center justify-center'>
            
            { 
                props.tags.map((tag: string, index: any) => (
                    <div className='px-[1px] text-white bg-gray-300 font-normal text-[0.4rem] rounded-sm'>{tag.toUpperCase()}</div>  
                ))
            }
            
        </div>
       }
       
       
      
      
        
      
    </motion.div>
    </>
  )
}

export default Card