import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useThemeContext} from '../context/context'
import {handleBackgroundColor,handleColor,handleCircleColor} from '../utils/fns'
type Props={
    status:string
    title:string
    street:string
    country:string
    block:string
    city:string
    number:number
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
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'} flex flex-col   w-11/12 mt-8 mx-auto rounded-md `}>
                  <div className='flex flex-col px-4'>
                    <h1 className='text-neutral-400 font-bold '>#<span
                            className= {`${darkTheme ? "text-white":"text-black"} text-sm opacity-80`}
                        
                        >UG{props.number}</span></h1>
                    <p className= {`${darkTheme ? "opacity-90":"opacity-50"} text-sm font-normal -mt-1 `}>{props.title}</p>    
                  </div>
                  <address className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs mt-8 px-4 `}>
                    {props.street} <br/>
                    {props.city} <br/>
                    {props.block} <br/>
                    {props.country} 
                  </address>
                  <div className='px-4 mt-8'>
                      <div >
                         <p className={`${darkTheme ? "opacity-90":"opacity-50"}`} >Invoice Date</p>
                         <time> <strong>21 Aug 2022 </strong></time>
                      </div>
                      <div className='mt-8' >
                         <p className={`${darkTheme ? "opacity-90":"opacity-50"}`} >Payment Due</p>
                         <time> <strong>21 Oct 2022 </strong></time>
                      </div>
                      <div>

                      </div>
                  </div>
                     
                  
               </div>
            </motion.div>
        </div>
        
    )}   

    export default InvoiceDetails

