import React from 'react';

interface AuthInputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  id,
  label,
  type,
  required,
  autoComplete,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};