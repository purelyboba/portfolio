import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function CellularInfill() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Cellular Infill</h1>
            <p className={utilStyles.lightText}>Cellular automata based 3D printer infill</p>
            <img  src="/images/ca.png" alt="Cellular Automata" width={500} />
            <main>
                <p>
                    Working in a team of 3 in the Wolfram Emerging Leaders Program, I developed a novel method for generating 3D printer infill. In contrast to traditional imperical patterns, our method takes advantage of the emergent properties of cellular automata to create more efficient and customizable infill patterns.
                    Staff pick on <a href="https://community.wolfram.com/groups/-/m/t/3379925" target="_blank">Wolfram Community</a>.
                </p>
            </main>
        </Layout>
    );
}