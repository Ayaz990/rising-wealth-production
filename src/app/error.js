"use client"; // Error components must be Client Components

export default function Error({ error, reset }) {
  console.error("Error occurred: ", error); // Updated to use console.error for error logging

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl lg:text-4xl font-semibold text-red-500">
          Something Went Wrong!
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Oops! It's not you, it's us.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          <button
            onClick={() => reset()} // Added reset function to retry
            className="text-blue-500 underline mr-4"
          >
            Try Again
          </button>
          <a href="/" className="text-blue-500 underline">
            Go Back to Home
          </a>
        </p>
      </div>
    </div>
  );
}
