import { Skeleton } from "@mui/material";
import { GetServerSideProps } from "next"
import { useRouter } from "next/router";
import { Component, useCallback, useContext, useEffect, useState } from "react";
import DetailForm from "../../components/DetailForm"
import { SnackbarContext } from "../../context/snackbar";
import DataRepository, { MasterData } from "../../data/master"
import { useQuery, useQueryClient } from "react-query";
type DetailProps = { id: string }
export default function Detail({ id }: DetailProps) {

    const { openSnackbar } = useContext(SnackbarContext);
    const queryClient = useQueryClient()
    const router = useRouter();


    const { isLoading, error, data, isFetching } = useQuery(`masterFindById${id}`, () =>
        fetch(`/api/data/findById/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <DetailSkeleton />;
    }
    if(data.status >= 400) {
        return <div>{data.msg}</div>
    }

    const handleSubmit = (updatingData: MasterData) => {
        if (!data) return;
        async function update() {
            try {
                const res = await fetch(`/api/data/update`, {
                    method: 'POST',
                    body: JSON.stringify(updatingData)
                })
                
            } catch (error) {
                openSnackbar({ msg: `Error updating ${updatingData.name}`, severity: 'error' })
                return;
            }
            await queryClient.invalidateQueries(`masterFindById${id}`);
            openSnackbar({ msg: `Successfully updated ${updatingData.name}`, severity: 'success' })
            router.push('/');
        }
        update();
    };



    return <DetailForm data={data.data} onSubmit={handleSubmit} type="Update" />
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
        props: { id: id },
    }
}

