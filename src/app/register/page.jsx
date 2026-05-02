"use client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import {Check} from '@gravity-ui/icons';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const RegisterPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signUp.email({
        name,
        email,
        image,
        password
    })
    

    console.log({data, error})

    if(!error) {
        router.push('/')
    }

  };
    return (
   
            <Card className="border-orange-100 border-2 mx-auto w-125 py-10 mt-5 bg-orange-50/40 shadow-sm rounded-2xl my-10">
  <h1 className="text-center text-2xl font-bold text-orange-700 mb-1">Sign Up</h1>
  <p className="text-center text-sm text-orange-400 mb-6">Join us this summer ☀️</p>

  <Form className="flex w-96 mx-auto flex-col gap-5" onSubmit={onSubmit}>
    <TextField isRequired name="name" type="text">
      <Label className="text-sm font-medium text-orange-800">Name</Label>
      <Input className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter your name" />
      <FieldError className="text-xs text-red-400 mt-1" />
    </TextField>

    <TextField isRequired name="email" type="email" validate={(value) => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Please enter a valid email address";
      return null;
    }}>
      <Label className="text-sm font-medium text-orange-800">Email</Label>
      <Input className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="john@example.com" />
      <FieldError className="text-xs text-red-400 mt-1" />
    </TextField>

    <TextField isRequired name="image" type="text">
      <Label className="text-sm font-medium text-orange-800">Image URL</Label>
      <Input className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="https://..." />
      <FieldError className="text-xs text-red-400 mt-1" />
    </TextField>

    <TextField isRequired minLength={8} name="password" type="password" validate={(value) => {
      if (value.length < 8) return "Password must be at least 8 characters";
      if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
      if (!/[0-9]/.test(value)) return "Password must contain at least one number";
      return null;
    }}>
      <Label className="text-sm font-medium text-orange-800">Password</Label>
      <Input className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm placeholder:text-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter your password" />
      <Description className="text-xs text-orange-400 mt-1">
        Min. 8 characters, 1 uppercase, 1 number
      </Description>
      <FieldError className="text-xs text-red-400 mt-1" />
    </TextField>

    <div className="flex gap-3 pt-1">
      <Button type="submit" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2 rounded-xl transition-colors">
        <Check className="w-4 h-4" />
        Submit
      </Button>
      <Button type="reset" variant="secondary" className="text-sm text-orange-500 border border-orange-200 hover:bg-orange-100 px-5 py-2 rounded-xl transition-colors">
        Reset
      </Button>
    </div>
  </Form>
</Card>
    );
};

export default RegisterPage;