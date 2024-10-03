import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function CellularInfill() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Cellular Infill</h1>
            <p className={utilStyles.lightText}>Cellular automata based 3D printer infill</p>
            <main>
                <p>
                    Working in a team of 3, I am exploring how cellular automata can be used to generate more natural 3D printer infill patterns. We are primarily utilizing the Wolfram language.
                </p>
            </main>
        </Layout>
    );
}