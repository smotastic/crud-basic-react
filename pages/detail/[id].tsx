import { Skeleton } from "@mui/material";
import { GetServerSideProps } from "next"
import { useRouter } from "next/router";
import { Component, useCallback, useContext, useEffect, useState } from "react";
import DetailForm from "../../components/DetailForm"
import { SnackbarContext } from "../../context/snackbar";
import DataRepository, { MasterData } from "../../utils/data/master"

type DetailProps = { id: number }
export default function Detail({ id }: DetailProps) {

    const { openSnackbar } = useContext(SnackbarContext);
    const router = useRouter();

    const [data, setData] = useState<MasterData>();
    useEffect(() => {
        async function fetchData() {
            let data = await DataRepository.findById(id);
            setData(data);
        }
        fetchData()
    }, [])

    const handleSubmit = useCallback((updatingData: MasterData) => {
        async function update() {
            if (!data) return;
            try {
                await DataRepository.update({ ...updatingData });
            } catch (error) {
                openSnackbar({ msg: `Error updating ${updatingData.name}`, severity: 'error' })
                return;
            }
            openSnackbar({ msg: `Successfully updated ${updatingData.name}`, severity: 'success' })
            router.push('/');
        }
        update();
    }, [data]);


    return data ? <DetailForm data={data} onSubmit={handleSubmit} type="Update" /> : <DetailSkeleton />
}

function DetailSkeleton() {
    return <>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={'100%'} />
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context?.params?.id as string;
    return {
        props: { id: parseInt(id) },
    }
}

