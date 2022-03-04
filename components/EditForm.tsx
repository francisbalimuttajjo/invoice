import React from 'react'
import { motion } from "framer-motion";
import {fadeIn} from '../animations/animation'
import InputComponent from './form/InputLabel'
import ItemComponent from './form/InputComponent'
import TwoStepInputComponent from './form/TwoStepInput'
import DateComponent from './form/DateComponent'
import ItemsList from './Items'
import Sidebar from './Sidebar'
import Footer from './form/Footer'
import {useContextProvider} from '../context/context'
import {InvoiceFormat} from '../types/types'
import {getPaymentDate,validate,termsArray,initialValues,initialErrorValues} from '../utils/fns'


type Props={
    cancel:()=>void
    invoice:InvoiceFormat
    checkEmptyField:()=>void
    nameChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
    qtyChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
    priceChange:(e: React.ChangeEvent<HTMLSelectElement>,index:number)=>void
    removeInputField:(e:number)=>void
    addInputField:(e: any)=>void
    items:{ qty: number, price: number, name: string,errorName:string,errorQty:string,errorPrice:string}[]

}

 const InvoiceDetails:React.FC<Props >=(props)=>{

    
    const values={
        issuerStreet:props.invoice.issuingAddress.street,
        issuerCity:props.invoice.issuingAddress.city,
        issuerCountry:props.invoice.issuingAddress.country,
        receiverStreet:props.invoice.debtorsAddress.street,
        receiverCity:props.invoice.debtorsAddress.city,
        receiverCountry:props.invoice.debtorsAddress.country,
        receiverName:props.invoice.debtor,
        receiverEmail:props.invoice.email,
        description:props.invoice.description,
        // date:props.invoice.issuingDate,
        receiverPostalAddress:props.invoice.debtorsAddress.postalAddress,
        issuerPostalAddress:props.invoice.issuingAddress.postalAddress,

    }
       const [darkTheme,toggleDarkTheme,inputArray,addInput, removeInput,
        handleNameChange,
        handleQtyChange,
        handlePriceChange,checkEmptyField,setInputArray]=useContextProvider()
        
       const [date, setInvoiceDate] = React.useState();
       const [terms, setTerms] = React.useState(termsArray[1].value);
       const paymentDate=getPaymentDate(date, terms)
       const[submitting,setSubmitting]=React.useState(true)
      const [formValues,setFormValues]=React.useState(values)
      const [formErrors,setFormErrors]=React.useState(initialErrorValues)
      const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
          const{name,value}=e.target
          
          setFormValues({...formValues,[name]:value})

         
       

      }

      

    //   console.log({inputArray,paymentDate,formValues})
   
     const onSubmit=()=>{
         setFormErrors(validate(formValues,date,terms))
         console.log({status:props.checkEmptyField(),formValues})
      
         if(Object.keys(formErrors).length === 0 && props.checkEmptyField() ){
                     console.log('editform is clear')
                     return
                 }
                 console.log('edit form  is mising something')
    
       
     }
   
 
    return (
        <>
        <div    className='  z-50 fixed  overflow-y-hidden inset-0  bg-black bg-opacity-40'>
        <div className={`${darkTheme ? 'dark' : ''} z-20 w-full  h-screen fixed   sm:flex` }>
            <Sidebar />
            
            <motion.div variants={fadeIn} >
               <div 
                   className='dark:bg-slate-900 px-3 bg-white w-full sm:w-10/12   h-screen sm:rounded-r-3xl    ' >
                     
                      <header>
                          <h1 className=' font-bold opacity-80 text-2xl pt-12  '>Edit <span className=' ml-1 text-slate-400 text-3xl'>#</span>UG{props.invoice.invoiceNumber}</h1>
                      </header>
                      <section className='h-96  mt-8 overflow-auto mb-8   '>
                          <p className='opacity-90 px-3  mb-4 font-bold text-blue-500'>Bill From</p>
                          <form 
                          className='w-full'>
                              <div className='px-3'>
  
                                  {/* issuer details */}
                                  <InputComponent 
                                  name='issuerStreet'
                                  inputValue={formValues.issuerStreet}
                                  handleInputChange={handleChange}
                                  error={formErrors.issuerStreet}
                                  description='Street  Address' />
                                    
                                  <TwoStepInputComponent
                                  name1='issuerCity'
                                  name2='issuerPostalAddress'
                                  inputValue1={formValues.issuerCity}
                                  error1={formErrors.issuerCity}
                                  error2={formErrors.issuerPostalAddress}
                                  inputValue2={formValues.issuerPostalAddress}
                                  handleInputChange1={handleChange}
                                  handleInputChange2={handleChange}
                                  label1='City' label2='Postal Code' />
  
  
                                  <InputComponent 
                                  inputValue={formValues.issuerCountry}
                                  name='issuerCountry'
                                  handleInputChange={handleChange}
                                  error={formErrors.issuerCountry}
                                  description='Country' />
                              </div>
                              
                              {/* receivers details */}
                              <div className='mt-6 px-3  '>
                                 <p className='opacity-0  mb-2 font-semibold text-blue-500'>Bill To</p>
                                  <InputComponent 
                                  name='receiverName'
                                  inputValue={formValues.receiverName}
                                  handleInputChange={handleChange}
                                  error={formErrors.receiverName}
                                  description='Client&apos;s Name' />
  
  
                                  <InputComponent
                                  name='receiverEmail'
                                   inputValue={formValues.receiverEmail}
                                   handleInputChange={handleChange}
                                   description='Client&apos;s Email'
                                   error={formErrors.receiverEmail}
                                   email
                                   placeholder='youremail@example.com'
                                    />
  
  
                                  <InputComponent
                                  name='receiverStreet'
                                   inputValue={formValues.receiverStreet}
                                   handleInputChange={handleChange}
                                   error={formErrors.receiverStreet}
                                   description='Street Address' />
  
  
                                  <TwoStepInputComponent
                                       name1='receiverCity'
                                      name2='receiverPostalAddress'
                                      inputValue1={formValues.receiverCity}
                                      inputValue2={formValues.receiverPostalAddress}
                                      handleInputChange1={handleChange}
                                      error1={formErrors.receiverCity}
                                     error2={formErrors.receiverPostalAddress}
                                     
                                      handleInputChange2={handleChange}
                                      
                                   label1='City' label2='Postal Code' />
  
  
                                  <InputComponent
                                  name='receiverCountry'
                                  inputValue={formValues.receiverCountry}
                                  handleInputChange={handleChange}
                                  error={formErrors.receiverCountry}
                                  description='Country' />
  
                                    {/* invoice date */}
                                  <DateComponent 
                                     date={date}
                                     error1={formErrors.date}
                                     error2={formErrors.paymentTerms}
                                    changeDate={(e:any)=>setInvoiceDate(e.target.value)}
                                   changeTerms={(e: React.ChangeEvent<HTMLSelectElement>)=> setTerms(parseInt(e.target.value))}
                                   termValue={terms}
                                   terms={termsArray} />
                            
                              <InputComponent
                              name='description'
                               inputValue={formValues.description}
                               handleInputChange={handleChange}
                               error={formErrors.description}
                               description='Description' />
  
  
                                {/* items list */}
                              <div className='w-full py-2   '>
                                  <label className= 'dark:text-white text-gray-700  block font-semibold  tracking-wide  text-xl  mb-2'  >
                                          Item List
                                  </label>
                                  {props.items.map((el,index)=><ItemComponent key={index} qty={el.qty} inputArray={props.items} price={el.price} name={el.name}
                                  handleNameChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.nameChange(e, index)}
                                  handlePriceChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.priceChange(e, index)}
                                  handleQtyChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.qtyChange(e, index)}
                                  removeInputField={() => props.removeInputField(index)}
                                   errorName={el.errorName} errorQty={el.errorQty} errorPrice={el.errorPrice}                                  />)}
                                 
                                  
                                    <button
                                  onClick={props.addInputField}
                                   className='bg-gray-100 sm:w-10/12 md:w-9/12   px-3 dark:text-white dark:bg-slate-800 dark:hover:text-opacity-70 dark:hover:bg-opacity-70 hover:bg-gray-200 font-semibold text-gray-400 w-full  py-3 rounded-3xl     '>
                                       <span className='font-extrabold'>+</span> Add New Item</button>
     
                              </div>
                          </div>
  
                          </form>
      
                      </section>
                      <Footer onSubmit={onSubmit} hideForm={props.cancel} />
                                       
                 </div>
          
              </motion.div> 
     
        </div>
        </div>
       

      </>      
    
    )}   

    export default InvoiceDetails


                





                
