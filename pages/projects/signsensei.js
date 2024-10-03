import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function SignSensei() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>SignSensei</h1>
            <p className={utilStyles.lightText}>Leveraging computer vision to teach ASL</p>
            <main>
                <p>
                    PennApps 2023 project, where we used Mediapipe's hand pose recognition to create a sign language learning tool. 
                    Check out our <a href="https://devpost.com/software/signsensei" target="_blank">Devpost</a> submission!
                </p>
            </main>
        </Layout>
    );
}