import fetch from "isomorphic-fetch";
import { IProduct } from "./ProductsContext";

export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:1337/products");
    const products = await res.json();

    return { success: true, data: products };
  } catch (err) {
    return {
      success: false,
      data: err
    };
  }
};

interface IGetProduct {
  success: boolean;
  data: IProduct;
}

export const getProduct = async (id: string | string[]) => {
  try {
    const res = await fetch(`http://localhost:1337/products/${id}`);
    const product = await res.json();

    return { success: true, data: product };
  } catch (err) {
    return {
      success: false,
      data: err
    };
  }
};
