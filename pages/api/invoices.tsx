
import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import{AddressFormat} from '../../types/types'
import type { NextApiRequest, NextApiResponse } from 'next'


type    Invoices = {
  debtor: string;
  status: string;
  description: string;
  issuingDate: string;
  paymentDate: string;
  email: string;
  invoiceNumber:number,
  terms:number,
  debtorsAddress:AddressFormat,
  issuingAddress:AddressFormat,
  items:{qty:number,price: number,name:string}[]
  msg?:string
}
type Data=
{invoices?:Invoices[],
    msg?:string  
}
    
type Response={
  msg:string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    connect()
    console.log('getting')
    const invoices=await Invoice.find()
    console.log(invoices)
    return res.status(200).json({ invoices })
  }
  return res.status(200).json({ msg: 'invalid method' })
 
  // res.status(200).json({ name: 'John Doe' })
}
