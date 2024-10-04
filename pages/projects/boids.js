import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Boids() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Simulating the flocking behavior of boids within a parametrically defined vector field</h1>
            <p className={utilStyles.lightText}>Working with the Wolfram language for the first time</p>
            <main>
                <p>
                    During my time at the Wolfram High School Summer Research Program, I investigated how I could use vector fields to manipulate the behavior of simulated birds. 
                    Staff pick on <a href="https://community.wolfram.com/groups/-/m/t/3211600" target="_blank">Wolfram Community</a> and <a href="https://education.wolfram.com/summer-research-high-school/" target="_blank">WSRP</a> featured project.
                </p>
            </main>
        </Layout>
    );
}