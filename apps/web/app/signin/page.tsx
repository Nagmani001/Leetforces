"use client"
import React, { useState } from 'react';
import { Button } from '@repo/ui/shad/ui/button';
import { Logo } from '../components/ui/Logo';
import { Input } from '../components/ui/Input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BACKEND_URL } from '@repo/common/zod';


export default function Page() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="space-y-6">
            <Input
              label="Email "
              type="text"
              name="emailOrUsername"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email or username"
              autoComplete="username"
              required
            />

            <Input
              label="Password"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              isPassword
              showPasswordToggle
              autoComplete="current-password"
              required
            />


            <Button
              variant="success"
              size="lg"
              className="w-full"
              onClick={async () => {
                try {
                  const signin = await axios.post(`${BACKEND_URL}/user/signin`, {
                    email,
                    password
                  });
                  localStorage.setItem("token", signin.data.token);
                  router.push("/problems");
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Sign In
            </Button>
          </div>


          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/signup"
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
