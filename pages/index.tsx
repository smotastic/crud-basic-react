import { Container, Paper } from '@mui/material'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react';
import CrudList from '../components/CrudList';
import DataRepository, { MasterData } from "../data/master"


export default function Home() {
  const [data, setData] = useState<MasterData[]>([]);
  useEffect(() => {
    async function fetchList() {
      let allData = await DataRepository.findAll();
      setData(allData);
    }
    fetchList()
  }, [])
  return <Container><CrudList data={data} /></Container>;
}


// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const data = await DataRepository.findAll();
//   return {
//     props: { data }
//   }
// }