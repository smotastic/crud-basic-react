import { DataGrid, GridColDef, GridRowParams, GridRowsProp, useGridApiRef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { HouseplantData } from "../../data/houseplants";
import { pagePath } from "../../utils/page.path";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id' , width: 200},
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'waterRequirement', headerName: 'Water Requirement', width: 250 },
    { field: 'sunlight', headerName: 'Sunlight', width: 250 },
    { field: 'lastWatered', headerName: 'Last watered', width: 250 },
];
type HouseplantListProps = { data: HouseplantData[] }
export default function HouseplantList({ data }: HouseplantListProps) {

    const router = useRouter();

    const onRowClickHandler = (param: GridRowParams) => {
        router.push(`${pagePath.houseplants}/${param.row.id}`)
    }

    return (
        <>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <DataGrid onRowClick={onRowClickHandler} disableSelectionOnClick autoHeight rows={data} columns={columns} />
                </div>
            </div>
        </>
    );
}

