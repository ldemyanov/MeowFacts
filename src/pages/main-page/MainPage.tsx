import { MeowFactsFeatcher } from "../../features/meow-facts/ui";

const MainPage: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 pt-7 pb-3">Факты о кошках</h1>
      <MeowFactsFeatcher />
    </>
  );
};

export default MainPage;
