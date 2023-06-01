import { Schema, model, models } from "mongoose";

let ProductSchema = new Schema(
  {
    name: { type: String, maxlength: 100, minlength: 3 },
    price: Number,
    specification: { type: String, required: false },
    discount: { type: Number, required: false },
    description: String,
    brand: String,
    catagorie: String,
    image: String,

    images: {
      img1: String,
      img2: String,
      img3: String,
      img4: String,
    },
  },
  { timestamps: true, _id: true }
);
// delete models.Product;

let Product = models.Product;
if (!models.Product) {
  Product = model("Product", ProductSchema);
}
export default Product;
