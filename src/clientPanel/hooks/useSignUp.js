import { useState } from "react";
import { fireAuth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signUpAction } from "../redux/actions/Actions";
import { useHistory } from "react-router-dom";
export const useSignUp = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const history = useHistory();

    const isLoggedIn = async(email, password, userName) => {
        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(fireAuth, email, password);
            if (!res) {
                throw new Error();
            }

            updateProfile(res.user, { displayName: userName });

            dispatch(signUpAction(res.user));
            setLoading(false);
            history.push("/");
            console.log(res.user);
            console.log(email, password);
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