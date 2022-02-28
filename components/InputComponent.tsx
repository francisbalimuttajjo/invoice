import React from 'react'
import { MdDelete } from "react-icons/md";
import {useContextProvider} from '../context/context'
type PropTypes={
    inputArray:{qty:number,price:number}[]
    qty:number
    price:number
    name:string
     removeInputField:()=>void
      handleNameChange:(a:any)=>void
      handleQtyChange:(a:any)=>void
      handlePriceChange:(a:any)=>void
}

const validateNo=(no:number)=>{
    if(isNaN(no)){
        return 0
    }
    return no

}
 const InputComponent:React.FC<PropTypes>=(props)=>{
   
     return(
        <div  className="w-full px-3  sm:flex">
        <div className='sm:mr-3'>   
            <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
            Item Name
            </label>
            <input
             value={props.name}
             className= 'dark:text-white dark:bg-slate-800 text-black  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text" 
            onChange={props.handleNameChange}
            />
        </div> 
        <div className='flex justify-around '>
            <div className="w-4/12    mr-2 ">
                <label className= 'dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm'>
                    Qty
                </label>
                <input 
                 className= 'dark:text-white  dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1' type="number"
                  value={props.qty}
                  onChange={props.handleQtyChange}
                
                 />
            </div>
            <div className="w-4/12 overflow-hidden   mb-6 ">
                <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
                Price
                </label>
                <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1'  type="number"
                 value={props.price}
                 onChange={props.handlePriceChange}
                
                />
           </div>
           <div className="w-4/12    mb-6 flex ">
              <div className='w-9/12'>
              <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
                Total
                </label>
                <p className='dark:text-white text-gray-700 font-semibold   px-2   py-4   ' >
                    {validateNo(props.qty*props.price) }
                    
                </p>
              </div> 
              <MdDelete
            onClick={props.removeInputField}
           className={`${props.inputArray.length <2 ? 'invisible' : "visible"}       
           text-xl  mt-12 hover:cursor-pointer w-3/12 text-gray-400 hover:text-red-700`}
           
           />
              
           </div>
         
             {/* <MdDelete
            onClick={props.removeInputField}
           className={`${props.inputArray.length <2 ? 'invisible' : "visible"}       
           text-xl  mt-12 hover:cursor-pointer text-gray-400 hover:text-red-700`}
           
           /> */}
           
             
        </div>
    </div>
     )
 }

 export default InputComponent