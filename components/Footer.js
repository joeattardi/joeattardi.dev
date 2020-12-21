import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import FooterSocialLink from './FooterSocialLink';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="mx-auto max-w-screen-xl">
        <section className="flex flex-row p-4 space-x-3 justify-center">
          <FooterSocialLink icon={faTwitter} href="https://twitter.com/joeattardi" />
          <FooterSocialLink icon={faLinkedin} href="https://linkedin.com/in/joeattardi" />
          <FooterSocialLink icon={faGithub} href="https://github.com/joeattardi" />
          <FooterSocialLink icon={faCodepen} href="https://codepen.io/thinksInCode" />
          <FooterSocialLink icon={faEnvelope} href="mailto:jattardi@gmail.com" />
        </section>
        <div className="p-4 text-center">&copy; 2020 Joe Attardi</div>
      </div>
    </footer>
  );
}
