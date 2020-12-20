import Link from 'next/link';

import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className="bg-blue-50 dark:bg-header-pattern-dark bg-header-pattern lg:p-2 p-4 dark:text-white dark:bg-gray-700 border-b border-blue-200 dark:border-gray-700">
      <div className="flex flex-row items-center justify-center sm:justify-start max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row flex-grow sm:space-x-4">
          <Link href="/"><a><img className="rounded-full lg:w-12 lg:h-12 w-20 h-20 bg-blue-200" src="/joe.png" /></a></Link>
          <Link href="/"><a><h1 className="text-4xl lg:text-3xl uppercase font-light">Joe Attardi</h1></a></Link>
        </div>
        <NavMenu />
      </div>
    </header>
  );
}
