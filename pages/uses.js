import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/Layout';
import Link from '../components/Link';
import PageHeader from '../components/PageHeader';

export default function Uses() {
  return (
    <Layout title="Uses">
      <PageHeader icon={faDesktop}>Uses</PageHeader>
      <section className="mt-4">
        <h3 className="text-2xl my-4">Computer/Hardware</h3>
        <ul className="list-disc pl-8">
          <li>
            <strong>Computer</strong>: 2019 16" MacBook Pro with 16GB RAM and a 1 TB SSD
          </li>
          <li>
            <strong>Monitor</strong>: LG 27UD68 27" 4K IPS Display
          </li>
          <li>
            <strong>Peripherals</strong>: Magic Keyboard and Magic Trackpad
          </li>
        </ul>
        <h3 className="text-2xl my-4">Development Environment</h3>
        <ul className="list-disc pl-8">
          <li>
            <strong>Editor</strong>: <Link isExternal={true} href="https://code.visualstudio.com/">Visual Studio Code</Link>. Unless I'm working on a Java
            project, in which case I use IntelliJ.
          </li>
          <li>
            <strong>Color theme</strong>: <Link isExternal={true} href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">Night Owl</Link>
          </li>
          <li>
            <strong>Font</strong>: <Link isExternal={true} href="https://github.com/microsoft/cascadia-code">Cascadia Code</Link> from Microsoft
          </li>
          <li>
            <strong>Terminal</strong>: <Link isExternal={true} href="https://iterm2.com/">iTerm 2</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
