import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import Sidebar from '../components/Sidebar'
import InvoiceDetails from '../components/InvoiceDetails'
import { motion } from "framer-motion";
import {useThemeContext} from '../context/context'


const DetailsPage: NextPage = () => {
    
    const items=[
        {description:'paint',amount:9320},
        {description:'advice',amount:4200},
        {description:'brush',amount:2000},
        {description:'brush',amount:2000},
        {description:'brusjjh',amount:2000},
        {description:'bruuyush',amount:2000},
    ]
    const [darkTheme]=useThemeContext()
    const router=useRouter()
    const homeAddress={
         street:'20,Kampala Rd',
                 city:' Kampala',
                  blockNumber:  231,
                  country:' Uganda'
    }
    const debtorsAddress={
        street:'19Mobutu Rd',
                 city:' Makindye',
                  blockNumber:  2,
                  country:' Uganda'
    }
   
    return (
        <motion.div animate='animate' initial='initial' >
            <div className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
            
            <Sidebar />
            <InvoiceDetails
            paymentDate='21 Jan 2022'
            issuingDate='21 Oct 2021'
             items={items} debtorsAddress={debtorsAddress} IssuingAddress={homeAddress} email='bamayanja@gmail.com' street='19 Mobutu Roard' debtor='francis bafra mayanja' country='Uganda' block='411' city='Kampala' status='pending' title='Re-branding' number={665734} />
                
            
            </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage