import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
    <p>I am Carl Adrian M Mendoza, A part-time Draftsman. My hobbies are making Art, Running and Cooking. </p>
          <li>To widen my knowledge and experience in System architecture.</li>
          <li>I expect to be familiar with deploying more websites</li>
          <li>To be able to have more understanding in developing</li>
        <p>10 Things That Require Zero Talent</p>
          <li>1. Being On Time</li>
          <li>2. Making An Effort</li>
          <li>3. Being High Energy</li>
          <li>4. Having A Positive Attitude</li>
          <li>5. Being Passionate</li>
          <li>6. Using Good Body Language</li>
          <li>7. Being Coachable</li>
          <li>8. Doing A Little Extra</li>
          <li>9. Being Prepared</li>
          <li>10. Having A Strong Work Ethic</li>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
