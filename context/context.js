import { createContext, useContext } from 'react';
import React from 'react'
const ThemeContext = createContext();

export function AppWrapper({ children }) {
  const [inputArray,setInputArray]=React.useState([{qty:1,price:500}])
     const[darkTheme,setDarkTheme]=React.useState(false)
         const toggleDarkTheme=()=>setDarkTheme(prev=>!prev)
         const addInput=(e)=>{
           e.preventDefault()
           setInputArray([...inputArray,{qty:1,price:500}])
         }
         const removeInput=(P)=> {
           console.log(P)}
  

  return (
    <ThemeContext.Provider value={[darkTheme,toggleDarkTheme,inputArray,addInput,removeInput]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}