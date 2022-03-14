export interface AddressFormat {
  street: string;
  country: string;
  postalAddress: number;
  city: string;
}

//invoice
export interface InvoicePropsHome {
  amount: number;
  invoice: {
    invoiceNumber: number;
    email: string;
    status: string;
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
}

//invoice list
export interface InvoiceFormat  {
  invoiceNumber: number;
  email: string;
  status: string;
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
export interface Props {
  invoices: InvoiceFormat[];
};