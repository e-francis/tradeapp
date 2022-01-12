import React, { useContext, useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";

const authContext = React.createContext()
const auth = getAuth();

export function useAuth() {
    return useContext(authContext)
}

export default function authProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function Signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsuscribe
    }, [])



    const value = {
        currentUser,
        Signup
    }

    return ( <
        AuthContext.Provider value = { value } > { children } <
        /AuthContext.Provider>
    )
}