import { Avatar, Card } from "flowbite-react";
import { Loader } from "../../../../enities/ui";
import { useGetDetailMeowFactQuery } from "../../api";
import { useNavigate } from "react-router-dom";
import { useGetMeowImgQuery } from "../../../randomCat/api";
import BackButton from "../../../../shared/ui/BackButton";
import { formatDate } from "../../../../shared/time";

type MeowFactDetailCardProps = {
  id: string;
};

const MeowFactDetailCard: React.FC<MeowFactDetailCardProps> = ({ id }) => {
  const { data, isFetching, isError } = useGetDetailMeowFactQuery({ id });
  const { refetch } = useGetMeowImgQuery();
  const navigate = useNavigate();

  const returnToBackPage = () => {
    refetch();
    navigate(-1);
  };

  if (isFetching) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <Loader />
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <p>Error</p>
      </Card>
    );
  }

  if (data) {
    return (
      <Card className="flex w-fit h-fit max-w-xl">
        <div className="flex items-center gap-x-4">
          {data.user && (
            <>
              {data.user.photo && (
                <div className="w-10 h-10">
                  <Avatar
                    img={data.user.photo}
                    alt={`image of ${data.user.name.first} ${data.user.name.last}`}
                    rounded
                  />
                </div>
              )}
              <div>
                {data.user.name.first} {data.user.name.last}
              </div>
            </>
          )}
          <BackButton className="w-fit y-fit ml-auto" toBack={returnToBackPage} />
        </div>
        <p>Date: {formatDate(data.createdAt)}</p>
        <p className="text-xl font-semibold overflow-hidden">{data.text}</p>
      </Card>
    );
  }

  return null;
};

export default MeowFactDetailCard;
