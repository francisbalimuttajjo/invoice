import React from 'react'
import Invoice from '../components/Invoice'
import {InvoiceListProps} from '../types/types'


  
  const InvoiceList:React.FC<InvoiceListProps>=(props)=>{
      
      return(
        <>
         { props.invoices.map(invoice=>        
            < Invoice  debtor={invoice.debtor} key={invoice.number}  amount={invoice.amount} number={invoice.number} status={invoice.status}  />
          
          ) }
        </>
      
  
      )
    }

    export default InvoiceList