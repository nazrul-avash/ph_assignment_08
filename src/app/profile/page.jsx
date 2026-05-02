"use client";
import UpdateProfileModal from '@/components/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
     if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Log in First
      </div>
    );
  }

    return (
        <div className="flex items-center justify-center min-h-screen bg-pink-100 p-4">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">

    {/* Profile Image */}
    <div className="flex justify-center mb-4">
      <Image
        src={user.image || "/default-avatar.png"}
        alt="Profile photo"
        width={100}
        height={100}
        className="rounded-full object-cover"
      />
    </div>

    {/* Name */}
    <h1 className="text-2xl font-bold text-gray-800">
      {user.name}
    </h1>

    {/* Email */}
    <p className="text-gray-500 mt-1">
      {user.email}
    </p>

    {/* Update Button */}
    <UpdateProfileModal></UpdateProfileModal>

  </div>
  
</div>
    );
};

export default ProfilePage;