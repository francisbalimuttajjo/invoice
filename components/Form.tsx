import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import Sidebar from './Sidebar'
import {useThemeContext} from '../context/context'
import {FormProps} from '../types/types'
import { FaCircle } from "react-icons/fa";


 const terms=[{desc:'Net 1 Day',value:1},{desc:'Net 7 Days',value:7},{desc:'Net 14 Days',value:14},{desc:'Net 30 Day',value:30}]
const n=new Date().toISOString().slice(0, 10) 


 const InvoiceDetails:React.FC<FormProps >=(props)=>{
  
        const [darkTheme]=useThemeContext()
    
    

    return (
        <>
        <div className='inset-0 absolute bg-black bg-opacity-40'></div>
       
      <div className={`${darkTheme ? 'bg-slate-900' : 'bg-white'} min-h-screen absolute w-full sm:w-9/12 sm:flex` }>

          <Sidebar />
           <motion.div variants={fadeIn} >
               <div  className=' w-10/12  mx-auto z-40 mt-8  ' >
                   
                    <header>
                        <h1 className=' font-bold opacity-80 text-2xl   '>Create Invoice</h1>
                    </header>
                    <section className='h-80  mt-12 overflow-auto    '>
                        <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
                        <form>
                            <div className="w-full px-3">
                                <label className={`${darkTheme?'text-white':'text-gray-700' } block  tracking-wide  text-sm  mb-2`} >
                                    City Address 
                                </label>
                                <input className={`${darkTheme ? 'text-grey-700 bg-slate-800' :"text-black"}  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`}  type="text"  />
                            </div>
                            <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                <div className="w-1/2   ">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' } block  mb-2  tracking-wide  text-sm`}>
                                        Street
                                    </label>
                                    <input className= {`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} type="text" />
                                </div>
                                <div className="w-1/3    mb-6 ">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' } block mb-2 tracking-wide  text-sm `}>
                                        Postal Code
                                    </label>
                                    <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} type="text" />
                                </div>
                            </div>
                            <div className="w-full px-3">
                                <label className= {`${darkTheme?'text-white':'text-gray-700' }block  tracking-wide  text-sm  mb-2`} >
                                    Country
                                </label>
                                <input className= {`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`}  type="text"  />
                            </div>
                            <div className='mt-6 px-3'>
                               <p className='opacity-90  mb-2 font-semibold text-blue-500'>Bill To</p>
                                <div className="w-full px-3">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' }block  tracking-wide  text-sm  mb-2`} >
                                        Client&apos;s Name
                                    </label>
                                    <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`} type="text"  />
                                </div>
                                <div className="w-full px-3">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' }block  tracking-wide  text-sm  mb-2`} >
                                        Client&apos;s Email
                                    </label>
                                    <input className= {`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`} placeholder='youremail@example.com' type="email"  />
                                </div>
                                <div className="w-full px-3">
                                    <label className={`${darkTheme?'text-white':'text-gray-700' }block  tracking-wide  text-sm  mb-2`} >
                                        StreetAddress
                                    </label>
                                    <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`}  type="text"  />
                                </div>
                                <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                    <div className="w-1/2   ">
                                        <label className={`${darkTheme?'text-white':'text-gray-700' } block  mb-2  tracking-wide text-sm`}>
                                            City
                                        </label>
                                        <input className= {`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} type="text" />
                                    </div>
                                    <div className="w-1/3    mb-6 ">
                                        <label className= {`${darkTheme?'text-white':'text-gray-700' } block mb-2 tracking-wide text-sm `}>
                                            Postal Code
                                        </label>
                                        <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} type="text" />
                                    </div>
                                </div>
                                <div className="w-full px-3">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' } block  tracking-wide  text-sm  mb-2`}  >
                                        Country
                                    </label>
                                    <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full   border border-gray-200 rounded  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`}  type="text"  />
                                </div>
                                <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                <div className="w-1/2   ">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' } block  mb-2  tracking-wide  text-sm `}>
                                        Invoice Date
                                    </label>
                                    <input className={`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full hover:cursor-pointer  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} value={n}  type="date" />
                                </div>
                                <div className="w-1/3    mb-6 ">
                                    <label className= {`${darkTheme?'text-white':'text-gray-700' } block mb-2 tracking-wide text-xs  sm:text-sm `}>
                                       <span className='hidden sm:inline'>Payment</span>  Terms
                                    </label>
                                    <select className= {`${darkTheme ? 'text-white bg-slate-800' :"text-gray-700"} appearance-none block w-full hover:cursor-pointer   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500`} >
                                        
                                        {terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                      
                                        
                                    </select>
                                </div>
                            </div>


                            </div>

                        </form>
                        
                                        
                        
                        
                    </section>
                    <button onClick={props.hideForm}>back</button> 
               </div>
               
               <button onClick={props.hideForm}>back</button> 
            
             

           
           
            </motion.div>

      </div>
      </>      
       
        
    )}   

    export default InvoiceDetails

