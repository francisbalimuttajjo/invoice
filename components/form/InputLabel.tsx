import React from "react";
type PropsTypes = {
  description: string;
  inputValue: string;
  placeholder?: string;
  handleInputChange: (a: any) => void;
  email?: boolean;
  name: string;
  error?: string | boolean;
};

const InputLabel: React.FC<PropsTypes> = (props) => {
  return (
    <div className="w-full px-3  sm:w-11/12 md:w-9/12">
      <label className="dark:text-white text-gray-700 block  tracking-wide  text-sm  mb-2">
        {props.description}
      </label>
      <input
        className="  border focus:border-gray-500 border-gray-200 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none appearance-none block w-full  dark:text-white   dark:bg-slate-800 text-black 
           placeholder-gray-300 "
        type={`${props.email ? "email" : "text"}`}
        onChange={props.handleInputChange}
        value={props.inputValue}
        name={props.name}
        required
        placeholder={props.placeholder}
      />
      {props.error && (
        <p className="text-red-500 text-xs -mt-2 px-2 capitalize mb-3 italic">
          {props.error} *{" "}
        </p>
      )}
    </div>
  );
};

export default InputLabel;
