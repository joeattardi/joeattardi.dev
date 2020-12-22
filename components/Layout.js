import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, transparentHeader = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title ? `${title} - ` : ''}Joe Attardi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header transparent={transparentHeader} />
      <main className="flex-grow flex flex-col p-4 max-w-screen-xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
