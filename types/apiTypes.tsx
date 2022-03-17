import { InvoiceFormat } from "./home";

//api files 
export interface Data {
  invoice?: InvoiceFormat;
  invoices?: InvoiceFormat[];
  msg?: string;
  status: string;
}
