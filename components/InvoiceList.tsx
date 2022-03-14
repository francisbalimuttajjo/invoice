import React from 'react'
import Invoice from '../components/Invoice'
// import {InvoiceListProps} from '../types/types'
import {getSum} from '../utils/fns'

 export interface AddressFormat{
       street:string,
       country:string,
     postalAddress:string,
      city:string

 }

export type InvoiceFormat={  
    invoiceNumber:number,
    email?:string,
    status:string,
    description?:string,
    debtor:string,
    paymentDate:string,
    terms?:number,
    issuingDate:string,
    _id?:string,
    issuingAddress:AddressFormat,
    debtorsAddress:AddressFormat
    items:{name:string,qty:number,price:number}[],
  }
export type InvoiceListProps = {
  invoices: InvoiceFormat[]
}
  const InvoiceList:React.FC<InvoiceListProps>=(props)=>{
      
      return(
        <>
         { props.invoices.map(invoice=>        
            < Invoice paymentDate={invoice.paymentDate} debtor={invoice.debtor} key={invoice._id} amount={getSum(invoice.items)} invoiceNumber={invoice.invoiceNumber} status={invoice.status} email={''} issuingDate={''} _id={''} items={[]}  />
          
          ) }
        </>
      
  
      )
    }

    export default InvoiceList