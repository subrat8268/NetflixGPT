import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Error from './Error';


const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/error',
      element: <Error />,
    },

  ])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName} = user;
      dispatch(addUser({uid: uid, email: email, displayName: displayName}));
    } else {
      dispatch(removeUser());
    }
  });

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body