import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from 'react';




export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

   const createUseremail=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);

    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }

    },[])
    const logout=()=>{
        return signOut(auth);
    }
    const signingoogle=()=>{
        return signInWithPopup(auth,googleProvider);

    }

    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);

    const authInfo={user,loading,createUseremail,signIn,logout,signingoogle}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default UserContext;

