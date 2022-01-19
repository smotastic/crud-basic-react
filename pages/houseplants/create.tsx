import { useRouter } from "next/router";
import { useContext } from "react"
import DetailForm from "../../components/houseplants/HouseplantDetailForm";
import { SnackbarContext } from "../../context/snackbar";
import { HouseplantData } from "../../data/houseplants"
import { apiPath } from "../../utils/api.path";
import { pagePath } from "../../utils/page.path";

export default function Create() {
    const router = useRouter();
    const { openSnackbar } = useContext(SnackbarContext);
    const handleSubmit = (creatingData: HouseplantData) => {
        async function update() {
            try {
                await fetch(`${apiPath.houseplants}/create`, {
                    method: 'POST',
                    body: JSON.stringify(creatingData)
                })
                
            } catch (error) {
                openSnackbar({ msg: `Error creating ${creatingData.name}`, severity: 'error' })
                return;
            }
            openSnackbar({ msg: `Successfully created ${creatingData.name}`, severity: 'success' })
            router.push(`${pagePath.houseplants}`);
        }
        update();
    };
    return (
        <>
            <DetailForm data={{ name: '', sunlight: '', description: '', waterRequirement: '' }} onSubmit={handleSubmit} type="Create" />
        </>
    )

}