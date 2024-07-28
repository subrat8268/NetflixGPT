import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiSignOutFill } from "react-icons/pi";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="fixed w-full flex items-center justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="h-full flex items-center">
          {showGptSearch && (

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
              onChange={handleLangChange}
            >

              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}

            </select>
          )}

          <button
            className="py-2 px-4 bg-[#d9232e] text-white rounded-md mr-4"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>

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
