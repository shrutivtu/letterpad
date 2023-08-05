import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { basePath } from "@/constants";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href={basePath + "/css/theme-variables.css"} />
          <script src={basePath + `/prism/prism.js`} async />
        </Head>
        <body className="font-inter text-base tracking-tight text-gray-100 antialiased dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
