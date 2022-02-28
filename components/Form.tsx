import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import InputComponent from './inputs/InputLabel'
import TwoStepInputComponent from './inputs/TwoStepInput'
import DateComponent from './DateComponent'
import ItemsList from './Items'
import {useContextProvider} from '../context/context'
import {FormProps} from '../types/types'

 const terms=[{desc:' 1 Day',value:1},{desc:' 7 Days',value:7},{desc:'14 Days',value:14},{desc:' 30 Day',value:30}]



 const InvoiceDetails:React.FC<FormProps >=(props)=>{
       const [darkTheme,toggleDarkTheme,inputArray,addInput]=useContextProvider()
       const[issuerStreet,setIssuerStreet]=React.useState('')
       const[receiverStreet,setReceiverStreet]=React.useState('')
       const[receiverName,setReceiverName]=React.useState('')
       const[receiverEmail,setReceiverEmail]=React.useState('')
       const[issuerCountry,setIssuerCountry]=React.useState('')
       const[description,setDescription]=React.useState('')
       const[issuerCity,setIssuerCity]=React.useState('')
       const[receiverCity,setReceiverCity]=React.useState('')
       const[receiverCountry,setReceiverCountry]=React.useState('')
       const[issuerPostalAddress,setIssuerPostalAddress]=React.useState('')
       const[receiverPostalAddress,setReceiverPostalAddress]=React.useState('')
       const [date, setDate] = React.useState(new Date());
      console.log('value',date)
    //    const[date,setDate]=React.useState('')
    const d = new Date();
    //    console.log(d)
    //    const d2=d.setDate(d.getDate() + 5);
         const d2=date.setDate(date.getDate() + 5);
         console.log({d2})
         console.log(new Date(d2))
       
       
    

    
    
       console.log({ 
           //date
        //    receiverCountry,description,
        //    issuerStreet,issuerCountry,issuerCity,issuerPostalAddress,
        //    receiverEmail,receiverName,receiverStreet,receiverPostalAddress,receiverCity
        }
           )
    return (
        <>
        <div 
        // onClick={()=>console.log('clicked')}
       // onClick={props.hideForm}
        className=' hidden z-20 fixed sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40'></div>
       
      <div className={`${darkTheme ? 'dark' : ''} z-20 w-full  h-screen fixed   sm:flex` }>
            
          <motion.div variants={fadeIn} >
             <div 
                 className='dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ' >
                   
                    <header>
                        <h1 className=' font-bold opacity-80 text-2xl pt-12  '>Create Invoice</h1>
                    </header>
                    <section className='h-96  mt-8 overflow-auto mb-8   '>
                        <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
                        <form className='w-full'>
                            <div className='px-3'>

                                {/* issuer details */}
                                <InputComponent 
                                inputValue={issuerStreet}
                                handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerStreet(e.target.value)}
                                description='Street  Address' />
                                  
                                <TwoStepInputComponent
                                inputValue1={issuerCity}
                                inputValue2={issuerPostalAddress}
                                handleInputChange1={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerCity(e.target.value)}
                                handleInputChange2={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerPostalAddress(e.target.value)}
                                label1='City' label2='Postal Code' />


                                <InputComponent 
                                inputValue={issuerCountry}
                                handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerCountry(e.target.value)}
                                 description='Country' />
                            </div>
                            
                            {/* receivers details */}
                            <div className='mt-6  '>
                               <p className='opacity-90  mb-2 font-semibold text-blue-500'>Bill To</p>
                                <InputComponent 
                                inputValue={receiverName}
                                handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverName(e.target.value)}
                                description='Client&apos;s Name' />


                                <InputComponent
                                 inputValue={receiverEmail}
                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverEmail(e.target.value)}
                                 description='Client&apos;s Email' />


                                <InputComponent
                                  inputValue={receiverStreet}
                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverStreet(e.target.value)}
                                 description='Street Address' />


                                <TwoStepInputComponent
                                    inputValue1={receiverCity}
                                    inputValue2={receiverPostalAddress}
                                    handleInputChange1={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverCity(e.target.value)}
                                    handleInputChange2={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverPostalAddress(e.target.value)}
                                 label1='City' label2='Postal Code' />


                                <InputComponent
                                inputValue={receiverCountry}
                                handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverCountry(e.target.value)}
                                description='Country' />

                                  {/* invoice date */}
                                <DateComponent 
                                  date={date}
                                // k={(el) =>  setDate(el)}
                                changeDate={(newValue) => {
                                    setDate(newValue);
                                  }}
                                // date={date}
                                // changeDate={(e: React.ChangeEvent<HTMLSelectElement>)=> setDate(e.target.value)}
                                 changeTerms={(e: React.ChangeEvent<HTMLSelectElement>)=>console.log('hello')
                                
                                }
                                
                                terms={terms} />
                          
                            <InputComponent
                             inputValue={description}
                             handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setDescription(e.target.value)}
                              description='Description' />

               {/* <DatePicker
            //   selected={ this.state.startDate }
            //   onChange={ this.handleChange }
              name="startDate"
              dateFormat="MM/dd/yyyy"
          /> */}

                              {/* items list */}
                            <div className='w-full py-2   '>
                                <label className= 'dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2'  >
                                        Item List
                                </label>
                                <ItemsList inputArray={inputArray}  />
                                
                                  <button
                                onClick={addInput}
                                 className='bg-gray-100 sm:w-10/12 md:w-9/12   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     '>
                                     <span className='font-extrabold'>+</span> Add New Item</button>

                                
                                
    
                            </div> 
                
                                

                            </div>

                        </form>
                        
                                        
                        
                        
                    </section>
                    <div className=' sticky bottom-0 flex '>
                        <button
                        onClick={props.hideForm}
                         className='bg-gray-200 text-sm  sm:text-sm font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-300 rounded-3xl px-2 py-3  sm:px-4 sm:py-3 '>Discard</button>
                        <div className='flex right-0  absolute'>
                            <button className= 'dark:hover:bg-opacity-30 hover:bg-opacity-90 p-2 sm:px-4 py-3 text-sm  sm:text-sm text-gray-500 font-bold rounded-3xl bg-black bg-opacity-80 '>Save as Draft</button>
                            <button className='bg-blue-700 ml-1 text-white opacity-70 text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600'>Save & Send</button>

                        </div>

                    </div>
                   
               </div>
               
         
            
             

           
           
            </motion.div> 
          
           

      </div>
      </>      
       
        
    )}   

    export default InvoiceDetails

//     import React from 'react'
// import { motion } from "framer-motion";
// import {fadeIn} from '../animations/animation'
// import InputComponent from './inputs/InputLabel'
// import TwoStepInputComponent from './inputs/TwoStepInput'
// import DateComponent from './DateComponent'
// import ItemsList from './Items'
// import {useContextProvider} from '../context/context'
// import {FormProps} from '../types/types'

//  const terms=[{desc:' 1 Day',value:1},{desc:' 7 Days',value:7},{desc:'14 Days',value:14},{desc:' 30 Day',value:30}]
// // const n=new Date().toISOString().slice(0, 10) 


//  const InvoiceDetails:React.FC<FormProps >=(props)=>{
//        const [darkTheme,toggleDarkTheme,inputArray,addInput]=useContextProvider()
//        const[issuerStreet,setIssuerStreet]=React.useState('')
//        const[receiverStreet,setReceiverStreet]=React.useState('')
//        const[receiverName,setReceiverName]=React.useState('')
//        const[receiverEmail,setReceiverEmail]=React.useState('')
//        const[issuerCountry,setIssuerCountry]=React.useState('')
//        const[description,setDescription]=React.useState('')
//        const[issuerCity,setIssuerCity]=React.useState('')
//        const[receiverCity,setReceiverCity]=React.useState('')
//        const[receiverCountry,setReceiverCountry]=React.useState('')
//        const[issuerPostalAddress,setIssuerPostalAddress]=React.useState('')
//        const[receiverPostalAddress,setReceiverPostalAddress]=React.useState('')
//        const[paymentTerms,setPaymentTerms]=React.useState(0)
//        const[date,setDate]=React.useState('')
//     //    console.log('r',inputArray)
//     //   console.log('date',date)
//     //    console.log({receiverCountry,description,
//     //        issuerStreet,issuerCountry,issuerCity,issuerPostalAddress,receiverEmail,receiverName,receiverStreet,receiverPostalAddress,receiverCity})
//     return (
//         <>
//         <div 
//         // onClick={()=>console.log('clicked')}
//        // onClick={props.hideForm}
//         className=' hidden z-20 relative sm:block overflow-y-hidden inset-0  bg-black bg-opacity-40'></div>
       
//       <div className={`${darkTheme ? 'dark' : ''} z-50 w-full  h-screen fixed   sm:flex` }>
            
          
//            <motion.div variants={fadeIn} >
//                <div 
//                  className='dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ' >
                   
//                     <header>
//                         <h1 className=' font-bold opacity-80 text-2xl pt-12  '>Create Invoice</h1>
//                     </header>
//                     <section className='h-96  mt-8 overflow-auto mb-8   '>
//                         <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
//                         <form className=''>
//                             <div className='px-3'>

//                                 {/* issuer details */}
//                                 <InputComponent 
//                                 inputValue={issuerStreet}
//                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerStreet(e.target.value)}
//                                 description='Street  Address' />
                                  
//                                 <TwoStepInputComponent
//                                 inputValue1={issuerCity}
//                                 inputValue2={issuerPostalAddress}
//                                 handleInputChange1={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerCity(e.target.value)}
//                                 handleInputChange2={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerPostalAddress(e.target.value)}
//                                 label1='City' label2='Postal Code' />


//                                 <InputComponent 
//                                 inputValue={issuerCountry}
//                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setIssuerCountry(e.target.value)}
//                                  description='Country' />
//                             </div>
                            
//                             {/* receivers details */}
//                             <div className='mt-6 px-3 '>
//                                <p className='opacity-90  mb-2 font-semibold text-blue-500'>Bill To</p>
//                                 <InputComponent 
//                                 inputValue={receiverName}
//                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverName(e.target.value)}
//                                 description='Client&apos;s Name' />


//                                 <InputComponent
//                                  inputValue={receiverEmail}
//                                  handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverEmail(e.target.value)}
//                                  description='Client&apos;s Email' />


//                                 <InputComponent
//                                   inputValue={receiverStreet}
//                                  handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverStreet(e.target.value)}
//                                  description='Street Address' />


//                                 <TwoStepInputComponent
//                                     inputValue1={receiverCity}
//                                     inputValue2={receiverPostalAddress}
//                                     handleInputChange1={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverCity(e.target.value)}
//                                     handleInputChange2={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverPostalAddress(e.target.value)}
//                                  label1='City' label2='Postal Code' />


//                                 <InputComponent
//                                 inputValue={receiverCountry}
//                                 handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setReceiverCountry(e.target.value)}
//                                 description='Country' />

//                                   {/* invoice date */}
//                                 <DateComponent 
//                                 date={date}
//                                 changeDate={(e: React.ChangeEvent<HTMLSelectElement>)=> setDate(e.target.value)}
//                                 changeTerms={(e: React.ChangeEvent<HTMLSelectElement>)=>console.log(date + e.target.value)
                                
//                                 }
                                
//                                 terms={terms} />
                          
//                             <InputComponent
//                              inputValue={description}
//                              handleInputChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setDescription(e.target.value)}
//                               description='Description' />

//                               {/* items list */}
//                             <div className='w-full py-2   '>
//                                 <label className= 'dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2'  >
//                                         Item List
//                                 </label>
//                                 <ItemsList inputArray={inputArray}  />
                                
//                                   <button
//                                 onClick={addInput}
//                                  className='bg-gray-100 sm:w-10/12 md:w-9/12   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     '>
//                                      <span className='font-extrabold'>+</span> Add New Item</button>

                                
                                
    
//                             </div> 
                
                                

//                             </div>

//                         </form>
                        
                                        
                        
                        
//                     </section>
//                     <div className=' sticky bottom-0 flex '>
//                         <button
//                         onClick={props.hideForm}
//                          className='bg-gray-200 text-sm  sm:text-sm font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-300 rounded-3xl px-2 py-3  sm:px-4 sm:py-3 '>Discard</button>
//                         <div className='flex right-0  absolute'>
//                             <button className= 'dark:hover:bg-opacity-30 hover:bg-opacity-90 p-2 sm:px-4 py-3 text-sm  sm:text-sm text-gray-500 font-bold rounded-3xl bg-black bg-opacity-80 '>Save as Draft</button>
//                             <button className='bg-blue-700 ml-1 text-white opacity-70 text-sm  sm:text-sm font-bold px-4 py-3 rounded-3xl hover:bg-blue-600'>Save & Send</button>

//                         </div>

//                     </div>
                   
//                </div>
               
         
            
             

           
           
//             </motion.div>

//       </div>
//       </>      
       
        
//     )}   

//     export default InvoiceDetails