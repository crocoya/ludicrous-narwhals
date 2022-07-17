import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../components/GlobalStyles';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ludicrous!</title>
      </Head>
      <GlobalStyles />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
