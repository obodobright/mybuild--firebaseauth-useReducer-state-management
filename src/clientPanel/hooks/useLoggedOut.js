import { fireAuth } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { logOutAction } from "../redux/actions/Actions";
import { useHistory } from "react-router-dom";
export const useLoggedOut = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const logOut = async() => {
        await fireAuth.signOut();
        dispatch(logOutAction());
        history.push("/login");
    };
    return { logOut };
};