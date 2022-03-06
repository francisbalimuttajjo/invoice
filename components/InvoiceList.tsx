import React from 'react'
import Invoice from '../components/Invoice'
import {InvoiceListProps} from '../types/types'
import {getSum} from '../utils/fns'

  
  const InvoiceList:React.FC<InvoiceListProps>=(props)=>{
      
      return(
        <>
         { props.invoices.map(invoice=>        
            < Invoice paymentDate={invoice.paymentDate} debtor={invoice.debtor} key={invoice._id}  amount={getSum(invoice.items)} invoiceNumber={invoice.invoiceNumber} status={invoice.status}  />
          
          ) }
        </>
      
  
      )
    }

    export default InvoiceList