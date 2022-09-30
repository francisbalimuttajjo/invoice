import { sendResponse } from "../../utils/pagesFns";
import connect from "../../db/db";
import Invoice from "../../model/Invoice";
import {Data} from "../../types/apiTypes";

import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      connect();
      const invoice = await Invoice.create(req.body);

      return sendResponse(req, res, 200, "invoice created");
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
