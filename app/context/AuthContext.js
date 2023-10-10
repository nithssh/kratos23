'use client'

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from 'react'
import { auth, googleProvider } from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const signOutWithGoogle = async () => {
    try {
      signOut(auth).then(() => {
        // TODO consider if any sign out handling is required
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signOutWithGoogle }}>
      {children}
    </AuthContext.Provider>

  )
}

export const UserAuth = () => {
  return useContext(AuthContext);
};