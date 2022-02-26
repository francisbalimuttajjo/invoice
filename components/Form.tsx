import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import InputComponent from './inputs/InputLabel'
import InputComponentTwo from './inputs/TwoStepInput'
import Sidebar from './Sidebar'
import ItemsList from './Items'
import {useContextProvider} from '../context/context'
import {FormProps} from '../types/types'



 const terms=[{desc:' 1 Day',value:1},{desc:' 7 Days',value:7},{desc:'14 Days',value:14},{desc:' 30 Day',value:30}]
const n=new Date().toISOString().slice(0, 10) 


 const InvoiceDetails:React.FC<FormProps >=(props)=>{
        
        const [darkTheme,toggleDarkTheme,inputArray,addInput]=useContextProvider()
      
      
    
    

    return (
        <>
        <div 
        onClick={()=>console.log('clicked')}
       // onClick={props.hideForm}
        className=' hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40'></div>
       
      <div className={`${darkTheme ? 'dark' : ''} z-20 w-full  h-screen fixed   sm:flex` }>
            
          {/* <Sidebar /> */}
           <motion.div variants={fadeIn} >
               <div 
                 className='dark:bg-slate-900 px-3 bg-white w-full   h-screen sm:rounded-r-3xl    ' >
                   
                    <header>
                        <h1 className=' font-bold opacity-80 text-2xl pt-12  '>Create Invoice</h1>
                    </header>
                    <section className='h-96  mt-8 overflow-auto mb-8   '>
                        <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
                        <form className=''>
                            <div className='px-3'>
                                <InputComponent  description='Street  Address' />
                                <InputComponentTwo label1='City' label2='Postal Code' />
                                <InputComponent  description='Country' />
                            </div>
                           
                            <div className='mt-6 px-3 '>
                               <p className='opacity-90  mb-2 font-semibold text-blue-500'>Bill To</p>
                                <InputComponent description='Client&apos;s Name' />
                                <InputComponent description='Client&apos;s Email' />
                                <InputComponent description='Street Address' />
                                <InputComponentTwo label1='City' label2='Postal Code' />
                                <InputComponent  description='Country' />
                            <div className="flex  w-full md:w-9/12 sm:w-11/12  px-3 mt-2 mb-0 justify-between">
                                <div className="w-1/2 md:w-7/12   ">
                                    <label className= 'dark:text-white text-gray-700  block  mb-2  tracking-wide  text-sm'>
                                        Invoice Date
                                    </label>
                                    <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' value={n}  type="date" />
                                </div>
                                <div className="w-1/3 md:w-4/12   mb-6 ">
                                    <label className= 'dark:text-white text-gray-700  block mb-2 tracking-wide text-sm'>
                                       <span className='hidden sm:inline'>Payment</span>  Terms
                                    </label>
                                    <select className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' >
                                        
                                        {terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                                                             
                                    </select>
                                </div>
                               
                                
                            </div>
                            <InputComponent  description='Description' />
                            <div className='w-full py-2   '>
                                <label className= 'dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2'  >
                                        Item List
                                </label>
                                <ItemsList inputArray={inputArray}  />
                                
                                  <button
                                onClick={addInput}
                                 className='bg-gray-100 sm:w-10/12 md:w-9/12   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     '>
                                     <span className='font-extrabold'>+</span> Add New Item</button>

                                
                                
    
                            </div> 
                
                                

                            </div>

                        </form>
                        
                                        
                        
                        
                    </section>
                    <div className=' sticky bottom-0 flex '>
                        <button
                        onClick={props.hideForm}
                         className='bg-gray-200 text-sm  sm:text-sm font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-300 rounded-3xl px-2 py-3  sm:px-4 sm:py-3 '>Discard</button>
                        <div className='flex right-0  absolute'>
                            <button className= 'dark:hover:bg-opacity-30 hover:bg-opacity-90 p-2 sm:px-4 py-3 text-sm  sm:text-sm text-gray-500 font-bold rounded-3xl bg-black bg-opacity-80 '>Save as Draft</button>
                            <button className='bg-blue-700 ml-1 text-white opacity-70 text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600'>Save & Send</button>

                        </div>

                    </div>
                   
               </div>
               
         
            
             

           
           
            </motion.div>

      </div>
      </>      
       
        
    )}   

    export default InvoiceDetails