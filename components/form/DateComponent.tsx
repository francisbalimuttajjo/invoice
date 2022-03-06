   import React from 'react'
   import DatePicker from 'react-datepicker'
   import {DateProps} from '../../types/types'
   import "react-datepicker/dist/react-datepicker.css";

 
 
 const DateComponent:React.FC<DateProps>=(props)=>{
  
    return(
        <div className="flex  w-full md:w-9/12 sm:w-11/12  px-3 mt-2 mb-0 justify-between">
        <div className="w-1/2 md:w-7/12 z-40  ">
            <label className= 'dark:text-white text-gray-700  block  mb-2  tracking-wide  text-sm'>
                Invoice Date
            </label>
         
              <DatePicker
              className={`${props.error1 ? "border-red-500 border ":"" } rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer  border border-gray-200`}
               selected={props.startDate}
               dateFormat="dd/MM/yy"
               onChange={props.changeDate} 
               />

            {props.error1 && <p className="text-red-500 text-xs mt-1 px-2 capitalize mb-3 italic">{props.error1} * </p>}
        </div>
         <div className="w-1/3 md:w-4/12   mb-6 ">
            <label className= 'dark:text-white text-gray-700  block mb-2 tracking-wide text-sm'>
               <span className='hidden sm:inline'>Payment</span>  Terms
            </label>
            <select className= {`${props.error2 ? "border-red-500 border ":""} border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer`}
             
            onChange={props.changeTerms}
            value={props.termValue}
            >
             {props.terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                                     
            </select>
            {props.error2 && <p className="text-red-500 text-xs mt-1 px-2 capitalize mb-3 italic">{props.error2} * </p>}
        </div>
       
        
   </div>
    )
}
export default DateComponent