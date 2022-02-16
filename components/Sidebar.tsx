import React from 'react'
import { FaPiedPiper } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdBrightness2} from "react-icons/md";

type Props={
    title?:string
    dark:boolean
    handleToggleTheme:()=>void
}
// deletePost: (id: number) => void
// type ToggleTheme={()=>void}
const Sidebar:React.FC<Props>=(props)=>{
   

    return (
        <div className='bg-slate-700 h-20 flex  '>
            <div className='h-full bg-blue-500 flex   flex-col justify-center bg-gradient-to-t from-blue-300 to-blue-600 w-20 rounded-l-none rounded-2xl'>
               <FaPiedPiper className='text-white mx-auto   text-5xl ' />
            </div>
            <div className='flex   my-6  right-2  absolute  '>
                { props.dark &&<button 
                onClick={props.handleToggleTheme}
                >
                  <BsBrightnessHighFill className='text-white text-2xl opacity-70' />
                </button>}
               {!props.dark && <button
                onClick={props.handleToggleTheme}
               >
                   <MdBrightness2 className='text-white text-2xl opacity-70' />
                </button>}
            </div>

        </div>
       
        )
}

export default Sidebar