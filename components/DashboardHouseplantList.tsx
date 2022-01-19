import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse, ImageListItemBar } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import ImageListItem from '@mui/material/ImageListItem';
import { pagePath } from "../utils/page.path";

export default function DashboardHouseplantList() {
    const router = useRouter();

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">

                </ListSubheader>
            }>
            <ImageListItem>
                <img
                    style={{ height: '70px', width: '239px', objectFit: 'cover' }}
                    src={`/houseplant.jpeg`}
                    loading="lazy"
                />
                <ImageListItemBar
                    position="bottom"
                    title={'Houseplants'}


                />
            </ImageListItem>
            <ListItemButton onClick={() => router.push(`${pagePath.houseplants}`)}>
                <ListItemText primary={'List'} />
                <ListIcon />
            </ListItemButton>
            <ListItemButton onClick={() => router.push(`${pagePath.houseplants}/create`)}>
                <ListItemText primary={'Create'} />
                <AddIcon />
            </ListItemButton>
        </List>
    );
}