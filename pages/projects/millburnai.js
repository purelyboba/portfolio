import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Millburn AI</h1>
            <p className={utilStyles.lightText}>The junction of robotics and artificial intelligence.</p>
            <main>
                <p>
                    In my freshman year of High School, I joined the robotics program.
                    It was made up of 4 VEX Robotics teams, and 1 VEX AI team. I joined the 
                    VEX AI team, with the goal of competing in the new VEX AI competition.
                    Our objective was to make a robot to play that years VEX challenge (Tipping Point)
                    fully autonomously. 
                    More information can be found on the <a href="https://millburnai.org" target="_blank">website</a> that I built for the team,
                    as well as our <a href="https://www.youtube.com/@millburnrobotics174" target="_blank">YouTube channel</a>.
                </p>
            </main>
        </Layout>
    );
}