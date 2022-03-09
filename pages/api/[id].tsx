import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import { AddressFormat } from "../../types/types";
import type { NextApiRequest, NextApiResponse } from "next";

type Invoice = {
  debtor: string;
  status: string;
  description: string;
  issuingDate: string;
  paymentDate: string;
  email: string;
  invoiceNumber: number;
  terms: number;
  debtorsAddress: AddressFormat;
  issuingAddress: AddressFormat;
  items: { qty: number; price: number; name: string }[];
  
 
};
type Data = { invoice?: Invoice; msg?: string , status:string};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === "GET") {
      console.log('getting')
      console.log({ req:req.query.id })
      // console.log(req.params.id)
    connect();

     // const invoice = await Invoice.findOne({ _id: req.query.id }); 6224d48af8079b85750fbde8
      const invoice = await Invoice.findOne({ _id: req.query.id }); 
        console.log(invoice)
    if (!invoice) {
      return res.status(404).json({status:'fail', msg: "invoice not available,check details" });
    }

    return res.status(200).json({status:'success', invoice });
  }
  return res.status(405).json({status:'fail', msg: "invalid method" });

 
}