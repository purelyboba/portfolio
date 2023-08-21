import Script from 'next/script'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-X9HXHWR4MM"/>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-X9HXHWR4MM');
                `}
            </Script>

            <Component {...pageProps} />
        </>
    )
}
