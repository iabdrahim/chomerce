import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import db from "../../../utils/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    try {
      await db;
    } catch (err: any) {
      return res
        .status(502)
        .send({ message: "database error", error: err.message });
    }
    const nw = req.query.new;
    if (nw) {
      let products = await Product.find({}).sort({ createAt: -1 }).limit(30);
      return res.status(200).send(products);
    }
    let products = await Product.find({}).limit(30);
    return res.status(200).send(products);
  } catch (err: any) {
    return res
      .status(500)
      .send({ message: "server error", error: err.message });
  }
}
