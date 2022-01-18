import { DataGrid, GridColDef, GridRowParams, GridRowsProp, useGridApiRef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { MasterData } from "../data/master";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id' , width: 200},
    { field: 'name', headerName: 'Name', width: 250 },
];
type CrudListProps = { data: MasterData[] }
export default function CrudList({ data }: CrudListProps) {

    const router = useRouter();

    const onRowClickHandler = (param: GridRowParams) => {
        router.push(`/master/${param.row.id}`)
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

