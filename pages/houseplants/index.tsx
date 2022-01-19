import { Container, Skeleton } from '@mui/material'
import HouseplantList from '../../components/houseplants/HouseplantList';
import { useQuery } from "react-query";
import { apiPath } from '../../utils/api.path';



export default function List() {

  const { isLoading, error, data, isFetching } = useQuery("masterFindAll", () =>
    fetch(`${apiPath.houseplants}/findAll`).then((res) => res.json())
  );

  if (isLoading) {
    return <ListSkeleton />
  }
  if (data.status >= 400) {
    return <div>{data.msg}</div>
  }
  return <Container><HouseplantList data={data.data} /></Container>;
}

function ListSkeleton() {
  return (
    <>
      <Skeleton height={50} width={'100%'}></Skeleton>
      <Skeleton height={50} width={'100%'}></Skeleton>
      <Skeleton height={50} width={'100%'}></Skeleton>
      <Skeleton height={50} width={'100%'}></Skeleton>
      <Skeleton height={50} width={'100%'}></Skeleton>
    </>)
}
