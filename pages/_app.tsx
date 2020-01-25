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
    this.setState({ products: [...this.state.products, product] });
    this._handleQutd();
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
            handleProducts: this._handleProducts
          }}
        >
          <Component {...pageProps} />
        </ProductsContext.Provider>
      </ThemeProvider>
    );
  }
}
