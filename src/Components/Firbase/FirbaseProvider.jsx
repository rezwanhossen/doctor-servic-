import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useState } from "react";
const AurhContext = createContext(null);
//socal media
const googlepro = new GoogleAuthProvider();

const FirbaseProvider = ({ childern }) => {
  const [user, setuser] = useState(null);
  // user creation
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const allusers = {
    user,
  };

  return (
    <div>
      <AurhContext.Provider value={allusers}>{childern}</AurhContext.Provider>
    </div>
  );
};

export default FirbaseProvider;
