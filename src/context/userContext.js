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
