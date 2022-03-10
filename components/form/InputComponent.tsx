import React from "react";
import { MdDelete } from "react-icons/md";
import { validateNo } from "../../utils/fns";
import { InputComponentTypes } from "../../types/types";

const InputComponent: React.FC<InputComponentTypes> = (props) => {
  return (
    <div className="w-full px-4  sm:flex">
      <div className="sm:mr-3">
        <label className="dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2">
          Item Name
        </label>
        <input
          value={props.name}
          className=" border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none
           focus:border-gray-500 dark:text-white dark:bg-slate-800 text-black mb-2  appearance-none block w-full"
          type="text"
          onChange={props.handleNameChange}
        />
        {/* {props.errorName && (
          <p className="text-red-500 text-xs  px-2 capitalize  italic">
            {props.errorName} *{" "}
          </p>
        )} */}
      </div>
      <div className="flex justify-around ">
        <div className="w-4/12    mr-2 ">
          <label className="dark:text-white text-gray-700 block  mb-2  tracking-wide  text-sm">
            Qty
          </label>
          <input
            className=" border border-gray-200 rounded py-3 px-4 leading-tight
                     focus:outline-none  focus:border-gray-500 dark:text-white 
                      dark:bg-slate-800 text-gray-700 appearance-none block w-full"
            // min="1"
            type="number"
            value={props.qty}
            onChange={props.handleQtyChange}
          />
          {/* {props.errorQty && (
            <p className="text-red-500 text-xs mt-2 px-2 capitalize  italic">
              {props.errorQty} *{" "}
            </p>
          )} */}
        </div>
        <div className="w-4/12 overflow-hidden   mb-6 ">
          <label className="dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm">
            Price
          </label>
          <input
            className="  border border-gray-200 rounded
                     py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500
                      dark:text-white dark:bg-slate-800 text-gray-700 appearance-none block w-full"
            // min="1"
            type="number"
            value={props.price}
            onChange={props.handlePriceChange}
          />
          {/* {props.errorPrice && (
            <p className="text-red-500 text-xs mt-2  px-2 capitalize  italic">
              {props.errorPrice} *{" "}
            </p>
          )} */}
        </div>
        <div className="w-4/12    mb-6 flex ">
          <div className="w-9/12">
            <label className="dark:text-white text-gray-700 block mb-2 tracking-wide  text-sm">
              Total
            </label>
            <p className="dark:text-white text-gray-700 font-semibold   px-2   py-4   ">
              {validateNo(props.qty * props.price)}
            </p>
          </div>
          <MdDelete
            onClick={props.removeInputField}
            className={`${
              props.inputArray.length < 2 ? "invisible" : "visible"
            }  text-xl  mt-12 hover:cursor-pointer w-3/12 text-gray-400 hover:text-red-700`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
