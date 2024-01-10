import { checkPropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  // observe auth state change

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "observing current user inside useEffect of AuthProvider",
        currentUser
      );
      setLoading(false);
    });
    return ()=>{
        unSubscribe();
    }
  }, []);

  const authInfo = { user, loading, createUser, signInUser, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: checkPropTypes.node,
};

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the suth provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it
 * in the middle of the Provider
 */
