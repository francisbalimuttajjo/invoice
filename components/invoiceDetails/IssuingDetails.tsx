import React from "react";
import { InvoiceProps } from "../../types/details";
import Address from "./Address";

const IssuingDetails: React.FC<InvoiceProps> = (props) => {
  return (
    <>
      <div className="flex flex-col px-4 py-4">
        <div className="sm:flex relative">
          <div>
            <h1 className="text-neutral-400 font-bold ">
              #
              <span className="dark:text-white text-black text-sm opacity-80">
                UG{props.invoice.invoiceNumber}
              </span>
            </h1>
            <p className="dark:opacity-90 opacity-50  text-sm font-normal -mt-1">
              {props.invoice.description}
            </p>
          </div>

          <div className="dark:opacity-90 opacity-50 hidden sm:block text-right   right-3 absolute">
            <Address address={props.invoice.issuingAddress} />
          </div>
        </div>
      </div>
      <div className="dark:opacity-90 opacity-50 sm:hidden text-xs xs:text-base mt-8 px-4  ">
        <Address address={props.invoice.issuingAddress} />
      </div>
    </>
  );
};

export default IssuingDetails;
