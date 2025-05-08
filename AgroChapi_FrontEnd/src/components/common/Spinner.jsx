import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-gray-800 rounded-full animate-bounce [animation-delay:0s]"></span>
        <span className="w-4 h-4 bg-gray-800 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-4 h-4 bg-gray-800 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        <span className="w-4 h-4 bg-gray-800 rounded-full animate-bounce [animation-delay:0.6s]"></span>
      </div>
    </div>
  );
};

export default Spinner;

