import React from 'react'
import {useRouter} from 'next/router'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useThemeContext} from '../context/context'
import {InvoiceProps} from '../types/types'
import { FaCircle } from "react-icons/fa";
import {
    //handleBackgroundColor ,
    handleColor,handleCircleColor} from '../utils/fns'



const Invoice:React.FC<InvoiceProps>=(props)=>{
   const router =useRouter()
   const [darkTheme]=useThemeContext()


    function handleColor() {
    if (props.status === "pending") {
      return "orange-500";
    } else if (props.status === "paid") {
      return "green-500";
    } else {
      return "black";
    }
  }

 
 
    function handleBackgroundColor() {
    if (props.status === "pending") return "bg-orange-100";
    if (props.status === "paid") return "bg-green-100";
    if (props.status === "draft") return "bg-gray-100";
  }
    return(
  
            <motion.div variants={fadeIn} 
            onClick={()=>router.push(`/${props.number}`)}
             className={` ${darkTheme? 'bg-slate-800':'bg-white'}  
              hover:cursor-pointer hover:border-solid hover:border-2 hover:border-purple-300
              mx-auto px-5 flex justify-between  py-3 my-2 h-28 sm:h-20 rounded-md sm:w-full md:w-9/12 w-10/12 `}>
                
                <div className='flex flex-col justify-between sm:flex-row sm:my-auto ' >
                    <h1 className='text-neutral-400 font-bold '>#<span
                        className= {`${darkTheme ? "text-white":"text-black"}`}
                    
                    >UG{props.number}</span></h1>
                    <div className='sm:flex '>
                        <p className='opacity-50 text-sm sm:ml-3 sm:pt-0.5 '>Due <span>27 Aug 2022</span></p>
                        <h1 className={`${!darkTheme? 'opacity-50':''} mx-3 mt-0.5 hidden sm:block text-sm `}>{props.debtor}</h1>
                        <p className='font-light  '>UGX <span className=' font-bold'>{props.amount}</span></p>
                        
                    </div>
                    
                </div>
                <div className='flex justify-between flex-col sm:my-auto ' >
                    <h1 className={`${!darkTheme? 'opacity-50':''} sm:hidden text-sm `}>{props.debtor}</h1>
                    <div className={`${handleBackgroundColor()}    ${props.status==='pending' ? "px-3":"px-4"} rounded-md py-2  `}>
                       
                        <p className={`text-${handleColor()}    capitalize font-semibold`}><FaCircle className='h-2 w-2 inline' /> {props.status}</p> 
            
                    </div>
                    
                </div>
            </motion.div>
     
         
    )
}

export default Invoice