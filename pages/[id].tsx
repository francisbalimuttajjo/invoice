import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import EditForm from '../components/EditForm'
import Head from '../components/Head'
import InvoiceDetails from '../components/invoiceDetails/InvoiceDetails'
import { motion } from "framer-motion";
import {useContextProvider} from '../context/context'


const DetailsPage: NextPage = () => {
       const [darkTheme]=useContextProvider()
       const [editing,setEditing]=React.useState(false)
       const handleEditing=()=>setEditing(true)
    



    const invoice={
        debtor:'francis bafra mayanja' ,
        invoiceNumber:456353,
        debtorsAddress:{
            street:'Kampala Rd',
                     city:' Makindye',
                      postalAddress:  '2E',
                      country:' Uganda'
        },
        status:'pending', description:'Re-branding', InvoiceNumber:674345,
        issuingAddress:{
        street:'19 Mobutu Roard',
     
        country:'Uganda', postalAddress:'411', city:'Kampala' 

    },paymentDate:'21 Jan 2022',email:'bafra@gmail.com',issuingDate:'01 Jan 2022',items:[
        // { qty: 7, price: 40, name: "eggs", },
        // { qty: 20, price: 911, name: "eggs" },
        // { qty: 11, price: 230, name: "eggs" },
        // { qty: 4, price: 100, name: "eggs2" },
        // { qty: 6, price: 200, name: "eggs" }
        // { qty: 13, price: 31, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
        // { qty: 20, price: 19, name: "egg",errorName:'',errorQty:'',errorPrice:'' },
        // { qty: 20, price: 19, name: "egg",errorName:'',errorQty:'',errorPrice:'' },
        // { qty: 20, price: 19, name: "egg",errorName:'',errorQty:'',errorPrice:'' },
       

        { qty: 4, price: 41, name: "iik",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 0, price: 1, name: "jjj",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 7, price: 40, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 20, price: 911, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 11, price: 230, name: "eggs",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 4, price: 100, name: "eggs2",errorName:'',errorQty:'',errorPrice:'' },
        { qty: 6, price: 200, name: "eggs",errorName:'',errorQty:'',errorPrice:'' }
       
    ],
}
   
    return (
        <motion.div animate='animate' initial='initial' >
            
            <Head title={`${editing ? 'edit |': ""} UGX ${invoice.invoiceNumber}`}/>
            <div className={`${editing ? 'fixed  overflow-hidden md:full ' : "" } ${darkTheme? 'bg-slate-900 text-white ': ""} w-full min-h-screen  sm:flex`}
           
            >
             
                <Sidebar />
                <InvoiceDetails handleEditing={handleEditing}   invoice={invoice}  />
             
             {editing &&
              <EditForm  invoice={invoice } cancel={()=>setEditing(false)} />}
                
                
            
            </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage





// import React from 'react'
// import type { NextPage } from 'next'
// import Sidebar from '../components/Sidebar'
// import Head from '../components/Head'
// import InvoiceDetails from '../components/invoiceDetails/InvoiceDetails'
// import { motion } from "framer-motion";
// import {useContextProvider} from '../context/context'


// const DetailsPage: NextPage = () => {
//        const [darkTheme]=useContextProvider()
    



//     const invoice={
//         debtor:'francis bafra mayanja' ,
//         invoiceNumber:456353,
//         debtorsAddress:{
//             street:'Kampala Rd',
//                      city:' Makindye',
//                       block:  '2E',
//                       country:' Uganda'
//         },
//         status:'pending', title:'Re-branding', InvoiceNumber:674345,
//         issuingAddress:{
//         street:'19 Mobutu Roard',
     
//         country:'Uganda', block:'411', city:'Kampala' 

//     },paymentDate:'21 Jan 2022',email:'bafra@gmail.com',issuingDate:'01 Jan 2022',items:[
//         {name:'paint',amount:9320},
//         {name:'advice',amount:4200},
//         {name:'brush',amount:2000},
//         {name:'brush',amount:2000},
//         {name:'brush',amount:2000},
//         {name:'brush',amount:2000},
//         {name:'brush',amount:2000},
//         {name:'brusjjh',amount:2000},
//         {name:'bruuyush',amount:2000},
//     ],
// }
   
//     return (
//         <motion.div animate='animate' initial='initial' >
            
//             <Head title={`UGX ${invoice.invoiceNumber}`}/>
//             <div className={`${darkTheme? 'bg-slate-900 text-white ': ""}  min-h-screen  sm:flex`}>
                 
//                 <Sidebar />
//                 <InvoiceDetails   invoice={invoice}  />
                
            
//             </div>
        
//       </motion.div>  
        
            
            
//     )
// }

// export default DetailsPage