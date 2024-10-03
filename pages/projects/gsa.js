import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function GSA() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Garden State Alliance</h1>
            <p className={utilStyles.lightText}>Uniting NJ robotics teams</p>
            <main>
                <p>
                    Recognizing the need for a community dedicated to high school robotics in New Jersey, I created the Garden State Alliance. Our community, which is focused around the FIRST Tech Challenge robotics competition, facilitates discussion and host community events.
                    Check us out at <a href="https://www.gardenstatealliance.org" target="_blank">gardenstatealliance.org</a> and see how you can get involved.
                </p>
            </main>
        </Layout>
    );
}