import { useEffect, useRef } from 'react';

import Layout from '../../components/regularLayout';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Kiosks() {
    
    const viewer = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
                {
                    path: '/pdflib',
                    initialDoc: '/documents/superintendentUpdate.pdf',
                },
                viewer.current,
            ).then((instance) => {
                const { docViewer } = instance;
            });
        })
    }, []);
    
    return (
        <Layout>
            <h1 className={utilStyles.headingXl}>Security Kiosks</h1>
            <p className={utilStyles.lightText}>Presented at the township board of education</p>
            <div className="webviewer" ref={viewer} style={{height: "80vh"}}></div>
        </Layout>
    );
}