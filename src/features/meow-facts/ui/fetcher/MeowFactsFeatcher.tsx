import { MeowFactsContainer } from "..";
import { Loader } from "../../../../enities/ui";
import { useGetMeowFactsQuery } from "../../api";

const MeowFactsFeatcher: React.FC = () => {
  const { data, isFetching, isError, refetch } = useGetMeowFactsQuery();

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data || data.length === 0) {
    return <div>Что-то пошло не так, наверное факты о кошках съели собаки</div>;
  }

  return <MeowFactsContainer refetch={refetch} facts={data.map((fact) => ({ ...fact, isLiked: false }))} />;
};

export default MeowFactsFeatcher;
