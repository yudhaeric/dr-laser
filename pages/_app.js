import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="DR.LASER | Cegah Stroke, Serangan Jantung, dan Diabetes" />
        <link rel="icon" href="/favicon.png" />
        <title>DR.LASER</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
