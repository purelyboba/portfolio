import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function IEM() {
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Illini Electric Motorsports</h1>
            <p className={utilStyles.lightText}>Circuit Design and Firmware for UIUC Formula SAE</p>
            <img  src="/images/iem.png" alt="Formula Car Sketch (Created with Copilot)" width={450} />
            <main>
                <p>
                    Illini Electric Motorsports (IEM) is the University of Illinois Urbana-Champaign's Formula SAE team.
                    <br/>
                    <br/>
                    As part of the team, I am leading the development of a custom 48V to 24V buck converter rated at 800W, achieving less than 500 mV output ripple. 
                    <br/>
                    <br/>
                    Using Altium, I designed schematics for the vehicle control board, incorporating power distribution, fault management, and status indicators. I validated circuit interconnections through a detailed top-level schematic prior to PCB layout and analyzed component datasheets to select optimal candidates for the main control board. My final component choices minimized PCB footprint, improved thermal reliability, and increased efficiency by 4%. 
                    <br/>
                    <br/>
                    On the software side, I developed an ISO-TP transport layer test plan to validate CAN communication across multiple ECUs, ensuring compliance with ISO-TP 2016 standards and verifying message delivery using PCAN-USB. I also built a cost-effective hardware-in-the-loop (HIL) test setup using LabJack U6-Pro to simulate ECU I/O, integrating a Python toolchain into the Bazel build system to run automated tests with pytest and the LabJack API. Signal analysis and plotting were performed using Matplotlib and NumPy.
                </p>
            </main>
        </Layout>
    );
}