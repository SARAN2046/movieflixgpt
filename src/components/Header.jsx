import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful')
        navigate("/")
      })
      .catch((error) => {
        console.log({"signout error": error})
      });
  };
  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex my-auto">
          <p className="font-medium text-white px-3">{user?.displayName}</p>
          <img className="w-8 h-max" alt="userlogo" src={user?.photoURL} />
          <button
            className="text-white ml-5 px-2 py-1 bg-[#E50914] rounded-md h-max"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
