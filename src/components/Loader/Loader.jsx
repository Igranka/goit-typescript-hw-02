import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ThreeCircles
        color="#8f25a1"
        visible={true}
        ariaLabel="circles-loading"
      />
    </div>
  );
}