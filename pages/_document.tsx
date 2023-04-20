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
            <Html lang="en">
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
                    <Script src="/static/menu.js" defer strategy="lazyOnload"/>
                    <meta name="description" content="The Contemporary Fairy Tale Project seeks to explore and reinvent the fairy tale. Princeton University students Allison Peart, Theo L., Lara Katz, and Sierra Stern produced original creative works that imagine and subvert the fairy tale in unique ways under the guidance of Kate Clairmont."/>
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
