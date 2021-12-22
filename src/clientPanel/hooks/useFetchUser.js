import { useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { dbstore } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { allClient } from "../redux/actions/Actions";

export const useFetchCLient = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchClient = async() => {
        setLoading(true);
        try {
            onSnapshot(collection(dbstore, "client"), (snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
                console.log(data);

                dispatch(allClient(data));
                setLoading(false);
                setError(null);
            });
        } catch (error) {
            setLoading(false);
            setError("An unable to fetch client");
            console.log(error.message);
        }
    };
    return { fetchClient, error, loading };
};