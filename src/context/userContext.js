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
