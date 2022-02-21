import React, { ChangeEvent } from 'react'
import {useRouter} from 'next/router';
import{HeadingProps} from '../types/types'





const Sidebar:React.FC<HeadingProps>=(props)=>{
    const router=useRouter()
    const handleNewInvoiceRoute=()=>router.push('/add')
   const [category,setCategory]=React.useState(props.categories[0])


   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    props.handleCategorizingInvoices(e.target.value)
    // props.invoices.filter((el) => el.status == "draft")
  
   }


    return (
        <div className='flex  mt-7  mx-auto justify-around ' >
            <div className='flex flex-col  '>
                <h1 className='font-semibold text-3xl '>Invoices</h1>
                <p className=' text-sm opacity-50 mt-1 '>
                    There are {props.InvoiceTotal}   invoices total .</p>

            </div>
            <div className='flex sm:ml-20 sm:justify-end    '>
                <label className='mt-3'>Filter 
                <span className='hidden xs:inline'>by status</span>
                <select
                className={`${props.darkTheme ? ' bg-slate-900  text-orange-600':' text-blue-600  bg-gray-200'}   text-xs xs:text-base cursor-pointer h-6 border-none  form-select m-1`}
                onChange={handleChange}
                >
                    {props.categories.map(option=><option  key={option} value={option}>{option} </option>)}
                </select>
                </label>
    
               
                            
                    <button
                    onClick={handleNewInvoiceRoute}
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