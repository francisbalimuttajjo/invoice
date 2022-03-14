import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import { AddressFormat } from "../../components/home/types/home";
import type { NextApiRequest, NextApiResponse } from "next";

type Invoices = {
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
type Data = { invoices?: Invoices[]; msg?: string; status: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    connect();

    const invoices = await Invoice.find();
    if (invoices.length < 1) {
      return res
        .status(204)
        .json({ status: "success", msg: "no invoices currently" });
    }

    return res.status(200).json({ status: "success", invoices });
  }
  return res.status(405).json({ status: "fail", msg: "invalid method" });
}
