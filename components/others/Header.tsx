import React from "react";
import Select from "react-select";
import { HeadingProps } from "./types/others";

const options = [
  { value: "all", label: "all" },
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "paid", label: "Paid" },
];

const Header: React.FC<HeadingProps> = (props) => {
  const handleChange = (e: any) => {
    props.handleCategorizingInvoices(e.value);
  };

  return (
    <div className=" flex  mt-7  mx-auto justify-around">
      <div className="flex flex-col  ">
        <h1 className="font-semibold text-3xl ">Invoices</h1>
        <p className=" text-sm opacity-50 mt-1 ">
          There {props.InvoiceTotal > 1 ? " are" : "is"} {props.InvoiceTotal}{" "}
          {props.description}{" "}
          {props.InvoiceTotal > 1 ? " Invoices" : " Invoice"}{" "}
        </p>
      </div>
      <div className="flex  sm:justify-end  -ml-10    ">
        <label className="mt-3 hidden  text-xs xs:text-base xs:flex justify-center align-center text-blue-">
          Filter
          <span className="hidden xs:inline">by status</span>
        </label>
        <div className="mr-2 my-2 sm:ml-2 dark:bg-slate-900 flex dark:text-purple-700 ">
          <Select
            placeholder="Filter"
            onChange={handleChange}
            options={options}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: "#ddebe0",
                primary: "#7c7ceb",
              },
            })}
          />
        </div>
        <button
          onClick={props.displayNewInvoiceForm}
          className="bg-blue-500 flex px-2 py-2 rounded-3xl font-extrabold mx-auto  h-12 hover:bg-blue-400"
        >
          <h1 className="bg-white font-extrabold py-1 text-blue-500 h-8 w-8 rounded-full">
            +
          </h1>
          <h1 className=" text-white font-medium ml-1 my-1 ">
            New
            <span className="hidden xs:inline ml-1">Invoice</span>
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
