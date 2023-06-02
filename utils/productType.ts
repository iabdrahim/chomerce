export default interface IProduct {
  _id: string;
  name: string;
  price: number;
  specification?: number;
  discount: number;
  description: string;
  brand: string;
  catagorie: string;
  image: string;

  images: {
    img1: string;
    img2: string;
    img3: string;
    img4: string;
  };
}
