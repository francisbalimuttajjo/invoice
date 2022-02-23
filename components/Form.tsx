import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import Sidebar from './Sidebar'
import {useThemeContext} from '../context/context'
import {FormProps} from '../types/types'



 const terms=[{desc:'Net 1 Day',value:1},{desc:'Net 7 Days',value:7},{desc:'Net 14 Days',value:14},{desc:'Net 30 Day',value:30}]
const n=new Date().toISOString().slice(0, 10) 


 const InvoiceDetails:React.FC<FormProps >=(props)=>{
  
        const [darkTheme]=useThemeContext()
    
    

    return (
        <>
        <div className='hidden sm:block inset-0 absolute bg-black bg-opacity-40'></div>
       
      <div className={`${darkTheme ? 'dark' : ''}  h-screen absolute w-full sm:w-9/12 sm:flex` }>

          <Sidebar />
           <motion.div variants={fadeIn} >
               <div  className='dark:bg-slate-900 px-3 bg-white w-full h-screen  mx-auto z-40   ' >
                   
                    <header>
                        <h1 className=' font-bold opacity-80 text-2xl pt-12  '>Create Invoice</h1>
                    </header>
                    <section className='h-80  mt-8 overflow-auto mb-8   '>
                        <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
                        <form>
                            <div className="w-full px-3">
                                <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
                                    City Address 
                                </label>
                                <input className= 'dark:text-white dark:bg-slate-800 text-black  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  />
                            </div>
                            <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                <div className="w-1/2   ">
                                    <label className= 'dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm'>
                                        Street
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
                                </div>
                                <div className="w-1/3    mb-6 ">
                                    <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
                                        Postal Code
                                    </label>
                                    <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
                                </div>
                            </div>
                            <div className="w-full px-3">
                                <label className= 'dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
                                    Country
                                </label>
                                <input className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  />
                            </div>
                            <div className='mt-6 px-3'>
                               <p className='opacity-90  mb-2 font-semibold text-blue-500'>Bill To</p>
                                <div className="w-full px-3">
                                    <label className= 'dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
                                        Client&apos;s Name
                                    </label>
                                    <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500' type="text"  />
                                </div>
                                <div className="w-full px-3">
                                    <label className= 'dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
                                        Client&apos;s Email
                                    </label>
                                    <input className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500' placeholder='youremail@example.com' type="email"  />
                                </div>
                                <div className="w-full px-3">
                                    <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
                                        StreetAddress
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  />
                                </div>
                                <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                    <div className="w-1/2   ">
                                        <label className='dark:text-white text-gray-700  block  mb-2  tracking-wide text-sm'>
                                            City
                                        </label>
                                        <input className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
                                    </div>
                                    <div className="w-1/3    mb-6 ">
                                        <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide text-sm '>
                                            Postal Code
                                        </label>
                                        <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
                                    </div>
                                </div>
                                <div className="w-full px-3">
                                    <label className= 'dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2'  >
                                        Country
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  />
                                </div>
                            <div className="flex  w-full  px-3 mt-2 mb-0 justify-between">
                                <div className="w-1/2   ">
                                    <label className= 'dark:text-white text-gray-700  block  mb-2  tracking-wide  text-sm'>
                                        Invoice Date
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={n}  type="date" />
                                </div>
                                <div className="w-1/3    mb-6 ">
                                    <label className= 'dark:text-white text-gray-700  block mb-2 tracking-wide text-sm'>
                                       <span className='hidden sm:inline'>Payment</span>  Terms
                                    </label>
                                    <select className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' >
                                        
                                        {terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                      
                                        
                                    </select>
                                </div>
                               
                                
                            </div>
                            <div className="w-full px-3">
                                    <label className= 'dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2'  >
                                        Description
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full   border border-gray-200 rounded  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  placeholder='eg Graphic Designing' />
                            </div>
                            <div className='w-full  p-3'>
                                <label className= 'dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2'  >
                                        Item List
                                </label>
                            </div> 
                                

                            </div>

                        </form>
                        
                                        
                        
                        
                    </section>
                    <div className=' pt-1 flex relative'>
                        <button
                        onClick={props.hideForm}
                         className='bg-gray-200 text-sm  sm:text-sm font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-300 rounded-3xl px-2 py-3  sm:px-4 sm:py-3 '>Discard</button>
                        <div className='flex right-0  absolute'>
                            <button className={`${darkTheme ? 'hover:bg-opacity-40' : "hover:bg-opacity-90"} p-2 sm:px-4 py-3 text-sm  sm:text-sm text-gray-500 font-bold rounded-3xl bg-black bg-opacity-80 `}>Save as Draft</button>
                            <button className='bg-blue-700 ml-1 text-white opacity-70 text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600'>Save & Send</button>

                        </div>

                    </div>
                   
               </div>
               
         
            
             

           
           
            </motion.div>

      </div>
      </>      
       
        
    )}   

    export default InvoiceDetails

