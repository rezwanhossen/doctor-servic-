import { useContext } from "react";
import { AuthContext } from "../FirbaseProvider/FirbaseProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
