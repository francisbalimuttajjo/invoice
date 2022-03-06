import React from 'react'
import type { NextPage,GetServerSideProps } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Form from '../components/form/Form'
import{categories,invoices} from '../data'
import InvoiceList from '../components/InvoiceList'
import Header from '../components/Header'
import {Invoice} from '../types/types'
import { motion} from "framer-motion";
import {useContextProvider} from  '../context/context'
import axios from 'axios'

type Props={
data:Invoice
// filter:()=>void
}

const Home: NextPage <Props> = (props) => {
//const Home: NextPage  = (props) => {
  console.log('props',props)
  const store=props.data
 const [data,setData]=React.useState(store)
 const [description,setDescription]=React.useState('total ')
 const [displayForm,setDisplayForm]=React.useState(false)

  const [darkTheme]=useContextProvider()
 
 

   ///displaying form
 const displayNewInvoiceForm=()=>setDisplayForm(true)

 //hiding form
 const hideForm=()=>setDisplayForm(false)

 //categorizing forms
  const handleCategorizingInvoices=(value:string)=>{
    
    setData(invoices)
    
    if(value==='all'){
      setData(store)
      setDescription('total ')
    }else{
    const newData=store.filter((el:Invoice)=>el.status===value)  
    setData(newData)
    setDescription(value)
    
    }
        
  }  

 
 
  return (
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
           
            <InvoiceList invoices={data}  />
         
        </div> 
        </>
      
      
       
    </motion.div>   
  )
}



export default Home
export const getServerSideProps: GetServerSideProps = async (context) => {
  try{
    const res = await axios.get("http://localhost:3000/api/invoices");
    // const res = await axios.get(
    //   "https://invoicebafra.vercel.app/api/inoices"
    // );
    // console.log(res)
    return {
      props: { data: res.data.invoices },
    };

  }
  catch(err){
    return{
      props:{message:'something went wrong'}
    }
  }

}