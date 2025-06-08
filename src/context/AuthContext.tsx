import { createContext, useContext, useState } from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  user: { fullname: string } | null; 
  setUser: (u: { fullname: string } | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });

  const [user, setUser] = useState<{ fullname: string } | null>(null);

  const setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
    setTokenState(token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
