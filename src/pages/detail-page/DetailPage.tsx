import { useParams } from "react-router-dom";
import { MeowFactDetailCard } from "../../features/meow-facts/ui";
import RandomCatImg from "../../features/randomCat/ui/RandomCatImg";

const DetailPage: React.FC = () => {
  const { id, imgId } = useParams();

  if (!id || !imgId) {
    return "Not Found";
  }

  return (
    <div className="flex flex-col items-center gap-10 mt-3">
      <MeowFactDetailCard id={id} imgId={imgId} />
      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-md h-64 min-w-24 overflow-hidden">
        <RandomCatImg position={0} />
      </div>
    </div>
  );
};

export default DetailPage;
