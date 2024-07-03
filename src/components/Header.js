import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiSignOutFill } from "react-icons/pi";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44 "
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="h-full flex items-center">
          <div className="mr-2 flex flex-col justify-center">
            <p className="text-white text-center">{user.displayName}</p>
            <button
              className="font-semibold text-red-200 hover:text-red-500"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>

          <PiSignOutFill
            className="hover:text-white text-3xl cursor-pointer"
            onClick={handleSignOut}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
