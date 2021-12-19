import { useState } from "react";
import { fireAuth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/Actions";
import { useHistory } from "react-router-dom";
// import {navig}
export const useLogin = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const history = useHistory();

    const isLoggedIn = async(email, password) => {
        setLoading(true);
        try {
            const res = await signInWithEmailAndPassword(fireAuth, email, password);
            if (!res) {
                throw Error("An error occured");
            }
            dispatch(loginAction(res.user));
            setLoading(false);
            history.push("/");
        } catch (error) {
            setLoading(false);
            console.log(error.message);
            setErr("An error occured");
        }
    };
    return { loading, err, isLoggedIn };
};