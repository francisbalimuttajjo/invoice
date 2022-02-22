import React from 'react'
import type { NextPage } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Form from '../components/Form'
import InvoiceList from '../components/InvoiceList'
import Header from '../components/Header'
import { motion, AnimatePresence } from "framer-motion";
import {useThemeContext} from '../context/context'



 const categories =['all','pending','paid','draft']
 const invoices=[
  {status:'pending',debtor:'bafra mayanja',amount:5000,number:64564,InvoiceDueDate:"2 Aug 2022" },
  {status:'draft',debtor:'francis mayanja',amount:200000,number:6645464,InvoiceDueDate:"2 Sept 2022"},
  {status:'pending',debtor:'francis mayanja',amount:2000,number:6645994,InvoiceDueDate:"1 Jan 2022"},
  {status:'paid',debtor:'francis mayanja',amount:2000,number:6645864,InvoiceDueDate:"2 Aug 2022"},
  {status:'pending',debtor:'francis mayanja',amount:2100,number:6695464,InvoiceDueDate:"2 Aug 2022" },
  {status:'pending',debtor:'francis mayanja',amount:21000,number:6695474,InvoiceDueDate:"2 Aug 2022" },
  {status:'draft',debtor:'bafra mayanja',amount:2900,number:66954649,InvoiceDueDate:"2 Aug 2022" },
  {status:'draft',debtor:'bafra mayanja',amount:29070,number:669580 ,InvoiceDueDate:"2 Aug 2022" }
]



//storing invoices
const store=invoices
//

const Home: NextPage = () => {
 const [data,setData]=React.useState(store)
 const [description,setDescription]=React.useState('total ')
 const [displayForm,setDisplayForm]=React.useState(false)

  const [darkTheme]=useThemeContext()
 
 

   ///displaying form
 const displayNewInvoiceForm=()=>setDisplayForm(true)

 //hiding form
 const hideForm=()=>setDisplayForm(false)

 //categorizing forms
  const handleCategorizingInvoices=(value:string)=>{
    
    setData(invoices)
    
    if(value==='all'){
      setData(invoices)
      setDescription('total ')
    }else{
    const newData=store.filter(el=>el.status===value)  
    setData(newData)
    setDescription(`${value} `)
    
    }
        
  }  

 
 
  return (
   <motion.div animate='animate' initial='initial' className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
   
       
         {!displayForm &&
         <>
          <Head title={`invoices (${data.length}) `}/>
        <Sidebar/>
        <div className='flex flex-col mx-auto md:w-9/12 '>
            <Header displayNewInvoiceForm={displayNewInvoiceForm}
             description={description} handleCategorizingInvoices={handleCategorizingInvoices}  categories={categories} darkTheme={darkTheme} InvoiceTotal={data.length}/>
            <InvoiceList invoices={data}  />
         
        </div> 
        </>
         } 
         {
           displayForm && < Form hideForm={hideForm} />
         }
      
       
    </motion.div>   
  )
}



export default Home






