import { Audio } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => (
  <div className="loader">
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  </div>
);

export default Loader;
