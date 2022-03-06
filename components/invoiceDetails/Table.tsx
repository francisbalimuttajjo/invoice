import React from 'react'
 import {validateNo} from '../../utils/fns'
 import {TableProps} from '../../types/types'

const Table:React.FC<TableProps>=(props)=>{
    return(
        <table className="table-fixed mx-auto w-full sm:w-9/12 ">
<thead className=' mb-2 text-xs sm:text-base text-slate-400 '>
  <tr >
    <th>Item Name</th>
    <th>Qty</th>
    <th >Price<span className='text-xs'> (Ugx)</span></th>
    <th>Total</th>
  </tr>
</thead>
<tbody >
{props.items.map((item,index)=><tr 

key={index}>
        <td className='pl-2 sm:pl-6 '>{item.name}</td>
        <td className='pl-6 sm:pl-12'>{validateNo(item.qty)}</td>
        <td className='pl-4 sm:pl-12'>{validateNo(item.price)}</td>
        <td className='pl-5 sm:pl-10'>{validateNo(item.price*item.qty)}</td>
      </tr>)}
</tbody>
</table> 

    )
}
 export default Table