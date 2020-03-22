import App from "next/app";
import * as React from "react";
import { ThemeProvider } from "theme-ui";

import ProductsContext from "../layers/ProductsContext";
import theme from "../assets/theme";
import "normalize.css";
import "@brainhubeu/react-carousel/lib/style.css";

export default class MyApp extends App {
  state = {
    qutd: 0,
    products: [],
    allProducts: [],
    searched: []
  };

  _handleQutd = () => this.setState({ qutd: this.state.qutd + 1 });

  _handleProducts = product => {
    const same = this.state.products.find(p => p.title === product.title);
    if (same) return;
    this.setState({ products: [...this.state.products, product] });
    this._handleQutd();
  };

  _removeProduct = (title: string) => {
    const elems = this.state.products.filter(p => p.title !== title);
    this.setState({ products: elems, qutd: this.state.qutd - 1 });
  };

  _handleCategories = (category: string) => {
    if (category === "all") {
      this.setState({ searched: this.state.allProducts });
      return;
    }
    const elems = this.state.allProducts.filter(p => p.category === category);
    this.setState({ searched: elems });
  };

  _handleAllProducts = (products: []) => {
    if (!products.length) return;
    this.setState({ allProducts: products, searched: products });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            qutd: this.state.qutd,
            products: this.state.products,
            allProducts: this.state.allProducts,
            searched: this.state.searched,
            handleQutd: this._handleQutd,
            handleProducts: this._handleProducts,
            removeProduct: this._removeProduct,
            filterProducts: this._handleCategories,
            setAllProducts: this._handleAllProducts
          }}
        >
          <Component {...pageProps} />
        </ProductsContext.Provider>
      </ThemeProvider>
    );
  }
}
