import React from 'react'
import {useRouter} from 'next/router'
import { IoIosArrowBack } from "react-icons/io";
import  Wrapper from '../others/Wrapper'
import {useContextProvider} from '../../context/context'
import {Props} from './types/details'
import { FaCircle } from "react-icons/fa";
import {getSum,validateNo,stringifyDate, handleColor,
  handleBackgroundColor} from '../../utils/fns'
import Address from './Address'
import useApi from './useApi'
import Buttons from './Button'
import Table from './Table'

 


const InvoiceDetails:React.FC<Props>=(props)=>{
       const [handlePaid, handleDelete, loading, error] = useApi(props.invoice._id)
    const router=useRouter()
    const handleRouterBack=()=>router.back()
   
    const [darkTheme]=useContextProvider()

      
     
  
    // function handleColor() {
    //     if (props.invoice.status === "pending") {
    //       return "text-orange-400";
    //     } else if (props.invoice.status === "paid") {
    //       return "text-green-500";
    //     } else {
    //       return "text-black dark:text-white";
    //     }
    //   }
    
     
     
    //     function handleBackgroundColor() {
    //     if (props.invoice.status === "pending") return "bg-orange-100";
    //     if (props.invoice.status === "paid") return "bg-green-100";
    //     if (props.invoice.status === "draft") return "bg-gray-100";
    //   }


    return (
       <div className={`${darkTheme ? 'dark' : ''} sm:w-10/12 md:w-7/12 sm:mx-auto  sm:pb-8`}
       
       > 
           <div className='mt-8 ml-4  flex '>
               <IoIosArrowBack
               className='font-light cursor-pointer mt-1 opacity-50  '
                onClick={handleRouterBack}
                />
                 <p className='dark:opacity-90 opacity-50 -mt-l ml-3'
               
                 >Go back</p>
           </div>
            <Wrapper>
               <div className='dark:bg-slate-800 bg-white relative w-11/12   h-20 sm:justify-start sm:h-24 mt-8 mx-auto rounded-md flex justify-around items-center '>
                
                 <p className= ' dark:opacity-90 opacity-50 absolute left-3 text-sm '>Status</p>
                 <div className={`${handleBackgroundColor(props)} dark:bg-slate-700   bg-opacity-50  absolute right-5 sm:static sm:ml-16   px-4 rounded-md py-2  `}>
                       
                       <p className={`${handleColor(props)}    capitalize font-semibold text-sm`}><FaCircle className='h-2 w-2 inline' /> {props.invoice.status}</p> 
           
                   </div>
                 
                 <div className='right-0 absolute hidden sm:block '>
              <Buttons handleEditing={props.handleEditing}
          
                status={props.invoice.status}
                id={props.invoice._id}
             
              /> 
               </div>
                 
               </div>
               <div className= 'dark:bg-slate-800 bg-white  flex flex-col pb-3   w-11/12 mt-8 mx-auto rounded-md'>
                  <div className='flex flex-col px-4 py-4'>
                     <div className='sm:flex relative'>
                         <div>
                            <h1 className='text-neutral-400 font-bold '>#<span
                                className= 'dark:text-white text-black text-sm opacity-80'
                            
                            >UG{props.invoice.invoiceNumber}</span></h1>
                           <p className= "dark:opacity-90 opacity-50  text-sm font-normal -mt-1">{props.invoice.description}</p>

                         </div>
                        
                       <div className= "dark:opacity-90 opacity-50 hidden sm:block text-right   right-3 absolute">
                           <Address address={props.invoice.issuingAddress} />
                           
                       </div> 
                     </div> 
                    
                       
                  </div>
                  <div className="dark:opacity-90 opacity-50 sm:hidden text-xs xs:text-base mt-8 px-4  ">
                     <Address address={props.invoice.issuingAddress} />
                  </div>
                  <div className='px-4 mt-8 flex sm:mt-16 sm:justify-around  sm:relative '>
                    <div>
                        <div >
                            <p className= "dark:opacity-90 opacity-50  text-xs xs:text-base" >Invoice Date</p>
                            <time className='text-xs xs:text-base'> <strong>{stringifyDate(props.invoice.issuingDate)} </strong></time>
                        </div>
                        <div className='mt-8' >
                            <p className= "dark:opacity-90 opacity-50 text-xs xs:text-base" >Payment Due</p>
                            <time className='text-xs xs:text-base'> <strong>{stringifyDate(props.invoice.paymentDate)} </strong></time>
                        </div>
                    </div>  
                     
                    <div className='right-0 pr-9 absolute sm:static'>
                        <h6 className= "dark:opacity-90 opacity-50" >Bill To</h6>
                        <p className='capitalize text-xs xs:text-base'><strong>{props.invoice.debtor}</strong></p>
                        <div className="dark:opacity-90 opacity-50 text-xs xs:text-base mt-8 sm:mt-0 sm:text-xs">
                            <Address address={props.invoice.debtorsAddress} /> 
                        </div>
                    </div>
                    <div  className='  hidden sm:block'>
                        <p className="dark:opacity-90 opacity-50" >Sent to</p>
                        <a href={`mailto:${props.invoice.email}`}><strong><em>{props.invoice.email}</em></strong></a>
                    </div>  
                    
                  </div>
                  <div  className='px-4 mt-8 sm:hidden '>
                    <p className= "dark:opacity-90 opacity-50" >Sent to</p>
                    <a href={`mailto:${props.invoice.email}`}><strong><em>{props.invoice.email}</em></strong></a>
                  </div>   
                  <div className= "dark:bg-slate-900 dark:font-semibold  font-normal bg-gray-50  flex p-4 mt-8 sm:mt-16 rounded-t-md  w-11/12 mx-auto min-h-fit">
                    <Table items={props.invoice.items}/>                 
                  </div>
                  <div className= 'dark:bg-black bg-slate-900 justify-around  flex rounded-b-md  py-4  w-11/12 mx-auto min-h-fit'>
                      <p className='text-white text-sm font-semibold'>Amount Due</p>
                      <p className='text-white  font-bold'>Ugx <span>{validateNo(getSum(props.invoice.items))}</span></p>
                  </div>
                  
               </div>
               <div className= 'dark:bg-slate-800 bg-white sm:hidden flex justify-end mt-8 p-4'>
            <Buttons handleEditing={props.handleEditing} status={props.invoice.status}
                id={props.invoice._id}
            />
               </div>
              
            
            </Wrapper>
        </div>
        
    )}   

    export default InvoiceDetails

