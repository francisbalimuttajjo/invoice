import React from 'react'
 import InputComponent from './InputComponent'
 import {useContextProvider} from '../context/context'


 type ItemsProps={
        inputArray:{qty:number,price:number}[]
  }

  type  el={qty:number,price:number,name:string}
   type index=number

  const Items:React.FC<ItemsProps>=(props)=>{

    const[darkTheme,setDarkTheme,inputArray,add,removeInput,handleNameChange,handleQtyChange,handlePriceChange]=useContextProvider()
  


    
    

 
   
     
      
      return(
       <div> 
           
    {inputArray.map((el:el,index:index)=><InputComponent 
    handleNameChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleNameChange(e,index)}
    handlePriceChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handlePriceChange(e,index)}
    handleQtyChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleQtyChange(e,index)}
    removeInputField={()=>removeInput(index)} key={index} qty={el.qty} price={el.price} />
   
    )}
        </div>      
      )}

    export default Items  




    // <div key={index}  className="w-full px-3">
    //     <label className='dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2' >
    //        Item Name
    //     </label>
    //     <input className= 'dark:text-white dark:bg-slate-800 text-black  appearance-none block w-full   border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500'  type="text" 
    //     value={el.name}
    //     onChange={(e)=>handleNameChange(e,index)}
    //     />
    //     <div className='flex justify-around '>
    //         <div className="w-2/12   ">
    //             <label className= 'dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm'>
    //                 Qty
    //             </label>
    //             <input 
    //              className= 'dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1' type="number"
    //               value={el.qty}
    //              onChange={(e)=>handleQtyChange(e,index)}
    //              />
    //         </div>
    //         <div className="w-1/3    mb-6 ">
    //             <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
    //             Price
    //             </label>
    //             <input className='dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' min='1'  type="number"
    //              value={el.price}
    //              onChange={(e)=>handlePriceChange(e,index)}
    //             // onChange={(e)=>setPrice(parseInt(e.target.value))}
    //             />
    //        </div>
    //        <div className="w-1/3    mb-6 ">
    //             <label className= 'dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm'>
    //             Total
    //             </label>
    //             <p className='dark:text-white text-gray-700 font-semibold   p-4   ' >
    //                 {validateNo(el.qty*el.price) }
                    
    //                 </p>
    //        </div>
    //        <MdDelete
    //          onClick={()=>removeInput(index)}
    //         className=' text-xl  mt-12 hover:cursor-pointer text-gray-400 hover:text-red-700' />
    //     </div>
    // </div>
