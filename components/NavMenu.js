import { useState } from 'react';

import classNames from 'classnames';

export default function NavMenu() {
  const [isOpen, setOpen] = useState(false);

  const commonClasses = [
    'h-1',
    'w-full',
    'bg-black',
    'rounded-full',
    'transition',
    'ease-in-out'
  ]

  const topClasses = classNames(...commonClasses, {
    'transform': isOpen,
    'rotate-45': isOpen,
    'translate-y-3': isOpen
  });

  const middleClasses = classNames(...commonClasses, {
    'opacity-0': isOpen
  });

  const bottomClasses = classNames(...commonClasses, {
    'transform': isOpen,
    '-rotate-45': isOpen,
    '-translate-y-3': isOpen
  });

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggle} className="absolute right-4 w-11 h-12 rounded-full p-1 py-2.5 flex flex-col justify-between">
        <div className={topClasses}></div>
        <div className={middleClasses}></div>
        <div className={bottomClasses}></div>
      </button>
    </>
  );
}
