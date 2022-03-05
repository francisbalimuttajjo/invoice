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



 export type InvoicePropsHome={
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
    terms:number,
    issuingDate:string,
    issuingAddress:AddressFormat,
    debtorsAddress:AddressFormat
    items:{name:string,qty:number,price:number}[],
  }
//invoice
export type InvoiceProps={
  cancel:()=>void
  invoice:InvoiceFormat
  checkEmptyField:()=>void
  nameChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
  qtyChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
  priceChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
  removeInputField:(e:number)=>void
  addInputField:(e: any)=>void
  items:{ qty: number, price: number, name: string,errorName:string,errorQty:string,errorPrice:string}[]

}

//invoice
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

