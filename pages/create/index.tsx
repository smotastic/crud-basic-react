import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react"
import DetailForm from "../../components/DetailForm";
import { SnackbarContext } from "../../context/snackbar";
import DataRepository, { MasterData } from "../../data/master"

export default function Create() {
    const router = useRouter();
    const { openSnackbar } = useContext(SnackbarContext);
    const handleSubmit = useCallback((createdData: MasterData) => {
        async function callback() {
            try {
                await DataRepository.create(createdData);
            } catch (error) {
                openSnackbar({ msg: `Error creating ${createdData.name}`, severity: 'error' });
                return;
            }

            openSnackbar({ msg: `Successfully created ${createdData.name}`, severity: 'success' });
            router.push('/');
        }
        callback();
    }, []);
    return (
        <>
            <DetailForm data={{ name: '' }} onSubmit={handleSubmit} type="Create" />

        </>
    )

}