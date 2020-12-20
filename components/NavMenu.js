import { useState } from 'react';

import classNames from 'classnames';

import NavMenuLink from './NavMenuLink';

export default function NavMenu() {
  const [isOpen, setOpen] = useState(false);

  const commonClasses = [
    'h-1',
    'w-full',
    'bg-black',
    'dark:bg-white',
    'rounded-full',
    'transition',
    'motion-reduce:transition-none',
    'ease-in-out'
  ]

  const topClasses = classNames(...commonClasses, {
    'transform': isOpen,
    'rotate-45': isOpen,
    'translate-y-3': isOpen,
    'bg-white': isOpen
  });

  const middleClasses = classNames(...commonClasses, {
    'opacity-0': isOpen
  });

  const bottomClasses = classNames(...commonClasses, {
    'transform': isOpen,
    '-rotate-45': isOpen,
    '-translate-y-3': isOpen,
    'bg-white': isOpen
  });

  const navClasses = classNames(
    'lg:bg-transparent',
    'lg:opacity-100',
    'lg:translate-x-0',
    'bg-blue-800',
    'z-10',
    'fixed',
    'lg:static',
    'text-white',
    'inset-0',
    {
      'hidden': !isOpen,
      'lg:block': !isOpen
    }
  )

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggle} className="lg:hidden z-20 absolute right-4 w-11 h-12 rounded-full p-1 py-2.5 flex flex-col justify-between">
        <div className={topClasses}></div>
        <div className={middleClasses}></div>
        <div className={bottomClasses}></div>
      </button>
      <nav className={navClasses}>
        <ul className="flex flex-col justify-center h-full lg:flex-row lg:justify-end">
          <NavMenuLink>Books</NavMenuLink>
          <NavMenuLink>Projects</NavMenuLink>
          <NavMenuLink>Blog</NavMenuLink>
        </ul>
      </nav>
    </>
  );
}
