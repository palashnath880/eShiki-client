import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/_firebase.config';

export const UserContext = createContext();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const logOut = () => {
        return signOut(auth);
    }

    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        });
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = () => {
            onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
                setLoading(false);
            });
        }

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = { user, loading, signUpHandler, loginHandler, googleAuthHandler, githubAuthHandler, logOut, updateUser, forgetPassword }

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default AuthContext;
