import { Container } from '@mui/material'
import CrudList from '../../components/CrudList';
import { useQuery } from "react-query";



export default function List() {
  // const [data, setData] = useState<MasterData[]>([]);

  const { isLoading, error, data, isFetching } = useQuery("masterFindAll", () =>
    fetch('/api/data/findAll').then((res) => res.json())
  );

  if (isLoading) {
    return <div>loading</div>
  }
  if (data.status >= 400) {
    return <div>{data.msg}</div>
  }

  return <Container><CrudList data={data.data} /></Container>;
}
