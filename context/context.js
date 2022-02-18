import { createContext, useContext } from 'react';
import React from 'react'
const ThemeContext = createContext();

export function AppWrapper({ children }) {
     const[darkTheme,setDarkTheme]=React.useState(false)
         const toggleDarkTheme=()=>setDarkTheme(prev=>!prev)
       
  

  return (
    <ThemeContext.Provider value={[darkTheme,toggleDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}