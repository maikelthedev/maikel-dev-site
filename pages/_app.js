import "@/styles/globals.css";
import Layout from "components/layout";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Maikel OÜ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Maikel.dev" />
        <meta name="keywords" content="Maikel.dev" />
        <meta name="author" content="Maikel" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Maikel.dev" />
        <meta property="og:description" content="Maikel.dev" />
        <meta property="og:image" content="/nowords.png" />
        <meta property="og:url" content="https://maikel.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maikelthedev" />
        <meta name="twitter:creator" content="@maikelthedev" />
        <meta name="twitter:title" content="Maikel.dev" />
        <meta name="twitter:description" content="Maikel.dev" />
        <meta name="twitter:image" content="/nowords.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;