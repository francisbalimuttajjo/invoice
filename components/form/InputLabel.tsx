import React from "react";
import {InputLabelProps} from './types/form'
import { ErrorMessage, Field } from "formik";



const InputLabel: React.FC<InputLabelProps> = (props) => {
  return (
    <div className="w-full p-3 ">
      <label className="input-Label">{props.description}</label>
      <Field
        className="Input "
        type={props.email ? "email" : "text"}
        name={props.name}
        placeholder={props.placeholder}
      />
      <div className="error-msg">
        <ErrorMessage name={`${props.name}`} />
      </div>
    </div>
  );
};

export default InputLabel;
