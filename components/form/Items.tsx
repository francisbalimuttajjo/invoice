import React from "react";
import InputComponent from "./InputComponent";
import { useContextProvider } from "../../context/context";

type ItemsProps = {
  inputArray: el[];
};

type el = {
  qty: number;
  price: number;
  name: string;
  errorName: string;
  errorQty: string;
  errorPrice: string;
};
type index = number;

const Items: React.FC<ItemsProps> = (props) => {
  const [
    
    darkTheme,
    toggleDarkTheme,
    inputArray,
    addInput,
    removeInput,
    handleNameChange,
    handleQtyChange,
    handlePriceChange,
    checkEmptyField,
  ] = useContextProvider();

  return (
    <div className="w-full py-2   ">
      <label className="dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2">
        Item List
      </label>
      <div className="md:w-9/12 sm:w-11/12">
        {props.inputArray.map((el: el, index: index) => (
          <InputComponent
            inputArray={props.inputArray}
            handleNameChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleNameChange(e, index)
            }
            handlePriceChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handlePriceChange(e, index)
            }
            handleQtyChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleQtyChange(e, index)
            }
            removeInputField={() => removeInput(index)}
            key={index}
            qty={el.qty}
            price={el.price}
            name={el.name}
            // errorName={el.errorName }
            // errorQty={ el.errorQty }
            // errorPrice={  el.errorPrice}
          />
        ))}
      </div>

      <button
        onClick={addInput}
        className="bg-gray-100 sm:w-10/12 md:w-9/12 mb-4   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     "
      >
        <span className="font-extrabold">+</span> Add New Item
      </button>
    </div>
  );
};

export default Items;
