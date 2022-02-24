import { createContext, useContext } from 'react';
import React from 'react'
const contextProvider = createContext();

export function AppWrapper({ children }) {
  const [inputArray,setInputArray]=React.useState([{qty:1,price:500}])
     const[darkTheme,setDarkTheme]=React.useState(false)
         const toggleDarkTheme=()=>setDarkTheme(prev=>!prev)
         const addInput=(e)=>{
           e.preventDefault()
           setInputArray([...inputArray,{qty:1,price:500}])
         }
         const removeInput=index=> {
                    const list = [...inputArray];
            list.splice(index, 1);
            setInputArray(list);
          }
  
         
  return (
    <contextProvider.Provider value={[darkTheme,toggleDarkTheme,inputArray,addInput,removeInput]}>
      {children}
    </contextProvider.Provider>
  );
}

export function useContextProvider() {
  return useContext(contextProvider);
}