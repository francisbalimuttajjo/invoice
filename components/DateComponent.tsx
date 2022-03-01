   import React from 'react'

  type Props={
      terms:{desc:string,value:number}[]
      changeDate:(e:any)=>void
      changeTerms:(e:any)=>void
      date?:string
      termValue:number
   
  }
 
 const DateComponent:React.FC<Props>=(props)=>{
 
    return(
        <div className="flex  w-full md:w-9/12 sm:w-11/12  px-3 mt-2 mb-0 justify-between">
        <div className="w-1/2 md:w-7/12 z-40  ">
            <label className= 'dark:text-white text-gray-700  block  mb-2  tracking-wide  text-sm'>
                Invoice Date
            </label>
            <input className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
            value={props.date} 
            onChange={props.changeDate} 
         
            
            type="date" /> 
  
        </div>
         <div className="w-1/3 md:w-4/12   mb-6 ">
            <label className= 'dark:text-white text-gray-700  block mb-2 tracking-wide text-sm'>
               <span className='hidden sm:inline'>Payment</span>  Terms
            </label>
            <select className=  'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full hover:cursor-pointer   border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'
            onChange={props.changeTerms}
            value={props.termValue}
            >
             {props.terms.map(term=>  <option key={term.value} value={term.value}>{term.desc}</option>)}
                                                     
            </select>
        </div>
       
        
   </div>
    )
}
export default DateComponent