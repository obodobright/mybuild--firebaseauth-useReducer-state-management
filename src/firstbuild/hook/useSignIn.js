import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react/cjs/react.development";
import { fireAuth } from "../firebase/config";
import { useAuthContext } from "./useAuth";

export const useSignIn = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(true);
    const { dispatch } = useAuthContext();

    const signIn = async(email, password) => {
        setIsPending(true);
        try {
            const res = await signInWithEmailAndPassword(fireAuth, email, password);
            console.log(res.user);
            if (!res) {
                throw new Error("There was an error");
            }
            dispatch({
                type: "LOGIN",
                payload: res.user,
            });
        } catch (error) {
            setIsPending(false);
            switch (error.message) {
                case "Firebase: Error (auth/network-request-failed).":
                    return setError("Connection failure");
                case "Firebase: Error (auth/email-already-in-use).":
                    return setError("Email already in use");
                case "Firebase: Error (auth/wrong-password).":
                    return setError("wrong email/password");
                case "Firebase: Error (auth/invalid-email).":
                    return setError("wrong email/password");
                case "Firebase: Password should be at least 6 characters (auth/weak-password)":
                    return setError("Password should be at least 6 characters");
                default:
                    return setError("An error occurred");
            }
        }
    };
    return { signIn, isPending, error };
};