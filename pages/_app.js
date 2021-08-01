/*
*
*  App
*  Where ApolloProvider, ThemeProvider, GlobalStyle, and page views are all arranged
* 
*/

import App from 'next/app';
import React from 'react';
import 'cross-fetch/polyfill';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import theme from '../utils/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/layout/global-style';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        {/* <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header /> */}
          <Component {...pageProps} />
          {/* <Footer />
        </ThemeProvider>       */}
      </ApolloProvider>
    );
  }
}
