  //Address.tsx,Invoice.tsx,InvoiceDetails.tsx
  type AddressFormat={
       street:string,
       country:string,
     postalAddress:string,
      city:string

 }

 export type Address={
     address:AddressFormat
 }



 export type InvoiceProps={
    InvoiceDueDate:string
    debtor:string
    status:string
    
       amount:number
     number:number | string
    // handleToggleTheme:()=>void
}
export type InvoiceFormat={
  
    invoiceNumber:number,
    email:string,
    status:string,
    description:string,
    debtor:string,
    paymentDate:string,
    issuingDate:string,
    issuingAddress:AddressFormat,
    debtorsAddress:AddressFormat
    items:{name:string,qty:number,price:number}[],
  }

export type Props={

   handleEditing:()=>void
   invoice:InvoiceFormat
 }
//invoiceList
interface Invoice{
  InvoiceDueDate:string
  debtor:string,number:number,status:string,amount:number
 }

 export type InvoiceListProps={
   invoices:Invoice[]

  
}

//header.tsx
export type HeadingProps={
  InvoiceTotal:Number 
  darkTheme:boolean
  categories:string[]   
  description:string
  handleCategorizingInvoices:(a:string)=>void
  displayNewInvoiceForm:()=>void
 
}

//form
export type FormProps={
  hideForm:()=>void
}

//items 

