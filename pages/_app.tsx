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
    products: []
  };

  _handleQutd = () => this.setState({ qutd: this.state.qutd + 1 });

  _handleProducts = product => {
    const same = this.state.products.find(p => p.title === product.title);
    if (!same) {
      this.setState({ products: [...this.state.products, product] });
      this._handleQutd();
    }
  };

  _removeProduct = (title: string) => {
    const elems = this.state.products.filter(p => p.title !== title);
    this.setState({ products: elems, qutd: this.state.qutd - 1 });
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ProductsContext.Provider
          value={{
            qutd: this.state.qutd,
            products: this.state.products,
            handleQutd: this._handleQutd,
            handleProducts: this._handleProducts,
            removeProduct: this._removeProduct
          }}
        >
          <Component {...pageProps} />
        </ProductsContext.Provider>
      </ThemeProvider>
    );
  }
}
