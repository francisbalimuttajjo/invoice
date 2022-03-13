import React from "react";
import Invoice from "./Invoice";
import { Props } from "./types/home";
import { getSum } from "../../utils/fns";



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
