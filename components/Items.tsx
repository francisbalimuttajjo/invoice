import React from 'react'
 import InputComponent from './form/InputComponent'
 import {useContextProvider} from '../context/context'


 type ItemsProps={
        //inputArray:{qty:number,price:number,error:string}[]
        inputArray:el[]
        submitting:boolean
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
    errorName={props.submitting ? el.errorName :''}
    errorQty={props.submitting ? el.errorQty :""}
    errorPrice={props.submitting ?  el.errorPrice :""}
   
     />
    
    )}
        </div>      
      )}

    export default Items  




