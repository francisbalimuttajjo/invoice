import React from "react";
import { ErrorMessage, Field } from "formik";
import { CityComponentProps } from "./types/form";


const Input: React.FC<CityComponentProps> = (props) => {
  return (
    <div className="flex  w-full  relative  py-3 ">
      <div className="w-1/2 px-3  ">
        <label className="input-Label">{props.label1}</label>
        <Field className="Input " type="text" name={props.name1} />
        <div className="error-msg">
          <ErrorMessage name={`${props.name1}`} />
        </div>
      </div>
      <div className="w-1/2 sm:w-1/3 px-3  right-0 absolute">
        <label className="input-Label">{props.label2}</label>
        <Field className="Input " type="text" name={props.name2} />
      </div>
    </div>
  );
};

export default Input;
