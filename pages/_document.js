import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import loader from "../styles/loader";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <head>
          <style>{loader}</style>
        </head>
        <body>
          <div id={"globalLoader"}>
            <div class="bounce">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
