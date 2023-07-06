import "@/styles/globals.css";
import Layout from "components/layout";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Maikel OÜ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Maikel OÜ" key="description"/>
        <meta name="keywords" content="Maikel OÜ" key="keywords"/>
        <meta name="author" content="Maikel" key="author"/>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Maikel OÜ" key="og-title"/>
        <meta property="og:description" content="Maikel OÜ" key="og-description"/>
        <meta property="og:image" content="https://maikel.dev/NOTHING.webp" key="og-image"/>
        <meta property="og:url" content="https://maikel.dev" key="og-url"/>
        <meta name="twitter:card" content="summary_large_image" key="twitter:card"/>
        <meta name="twitter:site" content="@maikelthedev" key="twitter:site"/>
        <meta name="twitter:creator" content="@maikelthedev"  key="twitter:creator"/>
        <meta name="twitter:title" content="Maikel OÜ" key="twitter:title"/>
        <meta name="twitter:description" content="Maikel OÜ" key="twitter:description"/>
        <meta name="twitter:image" content="https://maikel.dev/NOTHING.webp" key="twitter:image"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;