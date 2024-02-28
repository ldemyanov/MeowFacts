import { Card } from "flowbite-react";
import React from "react";
import LikeIcon from "../../../../shared/ui/LikeIcon";
import RemoveIcon from "../../../../shared/ui/RemoveIcon";
import { useNavigate } from "react-router-dom";
import { trimString } from "../../../../shared/string";

type MeowFactCardProps = {
  id: string;
  text: string;
  isLiked: boolean;
  removeFact: (key: string) => void;
  setLikeToFact: (key: string) => void;
};

const MeowFactCard: React.FC<MeowFactCardProps> = React.memo((props) => {
  const { id, isLiked, removeFact, setLikeToFact, text } = props;
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <Card onClick={onHandleClick} className="w-80 h-52 cursor-pointer duration-150 hover:bg-pink-50 hover:border-none">
      <p className="text-ellipsis overflow-hidden h-28">{trimString(text)}</p>
      <div className="flex justify-end items-center gap-2 mt-auto">
        <LikeIcon toLike={() => setLikeToFact(id)} isLiked={isLiked} />
        <RemoveIcon toRemove={() => removeFact(id)} />
      </div>
    </Card>
  );
});

export default MeowFactCard;
