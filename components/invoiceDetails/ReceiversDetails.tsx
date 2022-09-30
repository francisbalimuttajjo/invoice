import React from "react";
import { InvoiceProps } from "../../types/details";
import { stringifyDate } from "../../utils/fns";
import Address from "./Address";

const ReceiverDetails: React.FC<InvoiceProps> = (props) => {
  return (
    <>
      <div className="px-4 mt-8 flex sm:mt-16 sm:justify-around  sm:relative ">
        <div>
          <div>
            <p className="dark:opacity-90 opacity-50  text-xs xs:text-base">
              Invoice Date
            </p>
            <time className="text-xs xs:text-base">
              {" "}
              <strong>{stringifyDate(props.invoice.issuingDate)} </strong>
            </time>
          </div>
          <div className="mt-8">
            <p className="dark:opacity-90 opacity-50 text-xs xs:text-base">
              Payment Due
            </p>
            <time className="text-xs xs:text-base">
              {" "}
              <strong>{stringifyDate(props.invoice.paymentDate)} </strong>
            </time>
          </div>
        </div>

        <div className="right-0 pr-9 absolute sm:static">
          <h6 className="dark:opacity-90 opacity-50">Bill To</h6>
          <p className="capitalize text-xs xs:text-base">
            <strong>{props.invoice.debtor}</strong>
          </p>
          <div className="dark:opacity-90 opacity-50 text-xs xs:text-base mt-8 sm:mt-0 sm:text-xs">
            <Address address={props.invoice.debtorsAddress} />
          </div>
        </div>
        <div className="  hidden sm:block">
          <p className="dark:opacity-90 opacity-50">Sent to</p>
          <a href={`mailto:${props.invoice.email}`}>
            <strong>
              <em>{props.invoice.email}</em>
            </strong>
          </a>
        </div>
      </div>
      <div className="px-4 mt-8 sm:hidden ">
        <p className="dark:opacity-90 opacity-50">Sent to</p>
        <a href={`mailto:${props.invoice.email}`}>
          <strong>
            <em>{props.invoice.email}</em>
          </strong>
        </a>
      </div>
    </>
  );
};

export default ReceiverDetails;
