import React from 'react'
import type { NextPage } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import InvoiceList from '../components/InvoiceList'
import Header from '../components/Header'
import { motion, AnimatePresence } from "framer-motion";
import {useThemeContext} from '../context/context'
import {InvoiceListProps} from '../types/types'


 const categories =['pending','paid','draft']
 const invoices=[
  {status:'pending',debtor:'bafra mayanja',amount:5000,number:64564 },
  {status:'draft',debtor:'francis mayanja',amount:200000,number:6645464},
  {status:'pending',debtor:'francis mayanja',amount:2000,number:6645994},
  {status:'paid',debtor:'francis mayanja',amount:2000,number:6645864},
  {status:'paid',debtor:'francis mayanja',amount:2100,number:6695464 },
  {status:'pending',debtor:'francis mayanja',amount:21000,number:6695474 },
  {status:'draft',debtor:'bafra mayanja',amount:2900,number:66954649, },
  {status:'draft',debtor:'bafra mayanja',amount:29070,number:669580, }
]


type Invoices={status:string,debtor:string,amount:number,number:number}

// const n=invoices.filter(el=>el.status==='pending')
// console.log('n',n)

const Home: NextPage = () => {
  // const [data, dispatch] = React.useReducer(reducer, invoices);
  
  const [darkTheme]=useThemeContext()
  const handleCategorizingInvoices=(value:string)=>{
    // console.log('d1',data)
    //    console.log('value',value)
    //   dispatch({ type: "reset" });
    //    dispatch({ type: value });
    //    console.log('d2',data)
       
  }  
  // function reducer(data: any, action: { type: any }) {
  //   const newData = [...data];
  //   switch (action.type) {
  //     case "draft":
  //       return data.filter((el) => el.status == "draft");
  //       break;
  //     case "paid":
  //       return newData.filter((el) => el.status == "paid");
  //       break;
  //     case "pending":
  //       return newData.filter((el) => el.status == "pending");
  //       break;
  //     case "reset":
  //       return invoices;
  //       break;
      
  //   }
    
  // }
 
 
  return (
   <motion.div animate='animate' initial='initial' className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
   
        <Head title={`invoices (${invoices.length}) `}/>
        <Sidebar/>
        <div className='flex flex-col mx-auto md:w-9/12 '>
            <Header handleCategorizingInvoices={handleCategorizingInvoices}  categories={categories} darkTheme={darkTheme} InvoiceTotal={invoices.length}/>
            <InvoiceList invoices={invoices}  />
          
        </div> 
          
      
       
    </motion.div>   
  )
}



export default Home
