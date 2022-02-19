import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useThemeContext} from '../context/context'
import {Props} from '../types/types'
import {handleBackgroundColor,handleColor,handleCircleColor,getSum} from '../utils/fns'


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
                 <div className={`${handleBackgroundColor(props)}  rounded-md py-2 h-10 px-3  ml-28 flex`}>
                    <div className={`${handleCircleColor(props)} mr-2 mt-2  h-2 w-2 rounded-full`}></div>
                    <p className={`${handleColor(props)}   capitalize font-semibold`}>{props.status}</p> 
            
                 </div>
                
               </div>
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'} flex flex-col pb-3   w-11/12 mt-8 mx-auto rounded-md `}>
                  <div className='flex flex-col px-4 py-4'>
                    <h1 className='text-neutral-400 font-bold '>#<span
                            className= {`${darkTheme ? "text-white":"text-black"} text-sm opacity-80`}
                        
                        >UG{props.number}</span></h1>
                    <p className= {`${darkTheme ? "opacity-90":"opacity-50"} text-sm font-normal -mt-1 `}>{props.title}</p>    
                  </div>
                  <address className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs mt-8 px-4 `}>
                    20,Kampala Rd <br/>
                      Kampala <br/>
                    231<br/>
                    Uganda 
                  </address>
                  <div className='px-4 mt-8 flex justify-flex'>
                    <div>
                        <div >
                            <p className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs xs:text-base`} >Invoice Date</p>
                            <time className='text-xs xs:text-base'> <strong>21 Aug 2022 </strong></time>
                        </div>
                        <div className='mt-8' >
                            <p className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs xs:text-base`} >Payment Due</p>
                            <time className='text-xs xs:text-base'> <strong>21 Oct 2022 </strong></time>
                        </div>
                    </div>  
                     
                    <div className='ml-24'>
                        <h6 className= {`${darkTheme ? "opacity-90":"opacity-50"}`} >Bill To</h6>
                        <p><strong>{props.debtor}</strong></p>
                        <address className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs mt-8  `}>
                            {props.street} <br/>
                            {props.city} <br/>
                            {props.block} <br/>
                            {props.country} 
                        </address>
                    </div>
                    
                  </div>
                  <div  className='px-4 mt-8 '>
                    <p className={`${darkTheme ? "opacity-90":"opacity-50"}`} >Sent to</p>
                    <a href={`mailto:${props.email}`}><strong>{props.email}</strong></a>
                  </div>   
                  <div className= {`${darkTheme? 'bg-slate-900' : 'bg-gray-200'} font-semibold flex p-4 mt-8 rounded-t-md  w-11/12 mx-auto min-h-fit`}>
                    
                    <ul className='mx-auto'>
                        {props.items.map((item,index)=><li key={index} className='capitalize '>{item.description}</li>)}
                    </ul>
                    <ul className='mx-auto'>
                        {props.items.map((item,index)=><li key={index} > Ugx <span className='ml-2'>{item.amount}</span></li>)}
                    </ul>
                    
                 
                  </div>
                  <div className= {`${darkTheme? 'bg-black' : 'bg-slate-900'} justify-around  flex rounded-b-md  py-4  w-11/12 mx-auto min-h-fit`}>
                      <p className='text-white text-sm font-semibold'>Amount Due</p>
                      <p className='text-white  font-bold'>Ugx <span>{getSum(props.items)}</span></p>
                  </div>
                  
               </div>
               <div className={`${darkTheme? 'bg-slate-800' : 'bg-white'} flex justify-end mt-8 p-4`}>
                  <button className={`${darkTheme? 'bg-slate-900' : 'bg-gray-200 text-gray-500'} hover:bg-gray-300 p-3 mx-1  xs:px-4 xs:py-3 xs:mx-2 rounded-3xl font-semibold  `}>
                      Edit
                  </button>
                  <button className={`${darkTheme? 'bg-red-400 hover:bg-red-300' : 'bg-red-500 hover:bg-red-400 '} text-white p-2  mx-1  xs:px-6 xs:py-3 xs:mx-2 rounded-3xl font-semibold  `}>
                      Delete
                  </button>
                  <button className=' bg-violet-500 hover:bg-violet-400 text-white mx-1 p-2  xs:px-6  xs:py-3 xs:mx-2 rounded-3xl font-semibold'>
                      Mark As Paid
                  </button>
               </div>
              
            
            </motion.div>
        </div>
        
    )}   

    export default InvoiceDetails

