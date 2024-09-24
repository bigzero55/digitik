// context/AuthContext.tsx
'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface User {
  email: string;
  username: string;
  full_name: string;
}

interface AuthContextProps {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const path = usePathname();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        const { code, message } = data.error;
        setError(message);
        throw new Error(message || 'Login failed. Please try again.');
      }

      const result = await response.json();
      const { user } = result.data;
      const newUser: User = {
        email: user.email,
        username: user.username,
        full_name: user.full_name,
      };
      setUser(newUser);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/signout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(
          message || 'Login failed. Please check your credentials.'
        );
      }
      setUser(null);
      router.push('/login');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
