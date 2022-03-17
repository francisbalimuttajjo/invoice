import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import { Data } from "../../types/apiTypes";
import { sendResponse } from "../../utils/pagesFns";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      connect();

      const invoices = await Invoice.find();
      if (invoices.length < 1) {
        return sendResponse(req, res, 204, "no invoices currently");
      }

      return sendResponse(req, res, 200, invoices);
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
