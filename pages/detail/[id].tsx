import {  GetServerSideProps } from "next"
import { useEffect, useState } from "react";
import DetailForm from "../../components/DetailForm"
import DataRepository, { MasterData } from "../../utils/data/master"

type DetailProps = { id: number }
export default function Detail({ id }: DetailProps) {
    const [data, setData] = useState<MasterData>();
    useEffect(() => {
    async function fetchData() {
      let data = await DataRepository.findById(id);
      setData(data);
    }
    fetchData()
  }, [])
    return data ? <DetailForm data={data} /> : <div>Loading...</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context?.params?.id as string;
    return {
        props: { id: parseInt(id) },
    }
}

