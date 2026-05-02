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
        <div className="navbar bg-[#D85A30] shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
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
      <li><Link href={'/'}>My Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/register"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/login"}>SignIn</Link>
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