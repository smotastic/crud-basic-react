import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, ImageListItemBar } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import ImageListItem from '@mui/material/ImageListItem';

export default function DashboardMasterList() {
    const router = useRouter();

    return (
        <List subheader={
            <ListSubheader component="div" id="nested-list-subheader">

            </ListSubheader>
        }>
            <ImageListItem>
                <img
                    style={{ height: '70px', width: '300px', objectFit: 'cover' }}
                    src={`/houseplant.jpeg`}
                    loading="lazy"
                />
                <ImageListItemBar
                    position="bottom"
                    title={'Houseplants'}


                />
            </ImageListItem>
            <ListItemButton onClick={() => router.push('/master')}>
                <ListItemText primary={'List'} />
                <ListIcon />
            </ListItemButton>
            <ListItemButton onClick={() => router.push('/master/create')}>
                <ListItemText primary={'Create'} />
                <AddIcon />
            </ListItemButton>
        </List>
    );
}