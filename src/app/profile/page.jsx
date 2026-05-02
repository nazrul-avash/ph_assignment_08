import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
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

        {/* Optional extra info */}
        <div className="mt-4 text-sm text-gray-400">
          ID: {user.id}
        </div>

      </div>
    </div>
    );
};

export default ProfilePage;