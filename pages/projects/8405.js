import Layout from '../../components/Layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <Head>
                <title>Ritvik Gupta</title>
            </Head>
            <h1 className={utilStyles.headingXl}>8405 Millburn Robotics</h1>
            <p className={utilStyles.lightText}>Coming soon...</p>
        </Layout>
    );
}