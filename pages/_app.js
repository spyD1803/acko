import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  primary: "green"
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url("/static/fonts/Montserrat-Regular.ttf");
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    src: url("/static/fonts/Montserrat-Medium.ttf");
  }

  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url("/static/fonts/Montserrat-SemiBold.ttf");
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src: url("/static/fonts/Montserrat-Bold.ttf");
  }


  body {
    margin: 0;
    background-color: #fff;
    font-family: "Montserrat-Regular";
    color: #000;
  }

  * {
    margin: 0;
    padding: 0
  }

  *:focus {
    outline: none;
  }

  .wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
  }

`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    );
  }
}
