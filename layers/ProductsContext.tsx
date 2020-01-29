import { createContext, Context } from "react";

export interface IProduct {
  id?: string;
  title?: string;
  price?: number;
  imgs?: arrOrStr;
  description?: string;
  thumbnail?: string;
}
type arrOrStr = string | Array<string>;
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
