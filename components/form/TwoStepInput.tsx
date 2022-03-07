import React from 'react'
 type Props={
    label1:string
    label2:string
    inputValue1:string
    handleInputChange1:(a:any)=>void
    inputValue2:string
    name1:string
    name2:string
    error1?:string
    error2?:string
     handleInputChange2:(a:any)=>void
 }

const InputLabel:React.FC<Props>=(props)=>{
    return (
    <div className="flex  w-full md:w-9/12 sm:w-11/12  px-3 mt-2 mb-0 justify-between">
        <div className="w-1/2   ">
            <label className= 'dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm'>
                {props.label1}
            </label>
            <input 
            name={props.name1}
            value={props.inputValue1}
            onChange={props.handleInputChange1}
            className=  "px-4 leading-tight focus:outline-none  focus:border-gray-500 dark:text-white         dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3"
              type="text" />
            {props.error1 && <p className="text-red-500 text-xs mt-1 px-2 capitalize mb-3 italic">{props.error1} * </p>}
        </div>
        <div className="w-1/3    mb-6 ">
            <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
            {props.label2}
            </label>
            <input
             name={props.name2}
             value={props.inputValue2}
             onChange={props.handleInputChange2}
             className= " border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 text-gray-700 appearance-none block w-full dark:text-white dark:bg-slate-800"
             type="text" />
             {props.error2 && <p className="text-red-500 text-xs mt-1 px-2 capitalize mb-3 italic">{props.error2} * </p>}
        </div>
    </div>
    )
}

export default InputLabel