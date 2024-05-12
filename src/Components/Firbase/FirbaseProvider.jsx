import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "./firbase.config";

export const AuthContext = createContext(null);
const googlepro = new GoogleAuthProvider();
const FirbaseProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  //user create
  const creatuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //updat profil
  const updatprofil = (name, img) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    });
  };

  //login user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login
  const googlelogin = () => {
    return signInWithPopup(auth, googlepro);
  };
  // logout
  const logout = () => {
    setuser(null);
    signOut(auth);
  };
  // objerver
  useEffect(() => {
    const remain = onAuthStateChanged(auth, (user) => {
      setuser(user);
    });
    return () => remain();
  }, []);

  const allvalue = {
    user,

    creatuser,
    updatprofil,
    login,
    googlelogin,
    logout,
  };
  return (
    <AuthContext.Provider value={allvalue}>{children}</AuthContext.Provider>
  );
};

export default FirbaseProvider;
