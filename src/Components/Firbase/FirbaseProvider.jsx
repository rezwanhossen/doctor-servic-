// import axios from "axios";
import axios from "axios";
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
  const [loding, setloding] = useState(true);
  //user create
  const creatuser = (email, password) => {
    setloding(true);
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
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google login
  const googlelogin = () => {
    setloding(true);
    return signInWithPopup(auth, googlepro);
  };
  // logout
  const logout = async () => {
    setuser(null);

    signOut(auth);
  };
  // objerver
  useEffect(() => {
    const remain = onAuthStateChanged(auth, (user) => {
      setuser(user);
      setloding(false);
      // if (user) {
      //   const loguser = { email: user?.email };
      //   axios.post("http://localhost:5001/jwt", loguser, {
      //     withCredentials: "include",
      //   });
      // }
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
    setuser,
    loding,
  };
  return (
    <AuthContext.Provider value={allvalue}>{children}</AuthContext.Provider>
  );
};

export default FirbaseProvider;
