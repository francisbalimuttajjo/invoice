import { createContext, useContext } from "react";
import React from "react";
const contextProvider = createContext();

export function AppWrapper({ children }) {
  const [inputArray, setInputArray] = React.useState([]);
  const [darkTheme, setDarkTheme] = React.useState(false);

  //toggling theme
  const toggleDarkTheme = () => setDarkTheme((prev) => !prev);

  //adding input field
  const addInput = (e) => {
    e.preventDefault();
    setInputArray([...inputArray, { qty: 0, price: 1, name: "" }]);
  };

  //removing input field
  const removeInput = (index) => {
    const list = [...inputArray];
    list.splice(index, 1);
    setInputArray(list);
  };
 
  //changing qty
  const handleQtyChange = (e, index) => {
    const list = [...inputArray];

    list[index].qty = e.target.value;
    setInputArray(list);
  };

  //changing price
  const handlePriceChange = (e, index) => {
    const list = [...inputArray];
    list[index].price = e.target.value;
    setInputArray(list);
  };

  //changing name
  const handleNameChange = (e, index) => {
    const list = [...inputArray];

    list[index].name = e.target.value;
    setInputArray(list);
  };

  return (
    <contextProvider.Provider
      value={[
        darkTheme,
        toggleDarkTheme,
        inputArray,
        addInput,
        removeInput,
        handleNameChange,
        handleQtyChange,
        handlePriceChange,
      ]}
   
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useContextProvider() {
  return useContext(contextProvider);
}
