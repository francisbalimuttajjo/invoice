import React from 'react'
 type Props={
    description:string
 }

const InputLabel:React.FC<Props>=(props)=>{
    return (
        <div className="w-full px-3">
        <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
            {props.description}
        </label>
        <input className= 'dark:text-white dark:bg-slate-800 text-black  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text" 
       
        />
    </div>
    )
}

export default InputLabel