import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

type CustomAppProps = { children: React.ReactNode }

export default function WrappedApp({ children }: CustomAppProps) {
    const { data, status } = useSession();
    return (
        <>
            {!data && <Layout>{children}</Layout>}
            {data && <Layout><Dashboard>{children}</Dashboard></Layout>}
        </>
    )
}