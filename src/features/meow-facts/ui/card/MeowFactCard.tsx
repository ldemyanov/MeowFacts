import React from "react";
import LikeIcon from "../../../../shared/ui/LikeIcon";
import RemoveIcon from "../../../../shared/ui/RemoveIcon";
import css from "./MewsFactCars.module.css";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { trimString } from "../../../../shared/string";
import { useAppDispatch } from "../../../../app/store";
import { removeFact, toggleLike } from "../../slice/meow-facts-slice";

type MeowFactCardProps = {
  img: string;
  id: string;
  text: string;
  isLiked: boolean;
  imgId: string;
};

const MeowFactCard: React.FC<MeowFactCardProps> = React.memo((props) => {
  const { id, isLiked, text, img, imgId } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/detail/${id}/${imgId}`);
  };

  return (
    <Card
      renderImage={() => <img className={css.img} src={img} alt="Random cat img" />}
      onClick={onHandleClick}
      className="w-80 h-96 cursor-pointer duration-150 hover:bg-pink-50 hover:border-none"
    >
      <p className="text-ellipsis overflow-hidden h-fit">{trimString(text)}</p>
      <div className="flex justify-end items-center gap-2 mt-auto">
        <LikeIcon toLike={() => dispatch(toggleLike({ id }))} isLiked={isLiked} />
        <RemoveIcon toRemove={() => dispatch(removeFact({ id }))} />
      </div>
    </Card>
  );
});

export default MeowFactCard;
