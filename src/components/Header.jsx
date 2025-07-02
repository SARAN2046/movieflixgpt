import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { Logo } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const [gptButtonName, setGptButtonName] = useState("Gpt Search");

  const dispatch = useDispatch();
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    if (gptButtonName === "Gpt Search") {
      setGptButtonName("Show Movies");
    } else {
      setGptButtonName("Gpt Search");
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log({ "signout error": error });
      });
  };
  return (
    <div className="absolute w-full  z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={Logo} alt="logo" />
      {user && (
        <div className="flex my-auto items-center">
          <button
            className="text-white ml-5 px-2 py-1 bg-green-500 rounded-md h-max hover:bg-opacity-80"
            onClick={handleGptSearchClick}
          >
            {gptButtonName}
          </button>
          <p className="font-medium text-white px-3">{user?.displayName}</p>
          <img className="w-8 h-max" alt="userlogo" src={user?.photoURL} />
          <button
            className="text-white ml-5 px-2 py-1 bg-[#E50914] rounded-md h-max hover:bg-opacity-80"
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
