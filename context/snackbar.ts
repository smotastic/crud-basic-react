import React from "react";

export interface SnackbarData {
    msg: string,
    severity: 'success' | 'info' | 'warning' | 'error'
}

export interface SnackbarContextData {
    openSnackbar: (data: SnackbarData) => void
}

export const SnackbarContext = React.createContext<SnackbarContextData>({openSnackbar: data => { }});