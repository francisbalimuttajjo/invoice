import React from 'react'
import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import EditForm from '../components/EditForm'
import Head from '../components/Head'
import InvoiceDetails from '../components/invoiceDetails/InvoiceDetails'
import { motion } from "framer-motion";
import{invoice} from '../data'
import{checkForEmptyFields} from '../utils/fns'
import {useContextProvider} from '../context/context'

const DetailsPage: NextPage = () => {
       const [darkTheme]=useContextProvider()
       const [editing,setEditing]=React.useState(false)
       const[items,setItems]=React.useState(invoice.items)
       const handleEditing=()=>setEditing(true)   

//hiding
const checkEmptyField=()=>{
    console.log('clicked')
     const list=[...items]
    for(let j=0;j<list.length;j++){
      //reseting state
      list[j].errorName=''
      list[j].errorQty=''
      list[j].errorPrice=''

        if(list[j].name==''){
            console.log(list[j])
            list[j].errorName='name is required'
           
            setItems(list);
            
          }
            if(list[j].qty<1  ){
        list[j].errorQty='required'
        setItems(list);
        
      }
        if(list[j].price==1  ){
        list[j].errorPrice='required'
        setItems(list);
        
      }
      return checkForEmptyFields(items)
    }  
    
    // const list=[...items]
    // for(let j=0;j<list.length;j++){
    //   //reseting state
    //   list[j].errorName=''
    //   list[j].errorQty=''
    //   list[j].errorPrice=''
     
    //   if(list[j].name==''){
    //     list[j].errorName='name is required'
       
    //     setItems(list);
        
    //   }
    //   if(list[j].qty<1  ){
    //     list[j].errorQty='required'
    //     setItems(list);
        
    //   }
    }
//
       
const nameChange = (e:React.ChangeEvent<HTMLSelectElement>, index:number) => {
    
     const list = [...items];
      list[index].name = e.target.value;
        setItems(list);
  };
  const qtyChange = (e:React.ChangeEvent<HTMLSelectElement>, index:number) => {
    
     const list = [...items];
      list[index].qty =parseInt( e.target.value);
        setItems(list);
  };
  const priceChange = (e:React.ChangeEvent<HTMLSelectElement>, index:number) => {
    
     const list = [...items];
      list[index].price =parseInt( e.target.value);
        setItems(list);
  };
  const removeInputField=(index:number)=>{
       console.log(index)
       const list = [...items];
       if(list.length===1)return
       list.splice(index, 1);
       setItems(list);
  }

  const addInputField = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setItems([...items, { qty: 0, price: 1, name: "",errorName:'',errorQty:'',errorPrice:''}]);
  };
    return (
        <motion.div animate='animate' initial='initial' >
            
            <Head title={`${editing ? 'edit |': ""} UGX ${invoice.invoiceNumber}`}/>
            <div className={`${editing ? 'fixed  overflow-hidden md:full ' : "" } ${darkTheme? 'bg-slate-900 text-white ': ""} w-full min-h-screen  sm:flex`}
           
            >
             
                <Sidebar />
                <InvoiceDetails handleEditing={handleEditing}   invoice={invoice}  />
             
             {editing &&
              <EditForm 
              nameChange={nameChange} 
              qtyChange={qtyChange} 
              priceChange={priceChange} 
              removeInputField={removeInputField}
              addInputField={addInputField}
              checkEmptyField={checkEmptyField}
              invoice={invoice } items={items} cancel={()=>setEditing(false)} />}
                
                
            
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