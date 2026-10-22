import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    showToast("Signed in successfully. Welcome back!");
    return res;
  };

  const signup = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    showToast("Account created successfully!");
    return res;
  };

  const logout = async () => {
    await signOut(auth);
    showToast("Signed out successfully.");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          login,
          signup,
          logout,
          toastMessage,
          showToast,
          loading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
