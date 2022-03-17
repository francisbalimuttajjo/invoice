import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import { AddressFormat } from "../../types/home";
import { sendResponse } from "../../utils/pagesFns";
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
type Data = { invoice?: Invoice; msg?: string; status: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      connect();

      const invoice = await Invoice.findOne({ _id: req.query.id });

      if (!invoice) {
        return sendResponse(
          req,
          res,
          404,
          "invoice not available,check details",
          "fail"
        );
      }
      return sendResponse(req, res, 200, invoice);
    } catch (err: unknown) {
      return sendResponse(
        req,
        res,
        400,
        "something went wrong,try again",
        "fail"
      );
    }
  }

  return sendResponse(req, res, 405, "invalid method", "fail");
}
