import React from 'react'
import {useRouter} from 'next/router'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useContextProvider} from '../context/context'
import {InvoicePropsHome} from '../types/types'
import { FaCircle } from "react-icons/fa";




const Invoice:React.FC<InvoicePropsHome>=(props)=>{
   const router =useRouter()
   
   const [darkTheme]=useContextProvider()


    function handleColor() {
    if (props.status === "pending") {
      return "text-orange-400 ";
    } else if (props.status === "paid") {
      return "text-green-500";
    } else {
      return "text-black dark:text-white ";
    }
  }

 
 
    function handleBackgroundColor() {
    if (props.status === "pending") return "  bg-orange-100  ";
    if (props.status === "paid") return "bg-green-100   ";
    if (props.status === "draft") return "bg-gray-100   ";
  }
    return(
  
            <motion.div variants={fadeIn} 
            onClick={()=>router.push(`/${props.number}`)}
             className={` ${darkTheme? 'bg-slate-800 dark':'bg-white'}  
              hover:cursor-pointer hover:border-solid hover:border    hover:border-gray-500
              mx-auto px-5 flex justify-between  py-3 my-2 h-28 sm:h-20 rounded-md sm:w-full md:w-9/12 w-10/12 `}>
                
                <div className='flex flex-col justify-around sm:flex-row sm:my-auto ' >
                    <h1 className='text-neutral-400 font-bold '>#<span
                        className=  "dark:text-white text-black"
                    
                    >UG{props.number}</span></h1>
                    <div className='sm:flex sm:justify-even'>
                        <p className='opacity-50 text-sm sm:ml-3 sm:pt-0.5 '>Due <span>{props.InvoiceDueDate}</span></p>
                        <p className='font-light sm:hidden  '>UGX <span className=' font-bold'>{props.amount}</span></p>
                        
                    </div>
                    
                </div>
                <div className='flex justify-between flex-col  sm:flex-row sm:my-auto relative ' >
                    <h1 className={`${!darkTheme? 'opacity-50':''} capitalize  sm:mt-1.5 sm:mr-3 md:mr-12 sm:min-w-28  text-sm sm:text-base    `}>{props.debtor}</h1>
                    <p className='font-light hidden sm:inline my-auto mr-3 w-24'>UGX <span className=' font-bold'>{props.amount}</span></p>
                    <div className={`${handleBackgroundColor()} dark:bg-slate-700 px-3  bg-opacity-50   rounded-md py-2 w-24 `}>
                       
                        <p className={`${handleColor()} text-sm   capitalize font-semibold`}><FaCircle className='h-2 w-2 m-1 inline' /> {props.status}</p> 
            
                    </div>
                    
                </div>
            </motion.div>
     
         
    )
}

export default Invoice