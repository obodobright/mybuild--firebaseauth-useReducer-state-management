import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { fireAuth } from "../firebase/config";
import { useAuthContext } from "./useAuth";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // to get the currennt user, that is why we are using the useAuthContext
    // from the useAuthCOntext, we will be able to get the dispatch which is from the authContext.js

    const signUp = async(email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            //    sign up user

            const res = await createUserWithEmailAndPassword(fireAuth, email, password);
            console.log(res.user);
            if (!res) {
                throw new Error("could not complete your signup");
            }
            // to update the user profile to get his displAY name
            await updateProfile(res.user, { displayName });

            //dispatch login action
            dispatch({ type: "LOGIN", payload: res.user });

            setIsPending(false);
            setError(null);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };
    return { error, isPending, signUp };
};