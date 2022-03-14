import {InvoiceFormat,AddressFormat}  from '../../home/types/home'

//table .tsx
export interface TableProps{
    items:   { 
        qty: number,
         price: number, 
         name: string,
          }[]
}

//invoice details
// export interface Props{
//    handleEditing:()=>void
//    invoice:InvoiceFormat
// }
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
    //  handleDelete:(() => void)
    //  handleMakePaid: () => void
     id:string
}