import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, LogIn } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    const success = login(username.trim(), password);
    if (!success) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-8 md:py-12">
      <div className="w-full max-w-md lg:max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:min-h-[520px]">
          {/* Left panel - branding (visible on desktop) */}
          <div className="bg-yellow-400 px-8 py-8 lg:py-12 lg:px-12 lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-600 text-white mb-3 lg:mb-6">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1 lg:mb-2">
                <span className="bg-blue-600 text-white font-bold text-xl lg:text-2xl px-2 py-0.5 rounded">ABC</span>
                <span className="text-blue-600 font-bold text-lg lg:text-xl">LIFE INSURANCE</span>
              </div>
              <p className="text-blue-600/90 text-sm lg:text-base mb-4 lg:mb-8">Sign in to access your dashboard</p>
              <p className="text-blue-900/70 text-sm hidden lg:block max-w-sm">
                Secure access to your life insurance plans, premiums, and policy details. Your financial future, protected.
              </p>
            </div>
          </div>

          {/* Right panel - form */}
          <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:min-w-[380px]">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-base"
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 lg:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-base"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs pb-6 px-6 sm:px-8 lg:px-10">
            Demo: username <strong>admin</strong>, password <strong>admin123</strong>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
