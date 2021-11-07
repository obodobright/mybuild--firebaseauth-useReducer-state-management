import { useState } from "react";
import { fireAuth } from "../firebase/config";
import { useAuthContext } from "./useAuth";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = async() => {
        setError(null);
        setIsPending(true);

        // sign user out
        try {
            await fireAuth.signOut();
            // dispatch log out action
            dispatch({ type: "LOGOUT" });
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsPending(false);
        }
    };
    return { logout, error, isPending };
};