import React from "react";
import { FaCircle } from "react-icons/fa";
import { Props } from "../../types/details";

import Buttons from "./Button";
//
//
const InvoiceHeading: React.FC<Props> = (props) => {
   function handleTextColor() {
    if (props.invoice.status === "pending") {
      return "text-orange-400 ";
    } else if (props.invoice.status === "paid") {
      return "text-green-500";
    } else {
      return "text-black dark:text-white ";
    }
  }

   function handleBackgroundColor() {
    if (props.invoice.status === "pending") return "  bg-orange-100  ";
    if (props.invoice.status === "paid") return "bg-green-100   ";
    if (props.invoice.status === "draft") return "bg-gray-100   ";
  }

  return (
    <div className="dark:bg-slate-800 bg-white relative w-11/12   h-20 sm:justify-start sm:h-24 mt-8 mx-auto rounded-md flex justify-around items-center ">
      <p className=" dark:opacity-90 opacity-50 absolute left-3 text-sm ">
        Status
      </p>
      <div
        className={`${handleBackgroundColor()} dark:bg-slate-700   bg-opacity-50  absolute right-5 sm:static sm:ml-16   px-4 rounded-md py-2  `}
      >
        <p className={`${handleTextColor()}    capitalize font-semibold text-sm`}>
          <FaCircle className="h-2 w-2 inline" /> {props.invoice.status}
        </p>
      </div>

      <div className="right-0 absolute hidden sm:block ">
        <Buttons
          handleEditing={props.handleEditing}
          status={props.invoice.status}
          id={props.invoice._id}
        />
      </div>
    </div>
  );
};
export default InvoiceHeading;
