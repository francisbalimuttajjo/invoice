import React from "react";
import { validateNo } from "../../utils/fns";
import { TableProps } from "./types/details";

const Table: React.FC<TableProps> = (props) => {
  return (
    <div className="dark:bg-slate-900 dark:font-semibold  font-normal bg-gray-50    mt-8 sm:mt-16 rounded-t-md  w-11/12 mx-auto min-h-fit">
      <table className="table-fixed mx-auto w-10/12 my-4    ">
        <thead className="  text-xs  text-slate-400 md:text-base  ">
          <tr>
            <th className="mt-4 text-left">Item </th>
            <th className="text-left">Qty</th>
            <th className="text-left">Price</th>
            <th className="text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={index}>
              <td className="text-left ">{item.name}</td>
              <td className="text-left">{validateNo(item.qty)}</td>
              <td className="text-left">{validateNo(item.price)}</td>
              <td className="text-left">{validateNo(item.price * item.qty)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="dark:bg-black bg-slate-900 justify-around  flex rounded-b-md  py-4  w-full  min-h-fit">
        <p className="text-white text-sm font-semibold">Amount Due</p>
        <p className="text-white  font-bold">
          Ugx <span>{props.sum}</span>
        </p>
      </div>
    </div>
  );
};
export default Table;
