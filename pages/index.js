import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm <strong>Ritvik</strong>, a student from New Jersey focusing on real-world robotics and machine learning applications. Apart from programming, I enjoy making music and watching motorsports.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/projects/millburnai">Millburn AI</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link legacyBehavior href="/projects/kiosks">
              <a>School Security Kiosks</a>
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href="/projects/8405">8405 First Tech Challenge</Link>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={allPostsData[0].id}>
            <Link href={`/posts/${allPostsData[0].id}`}>{allPostsData[0].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[0].date} />
            </small>
          </li>
          <li className={utilStyles.listItem} key={allPostsData[1].id}>
            <Link href={`/posts/${allPostsData[1].id}`}>{allPostsData[1].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[1].date} />
            </small>
          </li>
          <li className={utilStyles.listItem} key={allPostsData[2].id}>
            <Link href={`/posts/${allPostsData[2].id}`}>{allPostsData[2].title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={allPostsData[2].date} />
            </small>
          </li>
        </ul>
        <Link href="/blog">see more →</Link>
      </section>
    </Layout>
  );
}
