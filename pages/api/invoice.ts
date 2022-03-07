
import connect from "../../db/db";
import Invoice from "../../model/Invoice";

import type { NextApiRequest, NextApiResponse } from 'next'



type Response={
  msg: string
  status:string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "POST") {
    connect()
       const invoice=await Invoice.create(req.body)
    
    return res.status(200).json({ status:'success',msg:'invoice created' })
  }
  return res.status(200).json({status:"fail", msg: 'invalid method' })
 
  // res.status(200).json({ name: 'John Doe' })
}
