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
            switch (error.message) {
                case "Firebase: Error (auth/network-request-failed).":
                    return setErr("Connection failure");
                case "Firebase: Error (auth/email-already-in-use).":
                    return setErr("Email already in use");
                case "Firebase: Error (auth/wrong-password).":
                    return setErr("wrong email/password");
                case "Firebase: Error (auth/invalid-email).":
                    return setErr("wrong email/password");
                case "Firebase: Password should be at least 6 characters (auth/weak-password)":
                    return setErr("Password should be at least 6 characters");
                case "Firebase: Error (auth/user-not-found).":
                    return setErr("User not found, please input a correct Email/password");
                default:
                    return setErr("An error occurred");
            }
        }
    };
    return { loading, err, isLoggedIn };
};