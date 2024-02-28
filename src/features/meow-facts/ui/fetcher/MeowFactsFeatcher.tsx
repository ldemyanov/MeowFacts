import { MeowFactsContainer } from "..";
import { Loader } from "../../../../enities/ui";
import { useGetMeowImgQuery } from "../../../randomCat/api";
import { useGetMeowFactsQuery } from "../../api";

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

  return (
    <MeowFactsContainer
      refetch={() => (responseFacts.refetch(), responseImgs.refetch())}
      facts={responseFacts.data.map((fact, i) => ({
        ...fact,
        isLiked: false,
        img: responseImgs.data[i].url,
        imgId: responseImgs.data[i].id,
      }))}
    />
  );
};

export default MeowFactsFeatcher;
