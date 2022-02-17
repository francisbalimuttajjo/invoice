// import '../styles/globals.css'
// import { AnimatePresence } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion";

import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

// const spring = {
//   type: "spring",
//   damping: 20,
//   stiffness: 100,
//   when: "afterChildren"
// };

function MyApp({ Component, pageProps }: AppProps) {
  return(
  //   <AnimatePresence>
    
  //     <motion.div
  //       transition={spring}        
  //       initial={{ x: 300, opacity: 0 }}
  //       animate={{ x: 0, opacity: 1 }}
  //       exit={{ x: -300, opacity: 0 }}
        
  //     >
  //       <Component {...pageProps} />
  //     </motion.div>
    
  // </AnimatePresence>
       <AnimatePresence exitBeforeEnter>
         <Component {...pageProps} />
       </AnimatePresence>
    
  ) 
}

export default MyApp
