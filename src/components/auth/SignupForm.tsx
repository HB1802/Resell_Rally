import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AuthInput } from './AuthInput';

export const SignupForm = () => {
  const { signup, isLoading, error } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    
    await signup(email, password, name);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <AuthInput
        id="name"
        label="Full name"
        type="text"
        required
        autoComplete="name"
      />

      <AuthInput
        id="email"
        label="Email address"
        type="email"
        required
        autoComplete="email"
      />

      <AuthInput
        id="password"
        label="Password"
        type="password"
        required
        autoComplete="new-password"
      />

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
};