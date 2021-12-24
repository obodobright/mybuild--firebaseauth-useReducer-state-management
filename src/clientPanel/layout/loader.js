import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loadings = ({ color, height, width }) => {
  return (
    <>
      <Loader type="TailSpin" color={color} height={height} width={width} timeout={3000} />
    </>
  );
};
