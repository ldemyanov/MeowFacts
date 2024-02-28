import { useState } from "react";
import MeowFactCard from "../card/MeowFactCard";
import { Button } from "flowbite-react";

type MeowFactWithLike = {
  text: string;
  isLiked: boolean;
  key: string;
};

type MeowFactsContainerProps = {
  facts: MeowFactWithLike[];
};

const MeowFactsContainer: React.FC<MeowFactsContainerProps> = ({ facts }) => {
  const [factsWithLikes, setFactsWithLikes] = useState<MeowFactWithLike[]>(facts);
  const [isEnabledLikeFilter, setLikeFilter] = useState(false);

  const removeFact = (key: string) => {
    setFactsWithLikes((facts) => facts.filter((fact) => fact.key !== key));
  };

  const setLikeToFact = (key: string) => {
    setFactsWithLikes((facts) =>
      facts.map((fact) => {
        if (fact.key === key) {
          const { isLiked, ...data } = fact;
          return { isLiked: !isLiked, ...data };
        }
        return fact;
      })
    );
  };

  factsWithLikes.sort((fact1, fact2) => fact1.text.length - fact2.text.length);

  return (
    <>
      <div className="flex py-8">
        <Button pill color="light" onClick={() => setLikeFilter((val) => !val)}>
          {isEnabledLikeFilter ? "Показать все" : "Показать только понравившиеся"}
        </Button>
      </div>
      <div className="lg:flex flex-wrap sm:grid md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10">
        {factsWithLikes.map(({ text, key, isLiked }) => {
          if (isEnabledLikeFilter && !isLiked) return;
          return (
            <MeowFactCard
              text={text}
              key={key}
              id={key}
              isLiked={isLiked}
              removeFact={removeFact}
              setLikeToFact={setLikeToFact}
            />
          );
        })}
      </div>
    </>
  );
};

export default MeowFactsContainer;
