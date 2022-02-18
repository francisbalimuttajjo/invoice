import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import { FormControl, Select } from "@mui/material";
  

type Props={
        InvoiceTotal:Number 
        darkTheme:boolean
        categories:string[]   
}

const Sidebar:React.FC<Props>=(props)=>{
   const [category,setCategory]=React.useState(props.categories[2])

    return (
        <div className='flex  mt-7  mx-auto justify-around ' >
            <div className='flex flex-col  '>
                <h1 className='font-semibold text-3xl '>Invoices</h1>
                <p className=' text-sm opacity-50 mt-1 '>
                    There are {props.InvoiceTotal}   invoices total .</p>

            </div>
            <div className='flex sm:ml-20 sm:justify-end    '>
                <label className='mt-3'>Filter 
                <span className='hidden xs:inline'>by status</span></label>
                <FormControl variant="standard" sx={{ margin:1 }}>        
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    sx={{ color: props.darkTheme ?  "white" :''}}
                    value={category}
                    //   onChange={handleChange}
                    
                    > 
                    {props.categories.map((optionValue) => (
                            <MenuItem value={optionValue} key={optionValue}>
                                {" "}
                                {optionValue}
                            </MenuItem>
                            ))}
                    
                    </Select>
                </FormControl>
                            
                    <button className='bg-blue-500 flex px-2 py-2 rounded-3xl font-extrabold mx-auto  h-12 hover:bg-blue-400'>
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