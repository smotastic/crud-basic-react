import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import DetailForm from "../../components/DetailForm"
import DataRepository, { MasterData } from "../../utils/data/master"

type DetailProps = { data: MasterData }
export default function Detail({ data }: DetailProps) {
    // TODO component should always fetch data on click (use useEffect)
    return (
       <DetailForm data={data} />
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context?.params?.id as string;
    const data = await DataRepository.findById(parseInt(id));
    return {
        props: { data },
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             {
//                 params: {}
//             }
//         ],
//         fallback: false
//     };
// }