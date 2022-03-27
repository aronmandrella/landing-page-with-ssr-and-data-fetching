import { Html, Head, Main, NextScript } from "next/document";

const Document: React.VFC = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-base font-sans font-regular bg-surface-1 text-on-surface-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
