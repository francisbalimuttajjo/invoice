import connect from "../../../db/db";
import Invoice from "../../../model/Invoice";
import { sendResponse } from "../../../utils/pagesFns";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = { msg: string; status: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PATCH") {
    try {
      connect();

      const invoice = await Invoice.findOneAndUpdate(
        { _id: req.query.id },
        req.body
      );

      if (!invoice) {
        return sendResponse(
          req,
          res,
          404,
          "invoice not available,check details",
          "fail"
        );
      }

      return sendResponse(req, res, 200, "changes saved");
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
