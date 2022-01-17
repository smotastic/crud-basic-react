import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

type WrappedAppProps = { children: React.ReactNode }

export default function WrappedApp({ children }: WrappedAppProps) {
    const { data, status } = useSession();
    return (
        <>
            {!data && <Layout>{children}</Layout>}
            {data && <Layout><Dashboard>{children}</Dashboard></Layout>}
        </>
    )
}