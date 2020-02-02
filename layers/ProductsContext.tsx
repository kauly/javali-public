import { createContext, Context } from "react";

export interface IProduct {
  id?: string;
  title?: string;
  price?: number;
  imgs?: string;
  description?: string;
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
  removeProduct?: (title: string) => void;
}

const ProductsContext: Context<IProductsContext> = createContext({});

export default ProductsContext;
