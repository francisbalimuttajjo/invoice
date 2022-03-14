import connect from "../../../db/db";
import Invoice from "../../../model/Invoice";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = { msg: string; status: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PATCH") {
    connect();

    const invoice = await Invoice.findOneAndUpdate(
      { _id: req.query.id },
      req.body
    );

    if (!invoice) {
      return res
        .status(404)
        .json({ status: "fail", msg: "invoice not available,check details" });
    }

    return res.status(200).json({ status: "success", msg: "changes saved" });
  }
  return res.status(405).json({ status: "fail", msg: "invalid method" });
}
