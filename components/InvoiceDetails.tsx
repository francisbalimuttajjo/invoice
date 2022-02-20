import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import {useThemeContext} from '../context/context'
import {Props} from '../types/types'
import { FaCircle } from "react-icons/fa";
import {handleBackgroundColor,handleColor,handleCircleColor,getSum} from '../utils/fns'
import Address from './Address'



const InvoiceDetails:React.FC<Props>=(props)=>{
    const router=useRouter()
    const handleRouterBack=()=>router.back()
    const [darkTheme]=useThemeContext()
     

    
    function handleColor() {
        if (props.status === "pending") {
          return "text-orange-500";
        } else if (props.status === "paid") {
          return "text-green-500";
        } else {
          return "text-black";
        }
      }
    
     
     
        function handleBackgroundColor() {
        if (props.status === "pending") return "bg-orange-100";
        if (props.status === "paid") return "bg-green-100";
        if (props.status === "draft") return "bg-gray-100";
      }

    return (
       <div className='sm:w-10/12 md:w-7/12 sm:mx-auto  sm:pb-8'> 
           <div className='mt-8 ml-4  flex '>
               <IoIosArrowBack
               className='font-light cursor-pointer opacity-50  '
                onClick={handleRouterBack}
                />
                 <p className={`${darkTheme? 'opacity-90' : 'opacity-50'} -mt-1 ml-3`}>Go back</p>
           </div>
            <motion.div variants={fadeIn}>
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'} relative w-11/12   h-20 sm:justify-start sm:h-24 mt-8 mx-auto rounded-md flex justify-around items-center`}>
                 <p className= {`${darkTheme? 'opacity-90': 'opacity-50'} -ml-3 sm:ml-2 text-sm ` }>Status</p>
                 <div className={`${handleBackgroundColor()}    px-4 rounded-md py-2  `}>
                       
                       <p className={`${handleColor()}    capitalize font-semibold`}><FaCircle className='h-2 w-2 inline' /> {props.status}</p> 
           
                   </div>
                 {/* <div className={`${handleBackgroundColor(props)}   rounded-md py-2 h-10 px-3  sm:ml-2 ml-28 flex`}>
                    <div className={`${handleCircleColor(props)} mr-2 mt-2  h-2 w-2 rounded-full`}></div>
                    <p className={`${handleColor(props)}   capitalize font-semibold`}>{props.status}</p> 
            
                 </div> */}
                 <div className={`  flex right-0 absolute hidden sm:block `}>
                    <button className={`${darkTheme? 'bg-slate-900' : 'bg-gray-200 text-gray-500'} hover:bg-gray-300 p-3 mx-1  px-4 py-3  rounded-3xl font-semibold  `}>
                        Edit
                    </button>
                    <button className={`${darkTheme? 'bg-red-400 hover:bg-red-300' : 'bg-red-500 hover:bg-red-400 '} text-white p-2  mx-1  px-6 py-3  rounded-3xl font-semibold  `}>
                        Delete
                    </button>
                    {props.status !=='paid' &&
                    <button className=' bg-violet-500 hover:bg-violet-400 text-white mx-1 p-2  xs:px-6  xs:py-3  rounded-3xl font-semibold'>
                        Mark As Paid
                    </button>
                    }
               </div>
                
               </div>
               <div className= {`${darkTheme? 'bg-slate-800' : 'bg-white'}  flex flex-col pb-3   w-11/12 mt-8 mx-auto rounded-md `}>
                  <div className='flex flex-col px-4 py-4'>
                     <div className='sm:flex relative'>
                         <div>
                            <h1 className='text-neutral-400 font-bold '>#<span
                                className= {`${darkTheme ? "text-white":"text-black"} text-sm opacity-80`}
                            
                            >UG{props.number}</span></h1>
                           <p className= {`${darkTheme ? "opacity-90":"opacity-50"} text-sm font-normal -mt-1 `}>{props.title}</p>

                         </div>
                        
                       <div className={`${darkTheme ? "opacity-90":"opacity-50"} hidden sm:block   right-3 absolute`}>
                           <Address address={props.IssuingAddress} />
                           
                       </div> 
                     </div> 
                    
                       
                  </div>
                  <div className={`${darkTheme ? "opacity-90":"opacity-50"} sm:hidden text-xs xs:text-base mt-8 px-4 `}>
                     <Address address={props.IssuingAddress} />
                  </div>
                  <div className='px-4 mt-8 flex sm:mt-16 sm:justify-around  sm:relative '>
                    <div>
                        <div >
                            <p className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs xs:text-base`} >Invoice Date</p>
                            <time className='text-xs xs:text-base'> <strong>{props.issuingDate} </strong></time>
                        </div>
                        <div className='mt-8' >
                            <p className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs xs:text-base`} >Payment Due</p>
                            <time className='text-xs xs:text-base'> <strong>{props.paymentDate} </strong></time>
                        </div>
                    </div>  
                     
                    <div className='right-0 pr-7 absolute sm:static'>
                        <h6 className= {`${darkTheme ? "opacity-90":"opacity-50"} `} >Bill To</h6>
                        <p className='capitalize text-xs xs:text-base'><strong>{props.debtor}</strong></p>
                        <div className={`${darkTheme ? "opacity-90":"opacity-50"} text-xs xs:text-base mt-8 sm:mt-0 sm:text-xs  `}>
                            <Address address={props.debtorsAddress} /> 
                        </div>
                    </div>
                    <div  className='  hidden sm:block'>
                        <p className={`${darkTheme ? "opacity-90":"opacity-50"}`} >Sent to</p>
                        <a href={`mailto:${props.email}`}><strong><em>{props.email}</em></strong></a>
                    </div>  
                    
                  </div>
                  <div  className='px-4 mt-8 sm:hidden '>
                    <p className={`${darkTheme ? "opacity-90":"opacity-50"}`} >Sent to</p>
                    <a href={`mailto:${props.email}`}><strong><em>{props.email}</em></strong></a>
                  </div>   
                  <div className= {`${darkTheme? 'bg-slate-900 font-semibold' : 'font-normal bg-gray-50'}  flex p-4 mt-8 sm:mt-16 rounded-t-md  w-11/12 mx-auto min-h-fit`}>
                    
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
               <div className={`${darkTheme? 'bg-slate-800' : 'bg-white'} sm:hidden flex justify-end mt-8 p-4`}>
                  <button className={`${darkTheme? 'bg-slate-900' : 'bg-gray-200 text-gray-500'} hover:bg-gray-300 p-3 mx-1  xs:px-4 xs:py-3 xs:mx-2 rounded-3xl font-semibold  `}>
                      Edit
                  </button>
                  <button className={`${darkTheme? 'bg-red-400 hover:bg-red-300' : 'bg-red-500 hover:bg-red-400 '} text-white p-2  mx-1  xs:px-6 xs:py-3 xs:mx-2 rounded-3xl font-semibold  `}>
                      Delete
                  </button>
                  {props.status !=='paid' && 
                  <button className=' bg-violet-500 hover:bg-violet-400 text-white mx-1 p-2  xs:px-6  xs:py-3 xs:mx-2 rounded-3xl font-semibold'>
                      Mark As Paid
                  </button>
                 }
               </div>
              
            
            </motion.div>
        </div>
        
    )}   

    export default InvoiceDetails

