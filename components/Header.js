import NavMenu from './NavMenu';

export default function Header() {
  return (
    <header className={`bg-blue-50 dark:bg-header-pattern-dark bg-header-pattern p-4 flex flex-row items-center justify-center dark:text-white dark:bg-gray-800`}>
      <div className="flex flex-col items-center">
        <img className="rounded-full w-20 h-20 bg-blue-200" src="/joe.png" />
        <h1 className="text-4xl uppercase font-light">Joe Attardi</h1>
      </div>
      <NavMenu />
    </header>
  );
}
