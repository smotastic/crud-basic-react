import { DataGrid, GridColDef, GridRowParams } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { SeasonalData } from "../../data/seasonal";
import { pagePath } from "../../utils/page.path";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 200 },
    { field: 'name', headerName: 'Name', width: 250 },
];
type SeasonalListProps = { data: SeasonalData[] }
export default function SeasonalList({ data }: SeasonalListProps) {

    const router = useRouter();

    const onRowClickHandler = (param: GridRowParams) => {
        router.push(`${pagePath.seasonal}/${param.row.id}`)
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

