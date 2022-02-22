import React from 'react'
import{HeadingProps} from '../types/types'





const Sidebar:React.FC<HeadingProps>=(props)=>{
  
   const [category,setCategory]=React.useState(props.categories[0])


   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    props.handleCategorizingInvoices(e.target.value)

  
   }


    return (
        <div className='flex  mt-7  mx-auto justify-around ' >
            <div className='flex flex-col  '>
                <h1 className='font-semibold text-3xl '>Invoices</h1>
                <p className=' text-sm opacity-50 mt-1 '>
                    There {props.InvoiceTotal >1 ? ' are' : 'is'} {props.InvoiceTotal}  {props.description} {props.InvoiceTotal >1 ? ' Invoices' : 'Invoice'} </p>

            </div>
            <div className='flex sm:ml-20 sm:justify-end    '>
                <label className='mt-3 text-xs xs:text-base  '>Filter 
                <span className='hidden xs:inline'>by status</span>
                <select
                className={`${props.darkTheme ? 'text-white bg-slate-900 ':' text-blue-500 bg-gray-200'}  m-1 outline-none  text-xs xs:text-base  cursor-pointer h-6 `}
                onChange={handleChange}
                >
                    {props.categories.map(option=><option className='capitalize' key={option} value={option}>
                        
                        {option} </option>)}
                </select>
                </label>
    
               
                            
                    <button
                    onClick={props.displayNewInvoiceForm}
                     className='bg-blue-500 flex px-2 py-2 rounded-3xl font-extrabold mx-auto  h-12 hover:bg-blue-400'>
                        <h1 className='bg-white font-extrabold py-1 text-blue-500 h-8 w-8 rounded-full'>+</h1>
                        <h1 className=' text-white font-medium ml-1 my-1 '>New
                            <span className='hidden xs:inline ml-1'>Invoice</span>
                        </h1>
                       
                    </button>

                 
              
                
                
            </div>

            

        </div>
       
        )
}

export default Sidebar