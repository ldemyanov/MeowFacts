import { MeowFactsContainer } from "..";
import { Loader } from "../../../../enities/ui";
import { getKey } from "../../../../shared/crypto/md5";
import { useGetMeowFactsQuery } from "../../api";

const MeowFactsFeatcher: React.FC = () => {
  const { data, isFetching, isError } = useGetMeowFactsQuery({ count: 30, lang: "rus" });

  if (isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data || data.data.length === 0) {
    return <div>Что-то пошло не так, наверное факты о кошках съели собаки</div>;
  }

  return <MeowFactsContainer facts={data.data.map((text) => ({ text, isLiked: false, key: getKey(text) }))} />;
};

export default MeowFactsFeatcher;
