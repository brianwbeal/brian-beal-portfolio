/*
*
*  NextJS Custom Document
*  wraps _app and provides customizable global <head> and <body> sections
* 
*/

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* common to all pages */}
          {/* drop CDN stylesheet link tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* drop outside script tags here */}
        </body>
      </Html>
    );
  }
}
