import { useRouter } from "next/router";
import { useContext } from "react"
import DetailForm from "../../components/seasonal/SeasonalDetailForm";
import { SnackbarContext } from "../../context/snackbar";
import { SeasonalData } from "../../data/seasonal";
import { apiPath } from "../../utils/api.path";
import { pagePath } from "../../utils/page.path";

export default function Create() {
    const router = useRouter();
    const { openSnackbar } = useContext(SnackbarContext);
    const handleSubmit = (creatingData: SeasonalData) => {
        async function update() {
            try {
                await fetch(`${apiPath.seasonal}/create`, {
                    method: 'POST',
                    body: JSON.stringify(creatingData)
                })
                
            } catch (error) {
                openSnackbar({ msg: `Error creating ${creatingData.name}`, severity: 'error' })
                return;
            }
            openSnackbar({ msg: `Successfully created ${creatingData.name}`, severity: 'success' })
            router.push(`${pagePath.seasonal}`);
        }
        update();
    };
    return (
        <>
            <DetailForm data={{ name: '' }} onSubmit={handleSubmit} type="Create" />
        </>
    )

}