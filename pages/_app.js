/*
*
*  App
*  Where ApolloProvider, ThemeProvider, GlobalStyle, and page views are all arranged
* 
*/

import App from 'next/app';
import React from 'react';

export default class MyApp extends App {

  //

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}
