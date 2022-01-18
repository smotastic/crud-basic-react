import { Skeleton } from "@mui/material";
import { GetServerSideProps } from "next"
import { useRouter } from "next/router";
import { Component, useCallback, useContext, useEffect, useState } from "react";
import DetailForm from "../../components/houseplants/DetailForm"
import { SnackbarContext } from "../../context/snackbar";
import DataRepository, { HouseplantData } from "../../data/houseplants"
import { useQuery, useQueryClient } from "react-query";
import { apiPath } from "../../utils/api.path";
import { pagePath } from "../../utils/page.path";
type DetailProps = { id: string }
export default function Detail() {
    console.log("Reached Client");
    const { openSnackbar } = useContext(SnackbarContext);
    const queryClient = useQueryClient()
    const router = useRouter();

    const { id } = router.query;
    const { isLoading, error, data, isFetching } = useQuery(`masterFindById${id}`, () =>
        fetch(`${apiPath.houseplants}/findById/${id}`).then((res) => res.json())
    );
    if (isLoading) {
        return <DetailSkeleton />;
    }
    if(data.status >= 400) {
        return <div>{data.msg}</div>
    }

    const handleSubmit = (updatingData: HouseplantData) => {
        if (!data) return;
        async function update() {
            try {
                const res = await fetch(`${apiPath.houseplants}/update`, {
                    method: 'POST',
                    body: JSON.stringify(updatingData)
                })
                
            } catch (error) {
                openSnackbar({ msg: `Error updating ${updatingData.name}`, severity: 'error' })
                return;
            }
            await queryClient.invalidateQueries(`masterFindById${id}`);
            openSnackbar({ msg: `Successfully updated ${updatingData.name}`, severity: 'success' })
            router.push(pagePath.houseplants);
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
