import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';




export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {

   const createUseremail=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);

    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }

    },[])

    const [user,setUser]=useState({displayName:'Akash'})

    const authInfo={user,createUseremail,signIn}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}

       </AuthContext.Provider>
    );
};

export default UserContext;

// {user?.displayName && <span>welcome {user.displayName}</span>}