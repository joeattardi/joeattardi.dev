import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className="bg-blue-50 dark:bg-header-pattern-dark bg-header-pattern lg:p-2 p-4 flex flex-row items-center justify-center sm:justify-start dark:text-white dark:bg-gray-700 border-b border-blue-200 dark:border-gray-700">
      <div className="flex flex-col items-center sm:flex-row flex-grow sm:space-x-4">
        <img className="rounded-full lg:w-12 lg:h-12 w-20 h-20 bg-blue-200" src="/joe.png" />
        <h1 className="text-4xl lg:text-2xl uppercase font-light">Joe Attardi</h1>
      </div>
      <NavMenu />
    </header>
  );
}
