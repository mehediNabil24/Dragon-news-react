import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true);



    const updatedUserProfile=(updatedData)=>{

        return updateProfile(auth.currentUser,updatedData)

    }
    
   

    

    const createNewUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        
    }
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log('current user',currentUser)
            setUser(currentUser);
            setLoading(false)
            
        });
        return ()=>{
            unsubscribe();

        }
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const userLogin =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,setUser, createNewUser,logOut,userLogin,loading,updatedUserProfile
    };
   
     


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;