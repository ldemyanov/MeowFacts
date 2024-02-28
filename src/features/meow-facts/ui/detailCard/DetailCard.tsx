import { Avatar, Card } from "flowbite-react";
import { Loader } from "../../../../enities/ui";
import { useGetDetailMeowFactQuery } from "../../api/meow-facts-api";
import { useNavigate } from "react-router-dom";
import { useGetMeowImgByIdQuery } from "../../api/random-img-api";
import BackButton from "../../../../shared/ui/BackButton";
import { formatDate } from "../../../../shared/time";

type MeowFactDetailCardProps = {
  id: string;
  imgId: string;
};

const MeowFactDetailCard: React.FC<MeowFactDetailCardProps> = ({ id, imgId }) => {
  const meowFactsResponse = useGetDetailMeowFactQuery({ id });
  const meowImg = useGetMeowImgByIdQuery({ imgId });
  const navigate = useNavigate();

  const returnToBackPage = () => navigate(-1);

  const factData = meowFactsResponse.data;
  const imgData = meowImg.data;

  if (meowFactsResponse.isFetching || meowImg.isFetching) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <Loader />
      </Card>
    );
  }

  if (meowFactsResponse.isError) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <p>Error</p>
      </Card>
    );
  }

  if (factData && imgData) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <div className="flex items-center gap-x-4">
          {factData.user && (
            <>
              {factData.user.photo && (
                <div className="w-10 h-10">
                  <Avatar
                    img={factData.user.photo}
                    alt={`image of ${factData.user.name.first} ${factData.user.name.last}`}
                    rounded
                  />
                </div>
              )}
              <div>
                {factData.user.name.first} {factData.user.name.last}
              </div>
            </>
          )}
          <BackButton className="w-fit y-fit ml-auto" toBack={returnToBackPage} />
        </div>
        <p>Date: {formatDate(factData.createdAt)}</p>
        <img src={imgData.url} width="500" alt="Random cat img" />
        <p className="text-xl font-semibold overflow-hidden">{factData.text}</p>
      </Card>
    );
  }

  return;
};

export default MeowFactDetailCard;
