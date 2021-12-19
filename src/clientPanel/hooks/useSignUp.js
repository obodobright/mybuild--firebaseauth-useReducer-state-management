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
            history.push("/login");
            console.log(res.user);
            console.log(email, password);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
            setErr("An error occured");
        }
    };
    return { loading, err, isLoggedIn };
};