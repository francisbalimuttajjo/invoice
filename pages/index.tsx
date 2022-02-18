import React from 'react'
import type { NextPage } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import InvoiceList from '../components/InvoiceList'
import Header from '../components/Header'
import { motion, AnimatePresence } from "framer-motion";
import {useThemeContext} from '../context/context'


 const categories =['pending','paid','draft']
 const invoices=[
  {status:'pending',debtor:'bafra mayanja',amount:5000,number:64564 },
  {status:'draft',debtor:'francis mayanja',amount:2000,number:6645464},
  {status:'pending',debtor:'francis mayanja',amount:2000,number:6645994},
  {status:'paid',debtor:'francis mayanja',amount:2000,number:6645864},
  {status:'paid',debtor:'francis mayanja',amount:2100,number:6695464 },
  {status:'pending',debtor:'francis mayanja',amount:2170,number:6695474 },
  {status:'draft',debtor:'bafra mayanja',amount:2900,number:66954649, }
]



const Home: NextPage = () => {

  const [darkTheme]=useThemeContext()
  

   
 
  return (
   <motion.div animate='animate' initial='initial'>
      <div className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
        <Head title='invoices'/>
        <Sidebar/>
        <div className='flex flex-col mx-auto md:w-9/12 '>
            <Header categories={categories} darkTheme={darkTheme} InvoiceTotal={invoices.length}/>
            <InvoiceList invoices={invoices}  />
          
        </div> 
          
      
       </div>
    </motion.div>   
  )
}



export default Home
