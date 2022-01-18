import { List, ListSubheader, ListItemButton, ListItemText, ImageListItemBar } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";
import ImageListItem from '@mui/material/ImageListItem';
import { pagePath } from "../utils/page.path";

export default function DashboardSeasonalList() {
    const router = useRouter();

    return (
        <List subheader={
            <ListSubheader component="div" id="nested-list-subheader">

            </ListSubheader>
        }>
            <ImageListItem>
                <img
                    style={{ height: '70px', width: '300px', objectFit: 'cover' }}
                    src={`/seasonal.jpeg`}
                    loading="lazy"
                />
                <ImageListItemBar
                    position="bottom"
                    title={'Seasonal Plants'}


                />
            </ImageListItem>
            <ListItemButton disabled onClick={() => router.push(`${pagePath.seasonal}`)}>
                <ListItemText primary={'List'} />
                <ListIcon />
            </ListItemButton>
            <ListItemButton disabled onClick={() => router.push(`${pagePath.seasonal}/create`)}>
                <ListItemText primary={'Create'} />
                <AddIcon />
            </ListItemButton>
        </List>
    );
}