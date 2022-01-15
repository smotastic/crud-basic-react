import { Collapse, Alert, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

type ClosableAlertProps = {
    msg: string
}

export default function ClosableAlert({ msg }: ClosableAlertProps) {
    const [open, setOpen] = useState(true);

    return <Collapse in={open}>
        <Alert severity="error"
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
        >
            {msg}
        </Alert>
    </Collapse>
}