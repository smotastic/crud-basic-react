import { Container, Paper } from '@mui/material'
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import CrudList from '../components/CrudList';
import DataRepository, { MasterData } from "../utils/data/master"

type HomeProps = { data: MasterData[] }

export default function Home({ data }: HomeProps) {
  return <Container><CrudList data={data} /></Container>;
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await DataRepository.findAll();
  return {
    props: { data }
  }
}