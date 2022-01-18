import { Container, Paper } from '@mui/material'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react';
import CrudList from '../components/CrudList';
import { MasterData } from '../data/master';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useSession } from 'next-auth/react';


export default function Home() {
  // const [data, setData] = useState<MasterData[]>([]);

  const { isLoading, error, data, isFetching } = useQuery("masterFindAll", () =>
    fetch('/api/data/findAll').then((res) => res.json())
  );

  if (isLoading) {
    return <div>loading</div>
  }
  if (data.status >= 400) {
    return <div>{data.msg}</div>
  }

  return <Container><CrudList data={data.data} /></Container>;
}



// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await DataRepository.findAll();
//   return {
//     props: { data }
//   }
// }