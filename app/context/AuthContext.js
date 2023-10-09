'use client'

import { useContext ,  createContext , useState , useEffect} from 'react'
import {signInWithPopup , signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import  { firebase } from "firebase/app"
import { auth, googleProvider } from "../firebase" 

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [ user, setUser ] = useState(null)

const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("going to sign in")
    } catch (err) {
      console.error(err);
    }
  };

  const signOutWithGoogle = async () => {
    try {
      signOut(auth).then(() => {
        console.log("Signed Out");
        console.log("User");
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
        setUser(currentUser);
    });
    return () => unsubscribe();
  },[user]);

    return (
        <AuthContext.Provider value={{user, signInWithGoogle , signOutWithGoogle}}>
            {children}
        </AuthContext.Provider>

    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
};