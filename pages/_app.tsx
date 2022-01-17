import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import WrappedApp from '../components/WrappedApp';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <SessionProvider session={session}>
                <WrappedApp>
                    <Component {...pageProps} />
                </WrappedApp>
            </SessionProvider>
        </>
    )

}

export default MyApp
