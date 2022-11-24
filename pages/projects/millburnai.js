import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <Head>
                <title>Ritvik Gupta</title>
            </Head>
            <h1 className={utilStyles.headingXl}>Millburn AI</h1>
            <p className={utilStyles.lightText}>The junction of robotics and artificial intelligence.</p>
            <main>
                <p>
                    In my freshman year of High School, I joined the robotics program.
                    It was made up of 4 VEX Robotics teams, and 1 VEX AI team. I joined the 
                    VEX AI team, with the goal of competing in the new VEX AI competition.
                </p>
            </main>
        </Layout>
    );
}