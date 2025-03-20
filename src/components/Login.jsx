import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrors(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg",
          })
            .then(() => {
              console.log("username updated");
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.error({ "error is": error });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({
            FirebaseCode: errorCode,
            FirebaseMessage: errorMessage,
          });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({
            FirebaseCode: errorCode,
            FirebaseMessage: errorMessage,
          });
        });
    }
  };

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
        <form
          className="bg-black bg-opacity-80 w-full max-w-sm relative flex flex-col gap-6 text-white px-10 rounded-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-2xl mx-4 mt-12 font-medium">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
            type="text"
            ref={email}
            placeholder="Email"
          />
          {errors?.email && (
            <span className="mx-4 font-bold text-[#E50914]">
              {errors.email}
            </span>
          )}
          <input
            className="p-3 mx-4 bg-transparent border border-gray-600 rounded-md"
            type="Password"
            ref={password}
            placeholder="Password"
          />
          {errors?.password && (
            <span className="mx-4 font-bold text-[#E50914]">
              {errors.password}
            </span>
          )}
          {errors?.FirebaseCode && (
            <span className="mx-4 font-bold text-[#E50914]">
              {errors.FirebaseCode} : {errors.FirebaseMessage}
            </span>
          )}
          <button
            className="px-4 py-2 mx-4 bg-[#E50914] font-medium rounded-md"
            onClick={handleButtonClick}
          >
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
