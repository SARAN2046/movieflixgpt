import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute z-1">
        <img
          className="min-h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg"
          alt="bgimage"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <form className="bg-black bg-opacity-80 w-full max-w-sm relative flex flex-col gap-8 text-white px-10 rounded-sm">
          <h1 className="text-2xl mx-4 mt-12 font-medium">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
            type="Password"
            placeholder="Password"
          />
          <button className="px-4 py-2 mx-4 bg-[#E50914] font-medium rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="mb-14 mx-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
