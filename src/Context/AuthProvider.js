import { onAuthStateChanged } from "@firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

// kho context dùng trong cả project
export const AuthContext = createContext();

export default function AuthProvider({children}) {
  // user đăng nhập
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Lấy người dùng hiện tại khi đăng nhập xong
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // lấy các obj cần thiết từ user
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        navigate("/chatroom");
      }
    });
    return unsubcribed();
  }, [navigate]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}