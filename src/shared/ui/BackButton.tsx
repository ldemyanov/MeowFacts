import { Button } from "flowbite-react";

type BackButtonProps = {
  toBack: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ toBack, className }) => {
  return (
    <Button className={className} pill color="light" size="xs" onClick={toBack}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="grey" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.7667 18L4.84387 12.7482C4.39513 12.3503 4.39513 11.6497 4.84387 11.2518L10.7667 6"
          stroke="grey"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M20 12L4.53328 12" stroke="grey" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Button>
  );
};

export default BackButton;
