import { Loader } from "../../../enities/ui";
import { useGetMeowImgQuery } from "../api";

type RandomCatImgProps = {
  position: number;
};

const RandomCatImg: React.FC<RandomCatImgProps> = ({ position }) => {
  const { data, isFetching } = useGetMeowImgQuery();

  if (isFetching) {
    return <Loader />;
  }

  if (data && data[0]) {
    return <img className="h-full w-auto" src={data[position].url} alt="random cat img" />;
  }

  return false;
};

export default RandomCatImg;
