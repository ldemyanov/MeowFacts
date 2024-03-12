import { useParams } from "react-router-dom";
import { MeowFactDetailCard } from "../../features/meow-facts/ui";

const DetailPage: React.FC = () => {
  const { id, imgId } = useParams();

  return (
    <div className="flex flex-col items-center gap-10 mt-3">
      <MeowFactDetailCard id={id!} imgId={imgId!} />
    </div>
  );
};

export default DetailPage;
