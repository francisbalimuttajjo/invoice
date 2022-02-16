import React from 'react'
import type { NextPage } from 'next'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'



const Home: NextPage = () => {
  const[dark,setDark]=React.useState(false)
  const handleToggleTheme=()=>setDark(prev=>!prev)
  return (
    <>
      <Head title='invoices'/>
      <Sidebar dark={dark} handleToggleTheme={handleToggleTheme} />
     
    </>
  )
}

export default Home
