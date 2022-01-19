import { Box, BoxProps, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import HouseplantList from '../components/houseplants/HouseplantList';
import { useQuery } from "react-query";
import { useRouter } from 'next/router';
import { pagePath } from '../utils/page.path';


function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Home() {

  const router = useRouter();

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'flex-start' }}>
        <Item>
          <Card sx={{ width: 300, height: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/houseplant.jpeg"
              alt="houseplants"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Houseplants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update, view and create all Houseplants
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => router.push(`${pagePath.houseplants}`)}>Start</Button>
            </CardActions>
          </Card>
        </Item>
        <Item>
          <Card sx={{ width: 300, height: 300 }}>
            <CardMedia
              component="img"
              height="140"
              image="/seasonal.jpeg"
              alt="seasonal plants"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Seasonal Plants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Update, view and create all Seasonal Plants
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => router.push(`${pagePath.seasonal}`)}>Start</Button>
            </CardActions>
          </Card>
        </Item>
      </Box>
    </>
  )
}