import React from 'react'
 import InputComponent from './InputComponent'
 import {useThemeContext} from '../context/context'


 type ItemsProps={
        inputArray:{qty:number,price:number}[]
  }

  type  el={qty:number,price:number}
   type index=number

  const Items:React.FC<ItemsProps>=(props)=>{

    const[darkTheme,setDarkTheme,inputArray,removeInputField]=useThemeContext()

    
    

    //   const addInput=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    //        e.preventDefault()
          
         
    //       const newInputArray=[...input,{qty:1,price:50}]
    //       setInput(newInputArray)
         
    //   }
   
     
      
      return(
       <div> 
           
    {inputArray.map((el:el,index:index)=> <InputComponent  key={index} qty={el.qty} price={el.price}
        //  removeInputField={props.removeInputField(index)}
      />
       
    )}
        </div>      
      )}

    export default Items  

