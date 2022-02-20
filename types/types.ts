  //Address.tsx,Invoice.tsx,InvoiceDetails.tsx
  type AddressFormat={
    street:string
    city:string
    blockNumber:Number
    country:string

 }

 export type Address={
     address:AddressFormat
 }



 export type InvoiceProps={
    
    debtor:string
    status:string
       amount:number
     number:number | string
    // handleToggleTheme:()=>void
}
 export type Props={
    status:string
    title:string
    debtor:string
    street:string
    country:string
    block:string
    city:string
    email:string
    issuingDate:string
    paymentDate:string
    number:number
    items:{description:string,amount:number}[]
    IssuingAddress:AddressFormat
    debtorsAddress:AddressFormat
     
}
//invoiceList
interface Invoice{
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
  handleCategorizingInvoices:(a:string)=>void
}


