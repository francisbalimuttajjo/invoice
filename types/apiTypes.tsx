import {AddressFormat} from './home'



 interface invoices {
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
//invoice.tsx
// export interface Invoices {
//   debtor: string;
//   status: string;
//   description: string;
//   issuingDate: string;
//   paymentDate: string;
//   email: string;
//   invoiceNumber: number;
//   terms: number;
//   debtorsAddress: AddressFormat;
//   issuingAddress: AddressFormat;
//   items: { qty: number; price: number; name: string }[];
// };
export interface Data  { invoices?: invoices[]; msg?: string; status: string };