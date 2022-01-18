import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import CrudList from '../components/CrudList';
import { useQuery } from "react-query";
import { useRouter } from 'next/router';



export default function Home() {

  const router = useRouter();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/houseplant.jpeg"
          alt="green iguana"
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
          <Button size="small" onClick={() => router.push('/master')}>Start</Button>
        </CardActions>
      </Card>
    </>
  )
}