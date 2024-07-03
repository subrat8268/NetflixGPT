import React, { useId, useRef, useState } from 'react';
import Header from './Header';
import { checkValiData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [message, setMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const displayName = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setMessage(null); // Clear message when toggling form
    }

    const handleClickButton = () => {
        const validationMessage = checkValiData(email.current.value, password.current.value);
        console.log(validationMessage);
        setMessage(validationMessage);

        if (validationMessage) return;

        // SignIn / SignUp logic
        if (!isSignInForm) {
            // Signup Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    // Set display name
                    updateProfile(user, {
                        displayName: displayName.current.value
                    }).then(() => {
                         
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                            })
                        )
                        navigate("/browse");
                    }).catch((error) => {
                        console.error('Error updating profile:', error);
                    });

                    localStorage.setItem('email', email.current.value);
                    localStorage.setItem('password', password.current.value);

                    setMessage('Sign up successful!');
                    
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + "-" + errorMessage);
                    console.error(error);
                });
        } else {
            // SignIn logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('Signed in as:', user);
                    localStorage.setItem('email', email.current.value);
                    localStorage.setItem('password', password.current.value);  
                    setMessage('Sign in successful!');
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorCode + "-" + errorMessage);
                    console.error(error);
                });
        }
    }

    return (
        <div className='main_container'>

            <Header />

            <div className='w-full h-full flex flex-col justify-center items-center'>

                <form className='w-[400px] h-auto flex flex-col bg-[rgba(0,0,0,0.7)] p-10 rounded-sm' onSubmit={(e) => e.preventDefault()}>

                    <h1 className='text-white text-[2rem] font-bold mb-7'>
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </h1>

                    {!isSignInForm &&
                        <input
                            ref={displayName}
                            type='name'
                            placeholder='Full Name'
                            className='p-2 rounded-sm bg-transparent border px-4 py-3 border-blue-200 mb-6 text-white'
                        />
                    }

                    <input
                        ref={email}
                        type='text'
                        placeholder='Email Address'
                        className='p-2 rounded-sm bg-transparent border px-4 py-3 border-blue-200 text-white'
                    />

                    <input
                        ref={password}
                        type='password'
                        placeholder='Password'
                        className='mt-6 p-2 rounded-sm bg-transparent border px-4 py-3 border-blue-200 text-white'
                    />

                    <p className={`mt-4 text-md font-semibold ${message?.startsWith('Sign') ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>

                    <button
                        className='p-4 bg-red-600 mt-6 rounded-sm text-white py-2.5 font-semibold'
                        onClick={handleClickButton}>
                        {isSignInForm ? 'Sign In' : 'Sign Up'}
                    </button>

                    {
                        !isSignInForm ? <p onClick={toggleSignInForm} className='text-white mt-5'>
                            Already Registered? <span className='font-semibold cursor-pointer hover:underline'>
                                Sign In
                            </span>
                        </p> : <p onClick={toggleSignInForm} className='text-white mt-5'>
                            New To Netflix? <span className='font-semibold cursor-pointer hover:underline'>
                                Sign Up Now
                            </span>
                        </p>
                    }

                </form>
            </div>

        </div>
    )
}

export default Login;
