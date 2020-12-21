import NextLink from 'next/link';

export default function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <a className="dark:text-indigo-300 text-indigo-600 hover:underline">{children}</a>
    </NextLink>
  );
}
