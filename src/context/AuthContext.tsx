import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);


const DEMO_PASSWORD = 'admin123';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('life_insurance_auth');
    if (stored) {
      try {
        const { user } = JSON.parse(stored);
        setIsAuthenticated(true);
        setUsername(user);
      } catch {
        localStorage.removeItem('life_insurance_auth');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (u: string, p: string): boolean => {
    if (u === u && p === DEMO_PASSWORD) {
      setIsAuthenticated(true);
      setUsername(u);
      localStorage.setItem('life_insurance_auth', JSON.stringify({ user: u }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem('life_insurance_auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
