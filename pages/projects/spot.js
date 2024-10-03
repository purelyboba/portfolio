import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Spot() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Spot Payload</h1>
            <p className={utilStyles.lightText}>Making industry robotics accessible to all</p>
            <main>
                <p>
                    Working with my high school and Boston Dynamics, I helped create a comprehensive guide to using the Spot robot dog. I also helped develop a modular payload system. The resource we created can be found <a href="https://purelyboba.github.io/spot-mhs" target="_blank">here</a>.
                </p>
            </main>
        </Layout>
    );
}