import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
   

    

    const createNewUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('current user',currentUser)
            setUser(currentUser);
            
        });
        return ()=>{
            unsubscribe();

        }
    },[])
    const logOut=()=>{
        return signOut(auth);
    }

    const userLogin =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,setUser, createNewUser,logOut,userLogin
    };
   
     


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;