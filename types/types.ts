  //Address.tsx,Invoice.tsx,InvoiceDetails.tsx
  type AddressFormat={
   
       
    street:string,
   
    country:string, block:string, city:string

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


export type Props={

   
   invoice:{
     invoiceNumber:number,
     email:string,
     status:string,
     title:string,
     debtor:string,
     paymentDate:string,
     issuingDate:string,
     issuingAddress:AddressFormat,
     debtorsAddress:AddressFormat
     items:{description:string,amount:number}[],
   }
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

