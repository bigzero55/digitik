// context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { redirect, useRouter } from 'next/navigation';

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

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(
          message || 'Login failed. Please check your credentials.'
        );
      }

      // Assuming the server returns a user object or token
      const data = await response.json();
      const { user } = data;
      setUser(user); // Replace with actual user details if available
      console.log(user);
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
