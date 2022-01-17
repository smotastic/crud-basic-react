import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import DataRepository, { MasterData } from "../../utils/data/master"

type DetailProps = { data: MasterData }
export default function Detail({ data }: DetailProps) {
    return (
        <>
            <div>Hallo Detail</div>
            <ul>
                <li>{data.id}</li>
                <li>{data.name}</li>
            </ul>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context?.params?.id as string;
    const data = await DataRepository.findById(parseInt(id));
    return {
        props: { data }
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