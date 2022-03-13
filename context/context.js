import { createContext, useContext } from "react";
import React from "react";
const contextProvider = createContext();

export function AppWrapper({ children }) {
  const [darkTheme, setDarkTheme] = React.useState(false);

  //toggling theme
  const toggleDarkTheme = () => setDarkTheme((prev) => !prev);

 

  return (
    <contextProvider.Provider value={[darkTheme, toggleDarkTheme]}>
      {children}
    </contextProvider.Provider>
  );
}

export function useContextProvider() {
  return useContext(contextProvider);
}
