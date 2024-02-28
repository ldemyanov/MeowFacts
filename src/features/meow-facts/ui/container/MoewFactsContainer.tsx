import { useState } from "react";
import MeowFactCard from "../card/MeowFactCard";
import { Button } from "flowbite-react";
import { MeowFact } from "../../api/types";

type MeowFactWithLike = MeowFact & {
  isLiked: boolean;
  img: string;
  imgId: string;
};

type MeowFactsContainerProps = {
  facts: MeowFactWithLike[];
  refetch: () => void;
};

const MeowFactsContainer: React.FC<MeowFactsContainerProps> = ({ facts, refetch }) => {
  const [factsWithLikes, setFactsWithLikes] = useState<MeowFactWithLike[]>(facts);
  const [isEnabledLikeFilter, setLikeFilter] = useState(false);

  const removeFact = (id: string) => {
    setFactsWithLikes((facts) => facts.filter((fact) => fact._id !== id));
  };

  const setLikeToFact = (id: string) => {
    setFactsWithLikes((facts) =>
      facts.map((fact) => {
        if (fact._id === id) {
          const { isLiked, ...data } = fact;
          return { isLiked: !isLiked, ...data };
        }
        return fact;
      })
    );
    return;
  };

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
        {factsWithLikes.map(({ text, isLiked, _id, img, imgId }) => {
          if (isEnabledLikeFilter && !isLiked) return;
          return (
            <MeowFactCard
              text={text}
              key={_id}
              id={_id}
              isLiked={isLiked}
              removeFact={removeFact}
              setLikeToFact={setLikeToFact}
              img={img}
              imgId={imgId}
            />
          );
        })}
      </div>
    </>
  );
};

export default MeowFactsContainer;
