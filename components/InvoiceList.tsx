import React from 'react'
import Invoice from '../components/Invoice'

interface Invoice{
    debtor:string,number:number,status:string,amount:number
   }
  
   type Props={
     invoices:Invoice[]
  
    
  }
  
  const InvoiceList:React.FC<Props>=(props)=>{
      
      return(
        <>
         { props.invoices.map(invoice=>        
            < Invoice  debtor={invoice.debtor} key={invoice.number}  amount={invoice.amount} number={invoice.number} status={invoice.status}  />
          
          ) }
        </>
      
  
      )
    }

    export default InvoiceList