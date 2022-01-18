import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import WrappedApp from '../components/WrappedApp';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <SessionProvider session={session}>
                <QueryClientProvider client={queryClient}>
                    <WrappedApp>
                        <Component {...pageProps} />
                    </WrappedApp>
                </QueryClientProvider>
            </SessionProvider>
        </>
    )

}

export default MyApp
