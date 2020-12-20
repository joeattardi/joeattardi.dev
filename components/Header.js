export default function Header() {
  return (
    <header className={`bg-blue-50 bg-header-pattern p-4 flex flex-row items-center justify-center space-x-3`}>
      <div className="flex flex-col items-center">
        <img className="rounded-full w-20 h-20 bg-blue-400" src="/joe.png" />
        <h1 className="text-3xl uppercase font-light">Joe Attardi</h1>
      </div>
    </header>
  );
}
