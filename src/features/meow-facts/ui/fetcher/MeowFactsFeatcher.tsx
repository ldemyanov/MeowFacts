import { MeowFactsContainer } from "..";
import { Loader } from "../../../../enities/ui";
import { useGetMeowImgQuery } from "../../api/random-img-api";
import { useGetMeowFactsQuery } from "../../api/meow-facts-api";

const MeowFactsFeatcher: React.FC = () => {
  const responseFacts = useGetMeowFactsQuery();
  const responseImgs = useGetMeowImgQuery();

  if (responseFacts.isFetching || responseImgs.isFetching) {
    return <Loader />;
  }

  if (responseFacts.isError || responseImgs.isError) {
    return <div>Error</div>;
  }

  if (!responseFacts.data || !responseImgs.data || responseFacts.data.length === 0 || responseImgs.data.length === 0) {
    return <div>Что-то пошло не так, наверное факты о кошках съели собаки</div>;
  }

  return <MeowFactsContainer refetch={() => (responseFacts.refetch(), responseImgs.refetch())} />;
};

export default MeowFactsFeatcher;
