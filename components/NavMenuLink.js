import Link from 'next/link';

export default function NavMenuLink({ children, href }) {
  return (
    <li className="text-center text-4xl lg:text-lg my-4 mx-1">
      <Link href={href}>
        <a className="hover:text-white hover:bg-indigo-600 dark:hover:bg-gray-500 px-4 py-2 rounded transition">{children}</a>
      </Link>
    </li>
  );
}
