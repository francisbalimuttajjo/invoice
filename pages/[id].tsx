import React from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import { InferGetServerSidePropsType } from 'next'
import Sidebar from '../components/Sidebar'
import EditForm from '../components/EditForm'
import Head from '../components/Head'
import InvoiceDetails from '../components/invoiceDetails/InvoiceDetails'
import { motion } from "framer-motion";
import { InvoiceFormat} from '../types/types'
import{checkForEmptyFields} from '../utils/fns'
import {useContextProvider} from '../context/context'

type Invoice = {
  invoice:InvoiceFormat
}
// Layout: React.FC<OwnProps>
const DetailsPage: React.FC<Invoice>= (props)=>{
// NextPage = (props: Invoice)
  // => {
 // function DetailsPage({ invoice }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('data',props.invoice)
       const [darkTheme]=useContextProvider()
       const [editing,setEditing]=React.useState(false)
       const[items,setItems]=React.useState(props.invoice.items )
       const handleEditing=()=>setEditing(true)   

//checking if their empty fields in items array
// const checkEmptyField=()=>{
//         const list=[...items]
        

//     for(let j=0;j<list.length;j++){ 
//       //reseting state
//       list[j].errorName=''
//       list[j].errorQty=''
//       list[j].errorPrice=''
   
//         if(list[j].name==""){
//               list[j].errorName='name is required'           
//             setItems(list);
            
//           }
//             if(list[j].qty<1 || isNaN(list[j].qty)  ){
               
//         list[j].errorQty='required'
      
//         setItems(list);
        
//       }
//         if(list[j].price < 1 || isNaN(list[j].price) ){
//         list[j].errorPrice='required'
//         setItems(list);
        
//       }
      
//     }  
    
//     return checkForEmptyFields(items)
//     }
//
  //changes in input fields     
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

  //removing field from array
  const removeInputField=(index:number)=>{
       
       const list = [...items];
       if(list.length===1)return
       list.splice(index, 1);
       setItems(list);
  }
//adding input field
  const addInputField = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setItems([...items, {
      qty: 0, price: 1, name: "",
      //errorName: '', errorQty: '', errorPrice: ''
    }]);
  };
    return (
        <motion.div animate='animate' initial='initial' >
            
            <Head title={`${editing ? 'edit |': ""} UGX ${props.invoice.invoiceNumber}`}/>
            <div className={`${editing ? 'fixed  overflow-hidden md:full ' : "" } ${darkTheme? 'bg-slate-900 text-white ': ""} w-full min-h-screen  sm:flex`}
           
            >
             
                <Sidebar />
                <InvoiceDetails handleEditing={handleEditing}   invoice={props.invoice}  />
             
             {editing &&
              <EditForm 
              nameChange={nameChange} 
              qtyChange={qtyChange} 
              priceChange={priceChange} 
              removeInputField={removeInputField}
              addInputField={addInputField}
              // checkEmptyField={checkEmptyField}
              invoice={props.invoice } items={items} cancel={()=>setEditing(false)} />}
                
                
            
            </div>
        
      </motion.div>  
        
            
            
    )
}

export default DetailsPage


type Data =  InvoiceFormat

export const getServerSideProps = async (req: { query: { id: string } }) => {
  const res = await axios.get(
    //`https://invoicebafra.vercel.app/api/${req.query.id}`
    `http://localhost:3000/api/${req.query.id}`
                     
  );
  console.log('res',res)
  const invoice: Data = res.data.invoice
   if (!invoice) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      invoice,
    },
  }
}