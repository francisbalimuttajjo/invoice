import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Form from '../components/form/Form'
//import Form from '../Form'
import{categories} from '../data'
import InvoiceList from '../components/InvoiceList'
import Header from '../components/Header'
import { InvoiceFormat} from '../types/types'
import { motion} from "framer-motion";
import {useContextProvider} from  '../context/context'
import axios from 'axios'


  function Home({ data1 }: InferGetServerSidePropsType<typeof getServerSideProps>) {
 
  const store=data1
 const [data,setData]=React.useState<any>(store)
 const [description,setDescription]=React.useState('total ')
 const [displayForm,setDisplayForm]=React.useState(false)

  const [darkTheme]=useContextProvider()
 
 

   ///displaying form
 const displayNewInvoiceForm=()=>setDisplayForm(true)

 //hiding form
 const hideForm=()=>setDisplayForm(false)

 //categorizing forms
  const handleCategorizingInvoices=(value:string)=>{
    
    // setData(invoice)
    
    if(value==='all'){
      setData(store)
      setDescription('total ')
    }else{
    const newData=store.filter((el:InvoiceFormat)=>el.status===value)  
    setData(newData)
    setDescription(value)
    
    }
        
  }  

 
 
  return (
    // <Form />
   <motion.div animate='animate' initial='initial' className={`${darkTheme? 'bg-slate-900 text-white': ""}  min-h-screen  sm:flex`}>
   
       
         <>
         <Sidebar 
         displayForm={displayForm}
          /> 
         { displayForm &&
          <div className='   '>
            <Head title='New Invoice' />
                       < Form hideForm={hideForm} />
           </div> 
         }
          <Head title={`invoices (${data.length}) `}/>
            
         
        <div className={`${displayForm ? 'fixed sm:ml-24 md:ml-48 overflow-hidden md:w-11/12 ' : "" }  mx-auto  md:w-9/12`}>
            <Header displayNewInvoiceForm={displayNewInvoiceForm}
             description={description} handleCategorizingInvoices={handleCategorizingInvoices}  categories={categories} darkTheme={darkTheme} InvoiceTotal={data.length}/>
           
          <InvoiceList invoices={data} />
          {data.length < 1 &&<h1>There no invoices currently, click on add button to add one</h1>}
         
        </div> 
        </>
      
      
       
    </motion.div>   
  )
}



export default Home




type Data =  InvoiceFormat[] 

export const getServerSideProps = async () => {
  const res = await axios.get(
    //"https://invoicebafra.vercel.app/api/invoices"
    "http://localhost:3000/api/invoices"
                     
  );
  const data1: Data = res.data.invoices

  return {
    props: {
      data1,
    },
  }
}

