import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config'
export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null);

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    const userInfo={
        user,
        createUser,
        signIn,
        logOut,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;