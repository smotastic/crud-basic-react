import { Container, Skeleton } from '@mui/material'
import { useQuery } from "react-query";
import { apiPath } from '../../utils/api.path';
import SeasonalList from '../../components/seasonal/SeasonalList';



export default function List() {

  const { isLoading, error, data, isFetching } = useQuery("seasonalFindAll", () =>
    fetch(`${apiPath.seasonal}/findAll`).then((res) => res.json())
  );

  if (isLoading) {
    return <ListSkeleton />
  }
  if (data.status >= 400) {
    return <div>{data.msg}</div>
  }
  return <Container><SeasonalList data={data.data} /></Container>;
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
