import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useThemeContext} from '../context/context'
import {handleBackgroundColor,handleColor,handleCircleColor} from '../utils/fns'
type Props={
    status:string
    // darkTheme:boo()=>setDarkTheme:()=>void
}

const InvoiceDetails:React.FC<Props>=(props)=>{
    const router=useRouter()
    const handleRouterBack=()=>router.back()
    const [darkTheme]=useThemeContext()
   

    return (
       <div className=''> 
           <div className='mt-8 ml-4  flex '>
               <IoIosArrowBack
               className='font-light cursor-pointer opacity-50  '
                onClick={handleRouterBack}
                />
                 <p className={`${darkTheme? 'opacity-90' : 'opacity-50'} -mt-1 ml-3`}>Go back</p>
           </div>
            <motion.div variants={fadeIn}>
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'}  w-11/12 sm:w-full h-20 mt-8 mx-auto rounded-md flex justify-around items-center`}>
                 <p className= {`${darkTheme? 'opacity-90': 'opacity-50'} -ml-3  text-sm ` }>Status</p>
                 <div className={`${handleBackgroundColor(props)}   rounded-md py-2 h-10 px-3  ml-28 flex`}>
                    <div className={`${handleCircleColor(props)} mr-2 mt-2  h-2 w-2 rounded-full`}></div>
                    <p className={`${handleColor(props)}   capitalize font-semibold`}>{props.status}</p> 
            
                 </div>
                
               </div>
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'}  w-11/12 mt-8 mx-auto rounded-md `}>
                  hello
               </div>
            </motion.div>
        </div>
        
    )}   

    export default InvoiceDetails

