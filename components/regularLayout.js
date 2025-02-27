import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { AiOutlineGithub, AiFillYoutube, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const name = 'ritvik';
export const siteTitle = "ritvik";

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
                <li><a href="https://github.com/purelyboba" target="_blank"><AiOutlineGithub /></a></li>
                <li><a href="https://www.youtube.com/channel/UC1yCGQaEkfsrulmjq4FT6JQ" target="_blank"><AiFillYoutube /></a></li>
                <li><a href="https://twitter.com/_ritvikg" target="_blank"><AiOutlineTwitter /></a></li>
                <li><a href="https://www.linkedin.com/in/ritvikgupta11/" target="_blank"><AiFillLinkedin /></a></li>
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
