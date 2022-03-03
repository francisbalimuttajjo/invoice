import { createContext, useContext } from "react";
import React from "react";
const contextProvider = createContext();

//function
function checkForEmptyFields(inputArray){
  let arr=[]
  inputArray.map(el=>{
   if(!el.name || el.qty<1 || el.price==1){
     arr.push(el)
   }
  })
  if(arr.length <1){
    return true
  }
  return false
}

export function AppWrapper({ children }) {
  const [inputArray, setInputArray] = React.useState([
    { qty: 0, price: 1, name: "",errorName:'',errorQty:'',errorPrice:'' },
    
  ]);
  const [darkTheme, setDarkTheme] = React.useState(false);

  //toggling theme
  const toggleDarkTheme = () => setDarkTheme((prev) => !prev);

  //adding input field
  const addInput = (e) => {
    e.preventDefault();
    setInputArray([...inputArray, { qty: 0, price: 1, name: "",errorName:'',errorQty:'',errorPrice:''}]);
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

  //eliminating empty input fields
  const checkEmptyField=()=>{
    
    const list=[...inputArray]
    for(let j=0;j<list.length;j++){
      //reseting state
      list[j].errorName=''
      list[j].errorQty=''
      list[j].errorPrice=''
     
      if(list[j].name==''){
        list[j].errorName='name is required'
       
        setInputArray(list);
        
      }
      if(list[j].qty<1  ){
        list[j].errorQty='required'
        setInputArray(list);
        
      }
    if(list[j].price <=1 ){
      list[j].errorPrice='required'
      setInputArray(list);
    }
    }
   
      
    return checkForEmptyFields(inputArray)
    
     
  }
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
        checkEmptyField
      ]}
   
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useContextProvider() {
  return useContext(contextProvider);
}





// import { createContext, useContext } from "react";
// import React from "react";
// const contextProvider = createContext();

// export function AppWrapper({ children }) {
//   const [inputArray, setInputArray] = React.useState([
//     { qty: 0, price: 1, name: "" }
//   ]);
//   const [darkTheme, setDarkTheme] = React.useState(false);

//   //toggling theme
//   const toggleDarkTheme = () => setDarkTheme((prev) => !prev);

//   //adding input field
//   const addInput = (e) => {
//     e.preventDefault();
//     setInputArray([...inputArray, { qty: 0, price: 1, name: "" }]);
//   };

//   //removing input field
//   const removeInput = (index) => {
//     const list = [...inputArray];
//       list.splice(index, 1);
//       setInputArray(list);
//   };
  
 
//   //changing qty
//   const handleQtyChange = (e, index) => {
//     const list = [...inputArray];

//     list[index].qty = e.target.value;
//     setInputArray(list);
//   };

//   //changing price
//   const handlePriceChange = (e, index) => {
//     const list = [...inputArray];
//     list[index].price = e.target.value;
//     setInputArray(list);
//   };

//   //changing name
//   const handleNameChange = (e, index) => {
//     const list = [...inputArray];
//      list[index].name = e.target.value;
//        setInputArray(list);
//   };

//   return (
//     <contextProvider.Provider
//       value={[
//         darkTheme,
//         toggleDarkTheme,
//         inputArray,
//         addInput,
//         removeInput,
//         handleNameChange,
//         handleQtyChange,
//         handlePriceChange,
//       ]}
   
//     >
//       {children}
//     </contextProvider.Provider>
//   );
// }

// export function useContextProvider() {
//   return useContext(contextProvider);
// }
