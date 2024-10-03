import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function MillburnAI() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Millburn Robotics</h1>
            <p className={utilStyles.lightText}>4 years of high school competitive robotics</p>
            <main>
                <p>
                    In my freshman year of High School, I joined the robotics program.
                    It was made up of 4 VEX Robotics teams, and 1 VEX AI team. I joined the 
                    VEX AI team, with the goal of competing in the new VEX AI competition.
                    Our objective was to make a robot to play that year's VEX challenge (Tipping Point)
                    fully autonomously. 
                    More information can be found on the <a href="https://millburnai.org" target="_blank">website</a> that I built for the team,
                    as well as our <a href="https://www.youtube.com/@millburnrobotics174" target="_blank">YouTube channel</a>.
                    <br/>
                    <br/>
                    Since 2022, I have been participating in the FIRST Tech Challenge robotics competition. I have been a captain of my school's team since 2023. Through my experience, I have gained many skills, from programming for robotics to operating heavy machinery in our school's robotics lab. I have been a part of team #8405, and was a founding member of team #23650. 
                </p>
            </main>
        </Layout>
    );
}