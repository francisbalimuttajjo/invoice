import React from 'react'
 import InputComponent from './InputComponent'
 import {useContextProvider} from '../../context/context'


 type ItemsProps={
               inputArray:el[]
        
  }

  type  el={qty:number,price:number,name:string
    ,errorName:string
    ,errorQty:string
    ,errorPrice:string
  }
   type index=number

  const Items:React.FC<ItemsProps>=(props)=>{

    const[darkTheme,setDarkTheme,inputArray,add,removeInput,handleNameChange,handleQtyChange,handlePriceChange]=useContextProvider()


    
    

 
   
     
      
      return(
       <div className='md:w-9/12 sm:w-11/12'> 
           
    {props.inputArray.map((el:el,index:index)=><InputComponent inputArray={props.inputArray}
    handleNameChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleNameChange(e,index)}
    handlePriceChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handlePriceChange(e,index)}
    handleQtyChange={(e: React.ChangeEvent<HTMLSelectElement>)=>handleQtyChange(e,index)}
    removeInputField={()=>removeInput(index)} key={index} qty={el.qty} price={el.price} name={el.name}
    errorName={el.errorName }
    errorQty={ el.errorQty }
    errorPrice={  el.errorPrice}
   
     />
    
    )}
        </div>      
      )}

    export default Items  




