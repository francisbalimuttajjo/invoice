import React from "react";
import Invoice from "./Invoice";
import NoInvoice from "./NotFound";
import { Props } from "../../types/home";
import { getSum } from "../../utils/fns";

const InvoiceList: React.FC<Props> = (props) => {
  return (
    <>
      {props.invoices.length > 0 ? (
        props.invoices.map((invoice) => (
          <Invoice
            invoice={invoice}
            key={invoice._id}
            amount={getSum(invoice.items)}
          />
        ))
      ) : (
        <NoInvoice title="there are No invoices Currently! click on the button above to add a new one!!!" />
      )}
    </>
  );
};

export default InvoiceList;
