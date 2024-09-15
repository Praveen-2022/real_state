import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-8">
          <Image
            src="/Divya Shakti.png" // Replace with your logo
            alt="Company Logo"
            width={150} // Adjust size as needed
            height={150}
            className="animate-bounce" // Optional animation for logo
          />
        </div>

        {/* Loading */}
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
