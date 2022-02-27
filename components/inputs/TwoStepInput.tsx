import React from 'react'
 type Props={
    label1:string
    label2:string
    inputValue1:string
    handleInputChange1:(a:any)=>void
    inputValue2:string
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
            value={props.inputValue1}
            onChange={props.handleInputChange1}
            className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
        </div>
        <div className="w-1/3    mb-6 ">
            <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
            {props.label2}
            </label>
            <input
             value={props.inputValue2}
            onChange={props.handleInputChange2}
           
            
            className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type="text" />
        </div>
    </div>
    )
}

export default InputLabel