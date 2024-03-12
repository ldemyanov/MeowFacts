import { useState } from "react";
import MeowFactCard from "../card/MeowFactCard";
import { Button } from "flowbite-react";
import { useAppSelector } from "../../../../app/store";

type MeowFactsContainerProps = {
  refetch: () => void;
};

const MeowFactsContainer: React.FC<MeowFactsContainerProps> = ({ refetch }) => {
  const [isEnabledLikeFilter, setLikeFilter] = useState(false);
  const { facts, images } = useAppSelector((state) => state.meowSlice);

  return (
    <>
      <div className="flex py-8 gap-4">
        <Button pill color="light" onClick={() => setLikeFilter((val) => !val)}>
          {isEnabledLikeFilter ? "Show all" : "Show liked"}
        </Button>
        <Button pill color="light" onClick={() => (setLikeFilter(false), refetch())}>
          Update
        </Button>
      </div>
      <div className="flex flex-wrap gap-6 mb-10">
        {facts.map(({ text, isLiked, _id, indexImg }) => {
          if (isEnabledLikeFilter && !isLiked) return;
          return (
            <MeowFactCard
              text={text}
              key={_id}
              id={_id}
              isLiked={isLiked}
              img={images[indexImg].url}
              imgId={images[indexImg].id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MeowFactsContainer;
