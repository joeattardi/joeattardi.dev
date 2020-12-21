import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterSocialLink({ href, icon }) {
  return (
    <a className="bg-blue-600 rounded-full p-2 transform hover:scale-125 transition w-14 h-14 flex flex-row items-center justify-center hover:bg-blue-500" href={href}>
      <FontAwesomeIcon icon={icon} fixedWidth={true} size="2x" />
    </a>
  );
}
