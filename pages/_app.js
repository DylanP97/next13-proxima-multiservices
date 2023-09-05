import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Proxima Multiservices | Nettoyage courant de bâtiment sur Paris et Île de France</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
