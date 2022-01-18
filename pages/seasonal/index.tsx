import { Container } from '@mui/material'
import CrudList from '../../components/houseplants/CrudList';
import { useQuery } from "react-query";
import { apiPath } from '../../utils/api.path';



export default function SeasonalList() {

  const { isLoading, error, data, isFetching } = useQuery("masterFindAll", () =>
    fetch(`${apiPath.houseplants}/findAll`).then((res) => res.json())
  );

  if (isLoading) {
    return <div>loading</div>
  }
  if (data.status >= 400) {
    return <div>{data.msg}</div>
  }

  return <Container><CrudList data={data.data} /></Container>;
}
