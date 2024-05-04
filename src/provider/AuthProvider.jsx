import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [useLoader, setUserLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                axios.post('http://localhost:5000/jwt', { user: currentUser?.email }, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data);
                    })
                setUserLoader(false);
            } else {
                setUser(null);
                setUserLoader(false);
            }
        })
        return () => unSubscribe();
    }, [user])


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((err) => {
                console.log(err);
            });
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }




    console.log(user);

    return (
        <AuthContext.Provider value={{
            user,
            useLoader,
            createUser,
            signIn,
            signInWithGoogle,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;