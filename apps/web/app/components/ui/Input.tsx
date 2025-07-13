"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  isPassword?: boolean;
  showPasswordToggle?: boolean;
}

export function Input({
  label,
  error, isPassword = false,
  showPasswordToggle = false,
  className = '',
  ...props
}: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = isPassword && showPasswordToggle
    ? (showPassword ? 'text' : 'password')
    : isPassword
      ? 'password'
      : props.type || 'text';

  return (
    <div className="space-y-2">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          type={inputType}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full px-4 py-3 border rounded-lg transition-all duration-200
            ${error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
              : isFocused
                ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-200'
                : 'border-gray-300 hover:border-gray-400'
            }
            focus:outline-none focus:ring-2 focus:ring-opacity-50
            placeholder-gray-400 text-gray-900
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.name}-error` : undefined}
        />
        {isPassword && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p
          id={`${props.name}-error`}
          className="text-sm text-red-600 animate-slide-down"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};
