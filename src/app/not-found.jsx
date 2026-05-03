import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
          <div className="min-h-screen flex items-center justify-center bg-orange-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-extrabold text-orange-500 mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-3">
          Page Not Found
        </h2>

        <p className="text-orange-600 mb-6">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
        >
          Go Home
        </Link>

        <div className="mt-10 text-orange-300 text-sm">
          Error code: 404
        </div>
      </div>
    </div>
    );
};

export default notFound;