import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase"

const authContext = React.createContext()

export function useAuth() {
    return useContext(authContext)
}

export function authProvider({ children }) {
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

    return (
        <authContext.Provider value={value}> 
        {children}
        </authContext.Provider>
    )
}