import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../firebase/_firebase.config';

export const UserContext = createContext();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    const auth = getAuth(app);
    const google = new GoogleAuthProvider();
    const github = new GithubAuthProvider();

    const signUpHandler = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginHandler = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleAuthHandler = () => {
        return signInWithPopup(auth, google);
    }

    const githubAuthHandler = () => {
        return signInWithPopup(auth, github);
    }

    const authInfo = { user, loading, signUpHandler, loginHandler, googleAuthHandler, githubAuthHandler }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default AuthContext;
