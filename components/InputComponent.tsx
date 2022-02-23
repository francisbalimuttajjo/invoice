import React from 'react'
import { MdDelete } from "react-icons/md";
import {useThemeContext} from '../context/context'
type PropTypes={
    qty:number
    price:number
    //  removeInputField:()=>void
}

const validateNo=(no:number)=>{
    if(isNaN(no)){
        return 0
    }
    return no

}
 const InputComponent:React.FC<PropTypes>=(props)=>{
    const[darkTheme,setDarkTheme,inputArray,addInput,removeInput]=useThemeContext()
     return(
        <div  className="w-full px-3">
        <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
           Item Name
        </label>
        <input className= 'dark:text-white dark:bg-slate-800 text-black  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text"  />
        <div className='flex justify-around '>
            <div className="w-2/12   ">
                <label className= 'dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm'>
                    Qty
                </label>
                <input 
                 className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1' type="number"
                  value={props.qty}
                //  onChange={(e)=>setQty(parseInt(e.target.value))}
                 />
            </div>
            <div className="w-1/3    mb-6 ">
                <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
                Price
                </label>
                <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1'  type="number"
                 value={props.price}
                // onChange={(e)=>setPrice(parseInt(e.target.value))}
                />
           </div>
           <div className="w-1/3    mb-6 ">
                <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
                Total
                </label>
                <p className='dark:text-white text-gray-700 font-semibold   p-4   ' >
                    {validateNo(props.qty*props.price) }
                    
                    </p>
           </div>
           <MdDelete
            // onClick={props.removeInputField}
            className=' text-xl  mt-12 hover:cursor-pointer text-gray-400 hover:text-red-700' />
        </div>
    </div>
     )
 }

 export default InputComponent