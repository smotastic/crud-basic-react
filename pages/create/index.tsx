import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react"
import DetailForm from "../../components/DetailForm";
import { SnackbarContext } from "../../context/snackbar";
import DataRepository, { MasterData } from "../../data/master"

export default function Create() {
    const router = useRouter();
    const { openSnackbar } = useContext(SnackbarContext);
    const handleSubmit = (creatingData: MasterData) => {
        async function update() {
            try {
                await fetch(`/api/data/create`, {
                    method: 'POST',
                    body: JSON.stringify(creatingData)
                })
                
            } catch (error) {
                openSnackbar({ msg: `Error creating ${creatingData.name}`, severity: 'error' })
                return;
            }
            openSnackbar({ msg: `Successfully created ${creatingData.name}`, severity: 'success' })
            router.push('/');
        }
        update();
    };
    return (
        <>
            <DetailForm data={{ name: '' }} onSubmit={handleSubmit} type="Create" />
        </>
    )

}