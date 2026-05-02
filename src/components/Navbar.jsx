"use client";
import React from 'react';
import logo from '@/assets/SunCart.png';
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
   const handleSignOut = async () => {
    await authClient.signOut();
  }
    return (
        <div className="navbar bg-[#FF9A3C] shadow-sm px-1 md:px-20 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={'/'}>Home</Link></li>
      <li>
        <Link href={'/'}>Products</Link>
      </li>
      <li><Link href={'/profile'}>My Profile</Link></li>
      </ul>
    </div>
    <Image className=' object-contain w-16' src={logo} alt='logo' ></Image>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={'/'}>Home</Link></li>
      <li>
        <Link href={'/'}>Products</Link>
      </li>
      <li><Link href={'/profile'}>My Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    {!user && (
            <ul className="flex items-center  text-sm gap-5">
             <li>
  <Link
    href="/register"
    className="bg-[#FF6B6B] text-[#1A1A2E] px-3 py-2 rounded-full font-semibold hover:bg-[#ff5252] transition-all duration-200"
  >
    Sign Up
  </Link>
</li>

<li>
  <Link
    href="/login"
    className="bg-[#FF9A3C] text-[#1A1A2E] px-3 py-2 rounded-full font-semibold hover:bg-[#e8873a] transition-all duration-200"
  >
    Sign In
  </Link>
</li>
            </ul>
          )}
          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )}
  </div>
</div>
    );
};

export default Navbar;