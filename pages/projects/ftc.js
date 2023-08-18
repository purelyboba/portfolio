import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function FTC() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>FIRST Tech Challenge</h1>
            <p className={utilStyles.lightText}>
                High school competitive robotics
            </p>
            <main>
                <p>
                Since 2022, I have been participating in the FIRST Tech Challenge robotics competition. I have been a captain of my school's team since 2023. Through my experience, I have gained many skills, from programming for robotics to operating heavy machinery in our school's robotics lab. 
                I have been a part of team #8405, and was a founding member of team #23650.
                </p>
            </main>
        </Layout>
    );
}