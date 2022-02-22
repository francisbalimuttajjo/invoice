import type { NextPage } from 'next'
import { motion, AnimatePresence } from "framer-motion";
import Form from  '../components/Form'

const NewInvoice: NextPage = () => {
    return(
        <motion.div animate='animate' initial='initial'>
            <Form />
        </motion.div> 
        
    )

}

export default NewInvoice