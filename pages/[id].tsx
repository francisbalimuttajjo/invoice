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
          <InvoiceDetails street='19 Mobutu Roard' country='Uganda' block='411' city='Kampala' status='pending' title='Re-branding' number={665734} />
            
        
        </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage