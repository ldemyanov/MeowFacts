import { Button } from "flowbite-react";
import css from "./Icon.module.css";

type LikeIconProps = {
  isLiked: boolean;
  toLike: () => void;
};

const LikeIcon: React.FC<LikeIconProps> = ({ isLiked, toLike }) => {
  const color = isLiked ? "#ff5d86" : "grey";

  const onHandleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    toLike();
  };

  return (
    <Button className={css.btni} pill color="light" size="xs" onClick={onHandleClick}>
      <svg
        className={css.icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.02855 9.88794C2.49595 15.9703 8.84488 19.8303 11.9609 21C15.2818 19.895 21.3696 16.0276 21.9231 9.88794C22.9164 2.21577 14.0003 1.17195 11.9609 5.66791C9.99982 1.17195 1.44429 2.28495 2.02855 9.88794Z"
          fill={color}
        />
      </svg>
    </Button>
  );
};

export default LikeIcon;
