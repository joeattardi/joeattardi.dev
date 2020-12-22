import Layout from '../components/Layout';
import Link from '../components/Link';

export default function Home() {
  return (
    <Layout>
      <div className="p-4 max-w-screen-xl mx-auto w-full">
        <section className="flex flex-col lg:flex-row items-center lg:space-x-4 lg:p-8">
            <img className="w-48 h-48 bg-gray-700 rounded-full border-4 dark:border-gray-500" src="/joe.png" />
            <div>
              <p className="m-2 mt-4">
                Hello! I'm Joe. I'm a <strong>software engineer</strong> from the <strong>Boston area</strong> with over 16 years of experience. I have
                a passion for frontend design and development.
              </p>
              <p className="m-2">
                I'm also the author of <Link href="https://www.apress.com/us/book/9781484262962">Using Gatsby and Netlify CMS</Link> and {' '}
                <Link href="https://www.apress.com/us/book/9781484262931">Modern CSS</Link>.
              </p>
              <p className="m-2">
                Currently, I'm a <strong>Staff Software Engineer</strong> at <Link href="https://synopsys.com">Synopsys</Link>. In the past, I have
                worked at companies such as Salesforce, Constant Contact, Dell, Nortel, and Sun Microsystems.
              </p>
            </div>
        </section>
      </div>
    </Layout>
  );
}
