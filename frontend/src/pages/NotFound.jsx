import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Floating 3D Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* 3D 404 Text */}
      <h1
        className="text-[8rem] md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        style={{
          textShadow: "5px 5px 20px rgba(0,0,0,0.8)",
          transform: "perspective(1000px) rotateX(15deg) rotateY(-10deg)",
        }}
      >
        404
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-2xl text-gray-300 mb-6 tracking-wide">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Button */}
      <Link
        to="-1"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
