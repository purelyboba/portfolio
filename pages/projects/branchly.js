import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Branchly() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Branchly</h1>
            <p className={utilStyles.lightText}>Enhancing self-learning with large language models</p>
            <main>
                <p>
                    PennApps 2024 project, where we created a skill tree based learning platform to make self-learning as easy as possible. 
                    Check out our <a href="https://devpost.com/software/branchly" target="_blank">Devpost</a> submission!
                </p>
            </main>
        </Layout>
    );
}