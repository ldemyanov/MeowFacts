import { Card } from "flowbite-react";
import React from "react";
import LikeIcon from "../../../../shared/ui/LikeIcon";
import RemoveIcon from "../../../../shared/ui/RemoveIcon";

type MeowFactCardProps = {
  id: string;
  text: string;
  isLiked: boolean;
  removeFact: (key: string) => void;
  setLikeToFact: (key: string) => void;
};

const MeowFactCard: React.FC<MeowFactCardProps> = React.memo((props) => {
  const { id, isLiked, removeFact, setLikeToFact, text } = props;

  return (
    <Card className="lg:max-w-sm my-3 md:my-0">
      {text}
      <div className="flex justify-end items-center gap-2 mt-auto">
        <LikeIcon toLike={() => setLikeToFact(id)} isLiked={isLiked} />
        <RemoveIcon toRemove={() => removeFact(id)} />
      </div>
    </Card>
  );
});

export default MeowFactCard;
