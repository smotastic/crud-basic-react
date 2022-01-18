import { useCallback } from "react"
import DetailForm from "../../components/DetailForm";
import DataRepository, { MasterData } from "../../utils/data/master"

export default function Create() {
    const handleSubmit = useCallback((createdData: MasterData) => {
        DataRepository.create(createdData);
    }, []);
    return <DetailForm data={{name: ''}} onSubmit={handleSubmit} type="Create" />
}