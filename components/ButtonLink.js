import Link from 'next/link';

export default function ButtonLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="m-2 bg-blue-700 text-white text-xl px-10 py-3 rounded-full">{children}</a>
    </Link>
  );
}
