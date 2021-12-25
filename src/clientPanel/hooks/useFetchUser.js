import { useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { dbstore } from "../firebase/firebase";
import { useDispatch } from "react-redux";
import { allClient } from "../redux/actions/Actions";
import { useEffect } from "react";

export const useFetchCLient = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchClient = async() => {
            setLoading(true);
            try {
                onSnapshot(collection(dbstore, "client"), (snapshot) => {
                    const data = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
                    // console.log(data);

                    dispatch(allClient(data));
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
                setError("An unable to fetch client");
                console.log(error.message);
            }
        };
        fetchClient();
    }, []);
    return { error, loading };
};