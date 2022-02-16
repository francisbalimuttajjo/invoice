import React from 'react'
import type { NextPage } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

 const categories =['pending','paid','draft']

const Home: NextPage = () => {
  const[dark,setDark]=React.useState(false)
  const handleToggleTheme=()=>setDark(prev=>!prev)
  return (
    <div className={`${dark? 'bg-slate-900': ""} ${dark? 'text-white': ""}  sm:flex`}>
      <Head title='invoices'/>
      <Sidebar dark={dark} handleToggleTheme={handleToggleTheme} />
      <Header categories={categories} dark={dark} InvoiceTotal={2}/>
     
    </div>
  )
}



export default Home
