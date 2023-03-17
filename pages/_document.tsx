import Document, {Html, Head, Main, NextScript} from 'next/document';
import Script from "next/script";
import React from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/txr6nox.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
                          rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&display=swap"
                        rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
                        rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Almendra:ital@0;1&display=swap"
                          rel="stylesheet"/>

                    <Script src="https://d3js.org/d3.v5.min.js" strategy="beforeInteractive"/>
                    <Script src="https://unpkg.com/topojson-client" strategy="beforeInteractive"/>
                    <Script src="/static/menu.js" strategy="lazyOnload"/>
                </Head>
                <body className="bg-[#a2b4be]">
                <Main/>
                <NextScript/>
                </body>

            </Html>
        );
    }
}

export default MyDocument;
