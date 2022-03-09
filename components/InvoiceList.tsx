import React from "react";
import Invoice from "../components/Invoice";
import { AddressFormat } from "../types/types";
import { getSum } from "../utils/fns";

export type InvoiceFormat = {
  invoiceNumber: number;
  email: string;
  status: string;
  description: string;
  debtor: string;
  paymentDate: string;
  terms: number;
  issuingDate: string;
  _id: string;
  issuingAddress: AddressFormat;
  debtorsAddress: AddressFormat;
  items: { name: string; qty: number; price: number }[];
};
type Props = {
  invoices: InvoiceFormat[];
};

const InvoiceList: React.FC<Props> = (props) => {
  return (
    <>
      {props.invoices.map((invoice) => (
        <Invoice
          invoice={invoice}
          key={invoice._id}
          amount={getSum(invoice.items)}
        />
      ))}
    </>
  );
};

export default InvoiceList;
