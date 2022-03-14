import {InvoiceFormat,AddressFormat}  from '../../home/types/home'

//table .tsx
export interface TableProps{
    sum:number
    items:   { 
        qty: number,
         price: number, 
         name: string,
          }[]
}


//isuuing details
export interface InvoiceProps{
   invoice:InvoiceFormat
} 

 export interface Props extends InvoiceProps{
     handleEditing:()=>void
}

//address.tsx
  export interface Address{
     address:AddressFormat
 }

 //button t.sx
 export interface ButtonProps {
    handleEditing:()=>void
     status: string
    
     id:string
}