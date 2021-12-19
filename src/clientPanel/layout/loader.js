import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loadings = () => {
    return <Loader type = "TailSpin"
    color = "white"
    height = { 20 }
    width = { 20 }
    timeout = { 3000 }
    />;
};