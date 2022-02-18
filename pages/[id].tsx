import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import Sidebar from '../components/Sidebar'
import InvoiceDetails from '../components/InvoiceDetails'
import {fadeIn} from '../animations/animation'
import { motion, AnimatePresence } from "framer-motion";
import {useThemeContext} from '../context/context'


const DetailsPage: NextPage = () => {
    
    const [darkTheme]=useThemeContext()
    const router=useRouter()
    
   
    return (
        <motion.div animate='animate' initial='initial' >
        <div className={`${darkTheme? 'bg-slate-900': ""} ${darkTheme? 'text-white': ""} min-h-screen  sm:flex`}>
          
          <Sidebar />
          <InvoiceDetails status='paid' />
            
          {/* <button onClick={()=>router.back()} >back</button>
          <motion.div variants={fadeIn} >
            <div>hello</div>
            <div>hello</div>
            <div>hello</div> */}
            
        {/* </motion.div> */}
        </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage