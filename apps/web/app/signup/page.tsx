"use client"
import React, { useState } from 'react';

import { Button } from '@repo/ui/shad/ui/button';
import { Input } from '../components/ui/Input';
import Link from 'next/link';
import { Logo } from '../components/ui/Logo';
import axios from 'axios';
import { BACKEND_URL } from '@repo/common/zod';
import { useRouter } from 'next/navigation';


export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600">Join LeetForces and start coding today</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

          <div className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />


            <div>
              <Input
                label="Password"
                name="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value)
                }}
                placeholder="Create a password"
                isPassword
                showPasswordToggle
                autoComplete="new-password"
                required
              />
            </div>


            <Button
              variant="success"
              size="lg"
              className="w-full"
              onClick={async () => {
                try {
                  setLoading(true);
                  const signup = await axios.post(`${BACKEND_URL}/user/signup`, {
                    email,
                    password,
                    name,
                  });
                  setLoading(false);
                  localStorage.setItem("token", signup.data.token);
                  router.push("/signin")
                } catch (err) {
                  console.log(err);
                  alert("error creating user");
                }
              }}
            >
              {loading ? <div>loading...</div> : "Create Account"}
            </Button>
          </div>


          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                href="/signin"
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
