import { createContext, useContext, useEffect, useState } from "react";
import { logout, onUserStateChanged } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ childern }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged(user => { setUser(user) });
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {childern}
    </AuthContext.Provider>
  )

}

export function useAuthContext() {
  return useContext(AuthContext);
}

