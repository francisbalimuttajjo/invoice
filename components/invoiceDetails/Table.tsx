import React from 'react'
 import {validateNo} from '../../utils/fns'
 import {TableProps} from './types/details'

const Table:React.FC<TableProps>=(props)=>{
    return(
        <table className="table-fixed mx-auto w-full sm:w-9/12  ">
<thead className=' mb-2 text-xs sm:text-base text-slate-400  '>
  <tr >
    <th className='text-left'>Item Name</th>
    <th className='text-left'>Qty</th>
    <th className='text-left' >Price<span className='text-xs'> (Ugx)</span></th>
    <th className='text-left'>Total</th>
  </tr>
</thead>
<tbody >
{props.items.map((item,index)=><tr 

key={index}>
        <td className='text-left '>{item.name}</td>
        <td className='text-left'>{validateNo(item.qty)}</td>
        <td className='text-left'>{validateNo(item.price)}</td>
        <td className='text-left'>{validateNo(item.price*item.qty)}</td>
      </tr>)}
</tbody>
</table> 

    )
}
 export default Table