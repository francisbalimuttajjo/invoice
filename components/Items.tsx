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
       <div className='md:w-9/12 sm:w-11/12'> 
           
    {inputArray.map((el:el,index:index)=><InputComponent inputArray={inputArray}
    handleNameChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleNameChange(e,index)}
    handlePriceChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handlePriceChange(e,index)}
    handleQtyChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleQtyChange(e,index)}
    removeInputField={()=>removeInput(index)} key={index} qty={el.qty} price={el.price} name={el.name} />
   
    )}
        </div>      
      )}

    export default Items  




