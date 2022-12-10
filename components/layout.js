import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Ritvik Gupta';
export const siteTitle = "Ritvik Gupta";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/pfp.jpg" />
        <title>{siteTitle}</title>
      </Head>
      <header>
          <>
            <div className={styles.nav}>
              <Link className={utilStyles.navTitle} href="/"><h1 className={utilStyles.heading2Xl}>{name}</h1></Link>
              <ul className={styles.socials}>
                <li><a href="https://github.com/R1tzG" target="_blank">github</a></li>
                <li><a href="https://twitter.com/_ritvikg" target="_blank">twitter</a></li>
                <li><a href="https://www.linkedin.com/in/ritvikgupta11/" target="_blank">linkedin</a></li>
              </ul>
            </div>
          </>
      </header>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
    </>
  );
}
