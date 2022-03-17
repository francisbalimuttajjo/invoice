import React from 'react'
import { InvoiceFormat } from "../../types/home";



const UseData = ( invoices:InvoiceFormat[]) => {
     const store = invoices;
  const [data, setData] = React.useState(store);
  const [description, setDescription] = React.useState <string>("total ");
  const [displayForm, setDisplayForm] = React.useState<boolean>(false);

  ///displaying form
  const displayNewInvoiceForm = () => setDisplayForm(true);

  //hiding form
  const hideForm = () => setDisplayForm(false);

  //categorizing forms
  const handleCategorizingInvoices = (value: string) => {
    // setData(invoice)

    if (value === "all") {
      setData(store);
      setDescription("total ");
    } else {
      const newData = store.filter((el: InvoiceFormat) => el.status === value);
      setData(newData);
      setDescription(value);
    }
  };
  return { data, description, displayForm, displayNewInvoiceForm, hideForm, handleCategorizingInvoices }
 }
export default UseData