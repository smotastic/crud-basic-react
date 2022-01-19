import { List, ListItemButton, ListItemText, Divider, useTheme, ListSubheader } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "./Layout";
import { signOut } from 'next-auth/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
export default function DashboardOptions() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return <>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav" subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Options
                </ListSubheader>
            }
        >
            <ListItemButton onClick={colorMode.toggleColorMode}>
                <ListItemText primary={theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'} />
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </ListItemButton>
        </List>
        <Divider />
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav">
            <ListItemButton onClick={() => signOut()}>
                <ListItemText primary={'Logout'} />
                <LogoutIcon />
            </ListItemButton>
        </List>
    </>;
}