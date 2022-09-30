export interface AddressFormat {
  street: string;
  country: string;
  postalAddress: number;
  city: string;
}


//invoice list
export interface InvoiceFormat  {
  invoiceNumber: number;
  email: string;
  status: 'paid'|'draft'|'pending';
  description: string;
  debtor: string;
  paymentDate: string;
  terms: number;
  issuingDate: Date;
  _id: string;
  issuingAddress: AddressFormat;
  debtorsAddress: AddressFormat;
  items: { name: string; qty: number; price: number }[];
};

//invoice
export interface InvoicePropsHome   {
  amount: number;
   invoice:InvoiceFormat

}

//invoice List
export interface Props {
  invoices: InvoiceFormat[];
};