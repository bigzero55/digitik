'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup () {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // state untuk loading
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName,
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to signup. Please try again.');
      }
      const data = await response.json();
      console.log('Signup successful:', data);
    } catch (err: any) {
      setError(err.message);
      console.error('Signup error:', err);
    } finally {
      setLoading(false); // Menghentikan loading setelah permintaan selesai
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-base-300">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="current-password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="form-control">
            <button
              type="submit"
              className={`btn btn-primary w-full`}
              disabled={loading} // Disable button ketika loading
            >
              {loading && (
                <span className="loading loading-dots loading-xs"></span>
              )}
              {loading ? 'Signing up...' : 'Signup'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};