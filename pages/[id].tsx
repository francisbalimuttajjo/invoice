import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import Sidebar from '../components/Sidebar'
import Head from '../components/Head'
import InvoiceDetails from '../components/InvoiceDetails'
import { motion } from "framer-motion";
import {useContextProvider} from '../context/context'


const DetailsPage: NextPage = () => {
    
    const items=[
        {description:'paint',amount:9320},
        {description:'advice',amount:4200},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brusjjh',amount:2000},
        {description:'bruuyush',amount:2000},
    ]
    const [darkTheme]=useContextProvider()
    const router=useRouter()



    const invoice={
        debtor:'francis bafra mayanja' ,
        invoiceNumber:456353,
        debtorsAddress:{
            street:'Kampala Rd',
                     city:' Makindye',
                      block:  '2E',
                      country:' Uganda'
        },
        status:'pending', title:'Re-branding', InvoiceNumber:674345,
        issuingAddress:{
        street:'19 Mobutu Roard',
     
        country:'Uganda', block:'411', city:'Kampala' 

    },paymentDate:'21 Jan 2022',email:'bafra@gmail.com',issuingDate:'01 Jan 2022',items:[
        {description:'paint',amount:9320},
        {description:'advice',amount:4200},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brusjjh',amount:2000},
        {description:'bruuyush',amount:2000},
    ],
}
   
    return (
        <motion.div animate='animate' initial='initial' >
            <Head title={`UGX ${invoice.invoiceNumber}`}/>
            <div className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
            
                <Sidebar />
                <InvoiceDetails   invoice={invoice}  />
                
            
            </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage