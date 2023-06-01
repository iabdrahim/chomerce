import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import Product from "../../../models/Product";
import db from "../../../utils/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    try {
      await db;
    } catch (err) {
      return res.status(502).send({ message: "database error", error: err });
    }
    const q = req.query.q;
    const brand = req.query.brand;
    const ctg = req.query.ctg;
    if (q) {
      let products = await Product.find({
        name: { $regex: q, $options: "i" },
      }).limit(30);
      return res.status(200).send(products);
    }
    if (ctg) {
      let products = await Product.find({
        catagorie: ctg,
      }).limit(30);
      return res.status(200).send(products);
    }
    if (brand) {
      let products = await Product.find({
        brand: brand,
      }).limit(30);
      return res.status(200).send(products);
    }

    return res.status(200).send({ message: "please enter a query" });
  } catch (err: any) {
    return res
      .status(500)
      .send({ message: "server error", error: err.message });
  }
}
