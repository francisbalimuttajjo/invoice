import connect from "../../../db/db";
import Invoice from "../../../model/Invoice";
import { sendResponse } from "../../../utils/pagesFns";
import { Data } from "../../../types/apiTypes";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "DELETE") {
    try {
      connect();

      const invoice = await Invoice.findOneAndDelete({ _id: req.query.id });

      if (!invoice) {
        return sendResponse(
          req,
          res,
          404,
          "invoice not available,check details",
          "fail"
        );
      }
      return sendResponse(req, res, 200, "invoice deleted");
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
