import { useDispatch } from "react-redux";
import { allClient } from "../redux/actions/Actions";
import { onSnapshot, collection } from "firebase/firestore";
import { dbstore } from "../firebase/firebase";

export const useFetchCLient = () => {
    const dispatch = useDispatch();
    const fetchClient = () => {
        try {
            onSnapshot(collection(dbstore, "client"), (snapshot) => {
                const data = snapshot.docs.map((doc) => {
                    if (doc.exists) {
                        console.log(data);
                        dispatch(allClient(data));
                    } else {
                        throw Error("aN ERROR OCCURED");
                    }
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    return { fetchClient };
};