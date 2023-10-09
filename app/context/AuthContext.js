"use client"
import { useContext ,  createContext , useState , useEffect} from "react"
import {signInWithPopup , signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../firebase" 

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [ user, setUser ] = useState(null)

     
    // sign in
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
     }

    // sign out 
    
    const googleLogOut = () => {
        signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
        })
    return () => unsubscribe()
    },[user])

    return (
        <AuthContext.Provider value={user,googleSignIn,googleLogOut}>
            {children}
        </AuthContext.Provider>

    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}