import { createContext, Context } from "react";

export interface IProduct {
  id?: string;
  title?: string;
  price?: number;
  img?: string;
  description?: string;
}

export interface IProductArr extends Array<IProduct> {
  [index: number]: IProduct;
}

interface IProductsContext {
  qutd?: number;
  products?: Array<IProduct>;
  handleQutd?: () => void;
  handleProducts?: (arr: IProduct) => void;
}

const ProductsContext: Context<IProductsContext> = createContext({});

export default ProductsContext;
