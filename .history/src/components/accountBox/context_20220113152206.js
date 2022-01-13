import { createContext } from "react";
import React, { useContext, useState, useEffect } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const AccountContext = createContext();

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return getAuth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return getAuth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return getAuth.signOut()
  }

  function resetPassword(email) {
    return getAuth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
