import NextLink from 'next/link';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Link({ href, children, isExternal }) {
  return (
    <NextLink href={href}>
      <a className="dark:text-indigo-300 text-indigo-600 hover:underline inline-flex flex-row items-center space-x-1">
        <span>{children}</span>
      </a>
    </NextLink>
  );
}
