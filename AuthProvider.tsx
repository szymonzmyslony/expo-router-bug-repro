import React, { useEffect, useState, createContext, useContext } from "react";

// Define the shape of your context
interface AuthContextType {
  authInitialized: boolean;
}

// Create and initialize your context
const AuthContext = createContext<AuthContextType | null>(null);

// This hook can be used to access the user info and ensures type safety
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authInitialized, setAuthInitialized] = useState(false);
  useEffect(() => {
    console.log("changing state");
    setAuthInitialized(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authInitialized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
