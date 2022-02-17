import React from 'react'
import type { NextPage } from 'next'
import {useRouter} from 'next/router'
import Sidebar from '../components/Sidebar'
import {fadeIn} from '../animations/animation'
import { motion, AnimatePresence } from "framer-motion";


const DetailsPage: NextPage = () => {
    const[dark,setDark]=React.useState(false)
  const handleToggleTheme=()=>setDark(prev=>!prev)
    const router=useRouter()
    
   
    return (
        <motion.div animate='animate' initial='initial' >
        <div className={`${dark? 'bg-slate-900': ""} ${dark? 'text-white': ""} min-h-screen  sm:flex`}>
          
          <Sidebar dark={dark} handleToggleTheme={handleToggleTheme} />
          
            
          <button onClick={()=>router.back()} >back</button>
          <motion.div variants={fadeIn} >
            <div>hello</div>
            
        </motion.div>
        </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage