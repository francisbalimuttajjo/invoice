import React from "react";
import { MdDelete } from "react-icons/md";
import { validateNo } from "../../utils/fns";
import { ErrorMessage, Field, FieldArray } from "formik";
import {ItemsProps} from '../../types/form'


const item = { name: "", qty: 0, price: 0 };
const Items: React.FC<ItemsProps> = (props) => {
  return (
    <div className="w-full py-3 px-4  ">
      <label className=" font-bold  opacity-90 text-blue-500">Item List</label>
      <FieldArray
        name="items"
        render={(arrayHelpers) => (
          <div className="w-full  py-3">
            {props.items &&
              props.items.length > 0 &&
              props.items.map((item, index) => (
                <div key={index} className="w-full   sm:flex">
                  <div className="sm:w-5/12">
                    <label className="ml-2 label  text-sm  ">Name</label>
                    <Field className="field" name={`items.${index}.name`}  />
                    <div className="error-msg">
                      <ErrorMessage name={`items.${index}.name`} />
                    </div>
                  </div>
                  <div className="flex justify-around sm:ml-2 sm:w-7/12 ">
                    <div className="w-1/4">
                      <label className="ml-2 label  text-sm ">Qty</label>
                      <Field
                        type="number"
                        className=" field"
                        name={`items.${index}.qty`}
                        min='0'
                      />
                      <div className="error-msg">
                        <ErrorMessage name={`items.${index}.qty`} />
                      </div>
                    </div>
                    <div className="w-1/4">
                      <label className="ml-2 label  text-sm ">Price</label>
                      <Field
                        type="number"
                        className="field"
                        name={`items.${index}.price`}
                         min='0'
                      />
                      <div className="error-msg">
                        <ErrorMessage name={`items.${index}.price`} />
                      </div>
                    </div>
                    <div className="w-5/12    mb-6 flex ">
                      <div className="w-1/2">
                        <label className=" label  text-sm ">Total</label>
                        <p className="dark:text-white text-gray-700 font-semibold    px-2   py-4   ">
                          {validateNo(item.qty * item.price)}
                        </p>
                      </div>
                      <MdDelete
                        onClick={() => arrayHelpers.remove(index)}
                        className={`${
                          props.items.length < 2 ? "invisible" : "visible"
                        }  delete-btn`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div className="w-full   ">
              <button
                type="button"
                onClick={() => arrayHelpers.push(item)}
                className="newItem-btn    "
              >
                <span className="font-extrabold">+</span> Add New Item
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};
export default Items;
