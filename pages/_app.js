import "@/styles/globals.css";
import Layout from "components/layout";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Maikel OÜ</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Maikel OÜ" key="description" />
        <meta name="keywords" content="Maikel OÜ" key="keywords" />
        <meta name="author" content="Maikel" key="author" />
        <link rel="icon" href="https://maikel.dev/favicon.ico" />
        <meta property="og:title" content="Maikel OÜ" key="og-title" />
        <meta property="og:type" content="website" />
        <meta property="fediverse:creator" content="@maikel@vmst.io" />
        <meta
          property="og:description"
          content="Full Stack Developer and Cloud Architect"
          key="og-description"
        />
        <meta
          property="og:image"
          content="https://maikel.dev/mkl.webp"
          key="og-image"
        />
        <meta property="og:url" content="https://maikel.dev" key="og-url" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
        <meta
          property="twitter:url"
          content="https://maikel.dev/"
          key="twitter:url"
        />
        <meta name="twitter:site" content="@maikelthedev" key="twitter:site" />
        <meta
          name="twitter:creator"
          content="@maikelthedev"
          key="twitter:creator"
        />
        <meta name="twitter:title" content="Maikel OÜ" key="twitter:title" />
        <meta
          name="twitter:description"
          content="Maikel OÜ"
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content="https://maikel.dev/mkl.webp"
          key="twitter:image"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
