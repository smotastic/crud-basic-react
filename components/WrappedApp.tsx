import { Snackbar } from "@mui/material";
import { useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { SnackbarContext } from "../context/snackbar";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import SnackbarGlobal from "./snackbarglobal";

type WrappedAppProps = { children: React.ReactNode }

export default function WrappedApp({ children }: WrappedAppProps) {
    const { data, status } = useSession();

    return (
        <>
            <SnackbarGlobal>
                {!data && <Layout>{children}</Layout>}
                {data && <Layout><Dashboard>{children}</Dashboard></Layout>}
            </SnackbarGlobal>
        </>
    )
}