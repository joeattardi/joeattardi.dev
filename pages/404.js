import Layout from '../components/Layout';

import ButtonLink from '../components/ButtonLink';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center p-12">
        <img src="/notFound.svg" className="w-full max-w-2xl" />
        <h2 className="text-5xl text-center my-4">Oops!</h2>
        <h3 className="text-2xl text-center my-4">The page you requested was not found.</h3>
        <ButtonLink href="/">Go back</ButtonLink>
      </div>
    </Layout>
  )
}
