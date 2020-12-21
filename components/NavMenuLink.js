import Link from 'next/link';

export default function NavMenuLink({ children, href }) {
  return (
    <li className="text-center text-4xl lg:text-lg my-4 lg:my-0 mx-1 font-light">
      <Link href={href}>
        <a className="inline-block hover:text-white hover:bg-indigo-600 px-4 py-2 rounded transition">{children}</a>
      </Link>
    </li>
  );
}
