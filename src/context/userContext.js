import { createContext, useContext, useState } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";


export const UserContext = createContext({});
export const useUserContext = () => {
    return useContext(UserContext);
  };
  
  export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useState(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            if (res) {
                setUser(res);
              } else {
                setUser(null);
              }
              setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);
