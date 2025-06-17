// src/AuthContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioActual, setUsuarioActual] = useState(null);

  const login = (usuario, password) => {
    if (usuario === "dueno" && password === "1234") {
      setUsuarioActual({ usuario, rol: "dueno" });
      return true;
    }
    if (usuario === "cajero" && password === "5678") {
      setUsuarioActual({ usuario, rol: "cajero" });
      return true;
    }
    return false;
  };

  const logout = () => setUsuarioActual(null);

  return (
    <AuthContext.Provider value={{ usuarioActual, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
