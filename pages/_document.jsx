import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="Cache-control" content="no-store" />

        <div id="banner" className="hidden"></div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
