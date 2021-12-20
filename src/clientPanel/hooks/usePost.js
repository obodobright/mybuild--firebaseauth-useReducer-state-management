import { dbstore } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const useAddClient = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const history = useHistory();

    const addClient = async(firstName, lastName, email, phone, balance) => {
        setLoading(true);
        try {
            const collectionRef = collection(dbstore, "client");
            const payload = { firstName, lastName, email, phone, balance };
            await addDoc(collectionRef, payload);

            setLoading(false);
            history.push("/");
        } catch (error) {
            setLoading(false);
            console.log(error.message);
            setErr("An error occured");
        }
    };
    return { loading, err, addClient };
};