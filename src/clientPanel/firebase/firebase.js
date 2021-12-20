import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// export const FirebaseContext = createContext();

// export const FirebaseProvider = ({ children }) => {
//   const dispatch = useDispatch();

//   const fetchClient = () => {
//     onSnapshot(collection(dbstore, "client"), (snapshot) => {
//       const data = snapshot.docs.map((doc) => doc.data());
//       console.log(data);
//       dispatch(allClient(data));
//     });
//   };
//   let firebase = {
//     database: {
//       fetchClient,
//     },
//   };

//   return <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>;
// };

const firebaseConfig = {
  apiKey: "AIzaSyDJsxwrrd9FtGh7QdBeAG4-2zwZWXMb0a0",
  authDomain: "client-panel-23655.firebaseapp.com",
  projectId: "client-panel-23655",
  storageBucket: "client-panel-23655.appspot.com",
  messagingSenderId: "666533797708",
  appId: "1:666533797708:web:e3d292c6fa9e1ff624b9e9",
  measurementId: "G-W9LBV2LP2Z",
};

export const app = initializeApp(firebaseConfig);
export const dbstore = getFirestore();
export const fireAuth = getAuth();
