import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es" className="bg-premium-black">
      <Head>
        <link rel="icon" type="image/png" href="/images/isotipo.png" />
        <link rel="apple-touch-icon" href="/images/isotipo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
