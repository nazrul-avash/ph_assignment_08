"use client";
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { GrGoogle } from 'react-icons/gr';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
    });

  
  };

  const handlGoogleSignIn = async () => {
    await authClient.signIn.social({
        provider: 'google'
    })
  }
    return (
        <Card className="border border-orange-200 mx-auto w-125 py-10 mt-5 rounded-2xl shadow-[0_4px_24px_#fb923c22] bg-white my-10">
  
  {/* Accent bar */}
  <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full mx-8 mb-6" />

  <h1 className="text-center text-2xl font-bold text-orange-950 tracking-tight">
    Sign In
  </h1>
  <p className="text-center text-sm text-orange-800 mt-1 mb-6">
    Welcome back — good to see you again
  </p>

  <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
    <TextField
      isRequired
      name="email"
      type="email"
      validate={(value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return "Please enter a valid email address";
        }
        return null;
      }}
    >
      <Label className="text-xs font-semibold text-orange-900 tracking-wide uppercase">
        Email
      </Label>
      <Input
        placeholder="john@example.com"
        className="w-full border-[1.5px] border-orange-200 rounded-xl px-4 py-2.5 text-sm bg-orange-50 text-orange-950 placeholder-orange-300 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
      />
      <FieldError className="text-xs text-red-500 mt-1" />
    </TextField>

    <TextField
      isRequired
      minLength={8}
      name="password"
      type="password"
      validate={(value) => {
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
        if (!/[0-9]/.test(value)) return "Password must contain at least one number";
        return null;
      }}
    >
      <Label className="text-xs font-semibold text-orange-900 tracking-wide uppercase">
        Password
      </Label>
      <Input
        placeholder="Enter your password"
        className="w-full border-[1.5px] border-orange-200 rounded-xl px-4 py-2.5 text-sm bg-orange-50 text-orange-950 placeholder-orange-300 focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
      />
      <Description className="text-[11.5px] text-orange-700 mt-1">
        Must be 8+ chars with 1 uppercase and 1 number
      </Description>
      <FieldError className="text-xs text-red-500 mt-1" />
    </TextField>

    <div className="flex gap-2 mt-2">
      <Button
        type="submit"
        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl py-2.5 text-sm transition-all"
      >
        <Check size={15} /> Submit
      </Button>
      <Button
        type="reset"
        variant="secondary"
        className="border-[1.5px] border-orange-300 text-orange-700 hover:bg-orange-50 rounded-xl px-5 py-2.5 text-sm transition-colors bg-transparent"
      >
        Reset
      </Button>
    </div>
  </Form>

  <div className="flex items-center gap-3 my-5 mx-8">
    <div className="flex-1 h-px bg-orange-200" />
    <span className="text-xs text-orange-400">or</span>
    <div className="flex-1 h-px bg-orange-200" />
  </div>

  <Button
    onClick={handlGoogleSignIn}
    variant="outline"
    className="w-full flex items-center justify-center gap-2 border-[1.5px] border-orange-200 text-orange-900 hover:bg-orange-50 rounded-xl py-2.5 text-sm font-medium transition-colors bg-orange-50/50"
  >
    <GrGoogle /> Sign In With Google
  </Button>
</Card>
    );
};

export default LoginPage;