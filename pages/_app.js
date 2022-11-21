import "../styles/globalfonts.css";
import "../styles/globalcolors.css";
import "../styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "quill/dist/quill.snow.css";

import NextProgress from "next-progress";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextProgress
        color="red"
        height={"3px"}
        delay={300}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
