import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, transparentHeader = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Joe Attardi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparent={transparentHeader} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
