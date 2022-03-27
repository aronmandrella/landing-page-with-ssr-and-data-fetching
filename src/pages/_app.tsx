import "./_app.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import { AppNav } from "@components/AppNav";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Landing page with SSR and data fetching</title>
        <meta name="author" content="Code: Aron Mandrella ; Design, content, API: Adchitects" />
        <meta name="description" content="Landing page with SSR and data fetching" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
