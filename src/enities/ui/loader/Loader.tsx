import css from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className="w-full h-80 grid place-items-center">
    <div className={css.loader}></div>
  </div>
);

export default Loader;
