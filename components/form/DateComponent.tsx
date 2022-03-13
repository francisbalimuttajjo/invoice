import React from "react";
import DatePicker from "./DatePicker";
import Select from "./Select";
import { ErrorMessage } from "formik";


const DateComponent = () => {
  return (
    <div className="flex  w-full  relative  py-3">
      <div className="w-1/3 px-3 ">
        <label className="input-Label">Invoice Date</label>
        <DatePicker name="startDate" />
      </div>
      <div className="w-1/2 sm:w-1/3 px-3 right-0 absolute">
        <label className="input-Label">
          {" "}
          <span className="hidden sm:inline">Payment</span> Terms{" "}
        </label>

        <Select name="terms" />
        <div className="error-msg">
          <ErrorMessage name={`terms`} />
        </div>
      </div>
    </div>
  );
};
export default DateComponent;
