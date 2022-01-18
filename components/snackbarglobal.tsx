import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { SnackbarContext, SnackbarData } from "../context/snackbar";


type SnackbarGlobalProps = { children: React.ReactNode }

export default function SnackbarGlobal({ children }: SnackbarGlobalProps) {
    const [data, setData] = useState<SnackbarData>();
    const [open, setOpen] = useState(false);

    const openSnackbarHandler = (data: SnackbarData) => {
        setData(data);
        setOpen(true);
    }

    const closeSnackbarHandler = () => {
        setData(undefined);
        setOpen(false);
    }
    return (
        <SnackbarContext.Provider value={{ openSnackbar: openSnackbarHandler }}>
            {children}
            <Snackbar
                open={open}
                onClose={closeSnackbarHandler}
                autoHideDuration={6000}>
                <Alert onClose={closeSnackbarHandler} severity={data?.severity} sx={{ width: '100%' }}>
                    {data?.msg}
                </Alert>

            </Snackbar>
        </SnackbarContext.Provider>
    )
}