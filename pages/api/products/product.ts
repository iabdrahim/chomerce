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
    } catch (err: any) {
      return res
        .status(502)
        .send({ message: "database error", error: err.message });
    }
    console.log("hello server");
    if (req.method == "GET") {
      let id = req.query.id;
      if (!id) {
        return res.status(404).send({ error: "The product id is required" });
      }
      let product = await Product.findOne({ _id: id });

      return res.status(200).send(product);
    } else if (req.method == "POST") {
      const data = req.body;
      if (!data) {
        return res.status(404).send({ error: "The product data is not valid" });
      }
      let newpro = new Product(data);
      await newpro.save();
      return res.status(200).send(newpro);
    } else if (req.method == "DELETE") {
      const id = req.query.id;
      if (!id) {
        return res.status(404).send({ error: "The product id is required" });
      }
      await Product.findOneAndDelete({ _id: id });
      return res
        .status(200)
        .send({ message: "The product is removed successfully" });
    } else if (req.method == "PUT") {
      let { id, data } = req.body;
      if (!data || !id) {
        return res.status(404).send({ error: "The product data is not valid" });
      }
      Product.findOneAndUpdate({ _id: id }, data);
      return res.status(200).send(data);
    }
  } catch (err: any) {
    return res
      .status(500)
      .send({ message: "server error", error: err.message });
  }
}
