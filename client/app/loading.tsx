import React from 'react';

function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mr-3 animate-spin">
        <svg
          className="h-5 w-5 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
      Loading...
    </div>
  );
}

export default Loading;
