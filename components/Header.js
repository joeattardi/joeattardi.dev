import Link from 'next/link';

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import NavMenu from './NavMenu';

export default function Header({ transparent }) {

  const headerClasses = classNames(
    'lg:p-2',
    'p-4',
    'dark:text-white',
    {
      'bg-blue-50': !transparent,
      'dark:bg-gray-700': !transparent,
      'dark:bg-header-pattern-dark': !transparent,
      'bg-header-pattern': !transparent
    }
  )

  return (
    <header className={headerClasses}>
      <div className="flex flex-row items-center justify-center sm:justify-start max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row flex-grow sm:space-x-4">
          <div className="hidden lg:block"><Link href="/"><a className="text-gray-400"><FontAwesomeIcon icon={faCode} size="lg" /></a></Link></div>
          <Link href="/"><a><h1 className="text-3xl uppercase font-light">Joe Attardi</h1></a></Link>
        </div>
        <NavMenu />
      </div>
    </header>
  );
}
