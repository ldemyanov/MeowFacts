import css from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className="flex w-full h-48 items-center">
    <div className={css.loader}></div>
  </div>
);

export default Loader;
