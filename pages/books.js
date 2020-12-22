import { faBook } from '@fortawesome/free-solid-svg-icons';

import BookItem from '../components/BookItem';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

export default function Uses() {
  return (
    <Layout title="Uses">
      <PageHeader icon={faBook}>My Books</PageHeader>
      <section className="mt-4 flex flex-row flex-wrap">
        <BookItem 
          image="/ModernCSS.png"
          title="Modern CSS"
          year="2020"
          subtitle="Master the Key Concepts of CSS for Modern Web Development"
          apressLink="https://www.apress.com/us/book/9781484262931"
          amazonLink="https://www.amazon.com/gp/product/148426293X"
        >
          Come on a tour of “modern” CSS in 2020. This example-driven book demonstrates the concepts by showing code examples,
          screenshots, and diagrams to help clearly communicate the information. You'll start with the very basics of CSS: 
          box model, colors, selectors and combinators, and specificity. Then gradually move through more intermediate topics - 
          styling text, positioning, Z-index and stacking contexts, gradients, borders, and then to more advanced topics such as
          transforms, transitions, animations, flexbox, and CSS grid.
        </BookItem>
        <BookItem
          image="/UsingGatsbyAndNetlifyCMS.png" 
          title="Using Gatsby and Netlify CMS"
          year="2020"
          subtitle="Build Blazing Fast JAMstack Apps Using Gatsby and Netlify CMS"
          apressLink="https://www.apress.com/us/book/9781484262962"
          amazonLink="https://www.amazon.com/Using-Gatsby-Netlify-CMS-JAMstack/dp/1484262964"
        >
          Leverage the powerful new combination of Gatsby and Netlify CMS, a free open source content management solution,
          to build blazing fast apps. This book shows you how to create a React-powered website using the Gatsby framework 
          for the frontend, and Netlify CMS as the content backend. 
        </BookItem>
      </section>
    </Layout>
  );
}
