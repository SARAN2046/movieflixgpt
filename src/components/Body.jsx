import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        );
        console.log("user effected")
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
