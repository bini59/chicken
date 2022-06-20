import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <title>치킨랭킹.com</title>
                <meta name="description" content="치킨랭킹을 보여주는 사이트입니다." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
};