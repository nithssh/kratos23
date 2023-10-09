'use client'

import { useContext ,  createContext , useState , useEffect} from 'react'
import {signInWithPopup , signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import  { firebase } from "firebase/app"
import { auth, googleProvider } from "../firebase" 

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [ user, setUser ] = useState(null)

//     // sign i
//     const googleSignIn = () => {
//         // const provider = new GoogleAuthProvider()
//         // signInWithPopup(auth,provider)
//         signInWithPopup(auth, provider)
//         .then((result) => {
//           // This gives you a Google Access Token. You can use it to access the Google API.
//           const credential = GoogleAuthProvider.credentialFromResult(result);
//           const token = credential.accessToken;
//           // The signed-in user info.
//           //const user = result.user;
//           // IdP data available using getAdditionalUserInfo(result)
//           // ...
//         }).catch((error) => {
//           // Handle Errors here.
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           // The email of the user's account used.
//           const email = error.customData.email;
//           // The AuthCredential type that was used.
//           const credential = GoogleAuthProvider.credentialFromError(error);
//           // ...
//         }); 
//     }

//     // sign out 
    
//     const googleLogOut = () => {
//         signOut(auth)
//     }

//     // useEffect( () => {
//     //     const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
//     //         setUser(currentUser)
//     //     });
//     // return () => unsubscribe();
//     // },[user]);  

//    useEffect(() => {
//    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//     });
//    return () => unsubscribe();
//    }, [user]);


//  const signInWithGoogle = async () =>{
//     try{
//         await signInWithPopup(auth, GoogleAuthProvider );
//     }catch(err){
//         console.error(err);
//     }
// };

//  const logOut = async () =>{
//     try{
//         await signOut(auth);
//     }catch(err){
//         console.log(err);
//     }
// };

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